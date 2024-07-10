import React, { useState } from 'react'

const App = () => {
  let [count , SetCount] = useState(0)

function fun1() {
  SetCount (count+1)
}
  return (
    <div>
    <p>0</p>
  <button onClick ={fun1}> add</button>

    </div>
  
  )
}

export default App