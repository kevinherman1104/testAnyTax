# Junior QA Automation Engineer – Technical Task
<img width="1901" height="495" alt="Test_Result_All" src="https://github.com/user-attachments/assets/062e3b2d-b692-4c86-b624-452534441353" />

This repository contains my solution for the Junior QA Automation Engineer technical task, implemented using **TypeScript** and **Playwright**.

The project demonstrates:
- API automation with network request mocking
- End-to-end (E2E) UI testing
- Clean test structure with Page Object Model (POM)
- HTML reporting with visual evidence

---

## 🧰 Tech Stack

- Node.js (LTS)
- TypeScript
- Playwright Test

---

## 📦 Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/kevinherman1104/testAnyTax.git
cd tests
```
### 2. Install dependencies
```bash
npm install
```

### 3. Install Playwright browsers
```bash
npx playwright install
```

---


### Running the Tests
Running the Tests
```bash
npx playwright test
```
Open the HTML test report:
```bash
npx playwright show-report
```

---

### Test Execution Evidence

Below are screenshots from the Playwright HTML report and test executions, demonstrating that all tests passed successfully.

1. Task 1 – API Automation

**a. Success Scenario (200 OK)**

<img width="1875" height="1057" alt="Test_A_Result_Playwright" src="https://github.com/user-attachments/assets/582c027d-3abc-4a8d-83f0-2d2d4624d91d" />

**b. Failure Scenario (400 Bad Request)**

<img width="807" height="948" alt="Test_B_Result_Playwright" src="https://github.com/user-attachments/assets/5a7ebe8c-9e92-4aff-9ce0-beb406018435" />

2. Task 2 – E2E UI Flow (SauceDemo)

**Login, Add to Cart, Cart Validation & Price Format Check**
<img width="1699" height="1027" alt="Test_E2E_Result_Playwright" src="https://github.com/user-attachments/assets/ad439700-a788-447a-bbf0-9f7aecf1c6ad" />

---

### Additional Notes
- All tests are written in TypeScript
- Code is clean, readable, and logically structured
- No hard-coded delays; proper synchronization is used
- Screenshots, videos, and traces are enabled
- The project runs locally without errors following the instructions above\
- Credentials for SauceDemo are:
  - Username: standard_user
  - Password: secret_sauce









