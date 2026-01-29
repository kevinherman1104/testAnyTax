import { test, expect } from '@playwright/test';

function transferHtml(apiUrl: string) {
  return `
<!doctype html>
<html>
  <head><meta charset="utf-8" /><title>Transfer</title></head>
  <body>
    <h1>Money Transfer</h1>
    <button id="transferBtn">Transfer</button>
    <div id="status" aria-live="polite">Idle</div>

    <script>
      const btn = document.getElementById('transferBtn');
      const status = document.getElementById('status');

      btn.addEventListener('click', async () => {
        status.textContent = 'Processing...';
        try {
          const res = await fetch('${apiUrl}', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: 100, currency: 'USD' })
          });

          const data = await res.json().catch(() => ({}));

          if (res.ok && data.status === 'success') {
            status.textContent = 'Success: ' + data.transactionId;
          } else {
            status.textContent = 'Error: ' + (data.error || 'Unknown error');
          }
        } catch (e) {
          status.textContent = 'Error: Network failure';
        }
      });
    </script>
  </body>
</html>
`;
}

test.describe('Task 1: Mock POST /api/transfer', () => {
  const apiUrl = 'https://example.test/api/transfer';

  test('Test A (Success): 200 OK returns success JSON and UI reflects it', async ({ page }) => {
    await page.route('**/api/transfer', async (route) => {
      expect(route.request().method()).toBe('POST');

      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ status: 'success', transactionId: '12345' }),
      });
    });

    // Load a page without backend using a data URL
    await page.goto('data:text/html,' + encodeURIComponent(transferHtml(apiUrl)));

    await page.locator('#transferBtn').click();
    await expect(page.locator('#status')).toHaveText('Success: 12345');
  });

  test('Test B (Failure): 400 returns error JSON and UI shows failure state', async ({ page }) => {
    await page.route('**/api/transfer', async (route) => {
      expect(route.request().method()).toBe('POST');

      await route.fulfill({
        status: 400,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Insufficient funds' }),
      });
    });

    await page.goto('data:text/html,' + encodeURIComponent(transferHtml(apiUrl)));

    await page.locator('#transferBtn').click();
    await expect(page.locator('#status')).toHaveText('Error: Insufficient funds');
  });
});
