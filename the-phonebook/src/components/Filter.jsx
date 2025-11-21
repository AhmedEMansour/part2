const Filter = ({
    filter, handleFilter
}) => {
  return (
    <div>
        filter shown with 
        <input 
        type="text"
        name='name'
        autoComplete='name'
        value={filter}
        onChange={handleFilter}
        />
      </div>
  )
}

export default Filter