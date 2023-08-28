
// eslint-disable-next-line react/prop-types
const DescriptionTodo = ({isTodo, description}) => {

  return (
    <div>
        <h3>Description de le tache:</h3>
        <p className={isTodo ? "desc-p__done" : "desc-p__todo"}>
          {isTodo ? "Bravo d'avoir accomplis votre devoir 🎉" : description}
        </p>
      </div>
  )
}

export default DescriptionTodo