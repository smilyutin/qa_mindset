
**Where QA Fits and How to Add Real Value**

---

## Overview
Understanding the Software Development Life Cycle (SDLC) and Agile practices is essential for effective QA.

QA is not a phase at the end of development.  
QA is a **continuous activity** that supports decision-making throughout the lifecycle.

This module focuses on how QA contributes meaningfully within **Agile and Scrum environments**, with real-world examples.

---

## Learning Objectives
By the end of this module, you should be able to:
- Understand SDLC stages and QA responsibilities
- Explain Scrum roles and ceremonies from a QA perspective
- Identify where QA should engage early and often
- Apply QA practices in Agile delivery
- Translate theory into real testing actions

---

## SDLC Overview (QA View)

### Typical SDLC Stages
1. Requirements
2. Design
3. Development
4. Testing
5. Deployment
6. Maintenance

In modern delivery, these stages **overlap and repeat**.

QA responsibility:
- Validate understanding early
- Reduce risk before code reaches production
- Provide fast, reliable feedback

---

### QA Responsibilities Across the SDLC
 Stage        - QA Contribution
1. Requirements - Clarify acceptance criteria, identify risks
2. Design       - Review architecture and data flows
3. Development  - Prepare tests, validate APIs, collaborate early
4. Testing      - Execute, explore, automate, validate data
5. Deployment   - Smoke tests, release readiness
6. Maintenance  - Regression, monitoring, defect analysis


---

## Agile Principles (What QA Should Care About)

Key Agile values relevant to QA:
- Working software over documentation
- Responding to change over rigid plans
- Collaboration over handoffs

For QA, this means:
- Testing early and often
- Lightweight documentation
- Continuous feedback loops

---

## Scrum Basics (From a QA Perspective)

### Scrum Roles
- **Product Owner** – owns priorities and business value
- **Scrum Master** – facilitates process and removes blockers
- **Development Team** – builds the product (including QA)

QA is a **core contributor**, not an external validator.

---

### Scrum Ceremonies & QA Involvement

#### Backlog Refinement / Grooming
QA should:
- Ask clarifying questions
- Identify edge cases
- Highlight data and integration risks

**Example (Salesforce):**
- How does this feature behave for different profiles?
- What happens when permissions are missing?
- What data migrations are involved?

---

#### Sprint Planning
QA should:
- Estimate testing effort
- Identify dependencies
- Plan test design and automation early

**Example (Finance):**
- Any money movement?
- Any reporting impact?
- Any regulatory implications?

---

#### Daily Standup
QA should:
- Share testing progress
- Raise risks early
- Highlight blockers

Focus on **risk**, not just task status.

---

#### Sprint Review / Demo
QA validates:
- Acceptance criteria
- End-to-end scenarios
- Integration behavior

QA helps ensure “done” actually means **done**.

---

#### Retrospective
QA contributes insights on:
- Escaped defects
- Test coverage gaps
- Process improvements

---

## Definition of Ready (DoR) & Definition of Done (DoD)

### Definition of Ready (QA View)
A story is ready when:
- Acceptance criteria are clear
- Testable scenarios are understood
- Dependencies are identified
- Data requirements are known

---

### Definition of Done (QA View)
A story is done when:
- Acceptance criteria are met
- Critical tests pass
- No high-severity defects remain
- Regression impact is understood

---

## Hands-On Exercises

### Exercise 1: Story Grooming
Given a user story:
> “As a customer, I want to transfer money between accounts.”

Identify:
- Edge cases
- Data validations
- Security concerns
- API dependencies

---

### Exercise 2: Sprint Planning
For the same story:
- What needs to be tested manually?
- What should be automated?
- What can be tested at API level?
- What requires UAT?

---

### Exercise 3: Definition of Done
Create a DoD checklist including:
- Functional validation
- Data integrity
- Audit logging
- Error handling

---

## Agile Testing in Practice

### Salesforce Example
- Validate profile-based access
- Test flows and triggers
- Validate integrations with external systems
- Verify data consistency across objects

---

### API Example
- Validate request/response schema
- Test auth and permissions
- Validate negative scenarios
- Test integration failures gracefully

---

### Finance Example
- Validate transaction accuracy
- Verify reconciliation reports
- Ensure audit traceability
- Confirm compliance constraints

---

## Common Agile QA Mistakes
- Treating QA as a sprint-end phase
- Relying only on UI testing
- Ignoring data and integrations
- Accepting vague acceptance criteria
- Skipping risk discussions

---

## Key Takeaways
- QA is involved throughout the SDLC
- Agile testing is about fast, meaningful feedback
- Scrum ceremonies are quality touchpoints
- Clear DoR and DoD prevent late surprises
- QA adds the most value early

---

