const EMPTY = [];

const SMALL = [
  {
    id: 1,
    label: "Task 1",
    description: "Description 1",
    start_date: "2020-01-01",
    end_date: "2020-01-01",
  },
];

const MEDIUM = [
  {
    id: 1,
    label: "Task 1",
    description: "Description 1",
    start_date: "2020-01-01",
    end_date: "2020-01-01",
  },
  {
    id: 2,
    label: "Task 2",
    description: "Description 3",
    start_date: "2020-01-01",
    end_date: "2020-01-01",
  },
  {
    id: 3,
    label: "Task 3",
    description: "Description 3",
    start_date: "2020-01-01",
    end_date: "2020-01-01",
  },
];

const LARGE = [
  {
    id: 1,
    label: "Task 1",
    description: "Description 1",
    start_date: "2020-01-01",
    end_date: "2020-01-01",
  },
  {
    id: 2,
    label: "Task 2",
    description: "Description 3",
    start_date: "2020-01-01",
    end_date: "2020-01-01",
  },
  {
    id: 3,
    label: "Task 3",
    description: "Description 3",
    start_date: "2020-01-01",
    end_date: "2020-01-01",
  },
  {
    id: 4,
    label: "Task 4",
    description: "Description 4",
    start_date: "2020-01-01",
    end_date: "2020-01-01",
  },
  {
    id: 5,
    label: "Task 5",
    description: "Description 5",
    start_date: "2020-01-01",
    end_date: "2020-01-01",
  },
];

const WEIRD = [
  {
    id: 1,
    label: "",
    description: "Description 1",
    start_date: "2020-01-01",
    end_date: "2020-01-01",
  },
  {
    id: 2,
    label: "",
    description: "",
    start_date: "2020-01",
    end_date: "202-01-01",
  },
  {
    id: 3,
    label: "Task 3",
    description: "3456789",
    start_date: "2020-01-01",
    end_date: "2020-01-01",
  },
];

export const fakeTasks = {
  EMPTY,
  SMALL,
  MEDIUM,
  LARGE,
  WEIRD,
};
