import { useState } from "react"

function SearchHeader({search}) {

    const [valueInput, setValue] = useState("")

    const handleFormSubmit = (e) => {
        e.preventDefault()
        search(valueInput)

    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
      <div>
        <form onSubmit={ handleFormSubmit }>
            <label>Ne Arıyorsunuz?</label>
            <input type="text" value={ valueInput } onChange= { handleChange }/>
        </form>
      </div>
    )
}

export default SearchHeader;