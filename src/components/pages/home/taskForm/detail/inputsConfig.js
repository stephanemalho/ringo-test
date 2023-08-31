export const getTextInputsConfig = ({ label, description }) => [
  {
    name: "label",
    value: label,
    type: "text",
    placeholder: "Nom de la tâche ...",
  },
  {
    name: "description",
    value: description,
    type: "text",
    placeholder: "Description de la tâche ...",
  },
];
