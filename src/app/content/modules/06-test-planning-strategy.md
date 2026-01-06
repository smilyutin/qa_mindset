**Risk-Based Quality, Not Test Volume**

---

## Overview
A test strategy defines **how a team approaches quality**.

A test plan defines **what will be tested for a specific release**.

Many teams jump straight into writing test cases without agreeing on strategy. The result is bloated test suites, late surprises, and low confidence.

This module focuses on building **clear, risk-driven test strategies** and practical test plans that support delivery.

---

## Learning Objectives
By the end of this module, you should be able to:
- Explain the difference between test strategy and test plan
- Identify and prioritize testing based on risk
- Design a balanced test approach across layers
- Create test plans that support fast, safe releases

---

## Test Strategy vs Test Plan

### Test Strategy
A **long-term, guiding document** that defines:
- Quality goals
- Risk approach
- Test levels and layers
- Automation philosophy
- Environments and data strategy
- Entry and exit criteria

A strategy changes **infrequently**.

---

### Test Plan
A **release-specific document** that defines:
- Scope and out-of-scope items
- Features to be tested
- Test types and responsibilities
- Timelines and dependencies
- Risks and mitigations

A plan changes **often**.

---

## Risk-Based Testing

Testing effort should align with **business impact**.

### High-Risk Areas
- Money movement and billing
- Permissions and access control
- Data integrity and reporting
- Integrations and third-party dependencies
- Compliance and audit requirements

### Lower-Risk Areas
- Static content
- Stable UI components
- Non-critical features
- Cosmetic changes

Test depth follows risk.

---

## Defining Test Coverage Across Layers

Avoid over-investing in UI tests.

### Typical Coverage Approach
- **Unit tests** → developer-owned
- **API / service tests** → primary automation layer
- **UI tests** → minimal, business-critical flows
- **Exploratory testing** → ongoing, risk-driven

Coverage is about **signal**, not count.

---

## Automation Strategy

Automation should:
- Reduce manual regression
- Provide fast feedback
- Be maintainable

Automation should not:
- Duplicate unit tests
- Replace exploration
- Chase 100% coverage

Automate:
- Stable business logic
- Critical paths
- Repetitive regression checks

---

## Environment & Data Strategy

Good test planning includes:
- Defined test environments
- Known data sets
- Clear data reset approach
- Access to logs and monitoring

Unstable environments produce unreliable test results.

---

## Real-World Examples

### Finance Example
- Prioritize transaction accuracy
- Validate reconciliation and audit logs
- Automate core transfer APIs
- Manually explore edge cases

---

### Salesforce Example
- Test role-based permissions
- Validate flows, triggers, and integrations
- Automate object-level validations
- Plan UAT with business users

---

### API Example
- Contract testing for integrations
- Negative and error-path validation
- Rate limiting and auth testing
- Data consistency checks

---

## Entry & Exit Criteria

### Entry Criteria
- Requirements clarified
- Test environment available
- Test data prepared
- Dependencies identified

### Exit Criteria
- Critical tests passed
- No unresolved high-severity defects
- Known risks documented
- Stakeholder sign-off

---

## Hands-On Exercises

### Exercise 1: Risk Assessment
Given a feature, identify:
- Top 5 risks
- Risk severity
- Test approach per risk

---

### Exercise 2: Test Strategy Outline
Create a 1-page test strategy covering:
- Scope
- Test layers
- Automation focus
- Risk areas

---

### Exercise 3: Test Plan
Create a test plan for a small release including:
- In-scope features
- Test types
- Timeline
- Risks and mitigations

---

## Common Test Strategy Mistakes
- Treating test plans as checklists
- Over-automating UI
- Ignoring data and integrations
- Late QA involvement
- Measuring success by test count

---

## Key Takeaways
- Strategy guides testing decisions
- Plans operationalize the strategy
- Risk should drive coverage
- Automation amplifies strategy, not fixes it
- Clear planning reduces late surprises

---

## Next Module
 **Exploratory Testing & SBTM**