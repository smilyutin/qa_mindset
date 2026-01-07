
**See the System, Not Just the Failure**

---

## Overview
When tests fail, the real challenge is not *that* they failed —  
it’s **understanding why**.

Observability gives QA visibility into how systems behave internally: logs, metrics, traces, and signals that turn failures into **actionable insight**. Strong debugging skills reduce investigation time, improve defect quality, and increase trust in testing results.

This module focuses on observability from a **QA perspective**, not SRE theory.

---

## What Is Observability?

Observability answers the question:
> “Why did the system behave this way?”

It goes beyond monitoring and includes:
- **Logs** – what happened
- **Metrics** – how often, how fast, how much
- **Traces** – how a request flowed through the system

For QA, observability turns guesswork into evidence.

---

## Logs (QA View)

Logs are the first debugging tool QA should reach for.

Use logs to:
- Confirm requests reached the backend
- Validate error handling
- Correlate UI/API actions with backend behavior
- Identify unexpected exceptions

### Good Logging Signals
- Timestamps
- Request or correlation IDs
- Clear error messages
- Context (user, action, system)

If logs are inaccessible, QA is testing blind.

---

## Metrics (QA View)

Metrics show trends and system health.

Examples QA should care about:
- Error rates
- Response times
- Timeout frequency
- Retry counts
- Throughput changes after deployment

Metrics help identify **non-functional regressions**.

---

## Distributed Tracing

Traces follow a request across services.

Use tracing to:
- Identify slow or failing dependencies
- Confirm integration paths
- Debug partial failures
- Validate retry and fallback behavior

Tracing is critical in microservice and API-heavy systems.

---

## Real-World Examples

### Finance Example
- Trace a payment request across services
- Identify where a transaction fails
- Validate rollback or compensation logic
- Confirm audit logs are written

---

### Salesforce Example
- Correlate UI actions with API calls
- Identify flow or trigger failures
- Debug permission-related issues
- Validate integration errors with external systems

---

### API Example
- Match request IDs between client and server
- Identify schema mismatches
- Debug timeout and retry behavior
- Confirm error mapping (4xx vs 5xx)

---

## Debugging Workflow for QA

When something fails:
1. Reproduce the issue
2. Capture identifiers (IDs, timestamps, user)
3. Check logs
4. Review metrics
5. Inspect traces (if available)
6. Isolate system vs environment issue
7. Attach evidence to defect

Good QA debugging shortens resolution time dramatically.

---

## Improving Defect Reports with Observability

A strong defect includes:
- Clear reproduction steps
- Logs or request IDs
- Relevant timestamps
- Expected vs actual behavior
- Impact assessment

Defects with evidence get fixed faster.

---

## Observability Gaps QA Should Flag

Raise concerns when:
- Logs are inaccessible
- Errors lack context
- No correlation IDs exist
- Metrics are missing or unreliable
- Traces are unavailable in test environments

Lack of observability is a **quality risk**.

---

## Hands-On Exercises

### Exercise 1: Log Analysis
Given a failed test:
- Locate relevant logs
- Identify the failure point
- Summarize findings

---

### Exercise 2: Metrics Review
Review a dashboard and identify:
- Abnormal trends
- Possible regressions
- Areas requiring deeper testing

---

### Exercise 3: Debug a Flaky Test
Determine whether flakiness is caused by:
- Product behavior
- Environment instability
- Test design

Provide evidence for your conclusion.

---

## Common Debugging Mistakes
- Relying only on UI symptoms
- Guessing without evidence
- Ignoring timestamps
- Treating environment issues as product defects
- Filing defects without investigation

---

## Key Takeaways
- Observability turns failures into insights
- Logs, metrics, and traces are QA tools
- Evidence-based debugging builds trust
- Better defects mean faster fixes
- Visibility is essential for quality

---

