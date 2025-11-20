import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  
  
  const handlePersonChange = (e) => {
    setNewName(e.target.value)
    console.log(newName);
  }

  const addPerson = (e) => {
    e.preventDefault()
    const personObj = {
      name: newName
    }
    setPersons([...persons, personObj])
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => (
        <p key={person.name}>
          {person.name}
        </p>
      ))}
      
    </div>
  )
}

export default App