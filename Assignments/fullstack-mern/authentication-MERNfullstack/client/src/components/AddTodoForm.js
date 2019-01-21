import React from 'react'

const AddTodoForm = props => {
    const { handleChange, handleSubmit, title } = props
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                onChange={handleChange} 
                value={title} name="title" 
                placeholder="Title"/>
            <button>Submit</button>
        </form>
    )
}

export default AddTodoForm