import './App.css'

import Filter     from './components/Filter'
import Notification from './components/Notification'
import PersonForm from './components/PersonForm'
import Persons    from './components/Persons'

import personService from './services/persons'

import { useEffect, useState } from 'react'



const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [type, setType] = useState(null)


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
    const maxId = persons.reduce((a, b) => a.id > b.id ? a.id : b.id , "0")
    
    const personObj = {
      name: newName,
      number: newNumber,
      id: (parseInt(maxId) + 1).toString()
    }

    const nameExists = persons.some(person => person.name === newName)
    const numberExists = persons.some(person => newNumber === person.number)

    const personFound = persons.find(person => person.name === newName)
    const updatedPerson = {...personFound, number: newNumber}

    
    
    newName === '' || newNumber === '' ?
      window.alert('A name and a number are required to add a person to the phonebook') 
    : 
    numberExists ?
     window.alert(`A person already exists with the number ${newNumber}`) 
    :
    nameExists ?
      window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)?
        personService
          .updatePerson(updatedPerson.id, updatedPerson)
          .then(update =>{
            const updatedPeople = persons.map(person => person.id === update.id ? update : person )
            setPersons(updatedPeople)
            setMessage(`${update.name}'s number has been updated successfully`)
            setType('success')
            setNewName('')
            setNewNumber('')
            setTimeout(()=>{
              setMessage(null)
            }, 5000)
          })
          .catch(error => {
            if (error.response.status === 404){
              setMessage(`Information of ${updatedPerson.name} has already been removed from the server`)
              setType('error')
              setNewName('')
              setNewNumber('')
              setTimeout(()=>{
                setMessage(null)
              }, 5000)
             }
          }) : null
    :
      personService
        .addPerson(personObj)
        .then(newPerson => {
          setPersons([...persons, newPerson])
          setType('success')
          setMessage(`Added ${newName} successfully`)
          setNewName('')
          setNewNumber('')
          setTimeout(()=>{
            setMessage(null)
          }, 5000)
        })
  }

  const deletePerson = (id) => {
    const person = persons.find(p => p.id === id)
    
    
    if (window.confirm(`Delete ${person.name}`) ) {
    personService
      .removePerson(person.id)
      .then(setPersons(persons.filter(n => n.id !== id))) 
    }
  }
  
  
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} type={type}/>
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
      <Persons filter={filter} persons={persons} onClick={deletePerson}/>
      
    </div>
  )
}

export default App