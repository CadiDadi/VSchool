
/////////
Context vs Redux
context works only in React
Redux works with any framework
learn Redux

to import every element from an API, instead of listing them all out when mapping, you can just import all by using SPREAD

instead of:
{this.state.todos.map(todo => 
                    <ToDo 
                        title={todo.title}  
                        description ={todo.description} 
                        completed = {todo.completed} 
                        key={todo._id}
                    />
                )}


using SPREAD to get all elements:
{this.state.todos.map(todo => 
    <ToDo  {...todo}
    />
)}

/////////////
render instead of component in Routes

/////////////
key needed - use ID

/////////////
export in files - doesnt need to be at bottom separately if xxxxxxxxx

/////////////
props.children or this.props.children
provides it to entire project, must wrap <App /> in index.js file

/////////////
in app.js, we're calling the function that is the Axios GET, from another file

/////////////
when use: THIS, PROPS, VALUE, ETC

/////////////







