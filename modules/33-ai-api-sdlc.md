**Building APIs That Use or Expose LLM Features, End to End**

---

## Overview

An AI-powered API looks like any other endpoint from the outside: a request goes in, a response comes out.

Inside, one core component is **probabilistic**. The same input can return different outputs, models change underneath you, and cost and latency depend on tokens, not just requests.

This module walks through the SDLC for AI APIs and shows, at each stage, **what changes compared to a classic API** and where QA adds value.

---

## AI API SDLC Overview

### Stages

1. Requirements
2. Design (contracts, prompts, model choice)
3. Data
4. Build
5. Evaluation
6. Security
7. Testing
8. Deployment
9. Monitoring
10. Feedback

The stages form a **loop**: monitoring and feedback feed new eval cases, prompt changes and model upgrades.

---

## What Changes vs a Classic API

| Stage | Classic API | AI API |
| --- | --- | --- |
| Requirements | Exact expected output | Acceptable *range* of outputs + quality bar |
| Design | Schema + business logic | Schema + prompt + model + guardrails |
| Data | Test data | Eval datasets, grounding / RAG sources |
| Build | Deterministic code | Code + prompt templates + tool calls |
| Evaluation | N/A (tests cover it) | Scored eval runs against a baseline |
| Security | AuthN/Z, input validation | + Prompt injection, data leakage, PII |
| Testing | Exact assertions | Schema, property and rubric assertions |
| Deployment | Version code | Version code **and** prompt **and** model |
| Monitoring | Errors, latency | + Quality drift, token cost, refusals |
| Feedback | Bug reports | + User ratings, human review, new eval cases |

---

## 1. Requirements

Define the job of the AI feature in **testable terms**.

Clarify:

- What task the model performs (summarize, classify, extract, answer, act)

- What "good" means: accuracy, groundedness, tone, format

- What the model must **never** do (give advice it shouldn't, reveal data, invent facts)

- Latency budget (p95) and cost budget per request

- Fallback behavior when the model fails or is unavailable

**Example acceptance criteria:**

- 95% of responses validate against the JSON schema on first attempt

- ≥ 90% of answers judged "grounded" on the eval set

- p95 latency  "As a support agent, I want an API that summarizes a customer ticket and suggests a category."

Define:

- Measurable quality criteria

- Latency and cost budget

- What the API must never return

---

### Exercise 2: Security

For the same API, write 5 adversarial test inputs:

- Direct prompt injection

- Injection hidden in the ticket body

- Request for another customer's data

- Oversized input

- Input containing PII

---

### Exercise 3: Release Gate

Design a CI gate:

- Which metrics block the merge?

- What is the baseline and the allowed drop?

- How do you roll back a bad prompt?

---

## AI API in Practice

### Finance Example

- Transaction categorization API with a fixed label set

- Schema-validated JSON output, no free text in decisions

- Amounts and account data never sent to the model unmasked

- Audit log of prompt version, model version and output per request

---

### Salesforce Example

- Case summary API grounded in case history only

- Respects record-level sharing: retrieval filtered by user permissions

- Indirect injection tested via malicious text in case comments

---

### API Example

- `POST /v1/answers` returns `answer`, `sources[]`, `model`, `prompt_version`

- `422` when output fails schema after retries, `503` on provider outage with fallback message

---

## Common AI API Mistakes

- Shipping prompt changes without an eval run

- Using a floating model alias in production

- Trusting the model for authorization decisions

- No cost or token limits

- Asserting exact text in tests and calling them "flaky"

- Logging raw prompts with PII

---

## Key Takeaways

- An AI API is a classic API plus a probabilistic component

- Prompts, models and data are versioned artifacts

- Evaluation is a release gate, not an afterthought

- Security includes prompt injection, leakage and excessive agency

- Monitoring must cover quality, drift, cost and latency

- Production feedback becomes tomorrow's eval cases

---

## Next Module

 **AI QA SDLC**
