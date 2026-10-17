**Building, Testing and Evaluating AI-Powered APIs Across the Lifecycle**

---

## Overview

An AI-powered API combines conventional code with a probabilistic component. The same request can produce different valid answers, so delivery needs both API contracts and measurable quality criteria.

This module follows one lifecycle from requirements and API design through evaluation, security, deployment and production feedback. It also covers using AI as a tool inside QA.

## Lifecycle and Responsibilities

| Stage | Engineering and QA work |
| --- | --- |
| Requirements | Define the task, quality dimensions, unacceptable outcomes and budgets |
| Design and build | Specify contracts, prompts, retrieval, model versions and fallback behavior |
| Data and test design | Maintain representative eval cases and deterministic contract checks |
| Evaluation | Score outputs with properties, calibrated judges and human review |
| Security | Test authorization, injection, leakage and tool permissions |
| Release | Compare against a baseline and deploy versioned artifacts with rollback |
| Production feedback | Monitor quality, cost and latency; turn failures into regression cases |

These activities overlap and repeat whenever code, prompts, models or retrieval data change.

## Requirements, API Design and Build

Define what the model does: summarize, classify, extract, answer or act. Agree on quality thresholds by risk, a p95 latency budget, a cost budget per request and outcomes the system must never produce.

For a ticket summarization API, example criteria might include schema-valid responses on at least 95% of first attempts and grounded summaries on at least 90% of a representative eval set. These are example targets to adapt to the feature's risk.

Design the surrounding API explicitly:

- Define request and response schemas, allowed labels and input size limits.
- Keep authentication, authorization and tool permissions in trusted application code.
- Filter retrieval by the caller's permissions before passing context to the model.
- Version prompt templates, model identifiers, retrieval configuration and eval datasets alongside code.
- Validate model output before returning it or using it to invoke a tool.
- Bound retries, token usage, tool loops and timeouts; define provider-outage and invalid-output behavior.

For example, `POST /v1/answers` might return `answer`, `sources[]`, `model` and `prompt_version`. Document error responses and fallback behavior as part of the contract.

Mock model responses to test surrounding code deterministically, then run live-model evaluations to measure generated output quality.

---

## 1. Test Strategy

Start with **risk**, as with any feature.

Quality dimensions to consider:

- **Correctness** – is the answer right?

- **Groundedness** – is it supported by the provided sources?

- **Format** – does it match the schema/contract?

- **Safety** – no harmful, biased or policy-violating content

- **Privacy** – no PII or secrets leaked

- **Robustness** – stable under typos, paraphrases, adversarial input

- **Performance & cost** – latency and token usage within budget

QA should:

- Rank dimensions by business impact for this feature

- Decide which are checked by code, by judge, or by humans

- Agree on thresholds with product (e.g. groundedness ≥ 90%)

**Example (Finance):**
A wrong account balance explanation is high risk; a slightly awkward tone is low risk.

---

## 2. Eval Datasets

The eval dataset is the AI equivalent of a regression suite.

A good eval set includes:

- **Golden cases** – common real user requests with expected answers

- **Edge cases** – ambiguous, empty, very long, multilingual inputs

- **Negative cases** – out-of-scope questions, missing context

- **Adversarial cases** – injection and jailbreak attempts

- **Regression cases** – every confirmed production failure

Practices:

- Version the dataset like code

- Tag cases by slice (intent, language, risk level)

- Start small (50–100 cases) and grow from real traffic

- Keep PII out or properly anonymized

---

## 3. Test Design: Non-Deterministic Assertions

Exact string matching does not work for generated text. Assert on **properties** instead.

| Assertion Type | Example |
| --- | --- |
| Schema | Output is valid JSON matching the contract |
| Enumerated | `category` is one of the allowed labels |
| Contains / excludes | Mentions the order ID; contains no email address |
| Numeric tolerance | Extracted amount equals source amount exactly |
| Similarity | Semantic similarity to reference ≥ threshold |
| Rubric score | Judge score ≥ 4/5 for groundedness |
| Statistical | ≥ 95% of 20 runs pass the property |

Practices:

- Use temperature 0 or fixed seeds where supported, but don't rely on full determinism

- Run critical cases multiple times and assert on pass **rate**

- Mock the model for deterministic tests of surrounding code

---

## 4. LLM-as-Judge

A judge model scores outputs against a rubric, so evaluation scales beyond manual review.

Good judge design:

- One clear criterion per judge prompt (e.g. groundedness only)

- Explicit rubric with scale definitions and examples

- Provide the source context and the question, not just the answer

- Ask for a short reason with the score for debuggability

Calibration:

- Grade a sample manually and compare with judge scores

- Track agreement; fix the rubric if the judge disagrees with humans

- Watch for known biases: preference for longer answers, position bias, self-preference

Treat the judge as a **test tool that needs its own testing**.

---

## 5. Red Teaming

Red teaming is exploratory testing with an attacker mindset.

Focus areas:

- Direct prompt injection ("ignore previous instructions...")

- Indirect injection via documents, emails, web pages, tool results

- Jailbreaks and role-play bypasses

- System prompt and data extraction

- Harmful, biased or off-brand content

- Abuse of tools/actions (unauthorized writes, payments)

- Resource abuse (very long inputs, loops)

Practices:

- Run time-boxed sessions (SBTM style) with charters

- Use AI to generate attack variations, then curate them

- Add every successful attack to the adversarial eval set

---

## 6. Regression & Eval Gates in CI

Every change to prompt, model, retrieval or code should trigger evals.

Pipeline layers:

- **Fast (every commit):** unit tests, contract tests with mocked model, schema checks

- **Medium (every PR):** eval suite on a core subset, judge scoring

- **Full (nightly / pre-release):** full eval set, red-team set, cost & latency run

Gate rules:

- Block if any critical slice drops below threshold

- Block if overall score drops more than an agreed margin vs baseline

- Report diffs per case, not just a single number

---

## Deployment and Rollback

Release code, prompts, model identifiers and retrieval configuration as a traceable version set. Use pinned model versions where available and evaluate provider changes before adopting them.

- Compare the candidate with the approved baseline on quality, safety, cost and latency.
- Use a staged rollout and monitor critical slices before expanding traffic.
- Keep the previous working version set available for rollback.
- Assign an owner and rollback triggers for quality regressions, cost spikes and provider failures.

---

## 7. Observability

Production is where real inputs appear.

QA should ensure:

- Requests are traced with prompt version, model version and token usage

- Sampled traffic is scored by judges continuously

- Dashboards show quality, refusal rate, schema failures, cost and latency

- Alerts exist for drift after provider model updates

- PII is redacted in logs

---

## 8. Human Review

Humans remain the ground truth.

Use human review for:

- Calibrating judges

- High-risk outputs (finance, health, legal)

- Low-confidence or user-flagged responses

- Release sign-off on major model changes

Practices:

- Clear grading guidelines, two reviewers for disagreements

- Track review results as data, not comments

- Feed confirmed failures back into the eval dataset

---

## AI in QA: Using AI as a Testing Tool

| Use | Helps | Watch Out |
| --- | --- | --- |
| Test idea generation | Broader edge-case coverage | Generic ideas without domain risk |
| Test data generation | Realistic synthetic data fast | Invalid or biased data |
| Test code generation | Faster automation scaffolding | Weak assertions, hidden flakiness |
| Log / failure triage | Faster root cause clustering | Confident wrong explanations |
| Requirement review | Spots ambiguity | Misses business context |

Rule: AI output in QA is a **draft**. A tester owns the result.

---

## Definition of Ready & Definition of Done (AI QA)

### Definition of Ready

- Quality dimensions and thresholds agreed

- Eval dataset exists for the feature

- Risks and red-team focus areas identified

- Prompt and model versions identifiable

---

### Definition of Done

- Eval scores meet thresholds on all critical slices

- Red-team findings fixed or accepted with sign-off

- Judge calibrated against human review

- CI eval gate configured

- Production monitoring and sampling in place

---

## Hands-On Exercises

### Exercise 1: API Contract and Assertions

For an API that answers questions from a policy document, define its response schema, latency and cost budgets, permission checks and fallback behavior. Then write:

- 2 schema assertions

- 2 contains/excludes assertions

- 1 judge rubric for groundedness

---

### Exercise 2: Eval Dataset

Create 15 eval cases:

- 8 golden, 3 edge, 2 out-of-scope, 2 adversarial
Tag each by intent and risk.

---

### Exercise 3: CI Gate

Define:

- What runs on each commit vs nightly

- Baseline scores and allowed drop

- Who can approve an override

---

## AI QA in Practice

### Finance Example

- Extracted amounts must match source exactly (zero tolerance)

- Explanations judged for groundedness against statements

- Human review required for any customer-facing advice

---

### Salesforce Example

- Case summaries tested across profiles and permissions

- Red-team indirect injection via case comments and emails

- Eval slices per product line and language

---

### API Example

- Contract tests with mocked model in every PR

- Nightly eval run reporting per-case diffs vs baseline

- Pass-rate assertions for critical prompts (e.g. ≥ 19 of 20 runs)

---

## Common AI QA Mistakes

- Exact string assertions on generated text

- No eval dataset, only manual spot checks

- Trusting an uncalibrated LLM judge

- Testing only the happy path, skipping red teaming

- Ignoring model provider updates

- Accepting AI-generated tests without review

- Shipping unversioned prompts or changing models without evaluation

- Letting the model decide authorization or logging raw sensitive prompts

---

## Key Takeaways

- AI quality is measured in scores and rates, not single pass/fail

- The eval dataset is your regression suite

- Assert on properties, not exact text

- LLM judges need calibration like any test tool

- Red teaming and production feedback grow the eval set

- AI in QA accelerates good strategy and bad strategy equally
