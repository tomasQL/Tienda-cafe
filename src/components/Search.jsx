import { useState } from 'react'
import './Search.css'

export const Search = ({ optionValue, setOptionValue, setSearchValue }) => {
  const [input, setInput] = useState('')
  const onChange = (event) => {
    setOptionValue(event.target.value)
  }
  const onInputChange = (event) => {
    setInput(event.target.value)
  }
  const handleSearch = (event) => {
    event.preventDefault()
    setSearchValue(input)
    setInput('')
  }
  return (
    <div className="head">
      <form onSubmit={handleSearch}>
        <input 
          className="search-input" 
          type="text" 
          placeholder='Buscar...'
          value={input}
          onChange={onInputChange}
        />
        <button type='submit' className='search-btn'><img src="./svgs/lupa.svg" alt="" /></button>
      </form>
      <select value={optionValue} onChange={onChange}>
        <option value="todos">Todos...</option>
        <option value="cafe">Café</option>
        <option value="pasteleria">Pastelería</option>
        <option value="otro">Otros</option>
      </select>
    </div>
  )
}


