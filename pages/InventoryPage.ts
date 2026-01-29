import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Adds first item function
  async addFirstItemToCart() {
    const firstItem = this.page.locator('.inventory_item').first();
    await expect(firstItem).toBeVisible();

    const itemName = await firstItem.locator('.inventory_item_name').innerText();
    await firstItem.locator('button:has-text("Add to cart")').click();

    // cart badge should show 1
    await expect(this.page.locator('.shopping_cart_badge')).toHaveText('1');

    return itemName;
  }

  async goToCart() {
    await this.page.locator('.shopping_cart_link').click();
    await expect(this.page).toHaveURL(/cart\.html/);
  }
}
