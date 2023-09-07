import React from 'react'
import './Condition.css';

const Condition = () => {
    // Example 1
    const isLogedIn = true;

    // Example 2
    const users = ["Qavi","Hussain","Ali","Ahsan","Hamdan"]

    // Example 3
    const isAunthicate = true;
  return (
    <div>
       
       {/* Example 1 */}
        {isLogedIn ? <h2>Wellcome User</h2> : <h2>Welcome Guest</h2>}

      {/* Example 2 */}
    <div>
        {users.length > 0 ? (
            <ul>
                {users.map((user,index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
        ) : (
            <p>No users Found</p>
        )}
    </div>

             {/* Example 3 */}
             <div>
                {isAunthicate && (
                    <button onClick={() => console.log("Logged Out")}>LogOut</button>
                )}
             </div>

    </div>
  )
}

export default Condition
