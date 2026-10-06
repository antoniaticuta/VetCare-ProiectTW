# Stage 2: AI log

## Tools

- ChatGPT

## Conversations

- https://chatgpt.com/share/6ac4e6a8-06e0-83ed-ae38-e7dba6d03656 (Stage 2 JavaScript data logic)

## Key requests

### 1. Adapting Stage 2 to VetCare
- Asked: How to adapt the Stage 2 requirements to the VetCare project.
- Got: Suggestions for naming the JavaScript file, array, fields and functions according to the VetCare data model.
- Changed or rejected: The TaskFlow names were replaced with VetCare-specific names such as appointments, appointmentType and completed.

### 2. Implementing the required functions
- Asked: How to implement the Stage 2 functions exactly according to the project guide.
- Got: Functions for listing, counting, searching, adding with validation, toggling completion and deleting appointments.
- Changed or rejected: The examples were adapted to the three VetCare sample appointments from the README.

### 3. Testing in the browser console
- Asked: How to test the JavaScript functions in the browser console.
- Got: Console tests grouped into reading, adding, modifying/deleting and validation sections.
- Changed or rejected: The test data was adapted to veterinary appointments.

## What I learned / what did not work

I learned how to store application data in an array of objects and use map, filter and reduce.
I also learned how to return new arrays instead of modifying the original data.
I used validation to reject empty titles and invalid appointment types.
The browser console helped me verify each function separately.