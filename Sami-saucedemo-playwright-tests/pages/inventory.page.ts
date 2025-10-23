import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async addToCart(itemName: string) {
    await this.page.click(`text=${itemName}`);
    await this.page.click('[data-test^="add-to-cart"]');
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}