const appointments = [
  {
    id: 1,
    title: "Max - Annual vaccination",
    completed: false,
    appointmentType: "Vaccination"
  },
  {
    id: 2,
    title: "Luna - Post-surgery check-up",
    completed: true,
    appointmentType: "Consultation"
  },
  {
    id: 3,
    title: "Milo - Digestive problem",
    completed: false,
    appointmentType: "Emergency"
  }
];

const APPOINTMENT_TYPES = ["Consultation", "Vaccination", "Emergency"];


function listTitles(list) {
  return list.map((appointment) => appointment.title);
}


function countActive(list) {
  return list.filter((appointment) => !appointment.completed).length;
}


function searchByTitle(list, text) {
  const searchedText = text.toLowerCase();

  return list.filter((appointment) =>
    appointment.title.toLowerCase().includes(searchedText)
  );
}


function nextId(list) {
  return list.reduce(
    (max, appointment) => Math.max(max, appointment.id),
    0
  ) + 1;
}


function addAppointment(
  list,
  title,
  appointmentType = "Consultation"
) {
  const cleanTitle = title.trim();

  if (cleanTitle === "") {
    console.log("Titlul nu poate fi gol.");
    return list;
  }

  if (!APPOINTMENT_TYPES.includes(appointmentType)) {
    console.log("Tip de programare invalid.");
    return list;
  }

  const newAppointment = {
    id: nextId(list),
    title: cleanTitle,
    completed: false,
    appointmentType: appointmentType
  };

  return [...list, newAppointment];
}


function toggleCompleted(list, id) {
  return list.map((appointment) =>
    appointment.id === id
      ? {
          ...appointment,
          completed: !appointment.completed
        }
      : appointment
  );
}


function deleteAppointment(list, id) {
  return list.filter((appointment) => appointment.id !== id);
}


console.log("--- Citire ---");

console.log(
  "Titluri:",
  listTitles(appointments).join(", ")
);

console.log(
  "Active:",
  countActive(appointments)
);

console.log(
  "Căutare 'max':",
  listTitles(searchByTitle(appointments, "max")).join(", ")
);


console.log("--- Adăugare ---");

let list = addAppointment(
  appointments,
  "Bella - Routine consultation",
  "Consultation"
);

console.log(
  "Lista nouă:",
  list.length,
  "programări"
);

console.log(
  "Originalul a rămas cu:",
  appointments.length,
  "programări"
);


console.log("--- Modificare și ștergere ---");

list = toggleCompleted(list, 1);

console.log(
  "După bifarea id 1, active:",
  countActive(list)
);

list = deleteAppointment(list, 3);

console.log(
  "După ștergerea id 3:",
  listTitles(list).join(", ")
);


console.log("--- Validare ---");

addAppointment(list, " ");

addAppointment(
  list,
  "Ceva",
  "Urgent"
);