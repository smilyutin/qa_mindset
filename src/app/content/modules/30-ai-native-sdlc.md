---
title: AI-native SDLC
---
**Beyond the Coding Agent: Context, Coordination, and Confidence**

---

## Overview

Faster code generation does not automatically shorten the journey from an idea to a reliable production change.

Reviews, integration work, approvals, governance, and operational ownership can become the limiting factors. Improving only the coding step can leave more work waiting elsewhere.

AI changes more than how quickly a team can write code.

It can support discovery, requirements, design, implementation, testing, release decisions, and production analysis. When the product itself uses AI, the team must also manage **variable outputs, model behavior, data quality, and evaluation**.

An AI-native SDLC deliberately designs these activities into the delivery process.

The objective is **better delivery supported by evidence**, with people accountable for the decisions that matter.

This module focuses on how QA contributes throughout that lifecycle.

---

## Learning Objectives

By the end of this module, you should be able to:

- Explain what an AI-native development lifecycle involves
- Distinguish AI-assisted delivery from building an AI-powered product
- Identify QA responsibilities at each lifecycle stage
- Separate deterministic tests from AI quality evaluations
- Define boundaries for agents, tools, and human review
- Connect production feedback to measurable improvement

---

## What Makes an SDLC “AI-Native”

An AI-native approach considers AI from the beginning of the delivery process.

Teams define:

- Which activities AI can support
- What context and data AI can access
- Which actions an agent may perform
- How generated work will be checked
- Which decisions require human judgment
- What evidence is required before a change can ship

AI participation is intentional, observable, and bounded.

**More automation does not automatically mean more confidence.**

---

## The Bottleneck Moves Beyond Code

When implementation accelerates, teams must examine the entire delivery flow.

Ask:

- How long does work wait for clarification or review?
- Who discovers that a change affects another service?
- Are test environments and contracts ready when the code is ready?
- Are approvals based on clear evidence or repeated manual explanation?
- Can operational teams support and reverse the change?

Measure **accepted outcomes and end-to-end lead time**, together with rework, escaped defects, and operational impact.

A growing queue of unverified changes is not a productivity gain.

---

## Two Dimensions of AI-Native Delivery

### AI in the Delivery Process

AI helps the team produce or review work:

- Summarizing research and requirements
- Suggesting designs and implementation options
- Generating code and tests
- Reviewing changes
- Investigating failures and production signals

The resulting product may contain no AI feature at all.

### AI in the Product

The application uses models to perform a task:

- Summarizing support cases
- Classifying documents
- Answering questions from retrieved sources
- Recommending actions
- Calling tools through an agent

This introduces additional concerns around output quality, grounding, safety, latency, and cost.

A project can involve **either dimension or both**.

---

## Traditional, AI-Assisted, and AI-Native Delivery

| Area           | Traditional                         | AI-Assisted                 | AI-Native                                                                       |
| -------------- | ----------------------------------- | --------------------------- | ------------------------------------------------------------------------------- |
| Requirements   | Written and reviewed by people      | AI helps draft or summarize | Context, assumptions, acceptance criteria, and review rules are explicit        |
| Implementation | Engineers write changes             | AI suggests code            | AI work happens within defined access, validation, and review boundaries        |
| Testing        | People design checks and automation | AI proposes tests           | Independent evidence checks generated changes and AI behavior where applicable  |
| Releases       | Builds and tests inform approval    | AI summarizes results       | Versioned artifacts, risk checks, and evidence support accountable decisions    |
| Feedback       | Incidents inform future work        | AI helps analyze incidents  | Confirmed failures feed regression tests, evaluations, and process improvements |

These are useful working distinctions, not mandatory maturity levels.

---

## The AI-Native Lifecycle

The lifecycle includes:

1. Discovery and problem framing
2. Requirements and acceptance criteria
3. Architecture and design
4. Context, data, and evaluation preparation
5. Implementation
6. Verification and evaluation
7. Security and risk review
8. Release and deployment
9. Monitoring and operations
10. Feedback and improvement

These activities overlap and repeat.

**Security, quality, and human accountability run through the entire lifecycle.**

---

## 1. Discovery and Problem Framing

Start with the problem and the people affected by it.

AI can help:

- Summarize interviews and existing documentation
- Identify patterns in support requests
- Compare solution options
- Suggest unanswered questions

QA should ask:

- Is the problem understood and supported by evidence?
- Does the proposed solution need AI?
- What would failure mean for the user?
- What simpler or deterministic alternatives exist?

A convincing AI-generated explanation is still a hypothesis until verified.

---

## 2. Requirements and Acceptance Criteria

Requirements must describe observable behavior.

Define:

- Intended users and supported tasks
- Business rules and authorization boundaries
- Expected outputs and unacceptable outcomes
- Failure, fallback, and escalation behavior
- Performance and cost constraints

For an AI feature, also define how quality will be assessed.

### Example

For a support-ticket classification feature:

- The response contains a category from the approved label set
- The service preserves the caller’s record permissions
- Invalid model output cannot trigger an automated action
- Low-confidence or ambiguous cases follow a defined review policy
- Quality targets are measured on a representative labeled dataset

Thresholds should reflect the use case and risk. They are not universal numbers.

QA helps turn “the AI should work well” into **testable expectations**.

---

## 3. Architecture and Design

Design the boundaries before expanding automation.

Clarify:

- Which behavior is deterministic
- Where a model is used
- Which services and tools can be called
- Where identity and permissions are enforced
- What happens when dependencies fail
- How a change can be disabled or rolled back

For agents, define:

- Allowed tools and resources
- Read and write permissions
- Execution, retry, and spending limits
- Stop conditions
- Human approval points for consequential actions

**A prompt is not an authorization mechanism.**

QA should review whether the architecture can be tested and whether failures can be observed.

---

## 4. Context, Data, and Evaluation Preparation

AI can only work with the context it receives or retrieves.

Useful context includes:

- Approved requirements and business rules
- Architecture decisions
- API contracts and coding conventions
- Existing tests and known failure examples
- Relevant documentation with ownership and version information

For AI-powered products, prepare:

- Representative evaluation datasets
- Expected labels, reference answers, or scoring rubrics
- Permission-aware retrieval fixtures
- Adversarial and failure cases
- Independent holdout cases

QA should check:

- Whether examples reflect real usage and important edge cases
- Whether sensitive data is permitted and appropriately protected
- Whether development examples overlap with evaluation data
- Whether data sources are current and traceable

Good context improves usefulness. It does not remove the need for validation.

---

## Changes Across Services and Teams

A small code change can create a much larger system change.

For example, adding a customer field can affect:

- An API schema and its consumers
- Data storage and migration
- Events and background jobs
- Authorization, exports, and reporting
- Monitoring and support documentation

Before implementation, create an impact map with affected owners, contracts, and dependencies.

QA should verify:

- Backward compatibility and contract expectations
- Producer and consumer behavior during mixed-version deployment
- Migration and rollback behavior
- Error propagation and partial failure handling
- End-to-end behavior across team boundaries

A change is not complete just because every individual repository builds.

---

## Multiple Models and Agent Environments

An organization may use several models, coding agents, and execution environments.

An agent harness is the environment that supplies instructions, tools, permissions, execution controls, and feedback to an agent.

Changing the model or harness can change behavior even when the task is unchanged.

Teams should define shared:

- Context sources and update rules
- Tool and API contracts
- Permission boundaries
- Evidence and handoff formats
- Verification checks and stop conditions

QA should test representative tasks across supported combinations and record the configuration used.

**Portable intent and consistent evidence matter more than assuming every agent behaves the same way.**

---

## 5. Implementation

AI can generate code, configuration, documentation, and test drafts.

Engineering controls should include:

- Small, reviewable changes
- Isolated development environments
- Approved dependency and secret handling
- Automated build and static checks
- Clear change history
- Human review appropriate to the risk

When the application uses AI, implementation also includes:

- Prompt templates and structured output handling
- Retrieval filters and source selection
- Tool-call validation
- Timeouts, retries, and circuit breakers
- Token, request, and cost budgets

Generated code must meet the same quality expectations as other code.

**Fast generation makes independent review more valuable.**

---

## 6. Verification and Evaluation

Traditional tests and AI evaluations answer different questions.

### Deterministic Verification

Use precise assertions for:

- Business rules
- Authentication and authorization
- Request and response schemas
- Data persistence and transformations
- Tool arguments and allowed actions
- Retry limits and failure handling

### AI Evaluation

Measure behavior such as:

- Task accuracy
- Grounding in permitted sources
- Completeness and relevance
- Appropriate abstention or escalation
- Harmful or sensitive output
- Latency and cost

Evaluate important user groups and scenarios separately. A better average can hide a serious regression.

### Independent Evidence

Avoid relying only on tests generated from the same assumptions as the implementation.

QA should:

- Derive cases from requirements and risks
- Compare outputs with independent references
- Review evaluation rubrics and labels
- Calibrate automated judges against human assessment
- Repeat variable-output evaluations where needed

A valid JSON response can still contain an incorrect answer.

---

## 7. Security and Risk Review

AI adds attack surfaces while traditional security risks remain.

QA should include:

- Object, property, and function authorization
- Direct and indirect prompt injection
- Cross-user or cross-tenant data leakage
- Unsafe tool calls and excessive permissions
- Secrets or personal data in model inputs, outputs, and logs
- Untrusted model output reaching executable or database operations
- Unbounded loops, retries, and provider costs

Security controls should be enforced in application and infrastructure code.

Retrieved text, uploaded documents, and external responses remain untrusted inputs.

AI-specific reviews complement API security checks and broader security assessments.

---

## 8. Release and Deployment

A release must identify what changed and why the evidence supports shipping it.

For an AI-powered application, track applicable versions of:

- Application code
- Prompt templates
- Model and provider configuration
- Retrieval sources, index, and embedding configuration
- Tool definitions and permissions
- Evaluation dataset and scoring rubric

Use fixed model versions where supported. Where the provider can change behavior, record the available identifiers and monitor compatibility.

Release checks should cover:

- Build and regression results
- Quality evaluation thresholds and uncertainty
- Important scenario regressions
- Security and privacy findings
- Latency and cost budgets
- Rollback or disablement readiness

A canary or staged rollout helps observe real behavior before wider exposure.

---

## 9. Monitoring and Operations

An available endpoint does not guarantee a useful or safe AI feature.

Monitor:

| Area        | Example signals                                                  |
| ----------- | ---------------------------------------------------------------- |
| Reliability | Errors, timeouts, retries, dependency failures                   |
| Quality     | Reviewed task success, groundedness, correction rates            |
| Safety      | Unauthorized action attempts, leakage signals, policy violations |
| Performance | Response latency, time to first token, queue time                |
| Cost        | Tokens, provider calls, cost per task or tenant                  |
| Change      | Model/configuration differences and shifts in user inputs        |

Use privacy-aware sampling and redacted telemetry.

Critical security events may need immediate alerts; gradual quality changes may need trend analysis.

QA helps determine whether monitoring can detect the failures that matter.

---

## 10. Feedback and Improvement

Close the loop with verified production evidence.

Teams should:

- Review incidents, user corrections, and escalations
- Distinguish model failures from code, data, retrieval, or policy failures
- Add confirmed failures to regression or evaluation datasets
- Retest proposed fixes against the existing baseline
- Check whether improvements harm another important scenario
- Keep ownership and decision history clear

User feedback is a useful signal, but it is not automatically a correct label.

**Production learning needs review before becoming training or evaluation data.**

---

## QA’s Role in an AI-Native Team

QA contributes by:

- Challenging unclear assumptions
- Defining observable acceptance criteria
- Designing independent test evidence
- Building trustworthy fixtures and evaluations
- Validating permissions and failure boundaries
- Making uncertainty and remaining risk visible
- Helping teams learn from real failures

Product owns intended outcomes, engineering owns implementation, and the responsible release owner makes the shipping decision. QA provides evidence and a clear view of risk.

---

## Definition of Ready

Before work starts, confirm:

- The user problem and intended outcome are clear
- Business rules and high-impact risks are understood
- AI’s role and access boundaries are defined
- Acceptance criteria can be evaluated
- Required data and test environments are available
- For AI features, an initial evaluation dataset and fallback policy exist

---

## Definition of Done

Before release, confirm:

- The change has been reviewed and deterministic checks pass
- Relevant quality evaluations meet agreed criteria
- Important security and privacy cases have been tested
- Generated changes and behavior-affecting configurations are traceable
- Monitoring and operational ownership are defined
- Rollback or disablement has been verified as appropriate
- Remaining limitations and accepted risks are documented

“AI generated it” is not evidence that it is complete.

---

## Practical Example: Support Case Assistant

A support application summarizes a case and proposes its category.

### Requirements

- Use only case records the caller can access
- Produce a summary and an approved category
- Keep the agent’s suggestion separate from committed changes
- Require the defined authorization and confirmation before saving changes

### Testing

- Validate the API contract with a mocked model
- Test retrieval using two users with different record access
- Evaluate summaries against a reviewed dataset
- Place instruction-like text inside a case comment
- Simulate timeout, invalid output, and provider rate limiting
- Confirm a failed or denied action leaves the case unchanged

### Release Evidence

- Results for code, prompt, model configuration, and evaluation dataset versions
- Quality results for important case types
- Permission and tool-boundary checks
- Latency, cost, fallback, and rollback evidence

One successful demonstration is not enough to establish readiness.

---

## Hands-On Exercises

### Exercise 1: Design the Workflow

Choose one feature and identify:

- Where AI helps the delivery team
- Whether AI is part of the shipped feature
- What context and permissions it needs
- Which outputs require independent review

### Exercise 2: Build the Evidence

Write:

- Three deterministic acceptance checks
- Three AI quality evaluation cases, if applicable
- Two adversarial cases
- One dependency failure scenario

For each, define the expected behavior and the evidence required.

### Exercise 3: Make a Release Decision

A change improves overall accuracy but reduces accuracy for an important customer group.

Explain:

- What additional evidence you need
- Whether the change meets the agreed release criteria
- Who decides whether the remaining risk is acceptable
- How you would limit exposure and detect problems after release

---

## A Practical 90-Day Adoption Plan

The following is an illustrative implementation plan for this module, not a reconstruction of the webinar speaker’s blueprint.

### Days 1–30: Understand and Baseline

- Select one bounded workflow with clear ownership
- Map its delivery steps and waiting time
- Record current quality, lead time, and rework measures
- Define trusted context, access rules, and required evidence
- Establish independent verification and fallback procedures

### Days 31–60: Pilot and Verify

- Introduce AI into the selected workflow
- Keep changes small and attributable
- Connect requirements, contracts, implementation, and test evidence
- Exercise cross-service and failure scenarios
- Compare results with the baseline, including review effort

### Days 61–90: Improve and Expand Carefully

- Remove repeated bottlenecks demonstrated by pilot evidence
- Standardize the context and handoff practices that worked
- Verify governance and operational ownership
- Evaluate additional supported model and harness configurations
- Expand only where outcomes improve without unacceptable quality or risk changes

Success is a measurable improvement in delivery outcomes, not the number of agents installed.

---

## Common AI-Native SDLC Anti-Patterns

- Measuring success only by generated code or delivery speed
- Treating plausible output as verified fact
- Generating implementation and tests from the same unchecked assumption
- Using a model to enforce permissions
- Shipping prompt or retrieval changes without evaluation
- Treating an automated judge as an unquestionable authority
- Allowing agents unrestricted tools or production access
- Logging raw sensitive context for convenience
- Declaring quality improved without an independent baseline
- Assuming a low temperature makes model behavior deterministic

These patterns can increase output while reducing confidence.

---

## Key Takeaways

- AI-native delivery integrates context, controls, and evidence across the lifecycle
- AI-assisted engineering and AI-powered products need different checks
- Deterministic tests and AI evaluations complement each other
- Permissions and action boundaries must be enforced outside the model
- Versioning and monitoring must cover every artifact that changes behavior
- QA makes uncertainty visible and turns failures into better evidence
- People remain accountable for consequential decisions

---

## Final Thought

> In an AI-native lifecycle, quality is not how much work AI produces.
> It is how reliably the team can explain, verify, and improve what reaches the user.

---

## Source and Scope

Topic reference: multiple sources
