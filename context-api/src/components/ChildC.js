import React, { useContext } from 'react'
import NameContext from '../context/NameContext'


const ChildC = () => {

    const nameValue = useContext(NameContext)
    return (
        <div>
            {/* <h1>My Name is {name}</h1> //Using Props */}
            <h1>My Name is {nameValue}</h1>
        </div>
    )
}

export default ChildC
