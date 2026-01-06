
**Reliable Testing Requires Stable Foundations**

---

## Overview
Even the best test strategy fails without **reliable data and environments**.

Many “test failures” are not product defects — they are caused by:
- Broken environments
- Inconsistent data
- Hidden dependencies
- Poor access to logs and configuration

This module focuses on managing test data and environments so testing produces **trustworthy signals**.

---

## Learning Objectives
By the end of this module, you should be able to:
- Understand different types of test data
- Manage data safely and effectively
- Identify common environment-related risks
- Apply exploratory heuristics to uncover hidden issues
- Reduce false failures and wasted effort

---

## Test Environments Overview

Typical environments:
- **Dev** – frequent changes, unstable
- **QA / Test** – validation and regression
- **UAT** – business validation
- **Staging / Pre-prod** – production-like
- **Production** – live users

QA must understand:
- Purpose of each environment
- Data freshness
- Configuration differences
- Integration availability

---

## Test Data Types

### Static Test Data
- Predefined datasets
- Stable and predictable
- Good for regression and automation

**Risk:** Can become stale and unrealistic.

---

### Dynamic Test Data
- Created during test execution
- More realistic
- Reduces data collisions

**Risk:** Harder to debug if not logged properly.

---

### Masked / Anonymized Data
- Production-like structure
- Sensitive data removed or obfuscated

**Required** in regulated domains (finance, healthcare).

---

## Test Data Risks

Common issues:
- Shared data between testers
- Hardcoded IDs in automation
- No data reset strategy
- Environment drift
- Missing edge-case data

Good QA anticipates data failures before they happen.

---

## Real-World Examples

### Finance Example
- Ensure balances reconcile after tests
- Validate audit logs
- Reset accounts after negative testing
- Never reuse real customer data

---

### Salesforce Example
- Separate data per sandbox
- Validate profile-specific records
- Manage test users and roles
- Control automation side effects (flows, triggers)

---

### API Example
- Seed test data via API
- Use request IDs for traceability
- Clean up data after execution
- Validate downstream consistency

---

## Environment Stability Signals

An environment is unstable when:
- Tests fail intermittently
- Data disappears unexpectedly
- Integrations are unavailable
- Logs are inaccessible
- Configuration differs from expectations

Unstable environments erode confidence faster than real defects.

---

## Exploratory Testing Heuristics (Cheat Sheet)

Use heuristics to guide exploration when documentation is limited.

### CRUD Heuristic
- Create
- Read
- Update
- Delete

Test each operation independently and in sequence.

---

### RCRCRC (James Bach)
- Recent
- Core
- Risky
- Configuration
- Repaired
- Chronic

Focus where problems are most likely.

---

### Data Heuristics
- Null / empty values
- Maximum / minimum values
- Special characters
- Large datasets
- Duplicate records

---

### Integration Heuristics
- Dependency unavailable
- Slow response
- Partial failure
- Unexpected data format
- Retry behavior

---

### Environment Heuristics
- Restart services
- Switch environments
- Change user roles
- Toggle feature flags
- Clear caches

---

## Sample Data Strategy (Lightweight)

1. Identify critical data entities
2. Define ownership and reset approach
3. Use automation to seed data where possible
4. Mask sensitive fields
5. Log all test-created data
6. Clean up after execution

---

## Hands-On Exercises

### Exercise 1: Data Risk Identification
List:
- Critical data used by your feature
- Data that must not be corrupted
- Data that must be reset

---

### Exercise 2: Environment Audit
For a test environment, identify:
- Available integrations
- Logging access
- Data refresh cadence
- Known instability areas

---

### Exercise 3: Exploratory Session
Run a session focused on:
> “Data integrity across environments”

Use at least two heuristics from the cheat sheet.

---

## Common Mistakes
- Blaming product for environment issues
- Reusing production data unsafely
- Ignoring cleanup
- Hardcoding test data
- Treating environment problems as “normal”

---

## Key Takeaways
- Reliable testing depends on stable data and environments
- Test data is a quality asset, not an afterthought
- Exploratory heuristics guide effective investigation
- Environment issues must be visible and addressed
- Clean data equals clean signal

---
