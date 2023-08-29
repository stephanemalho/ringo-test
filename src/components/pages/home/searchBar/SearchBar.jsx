/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { valueToFilter } from "../../../../utils";
import { useContext } from "react";
import TaskContext from "../../../context/TaskContext";
// import { fakeTasks } from "../../../../Data/fakeTasks";

const SearchBar = () => {
  //STATE
  const { tasks, setTasks } = useContext(TaskContext);
  // BEHAVIOR
  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    console.log("searchValue", searchValue);
    console.log("filteredTasks", tasks);
    const filtered = valueToFilter(tasks, searchValue);
    setTasks(filtered);
    console.log("filteredTasks", filtered);
    if (searchValue === "") {
      // Réinitialiser les tâches filtrées si le champ de recherche est vide
      setTasks(tasks);
      console.log("tasks", tasks);
      return;
    }
  };

  //JSX
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
