/* Inorder to use hook we need to import it 
we don't need the entire React library so we can use 
object to destructuring to extract the individual 
variable or function *** */

import React, {useState} from 'react'

function MyComponent() {
   
    const [name, setName] = useState();

    return (
        <div> 
            <p>Name: {}</p>
            <button onClick={name} >set name</button>
        </div>
    );


}

export default MyComponent






