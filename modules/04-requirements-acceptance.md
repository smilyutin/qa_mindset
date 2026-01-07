
**Turning Ideas into Testable, Deliverable Work**

---

## Overview
Most defects are not caused by bad code —  
they are caused by **unclear or incomplete requirements**.

QA adds the most value by helping teams transform ideas into **clear, testable acceptance criteria** before development begins.

This module focuses on understanding requirements, identifying gaps, and defining acceptance criteria that reduce ambiguity and rework.

---

## What Makes a Good Requirement?

A good requirement is:
- Clear and unambiguous
- Testable
- Focused on user value
- Explicit about constraints and rules

A bad requirement sounds like:
> “The system should work correctly.”

---

## Acceptance Criteria (AC)

Acceptance criteria define:
- What must be true for a story to be considered **done**
- The boundaries of expected behavior
- What will be tested

Good AC:
- Are specific
- Cover happy and unhappy paths
- Are written before development starts

---

## BDD Style Acceptance Criteria

BDD (Behavior-Driven Development) uses:
**Given / When / Then**

This format:
- Clarifies intent
- Improves collaboration
- Makes testing easier
- Translates well to automation

---

## Example 1: Finance (Money Transfer)

**User Story**
> As a customer, I want to transfer money between my accounts.

**Acceptance Criteria (BDD)**
Given the user has sufficient balance
When the user transfers $100 from Account A to Account B
Then the balance of Account A is reduced by $100
And the balance of Account B is increased by $100
And the transaction is recorded for audit

**Negative Scenario**
Given the user has insufficient balance
When the user attempts to transfer $100
Then the transfer is rejected
And an error message is returned
And no balances are changed

---

## Example 2: Salesforce (Permissions)

**User Story**
> As a sales agent, I want to edit opportunity details.

**Acceptance Criteria**
Given the user has the Sales Agent profile
When the user edits an Opportunity
Then the changes are saved successfully

**Negative Scenario**
Given the user does not have edit permission
When the user attempts to edit an Opportunity
Then the system prevents the update
And an appropriate error message is shown

---

## Example 3: API (Authentication)

**User Story**
> As a system, I want to allow access to the API using a valid token.

**Acceptance Criteria**
Given a valid JWT token
When a request is sent to the API
Then the response status is 200

**Negative Scenario**
Given an invalid or expired token
When a request is sent to the API
Then the response status is 401
And no data is returned

---

## Common Requirement Gaps QA Should Catch
- Missing error handling
- Undefined permissions
- Unclear data sources
- No audit or logging requirements
- Missing performance expectations
- Undefined edge cases

---

## Hands-On Exercises

### Exercise 1: Rewrite a Requirement
Rewrite this requirement to be testable:
> “The system should process payments quickly.”

Define:
- What does “quickly” mean?
- What happens on failure?
- What systems are involved?

---

### Exercise 2: Write Acceptance Criteria
Write BDD-style acceptance criteria for:
> “A user updates their email address.”

Include:
- Happy path
- Invalid email
- Permission check
- Confirmation behavior

---

### Exercise 3: Review a Story
Review an existing story and identify:
- Ambiguities
- Missing scenarios
- Assumptions that need clarification

---

## QA’s Role in Requirement Quality
QA should:
- Ask “what if” questions
- Challenge vague language
- Advocate for testability
- Ensure alignment between business and implementation

Good acceptance criteria reduce:
- Defects
- Rework
- Late surprises
- Regression effort

---

## Key Takeaways
- Clear requirements prevent defects
- Acceptance criteria define “done”
- BDD improves clarity and collaboration
- QA plays a critical role before code exists

---

