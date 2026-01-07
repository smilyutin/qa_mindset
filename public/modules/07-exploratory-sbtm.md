
**Learning While Testing · Managing Exploration with Discipline**

---

## Overview
Exploratory testing is not “testing without a plan.”

It is a **structured, intentional approach** where learning, test design, and execution happen at the same time. When combined with Session-Based Test Management (SBTM), exploration becomes **repeatable, reportable, and valuable**.

This module focuses on how to explore effectively without sacrificing accountability.

---

## What Is Exploratory Testing?

Exploratory testing is:
- Intentional
- Time-boxed
- Risk-driven
- Learning-focused

Exploratory testing is **not**:
- Random clicking
- Unstructured ad-hoc testing
- A replacement for automation

It complements scripted and automated testing by uncovering:
- Unknown risks
- Edge cases
- Usability issues
- Integration gaps

---

## Why Exploratory Testing Matters

Automation confirms what you already expect.  
Exploration finds what you didn’t anticipate.

Exploratory testing is especially valuable when:
- Requirements are unclear
- Behavior is complex
- Integrations are involved
- Changes are frequent
- Risk is high

---

## Session-Based Test Management (SBTM)

SBTM adds structure to exploratory testing.

### Core Elements
- **Session** – time-boxed testing activity (60–120 minutes)
- **Charter** – mission for the session
- **Notes** – observations, ideas, questions
- **Findings** – defects, risks, follow-ups
- **Debrief** – short review of results

---

## Writing a Good Test Charter

A test charter answers:
- What are we testing?
- Why are we testing it?
- What risks are we focusing on?
- What data or tools are needed?

### Charter Template
Test Charter:
Explore [feature/system]
With focus on [risk/behavior]
Using [tools/data]
Out of scope: [optional]

---

## Real-World Charter Examples

### Finance Example
Explore fund transfer feature
Focus on balance updates, reconciliation, and failure handling
Using multiple accounts and edge-case amounts

---

### Salesforce Example
Explore Opportunity updates
Focus on profile-based permissions and automation rules
Using Sales Agent and Manager roles

---

### API Example
Explore payment API
Focus on error handling, auth failures, and idempotency
Using valid and invalid tokens

---

## Capturing Exploratory Findings

Record:
- What was tested
- What was observed
- What questions arose
- What risks were discovered

Avoid writing full test cases — focus on **signal**.

---

## Sample Session Notes Structure
Session:
Charter:
What worked:
Issues found:
Questions raised:
Follow-up ideas:

---

## Integrating Exploration into Test Strategy

Exploratory testing should be:
- Planned
- Visible
- Risk-aligned

Use it:
- Early in development
- After significant changes
- Before release
- When automation coverage is weak

---

## Sample Test Strategy Template (Lightweight)

### 1. Scope
- Features in scope
- Out-of-scope items

### 2. Risk Areas
- Business-critical flows
- Integrations
- Data integrity
- Security and permissions

### 3. Test Approach
- Automation focus
- Exploratory testing focus
- Manual validation

### 4. Environments & Data
- Test environments
- Data requirements

### 5. Entry / Exit Criteria
- When testing starts
- When release is acceptable

---

## Release Readiness Checklist

Before release, confirm:
- [ ] Critical business flows validated
- [ ] High-risk exploratory sessions completed
- [ ] No unresolved critical defects
- [ ] Data integrity verified
- [ ] Integration points validated
- [ ] Known risks documented and accepted
- [ ] Stakeholders informed

Release readiness is about **risk awareness**, not perfection.

---

## Hands-On Exercises

### Exercise 1: Write a Charter
Create a test charter for:
> “User updates personal profile information.”

---

### Exercise 2: Run a Session
Time-box 60 minutes and:
- Explore the feature
- Capture notes
- Identify at least 3 risks or questions

---

### Exercise 3: Debrief
Summarize:
- What you learned
- What should be automated
- What requires follow-up

---

## Common Mistakes
- Treating exploratory testing as unplanned
- Skipping debriefs
- Over-documenting
- Repeating the same exploration without learning
- Using exploration instead of strategy

---

## Key Takeaways
- Exploratory testing finds unknown risks
- SBTM adds discipline without rigidity
- Charters guide focus
- Exploration complements automation
- Release confidence comes from risk awareness

---
