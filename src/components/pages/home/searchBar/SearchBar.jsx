/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { useState } from "react";
// import { fakeTasks } from "../../../../Data/fakeTasks";

const SearchBar = ({ tasks, setTasks }) => {
  const [tasksToFilter, setTasksToFilter] = useState(tasks);

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    if (searchValue === "") {
      // Réinitialiser les tâches filtrées si le champ de recherche est vide
      setTasksToFilter(tasks);
      setTasks(tasks);
      return;
    }
    const filteredTasks = tasksToFilter.filter((task) => {
      return (
        task.label.toLowerCase().includes(searchValue) ||
        task.description.toLowerCase().includes(searchValue) ||
        task.end_date.toLowerCase().includes(searchValue)
      );
    });
    setTasks(filteredTasks);
  };

  return (
    <SearchBarStyled className="search-container">
      <label htmlFor="search" className="search-label">
        <h2>Rechercher une tâche de la liste</h2>
        <input
          type="search"
          name="search"
          id="search"
          className="search-input"
          placeholder="Search..."
          onChange={handleSearch}
        />
      </label>
    </SearchBarStyled>
  );
};

export default SearchBar;

const SearchBarStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
`;
