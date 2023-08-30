import { styled } from 'styled-components';

// eslint-disable-next-line react/prop-types
const Checkbox = ({type, onChange, icon, id}) => {
  return (
    <CheckBoxStyled>
      <input type={type} onChange={onChange} icon={icon ? icon : undefined} id={id} />
    </CheckBoxStyled>
  )
}

export default Checkbox

const CheckBoxStyled = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  background-color: #f5f5f5;
  border-radius: 10px 0 0 10px;
  .check-button {
    position: relative;
    top: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid black;
    background-color: white;
    cursor: pointer;
    &:hover {
      background-color: #f5f5f5;
      border-bottom: 1px solid green;
    }
  }
  .check-icon {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    color: green;
  }
`;