# 🚀 Enterprise Cypress E2E Automation Framework (POM)

![Cypress](https://shields.io)
![JavaScript](https://shields.io)
![Mochawesome](https://shields.io)
![Pass Rate](https://shields.io)

A scalable, production-grade End-to-End (E2E) test automation framework built using **Cypress** and the **Page Object Model (POM)** design pattern. This suite automates **26 complete user journeys** on an e-commerce platform, covering authentication, dynamic product filtering, cart state persistence, checkout workflows, and database cleanup.

---

## 🏗️ Framework Architecture

This project strictly separates element locators and page actions from test execution logic to ensure high maintainability and zero code duplication:

```text
cypress-framework/
├── cypress/
│   ├── e2e/                     # 26 End-to-End test specifications
│   ├── fixtures/                # Externalized test data (JSON)
│   └── support/
│       └── pages/               # Page Object Model (POM) classes
│           ├── HomePage.js
│           ├── LoginPage.js
│           ├── SignupPage.js
│           ├── ProductsPage.js
│           ├── CartPage.js
│           ├── CheckoutPage.js
│           └── TestCasesPage.js
├── cypress.config.js            # Global timeouts, base URL, and reporter settings
├── package.json                 # Custom npm scripts for execution and reporting
└── README.md                    # Project documentation
```

---

## ✨ Key Engineering Highlights

* **Modular Page Object Model:** Utilizes ES6 classes, dynamic JavaScript `get` properties, and parameterized methods (template literals) to eliminate stale element errors and maximize reusability.
* **Dynamic Data & State Isolation:** Generates unique user credentials on the fly and executes automated API/UI account deletion at the end of checkout flows to guarantee zero database collisions across infinite runs.
* **Headless Stability & Network Guards:** Configured with custom `pageLoadTimeout` buffers, viewport `.scrollIntoView()` guards, and window unload interceptors to prevent flaky tests during CI/CD headless runs.
* **Automated HTML Reporting:** Integrated with **Mochawesome** to merge multi-spec JSON results into a single visual dashboard with failure screenshots and MP4 execution videos.

---

## 🧪 Automated Test Coverage (26 / 26 Specs)

* **Authentication & Profile Management:** User registration, valid/invalid login flows, logout, existing email validation, and automated account deletion (TC 1–5).
* **Navigation & UI Verification:** Contact Us form submission with file uploads, Test Cases routing, Product catalog attributes, and dynamic keyword search (TC 6–9).
* **Cart & Checkout Lifecycles:** Footer subscriptions, multi-item cart additions, dynamic quantity updates, registration before/during checkout, pre-checkout login, and cart item removal (TC 10–17).
* **Filtering & Advanced Interactions:** Sidebar category accordions, brand filtering, post-login cart persistence, product reviews, recommended items, address verification, invoice downloads, and scroll mechanics (TC 18–26).

---

## 💻 Local Setup & Execution

### 1. Clone the repository
```bash
git clone https://github.com
cd cypress-pom-enterprise-framework
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run Tests & Generate Reports
* **Interactive Mode (UI Runner):**
  ```bash
  npx cypress open
  ```
* **Headless Mode (All 26 Specs):**
  ```bash
  npm test
  ```
* **Compile & Open Visual HTML Report:**
  ```bash
  npm run report
  ```
