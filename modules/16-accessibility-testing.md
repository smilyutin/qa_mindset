
**Inclusive Quality Is Not Optional**

---

## Overview
Accessibility is not a “nice to have” or a late-stage checklist item.  
It is a **core quality attribute** that ensures products are usable by everyone — including people with disabilities.

From a QA perspective, accessibility testing reduces legal risk, expands user reach, and improves overall usability for all users.

This module focuses on **practical accessibility testing** that QA engineers can apply immediately.

---

## Why Accessibility Matters

Accessibility impacts:
- Users with visual, auditory, motor, or cognitive disabilities
- Users on mobile devices
- Users with temporary impairments
- Users in low-bandwidth or high-noise environments

Accessibility improves usability for **everyone**, not just a subset of users.

---

## Accessibility Standards (What QA Needs to Know)

### WCAG (Web Content Accessibility Guidelines)

Four core principles (POUR):

- **Perceivable** – users can perceive the content
- **Operable** – users can interact with it
- **Understandable** – content is clear and predictable
- **Robust** – works with assistive technologies

QA does not need to memorize WCAG — but should understand **how violations appear in real products**.

---

## Common Accessibility Issues QA Finds

- Missing or incorrect labels
- Poor color contrast
- Keyboard navigation failures
- Focus not visible or lost
- Incorrect heading structure
- Dynamic content not announced to screen readers
- Form errors not communicated clearly

These issues are often **easy to detect** and **cheap to fix** when caught early.

---

## Manual Accessibility Testing

Manual checks provide the most value.

### Keyboard Testing
- Navigate using Tab / Shift+Tab
- Activate elements with Enter / Space
- Ensure logical focus order
- Verify visible focus indicators

If you can’t use the app without a mouse, neither can many users.

---

### Screen Reader Basics
You don’t need to be an expert.

Test basics:
- Are controls announced correctly?
- Are error messages readable?
- Is dynamic content announced?

Popular tools:
- NVDA (Windows)
- VoiceOver (macOS)
- JAWS (enterprise environments)

---

## Automated Accessibility Testing

Automation helps catch **low-hanging fruit**, not everything.

Common tools:
- axe
- Lighthouse
- Playwright accessibility checks
- Browser extensions

Automation is best for:
- Missing labels
- Contrast issues
- ARIA misuse

Automation does **not** replace manual testing.

---

## Real-World Examples

### Finance Example
- Ensure forms announce validation errors
- Confirm error messages are readable
- Verify transaction confirmations are accessible

---

### Salesforce Example
- Validate custom Lightning components
- Check tab order in complex forms
- Ensure modals trap focus correctly

---

### API-Driven UI Example
- Confirm async loading states are announced
- Validate success/failure messages are accessible
- Ensure screen readers receive updates

---

## Accessibility Testing in Agile Teams

QA should:
- Raise accessibility questions during grooming
- Validate accessibility before UI automation
- Include accessibility checks in DoD
- Treat accessibility defects as functional defects

Accessibility is a **shared responsibility**, but QA often leads awareness.

---

## Hands-On Exercises

### Exercise 1: Keyboard Audit
Pick a page and verify:
- All functionality is keyboard-accessible
- Focus order makes sense
- Focus is visible

---

### Exercise 2: Contrast Check
Identify:
- Text with poor contrast
- UI elements that rely only on color

---

### Exercise 3: Automation Scan
Run an accessibility tool and:
- Review findings
- Classify false positives
- Identify real issues

---

## Common Accessibility Testing Mistakes
- Treating accessibility as compliance-only
- Relying solely on automation
- Testing only at the end
- Ignoring dynamic content
- Deferring issues indefinitely

---

## Key Takeaways
- Accessibility is a core quality attribute
- Manual testing finds the most valuable issues
- Automation supports but does not replace humans
- Early testing reduces cost and risk
- Inclusive products are better products

---

