import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';

test('End-to-end SauceDemo test', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await inventory.addToCart('Sauce Labs Backpack');
  await inventory.goToCart();
  await cart.checkout();
  await checkout.fillInformation('John', 'Doe', '12345');
  await checkout.finishCheckout();

  const confirmation = await checkout.getConfirmationText();
  expect(confirmation).toContain('Thank you for your order!'); //comment
});