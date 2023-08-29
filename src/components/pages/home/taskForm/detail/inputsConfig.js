export const getTextInputsConfig = ({ label, description, end_date }) => [
  {
    name: "label",
    value: label,
    type: "text",
    placeholder: "Tâche a faire ...",
  },
  {
    name: "description",
    value: description,
    type: "text",
    placeholder: "Ajouter une description ...",
  },
  {
    name: "end_date",
    value: end_date,
    type: "date",
    placeholder: "Ajouter une date de fin ...",
  },
];
