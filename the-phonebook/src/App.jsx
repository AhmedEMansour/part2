import './App.css'

import Filter     from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons    from './components/Persons'

import personService from './services/persons'

import { useEffect, useState } from 'react'



const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')


  useEffect(()=>{
    personService
    .getAll()
    .then(initialPersons => 
      setPersons(initialPersons)
    )
  },[])
  
  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilter = (e) => {
    setFilter(e.target.value)   
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
      <Filter filter = {filter} handleFilter = {handleFilter} />
      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons filter={filter} persons={persons} />
      
    </div>
  )
}

export default App