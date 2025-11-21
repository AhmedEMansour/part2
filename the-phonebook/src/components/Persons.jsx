const Persons = ({
    filter, persons
}) => {
    const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  return (
    <div>
        {filter ? (
        filteredPersons.map(person => (
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        ))
      ):
        persons.map(person => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))
      }
    </div>
  )
}

export default Persons