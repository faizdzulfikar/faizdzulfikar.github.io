---
title: COHARD-PH Research Platform
summary: A web platform for running the COHARD-PH clinical registry, from patient records and follow-up to data quality checks and research exports.
role: Designed and built
years: "2026"
status: In production
stack: [React, TypeScript, Cloudflare Workers, Supabase, PostgreSQL]
code: Private
featured: true
order: 1
---

COHARD-PH follows patients with congenital heart disease and pulmonary hypertension over many years. Keeping that registry in spreadsheets meant duplicate patients, missed follow-ups and slow exports whenever a study needed data.

The platform gives the team one place for it:

- One canonical record per patient, with memberships in several registries
- Longitudinal clinical data and follow-up scheduling
- Data quality workflows, imports, and merging of duplicate records
- Governed queries, analytics and research exports
- English and Indonesian interface

Security was a design constraint from the start: row-level security that denies by default, an append-only audit history, and server-side authorization for every request.

The code is private because it handles clinical data.
