import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async addToCart(itemName: string) {
    // Find the item by name and add to cart
    const itemContainer = this.page.locator('.inventory_item').filter({ hasText: itemName });
    await itemContainer.locator('[data-test^="add-to-cart"]').click();
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}