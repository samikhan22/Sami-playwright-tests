
# SauceDemo E2E Test Automation (Playwright + TypeScript + POM)

This project demonstrates an end-to-end test automation framework for the [SauceDemo](https://www.saucedemo.com/) web application using **Playwright**, **TypeScript**, and the **Page Object Model (POM)** design pattern.

> ✅ Created as part of a professional QA portfolio.

---

## 🔍 Features Tested

- ✅ Login (valid and invalid credentials)
- ✅ Add item to cart
- ✅ Remove item from cart
- ✅ Checkout flow
- ✅ Order confirmation

---

## 🧱 Tech Stack

- [Playwright](https://playwright.dev/)
- TypeScript
- Page Object Model (POM)
- VSCode (recommended)
- Node.js 18+ via NVM

---

## 📁 Project Structure

saucedemo-playwright-pom/
├── pages/ # Page classes for Login, Inventory, Cart, Checkout
├── tests/ # Main test files
├── utils/ # (Optional) shared helpers, test data
├── playwright.config.ts
├── tsconfig.json
├── README.md

yaml
Copy
Edit



---

## 🚀 How to Run This Project

### 1. Install dependencies

```bash
npm install
2. Run all tests (headless)
bash
Copy
Edit
npx playwright test
3. Run tests in headed (visible) mode
bash
Copy
Edit
npx playwright test --headed --slow-mo=400
4. View HTML test report
bash
Copy
Edit
npx playwright show-report
📸 Screenshots & Reports
Screenshots are auto-captured on failure

Test results stored under /playwright-report and /test-results

📄 License
This project is licensed under the MIT License.
© 2025 [Your Name]. All rights reserved.
=======
# Sami-saucedemo-playwright-tests
Automated end-to-end test framework for the SauceDemo web app using Playwright, TypeScript, and Page Object Model. Part of a professional QA portfolio.
>>>>>>> 85dcaf83c24d225a1813c41c8bed8a02a52fe70b
