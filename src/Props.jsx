import React from 'react'

const UserProps = (props) => {
    console.log(props);
  return (
    <div>
      <h1>Example 1</h1>
      <button onClick={props.handleClick}>Click Me </button>

      <h1>Example 2</h1>
      <p>Count: {props.count}</p>
      <button onClick={props.increment}>Increment</button>
    </div>
  )
}

export default UserProps
