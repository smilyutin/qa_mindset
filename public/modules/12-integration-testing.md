
**Trust the Boundaries Between Systems**

---

## Overview
Most critical production failures happen **between systems**, not inside them.

Integration and contract testing focus on validating how services communicate, exchange data, and handle failure. These tests protect teams from breaking changes, misaligned expectations, and late discovery of integration issues.

This module explains how to test integrations effectively and how contract testing reduces risk in distributed systems.

---

## Learning Objectives
By the end of this module, you should be able to:
- Understand what integration and contract testing validate
- Identify high-risk integration points
- Design integration test scenarios
- Apply contract testing concepts
- Detect breaking changes early

---

## What Is Integration Testing?

Integration testing validates:
- Data exchange between systems
- API compatibility
- Side effects across services
- Error handling and recovery

Integration tests answer:
> “Do these systems work together as expected?”

---

## What Is Contract Testing?

Contract testing validates **agreements** between systems:
- Request structure
- Response structure
- Data types
- Required fields
- Error responses

Contract tests answer:
> “Did one system break another by changing expectations?”

Contracts act as **living documentation**.

---

## Integration vs Contract Testing

| Integration Testing | Contract Testing |
|---------------------|------------------|
| End-to-end validation | Boundary validation |
| Slower | Fast |
| Requires environments | Environment-light |
| Detects runtime issues | Detects breaking changes early |

Both are needed — they solve **different problems**.

---

## High-Risk Integration Areas

Focus integration testing on:
- Payment systems
- Third-party APIs
- Identity and authentication services
- Data pipelines
- Messaging and event systems

---

## Real-World Examples

### Finance Example
- Validate payment requests sent to a processor
- Verify success and failure callbacks
- Ensure ledger updates match processor response
- Handle retries without duplication

---

### Salesforce Example
- Validate data sync with ERP systems
- Confirm field mappings
- Test bulk operations
- Verify error handling for rejected records

---

### API Example
- Validate request/response schema
- Confirm backward compatibility
- Test missing or additional fields
- Handle versioning gracefully

---

## Contract Testing Concepts (Pact-Style)

### Consumer-Driven Contracts
- Consumer defines expected behavior
- Provider validates against contract
- Breaking changes detected early

Key ideas:
- Contracts define **minimum expectations**
- Providers can add fields, not remove required ones
- Breaking changes fail the pipeline

---

## Example Contract Expectations

Expected response:
```json
{
  "transactionId": "string",
  "status": "SUCCESS",
  "amount": "number"
}
```
## Breaking change examples:
	•	Removing transactionId
	•	Changing amount from number to string
	•	Returning unexpected status values

⸻

## Integration Failure Scenarios to Test
	•	Dependency unavailable
	•	Slow responses
	•	Partial data returned
	•	Invalid or unexpected data
	•	Retry behavior
	•	Idempotency violations

Failures should be predictable and safe.

⸻

## Integration Test Strategy

A balanced approach:
	•	Contract tests for fast feedback
	•	Integration tests for real behavior
	•	Minimal UI dependency
	•	Clear ownership per integration

Not every integration needs full end-to-end coverage.

⸻

## Sample Integration Test Checklist

Before testing:
	•	API contracts defined
	•	Test environments available
	•	Test data prepared
	•	Auth and credentials ready

During testing:
	•	Validate happy paths
	•	Validate failure scenarios
	•	Verify data consistency
	•	Capture logs and request IDs

After testing:
	•	Cleanup test data
	•	Document risks
	•	Share findings

    Common Integration Testing Mistakes
	•	Testing only happy paths
	•	Relying solely on UI tests
	•	Ignoring backward compatibility
	•	Skipping failure scenarios
	•	Testing too late

⸻

## Key Takeaways
	•	Integration failures are high-impact
	•	Contracts protect system boundaries
	•	Contract testing finds issues earlier than end-to-end tests
	•	Not all integrations need full coverage
	•	Clear expectations reduce release risk

⸻

