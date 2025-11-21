const PersonForm = ({
    addPerson, newName, handleNameChange, newNumber, handleNumberChange
}) => {
  return (
    <form onSubmit={addPerson}>
        <div>
          name: 
          <input 
            name='name'
            autoComplete='name'
            value={newName}
            onChange={handleNameChange}
          /> <br />
          number:
          <input 
            name='number'
            autoComplete='number'
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default PersonForm