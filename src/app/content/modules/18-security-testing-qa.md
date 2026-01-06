# Security Testing for QA Engineers  
**Reducing Risk Through Validation, Not Exploitation**

---

## Overview
Security is not a separate phase and not a specialist-only concern.  
For QA, security testing is about **validating expected protective behavior**, ensuring unsafe actions are blocked, and confirming that sensitive data is handled correctly.

QA does not hunt vulnerabilities like an attacker.  
QA ensures the system **fails safely**, **enforces rules**, and **protects trust**.

---

## Learning Objectives
By the end of this module, you should be able to:
- Understand QA’s responsibility in security testing
- Identify security risks QA is expected to validate
- Test authentication and authorization behavior
- Validate API and data exposure controls
- Communicate security risk clearly to teams and leadership

---

## QA’s Responsibility in Security
QA is responsible for:
- Verifying security requirements are implemented
- Testing misuse and abuse scenarios
- Validating fixes for known vulnerabilities
- Ensuring security behavior does not regress
- Raising visibility when security assumptions are unclear

QA is **not** responsible for:
- Advanced exploitation
- Writing custom exploits
- Replacing security audits or penetration tests

---

## Why Security Is a QA Concern
Security failures result in:
- Data breaches
- Financial loss
- Regulatory exposure
- Loss of customer trust

Many security issues are **logic flaws**, not technical exploits — making them visible to QA.

---

## Security Risk Areas QA Should Focus On

### Authentication
- Identity verification
- Credential handling
- Token lifecycle
- Session management

### Authorization
- Role-based access
- Permission enforcement
- Privilege boundaries

### Data Protection
- Sensitive data exposure
- Masking and encryption
- Logging behavior

### APIs & Integrations
- Access control
- Input validation
- Error handling

---

## Authentication Validation (QA View)
QA validates that:
- Authentication is required
- Invalid credentials are rejected safely
- MFA behavior is enforced
- Tokens expire as expected
- Logout invalidates sessions

Authentication issues are often **high severity** defects.

---

## Authorization Validation (QA View)
QA validates that:
- Users cannot access unauthorized data
- Role changes are respected immediately
- Field-level and object-level permissions are enforced
- APIs enforce the same rules as the UI

Authorization failures are among the **most damaging** defects.

---

## Input Validation & Abuse Awareness
QA should test:
- Unexpected input formats
- Oversized payloads
- Missing or malformed fields
- Invalid identifiers

The goal is not injection exploitation —  
it is confirming **unsafe input is rejected predictably**.

---

## API Security Validation
QA should verify:
- Authentication is required for protected endpoints
- Tokens cannot be reused improperly
- Sensitive data is not exposed in responses
- Errors return appropriate status codes
- Idempotent operations behave correctly

APIs often expose more risk than UIs.

---

## Error Handling & Information Exposure
QA validates that:
- Error messages are user-safe
- Stack traces are not exposed
- Internal identifiers are not leaked
- Logs contain context but not secrets

Error handling defects are both security and quality issues.

---

## Logging & Auditability
QA should expect:
- Security-relevant actions are logged
- Logs include correlation identifiers
- Audit trails exist for sensitive operations

Lack of auditability is a **security and compliance risk**.

---

## Domain Examples

### Finance Systems
- Validate audit logs for transactions
- Confirm duplicate requests do not duplicate outcomes
- Ensure unauthorized balance access is blocked

---

### Salesforce Platforms
- Validate object- and field-level security
- Confirm APIs respect permission sets
- Ensure custom components enforce access rules

---

### API-Centric Systems
- Validate access control consistency
- Ensure error responses are sanitized
- Confirm rate limits and throttling exist

---

## Security in Agile QA Practice
QA should:
- Ask security questions during refinement
- Include security behavior in acceptance criteria
- Validate security fixes as regression
- Make security risk visible early

Security issues discovered late are expensive and disruptive.

---

## Common QA Security Anti-Patterns
- Assuming security is someone else’s job
- Testing only happy paths
- Ignoring authorization edge cases
- Treating security defects as optional
- Deferring security validation to production

---

## Communicating Security Risk
When reporting security findings:
- Be factual
- Describe impact, not fear
- Explain likelihood and exposure
- Provide mitigation options

Security communication should enable **decisions**, not panic.

---

## Key Takeaways
- Security is part of QA responsibility
- QA validates protection, not exploitation
- Authorization and APIs are critical risk areas
- Early validation prevents major incidents
- Clear communication builds trust

---

## Next Module
 **Test Architecture & Automation Patterns**