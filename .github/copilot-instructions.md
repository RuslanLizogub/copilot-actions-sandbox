# Copilot Instructions (PR reviews)

## Our Rules
1) Architecture: application code must be in /apps/*, libraries in /packages/*; new top-level folders are prohibited.
2) Patterns: database access only via /packages/data/*. Direct calls outside this layer are prohibited.
3) Security: do not store secrets, do not commit .env, keys/tokens are forbidden.
4) Style/Quality: ESLint + Prettier according to repo configs; tests are mandatory for new code.
5) Documentation: refer to **https://www.npmjs.com/package/superagent** (this is the current version). Every PR must include a link "Architecture: v3".

## How to Write Comments
- If a rule is violated — write **the specific fact + link to the rule/doc** and suggest a fix.
- Mark as "blocking" in the comment text.