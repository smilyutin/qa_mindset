**A practical overview with examples**

Software testing combines three things: principles guide your thinking, techniques help you choose tests, and practices make testing reliable throughout development. This guide uses an online store as a running example to show how these ideas work together.

---

## The seven testing principles

ISTQB describes seven core principles that guide effective testing.

| Principle | Meaning and practical example |
| --- | --- |
| Testing shows the presence of defects not their absence | Passing tests increases confidence but cannot prove that software has no defects. Checkout may pass with Visa while an untested payment method still fails. |
| Exhaustive testing is impossible | You usually cannot test every input, combination, and sequence. Select shopping carts that cover quantities, discounts, taxes, and payment risks. |
| Early testing saves time and money | Review requirements and designs before implementation. Clarify whether a discount applies before or after tax before the calculation is built. |
| Defects cluster together | A small number of components often contain many defects. Repeated discount calculation problems justify deeper testing of that area. |
| Tests wear out | Review and extend tests as the product changes. Add new coupon combinations instead of only rerunning the original checkout suite. |
| Testing is context dependent | Match the approach to the product, users, and risks. Banking software needs different testing priorities from a promotional website. |
| Absence of defects is a fallacy | Software can meet its specification and still fail to satisfy user needs. Checkout may calculate correctly but be too confusing to complete. |

---

## Test techniques

Techniques turn requirements, implementation details, and experience into useful test cases. ISTQB groups them into black box, white box, and experience based techniques.

### Black box techniques

These examine externally observable behavior without relying on the internal code.

| Technique | Application and example |
| --- | --- |
| Equivalence partitioning | Divide inputs into groups expected to behave similarly. For whole number quantities from 1 to 99, test 0, 50, and 100 as representatives of below range, valid, and above range inputs. |
| Boundary value analysis | Test the edges between input groups. For quantities from 1 to 99, two value boundary checks include 0, 1, 99, and 100. |
| Decision table testing | Check combinations of conditions and their outcomes. Free shipping may depend on membership and order value. |
| State transition testing | Check valid and invalid movements between states. An order moves from Pending to Paid to Shipped; verify that an unpaid order cannot ship. |

### Decision table example

Assume members always receive free shipping, while other customers need an order of at least $50.

| Member | Order at least $50 | Expected shipping |
| --- | --- | --- |
| Yes | Yes | Free |
| Yes | No | Free |
| No | Yes | Free |
| No | No | Standard charge |

### White box techniques

Statement testing exercises executable statements, such as subtotal, tax, and total calculations. Branch testing exercises alternative control flow paths, such as discount applied and discount not applied. Even 100% branch coverage does not prove that requirements or calculations are correct.

### Experience based techniques

Error guessing anticipates likely mistakes, such as duplicate payments or rounding errors. Exploratory testing combines learning, test design, and execution, such as investigating a payment timeout followed by a refresh. Checklist based testing uses maintained checks for required fields, keyboard navigation, error messages, and session expiration.

---

## Testing practices

Testing includes planning, analysis, design, implementation, execution, monitoring, and completion. These activities often overlap and repeat as the product changes.

1. Understand the requirement. Establish how prices, taxes, discounts, shipping, and payment failures should behave.

2. Assess risk. Prioritize incorrect charges, duplicate orders, and exposure of customer information.

3. Design tests. Combine normal scenarios, invalid inputs, boundaries, business rules, and state changes.

4. Prepare the environment and data. Use controlled accounts, known products, test payment methods, and repeatable setup.

5. Execute and collect evidence. Compare actual behavior with expected results; retain useful logs, screenshots, or traces.

6. Report defects clearly. Include reproduction steps, expected and actual results, environment, and impact.

7. Confirm fixes and run regression tests. Verify the original failure is resolved and check related behavior.

8. Communicate remaining risk. Report what passed, what failed, what was not tested, and what needs a decision.

### Example defect report

| Field | Example |
| --- | --- |
| Title | Double clicking Place order creates two orders |
| Preconditions | Customer has one item in the cart and a valid test payment method. |
| Steps | Open checkout and double click Place order. |
| Expected result | One order is created and payment is processed once. |
| Actual result | Two orders are created. |
| Evidence | Order IDs, timestamps, screenshot, and relevant request logs. |
| Impact | Customer may receive duplicate orders or charges. |

---

## Test levels and test types

Test levels identify the scope: component, component integration, system, system integration, and acceptance. Test types identify what is being evaluated, including functional behavior and nonfunctional characteristics such as performance or usability.

| Test example | Level | Focus |
| --- | --- | --- |
| Verify the tax calculation function | Component | Functional correctness |
| Verify checkout communicates correctly with a payment service | System integration | Functional interaction |
| Measure checkout response time under load | System | Performance |
| Have business representatives verify agreed purchasing scenarios | Acceptance | Business needs |

### Confirmation and regression testing

Confirmation testing verifies that a specific defect has been fixed. After correcting a checkout calculation, rerun the test that showed the incorrect total. Regression testing checks whether the change adversely affected other behavior, such as discounts, taxes, refunds, or other payment methods.

---

## Applying the concepts to automation

Requirement → Risk → Technique → Test case → Automated check → Result review

Suppose a product allows whole number quantities from 1 to 99. The requirement is to accept values within that range; the risk is that invalid quantities could produce incorrect orders. Boundary value analysis identifies four useful checks: 0 and 100 must be rejected, while 1 and 99 must be accepted.

An automated test enters each value and asserts the specified result. Investigate failures before changing the test or its expected outcome. Test design determines which checks matter; automation makes those checks repeatable and provides execution evidence.

---

## Source and further reading

International Software Testing Qualifications Board. Certified Tester Foundation Level Syllabus, version 4.0.1. The examples in this guide illustrate the concepts using an online store.

https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf
