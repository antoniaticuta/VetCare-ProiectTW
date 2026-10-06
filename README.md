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
| ChatGPT | Project theme definition, Stage 1 guidance and Stage 2 JavaScript guidance |

Details per stage: see the ai-log/ folder.

## Stage 2: data logic

Plain JavaScript, no DOM. `appointments.js` holds the array and the functions
that read and change it. Results are printed in the browser console (F12).

## Status

- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [ ] Stage 3: Vite and React project

## Stage 1 checklist

| ID | Requirement | Where | How to check |
| --- | --- | --- | --- |
| S1-R1 | README: description, fields, sample data, how to run | README.md | read |
| S1-R2 | AI usage section | README.md | read |
| S1-R3 | AI log for stage 1 | ai-log/etapa-01.md | read |
| S1-R4 | header, form (text + select), 3 cards with own data | index.html | open the page |
| S1-R5 | finished card looks different | style.css | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | style.css | resize < 700px |
| S1-R7 | visible focus, readable dark theme | style.css | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | commit history | commit history |

## Stage 2 checklist

| ID | Requirement | Where | How to check |
| --- | --- | --- | --- |
| S2-R1 | JS file linked, logs on page load | PERMALINK index.html | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | PERMALINK appointments.js | read |
| S2-R3 | list, count, search, add, toggle, delete | PERMALINK appointments.js | console output |
| S2-R4 | add rejects empty name and invalid tag | PERMALINK appointments.js | last 2 console lines |
| S2-R5 | original array unchanged after add | PERMALINK appointments.js | console line |
| S2-R6 | README Stage 2 section + AI log | README.md, ai-log/etapa-02.md | read |
| S2-R7 | commit "Stage 2" pushed | LINK TO STAGE 2 COMMIT | commit history |