import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async expectItemPresent(itemName: string) {
    await expect(this.page.locator('.cart_item')).toBeVisible();
    await expect(this.page.locator('.inventory_item_name')).toContainText(itemName);
  }

  async expectPriceFormatValid() {
    const priceText = await this.page.locator('.inventory_item_price').first().innerText();

    // Valid format example: $29.99 Fintech Twist
    const moneyRegex = /^\$\d+(\.\d{2})$/;
    expect(priceText).toMatch(moneyRegex);
  }
}
