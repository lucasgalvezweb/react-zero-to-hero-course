import React, {useEffect, useState} from 'react'
import './effects.css'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const {name, email} = formState

    useEffect( () => {
        console.log("Hey")
    })

    const handleInputChange = ({target}) => {
        console.log(target.name)
        setFormState({
            ...formState,
            [ target.name ]: target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr/>

            <div className="form-group">
                <input type="text" name="name" className="form-control" placeholder="Tu nombre" autocomplete="off" value={name} onChange={ handleInputChange }/>
            </div>
        </>
    )
}
