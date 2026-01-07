**Severity · Priority · Root Cause**

---

## Overview
Defects are not just bugs — they are **signals**.

How a team reports, prioritizes, and learns from defects directly impacts product quality, delivery speed, and trust between teams. Effective defect management is about **clarity, impact, and improvement**, not just ticket volume.

This module covers the full defect lifecycle, how to classify issues correctly, and how to use defects to improve systems and processes.

---

## Defect Lifecycle Overview

Typical defect states:
1. **New** – Defect identified and logged
2. **Triaged** – Reviewed and prioritized
3. **In Progress** – Being fixed
4. **Fixed** – Code change completed
5. **Ready for Test** – Awaiting verification
6. **Verified** – Fix confirmed
7. **Closed** – Defect resolved
8. **Rejected / Deferred** – Not fixed (with reason)

The exact workflow may vary, but clarity and consistency matter more than tooling.

---

## Writing a High-Quality Defect

A good defect report answers:
- What happened?
- What was expected?
- What actually happened?
- How can it be reproduced?
- What is the impact?

### Minimum Defect Fields
- Title (clear and concise)
- Environment
- Steps to reproduce
- Expected vs actual result
- Severity
- Evidence (logs, screenshots, request IDs)

---

## Severity vs Priority

### Severity
Severity describes **how bad the defect is** from a system or user perspective.

| Severity | Description |
|----------|-------------|
| Critical | System unusable, data loss, security issue |
| High     | Major feature broken, no workaround |
| Medium   | Partial functionality broken |
| Low      | Minor issue, cosmetic |

Severity is **objective**.

---

### Priority
Priority describes **how quickly the defect should be fixed**.

| Priority | Description |
|----------|-------------|
| P1 | Fix immediately |
| P2 | Fix in current sprint |
| P3 | Fix when time allows |
| P4 | Backlog / future |

Priority is **business-driven**.

---

### Key Rule
A defect can be:
- High severity, low priority (rare edge case)
- Low severity, high priority (visible demo issue)

Do not confuse the two.

---

## Real-World Examples

### Finance Example
- Incorrect interest calculation  
  - **Severity:** High (financial impact)
  - **Priority:** P1 (must fix before release)

---

### Salesforce Example
- User without permission can edit restricted fields  
  - **Severity:** Critical (security/compliance)
  - **Priority:** P1

---

### API Example
- API returns incorrect error message but correct status code  
  - **Severity:** Low
  - **Priority:** P3

---

## Root Cause Analysis (RCA)

Fixing the symptom is not enough.

Root cause analysis asks:
> “Why did this defect exist in the first place?”

---

### Common Root Causes
- Unclear requirements
- Missing acceptance criteria
- Incomplete test coverage
- Environment or data issues
- Incorrect assumptions
- Poor integration contracts

---

### Simple RCA Technique: 5 Whys
Ask “Why?” repeatedly until you reach the underlying cause.

**Example:**
- Why did the defect occur?  
  → Validation missing
- Why was validation missing?  
  → Requirement unclear
- Why was it unclear?  
  → Acceptance criteria incomplete

Root cause: **requirement gap**

---

## Using Defects as Feedback
Defects should inform:
- Test strategy improvements
- Better acceptance criteria
- Earlier QA involvement
- Automation gaps
- Process changes

High defect volume late in the cycle is a **process smell**.

---

## Hands-On Exercises

### Exercise 1: Classify Defects
Given a list of defects, assign:
- Severity
- Priority
- Justification

---

### Exercise 2: Write a Defect
Write a defect for:
> “API returns 200 but response body is empty.”

Include:
- Steps
- Expected vs actual
- Severity
- Evidence

---

### Exercise 3: Root Cause Analysis
Pick a recently fixed defect and identify:
- Immediate cause
- Root cause
- One process improvement to prevent recurrence

---

## Common Defect Management Mistakes
- Vague defect titles
- Missing reproduction steps
- Misusing severity and priority
- Closing defects without verification
- Treating defects as individual failures instead of system feedback

---

## Key Takeaways
- Defects are quality signals, not just bugs
- Severity and priority serve different purposes
- Clear defect reports save time for everyone
- Root cause analysis prevents repeat issues
- Learning matters more than blame

---

