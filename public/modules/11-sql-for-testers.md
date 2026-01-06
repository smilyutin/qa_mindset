
**Trust the Data, Not the UI**

---

## Overview
UI tests show what the user sees.  
SQL shows what the system **actually stored**.

For QA, SQL is not about becoming a database administrator — it’s about **verifying data integrity**, validating business rules, and detecting issues that are invisible at the UI layer.

This module focuses on **practical SQL skills** every QA engineer should have.

---

## Learning Objectives
By the end of this module, you should be able to:
- Understand why SQL matters for QA
- Write basic SQL queries to validate data
- Verify business logic using database checks
- Identify data-related defects
- Use SQL safely and responsibly in test environments

---

## Why SQL Matters in QA
SQL helps QA:
- Validate backend behavior
- Confirm transactions actually persisted
- Detect data corruption
- Verify reporting accuracy
- Investigate defects faster

Many “UI bugs” are actually **data issues**.

---

## SQL Safety Rules for QA
Before running any query:
- Use **read-only access**
- Never run `DELETE`, `UPDATE`, or `INSERT` unless explicitly approved
- Always confirm the environment
- Limit result sets

Your job is to **observe**, not modify.

---

## Core SQL Concepts (QA-Focused)

SELECT Retrieve data from a table.

SELECT * FROM orders;

WHERE
Filter results.

SELECT * FROM orders
WHERE 
status = 'COMPLETED';
____________________________________
ORDER BY sort results.

SELECT * FROM orders
ORDER BY created_date DESC;

____________________________________
LIMIT Restrict result size.

SELECT * FROM orders
ORDER BY created_date DESC
LIMIT 10;


### Validating Business Rules with SQL

____________________________________
**Finance Example**

Verify a transfer updated balances correctly:
- One balance decreased
- One balance increased
- Net change equals zero

SELECT account_id, balance
FROM accounts
WHERE account_id IN ('A123', 'B456');


____________________________________
**Salesforce Example**

Validate Opportunity updates:
SELECT Id, StageName, Amount
FROM Opportunity
WHERE Id = '006XXXXXXXXXXXX';

Confirm:
- Stage matches workflow
- Amount persisted correctly
- Ownership and permissions unchanged

___________________________________
**API Example**

Verify API-created records exist:
SELECT * FROM transactions
WHERE transaction_id = 'tx-789';

JOINs connect related data across tables.
SELECT o.order_id, c.customer_name
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id;

Use JOINs to:
- Validate relationships
- Verify referential integrity
- Check reporting logic

### Common QA Data Checks
Validate that:
- Required fields are populated
- Foreign keys exist
- Status transitions are valid
- Timestamps are correct
- Duplicate records are not created


### Data Integrity Checks
Examples:
- One transaction → one ledger entry
- One user → one profile record
- One API call → one audit log entry

Mismatch = defect.


### Investigating Defects with SQL
When a defect is reported:
- Reproduce via UI or API
- Capture identifiers (IDs, timestamps)
- Query the database-
- Compare expected vs actual state
- Attach findings to the defect report

### SQL dramatically shortens investigation time.
Common SQL Mistakes for QA
- Querying production accidentally
- Forgetting WHERE clauses
- Assuming UI reflects database state
- Trusting cached data
- Modifying data unintentionally


### When QA Should Push Back
QA should raise concerns when:
- No database access is provided
- Data cannot be validated
- Logs and audit trails are missing
- Reporting logic cannot be verified

### Lack of visibility equals hidden risk.
Key Takeaways
- SQL is a validation tool, not a dev skill
- Data integrity is central to quality
- Backend checks find defects UI cannot
- Safe querying is mandatory
- Strong QA trusts evidence, not assumptions


