import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '040-1234567'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  
  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const addPerson = (e) => {
    e.preventDefault()
    const personObj = {
      name: newName,
      number: newNumber
    }
    persons.some(person => person.name === newName) 
    ?
    window.alert(`${newName} is already added to phonebook`) 
    : 
    persons.some(person => person.number === newNumber)
    ?
    window.alert(`a person already exists with the number ${newNumber}`)
    :
    setPersons([...persons, personObj])
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
      <h2>Numbers</h2>
      {persons.map(person => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
      
    </div>
  )
}

export default App