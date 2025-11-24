const Persons = ({
    filter, persons, onClick
}) => {
    const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  return(
    filter === '' ?
    persons.map(p => 
      <p key={p.id}>{p.name} {p.number}
        <button className="delete" onClick={() => onClick(p.id)}>delete</button>
      </p>
    ):
    filteredPersons.map(fp=> 
      <p key={fp.id}>{fp.name} {fp.number}
        <button className="delete" onClick={() => onClick(fp.id)}>delete</button>
      </p>
    )
  )
}

export default Persons