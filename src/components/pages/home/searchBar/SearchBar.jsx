import { useContext } from "react";
import { styled } from "styled-components";
import TaskContext from "../../../../context/TaskContext";
import { theme } from "../../../../theme";

const SearchBar = () => {
  const { searchValue, setSearchValue } = useContext(TaskContext);

  const handleChange = async (e) => {
    const newSearchValue = e.target.value.toLowerCase();
    setSearchValue(newSearchValue);
  };

  return (
    <SearchBarStyled className="search-container">
      <label htmlFor="search" className="search-label">
        <input
          type="search"
          name="search"
          id="search"
          className="search-input"
          placeholder="Rechercher une tâche ..."
          value={searchValue}
          onChange={handleChange}
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

  input {
    box-sizing: border-box;
    padding: 12px;
    width: 100%;
    background: ${theme.colors.greyDark};
    border: 1px solid ${theme.colors.greyLight};
    border-radius: ${theme.borderRadius.round};
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P0};

    &::placeholder {
      color: ${theme.colors.greyLight};
      font-weight: ${theme.fonts.weights.light};
    }
  }
`;
