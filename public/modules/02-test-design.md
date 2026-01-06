
**Designing Effective Tests That Find Real Defects**

---

## Overview
Good testing starts with good test design.

Test design is the discipline of **deciding what to test, how to test it, and how much testing is enough**. Strong test design reduces redundancy, improves coverage, and increases the likelihood of finding meaningful defects early.

This module focuses on **practical, proven test design techniques** used by effective QA engineers.

---

## Learning Objectives
By the end of this module, you should be able to:
- Apply core test design techniques effectively
- Reduce test cases without reducing coverage
- Design tests based on risk and behavior
- Select the right technique for the problem at hand

---

## Why Test Design Matters

Poor test design leads to:
- Bloated test suites
- Missed edge cases
- False confidence
- High maintenance cost

Good test design leads to:
- Fewer, stronger test cases
- Better defect detection
- Clear traceability to requirements
- Higher confidence with less effort

---

## Core Test Design Techniques

### Equivalence Partitioning
Divide inputs into groups that should behave the same.

**Example:**
- Age field accepts values 18–65  

Partitions:
- < 18 (invalid)
- 18–65 (valid)
- '> 65 (invalid)

Test one value per partition instead of every possible value.

---

### Boundary Value Analysis (BVA)
Defects often occur at boundaries.

**Example:**
- Allowed range: 1–100

Test:
- 0, 1, 2
- 99, 100, 101

Boundaries find more bugs than “middle” values.

---

### Decision Tables
Use when behavior depends on **multiple conditions**.

**Example:**
Loan approval depends on:
- Credit score
- Income
- Employment status

Decision tables help ensure all meaningful combinations are covered without guesswork.

---

### State Transition Testing
Use when a system behaves differently based on its current state.

**Examples:**
- Order lifecycle (Created → Paid → Shipped → Cancelled)
- Account status (Active → Locked → Suspended)

Focus on:
- Valid transitions
- Invalid transitions
- State-dependent behavior

---

### Use Case / Scenario Testing
Focus on **real user workflows**, not isolated steps.

Good scenarios include:
- Happy path
- Alternate flows
- Failure and recovery paths
- Interruptions (timeouts, retries, partial completion)

---

## Negative Testing

Negative tests answer:
  “What happens when things go wrong?”

Examples:
- Invalid input
- Missing required fields
- Unauthorized access
- Corrupted or partial data
- Dependency failures

Negative testing is often where the most valuable defects live.

---

## Risk-Based Test Design

Not all features deserve equal testing effort.

Prioritize based on:
- Business impact
- User exposure
- Data sensitivity
- Integration complexity
- Change frequency

Design tests where **failure hurts the most**.

---

## Test Design vs Test Cases

- **Test design** → thinking and selection
- **Test cases** → documentation and execution

Strong testers design first, document second.

---

## Common Test Design Mistakes
- Writing tests directly from UI
- One-to-one mapping of requirements to test cases
- Over-testing stable areas
- Ignoring edge cases and failure paths
- Measuring quality by test count

---

## Practical Checklist
When designing tests, ask:
- [ ] What is the simplest case that validates behavior?
- [ ] Where are the boundaries?
- [ ] What states does this feature move through?
- [ ] What combinations matter?
- [ ] How can this fail?
- [ ] Is this test adding new information?

---

## Key Takeaways
- Test design is a thinking skill, not a documentation task
- Fewer well-designed tests beat large unfocused suites
- Boundaries, states, and combinations find real defects
- Risk should guide test depth

---
