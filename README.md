# VetCare

VetCare is a web application for managing veterinary appointments.
It helps users organize appointments and track their completion status and appointment type.

## Data model

| Field | Type | Notes |
| --- | --- | --- |
| title | text | required, max 100 chars |
| completed | boolean | toggled from the list, default false |
| appointmentType | fixed values | Consultation, Vaccination, Emergency |
| category | relation | Dog, Cat, Other |
| user | relation | the owner of the item (from week 11) |

Sample data used across all stages:

1. Max - Annual vaccination, active, Vaccination
2. Luna - Post-surgery check-up, done, Consultation
3. Milo - Digestive problem, active, Emergency

## How to run

Open `index.html` in a browser. No build step, no server.

## AI usage

| Tool | Used for |
| --- | --- |
| ChatGPT | Project theme definition and Stage 1 guidance |

Details per stage: see the ai-log/ folder.

## Status

- [ ] Stage 1: static mockup
- [ ] Stage 2: data logic in JavaScript