import React from 'react'

export default function Useefcomp() {
  const[value,setValue]=useState(1);
  useEffect(()=>{setValue(2)})
  return (
    <div>
      <h1>{value}</h1>
    </div>
  )
}
