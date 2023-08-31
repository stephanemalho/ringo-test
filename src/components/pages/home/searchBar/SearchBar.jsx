import { useContext, useState } from "react";
import { styled } from "styled-components";
import { valueToFilter } from "../../../../utils";
import TaskContext from "../../../../context/TaskContext";
import { getTasks } from "../../../../api/tasksAPI";

const SearchBar = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  const [searchValue, setSearchValue] = useState(""); // État pour stocker la valeur de recherche

  const handleSearch = async (e) => {
    const newSearchValue = e.target.value.toLowerCase();
    setSearchValue(newSearchValue);

    if (newSearchValue === "") {
      // Réinitialisation des tâches depuis la base de données
      const allTasksFromDB = await getTasks(); // Utilisation de getTasks pour récupérer les tâches
      setTasks(allTasksFromDB);
    } else {
      const filtered = valueToFilter(tasks, newSearchValue);
      setTasks(filtered);
    }
  };

  return (
    <SearchBarStyled className="search-container">
      <label htmlFor="search" className="search-label">
        <input
          type="search"
          name="search"
          id="search"
          className="search-input"
          placeholder="Search..."
          value={searchValue}
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
