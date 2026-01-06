
**High-Signal Testing at the Most Valuable Layer**

---

## Overview
API testing is where QA delivers the **highest return on investment**.

APIs expose business logic, data movement, and integrations — without the fragility of UI. Well-designed API tests provide fast, reliable feedback and dramatically reduce regression effort.

This module focuses on **practical API testing**, using Postman and automation examples, and shows how to integrate API tests into CI/CD pipelines effectively.

---

## Learning Objectives
By the end of this module, you should be able to:
- Understand what makes APIs testable
- Design effective API test coverage
- Validate positive and negative scenarios
- Use Postman for manual and automated checks
- Integrate API tests into CI/CD
- Avoid common automation anti-patterns

---

## What to Test at the API Layer

Focus on **behavior**, not just responses.

### Core API Test Areas
- Request/response schema
- Business rules
- Authentication & authorization
- Error handling
- Idempotency
- Data integrity
- Integration behavior

APIs should be treated as **contracts**, not just endpoints.

---

## API Test Scenarios

### Positive Scenarios
- Valid request
- Correct permissions
- Expected response structure
- Correct data persistence

### Negative Scenarios
- Missing required fields
- Invalid data types
- Unauthorized access
- Expired or invalid tokens
- Duplicate or replayed requests

### Edge Scenarios
- Boundary values
- Large payloads
- Rate limits
- Partial downstream failures

---

## Real-World Examples

### Finance Example
- Validate fund transfer APIs
- Ensure balances reconcile correctly
- Verify audit logging
- Confirm idempotency on retries

---

### Salesforce Example
- Test REST APIs for object CRUD
- Validate profile-based access
- Test bulk APIs
- Verify triggers and flows side effects

---

### Integration Example
- Downstream service unavailable
- Timeout handling
- Retry behavior
- Graceful degradation

---

## API Testing with Postman

### Basic Assertions (Postman Tests Tab)
```js
pm.test("Status is 200", function () {
  pm.response.to.have.status(200);
});

pm.test("Response contains transactionId", function () {
  pm.expect(pm.response.json()).to.have.property("transactionId");
});

---
Data Validation Example
const json = pm.response.json();
pm.expect(json.amount).to.eql(100);
pm.expect(json.currency).to.eql("USD");
---
Negative Test Example
pm.test("Unauthorized request", function () {
  pm.response.to.have.status(401);
});
```

### API Automation Strategy

Automate APIs when:
	-	Business logic is stable
	-	Tests can run independently
	-	Data setup can be controlled
	-	Failures produce clear signals

Avoid automation when:
	-	Behavior is changing rapidly
	-	API is unstable or undocumented
	-	Failures are non-deterministic

⸻

### Sample CI/CD Pipeline Snippets

Postman + Newman (GitHub Actions) yaml
name: API Tests
on: [push]
jobs:
  api-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Install Newman
        run: npm install -g newman
      - name: Run API tests
        run: |
          newman run api_collection.json \
          --environment env.json \
          --reporters cli

---
### API Tests as Quality Gate
	-	Run on pull request
	-	Fail build on critical API failures
	-	Publish results as artifacts
API tests should run early and fast.

### API Automation Anti-Patterns (Reference)

 Anti-Pattern: Testing Only Happy Paths

Missing negative and failure scenarios creates false confidence.

⸻

 Anti-Pattern: Hardcoded Data

Leads to brittle tests and collisions.

⸻

 Anti-Pattern: Overusing UI for API Validation

Slower feedback, higher maintenance cost.

⸻

 Anti-Pattern: Ignoring Auth Scenarios

Auth failures are production-critical.

⸻

 Anti-Pattern: Treating API Tests as Unit Tests

### APIs validate behavior, not internal implementation.

Logging & Observability for API Tests

Ensure access to:
	-	Request IDs
	-	Correlation IDs
	-	Error logs
	-	Response payloads

Good observability turns failures into insights.


Common Mistakes
	-	Treating APIs as secondary to UI
	-	Skipping negative testing
	-	Ignoring data cleanup
	-	Allowing flaky API tests
	-	Not running API tests in CI

⸻

Key Takeaways
	-	API testing provides the strongest quality signal
	-	Postman enables fast manual and automated checks
	-	CI integration catches defects early
	-	Anti-patterns create noise and false confidence
	-	High-quality API tests reduce UI dependency

---
