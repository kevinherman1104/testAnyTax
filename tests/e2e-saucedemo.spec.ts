import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

test.describe('Task 2: SauceDemo E2E flow', () => {
  test('login -> add product -> verify in cart -> verify price format', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);

    await login.goto();
    await login.login('standard_user', 'secret_sauce');

    const itemName = await inventory.addFirstItemToCart();
    await inventory.goToCart();

    await cart.expectItemPresent(itemName);
    await cart.expectPriceFormatValid();
  });
});
