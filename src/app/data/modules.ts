export type Module = {
  id: string;
  title: string;
  level: "Foundations" | "Intermediate" | "Advanced";
  tags: string[];
  prereq?: string[];
  file: string; // mdx path
};

export const modules: Module[] = [
  // Foundations
  {
    id: "foundations",
    title: "QA Foundations & Mindset",
    level: "Foundations",
    tags: ["QA vs QE", "risk", "value"],
    
    file: "modules/01-foundations.md",
  },
   {
    id: "test-design",
    title: "Test Design Techniques",
    level: "Foundations",
    tags: ["BVA", "equivalence", "state", "decision tables"],
    // minutes removed
    prereq: ["foundations"],
    file: "modules/02-test-design.md",
  },
  {
    id: "sdlc-agile-scrum",
    title: "SDLC + Agile + Scrum essentials",
    level: "Foundations",
    tags: ["SDLC", "Agile", "Scrum"],
    // minutes removed
    file: "modules/03-sdlc-agile-scrum.md",
  },
  {
    id: "requirements-acceptance",
    title: "Requirements & Acceptance Criteria (DoR/DoD)",
    level: "Foundations",
    tags: ["requirements", "acceptance", "DoR", "DoD"],
    // minutes removed
    file: "modules/04-requirements-acceptance.md",
  },
   {
    id: "defect-lifecycle",
    title: "Defect lifecycle & bug reporting (severity vs priority)",
    level: "Foundations",
    tags: ["defect", "bug", "severity", "priority"],
    // minutes removed
    file: "modules/05-defect-lifecycle.md",
  },
  {
    id: "test-planning-strategy",
    title: "Test Planning & Strategy (risk-based)",
    level: "Foundations",
    tags: ["planning", "strategy", "risk-based"],
    // minutes removed
    file: "modules/06-test-planning-strategy.md",
  },
  {
    id: "exploratory-sbtm",
    title: "Exploratory Testing + SBTM (charters, notes, debriefs)",
    level: "Foundations",
    tags: ["exploratory", "SBTM", "charters", "notes", "debriefs"],
    // minutes removed
    file: "modules/07-exploratory-sbtm.md",
  },
  {
    id: "test-data-environment",
    title: "Test data basics & environment awareness",
    level: "Foundations",
    tags: ["test data", "environment"],
    // minutes removed
    file: "modules/08-test-data-environment.md",
  },

  // Intermediate
  {
    id: "testing-pyramid-automation",
    title: "Testing Pyramid & automation strategy (what/when/why)",
    level: "Intermediate",
    tags: ["pyramid", "automation", "strategy"],
    // minutes removed
    file: "modules/09-testing-pyramid-automation.md",
  },
  {
    id: "api-testing",
    title: "API Testing (REST basics, auth, Postman, negative testing)",
    level: "Intermediate",
    tags: ["API", "REST", "Postman", "negative"],
    // minutes removed
    file: "modules/10-api-testing.md",
  },
  {
    id: "sql-for-testers",
    title: "SQL for testers (select/join/where, data validation)",
    level: "Intermediate",
    tags: ["SQL", "data validation"],
    // minutes removed
    file: "modules/11-sql-for-testers.md",
  },
  {
    id: "integration-testing",
    title: "Integration testing (contracts, mocks, stubs)",
    level: "Intermediate",
    tags: ["integration", "contracts", "mocks", "stubs"],
    // minutes removed
    file: "modules/12-integration-testing.md",
  },
  {
    id: "cicd-for-qa",
    title: "CI/CD for QA (pipelines, gates, quality signals)",
    level: "Intermediate",
    tags: ["CI/CD", "pipelines", "quality"],
    // minutes removed
    file: "modules/13-cicd-for-qa.md",
  },
  {
    id: "regression-strategy",
    title: "Regression strategy (smoke vs sanity vs full regression)",
    level: "Intermediate",
    tags: ["regression", "smoke", "sanity"],
    // minutes removed
    file: "modules/14-regression-strategy.md",
  },
  {
    id: "observability-qa",
    title: "Observability for QA (logs, metrics, traces; debugging faster)",
    level: "Intermediate",
    tags: ["observability", "logs", "metrics", "traces"],
    // minutes removed
    file: "modules/15-observability-qa.md",
  },
  {
    id: "accessibility-testing",
    title: "Accessibility testing (WCAG basics, tooling, checks)",
    level: "Intermediate",
    tags: ["accessibility", "WCAG", "tooling"],
    // minutes removed
    file: "modules/16-accessibility-testing.md",
  },
  {
    id: "performance-basics",
    title: "Performance basics (load, stress, latency, bottlenecks)",
    level: "Intermediate",
    tags: ["performance", "load", "stress", "latency", "bottlenecks"],
    // minutes removed
    file: "modules/17-performance-basics.md",
  },

  // Advanced
  {
    id: "security-testing-qa",
    title: "Security testing for QA (OWASP Top 10 / API Top 10 mindset)",
    level: "Advanced",
    tags: ["security", "OWASP", "API"],
    // minutes removed
    file: "modules/18-security-testing-qa.md",
  },
  {
    id: "test-architecture-patterns",
    title: "Test architecture patterns (POM, Screenplay, fixtures)",
    level: "Advanced",
    tags: ["architecture", "POM", "Screenplay", "fixtures"],
    file: "modules/19-test-architecture-patterns.md",
  },
  {
    id: "flaky-test-control",
    title: "Flaky test control (stability, retries, determinism)",
    level: "Advanced",
    tags: ["flaky", "stability", "retries", "determinism"],
    // minutes removed
    file: "modules/20-flaky-test-control.md",
  },
  {
    id: "contract-testing",
    title: "Contract testing (Pact-style concepts)",
    level: "Advanced",
    tags: ["contract", "Pact", "API"],
    // minutes removed
    file: "modules/21-contract-testing.md",
  },
  {
    id: "data-integrity-reconciliation",
    title: "Data integrity & reconciliation (auditability, reporting)",
    level: "Advanced",
    tags: ["data integrity", "reconciliation", "auditability", "reporting"],
    // minutes removed
    file: "modules/22-data-integrity-reconciliation.md",
  },
  {
    id: "release-readiness",
    title: "Release readiness & go/no-go (risk reporting)",
    level: "Advanced",
    tags: ["release", "readiness", "risk"],
    // minutes removed
    file: "modules/23-release-readiness.md",
  },
  {
    id: "ai-assisted-testing",
    title: "AI-assisted testing (where it helps vs accelerates bad strategy)",
    level: "Advanced",
    tags: ["AI", "assisted", "strategy"],
    file: "modules/24-ai-assisted-testing.md",
  },

  // Leadership / Senior track
  {
    id: "quality-metrics",
    title: "Quality metrics that matter (signal vs vanity)",
    level: "Advanced",
    tags: ["metrics", "signal", "vanity"],
    file: "modules/25-quality-metrics.md",
  },
  {
    id: "driving-quality-culture",
    title: "Driving quality culture (shifting left without blaming)",
    level: "Advanced",
    tags: ["culture", "shifting left", "blame"],
    file: "modules/26-driving-quality-culture.md",
  },
  {
    id: "stakeholder-communication",
    title: "Stakeholder communication (risk language, exec summaries)",
    level: "Advanced",
    tags: ["stakeholder", "communication", "risk", "exec"],
    file: "modules/27-stakeholder-communication.md",
  },
  {
    id: "mentoring-onboarding",
    title: "Mentoring & onboarding testers",
    level: "Advanced",
    tags: ["mentoring", "onboarding", "testers"],
    file: "modules/28-mentoring-onboarding.md",
  },
  {
    id: "qa-regulated-domains",
    title: "QA in regulated domains (audit-ready traceability)",
    level: "Advanced",
    tags: ["regulated", "audit", "traceability"],
    file: "modules/29-qa-regulated-domains.md",
  },
];