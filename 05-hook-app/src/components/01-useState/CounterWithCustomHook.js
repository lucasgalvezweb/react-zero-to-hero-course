import React from 'react'
import { useCounter } from '../../hooks/useCounter'

import './CounterApp'

export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset } = useCounter(100)

    return (
        <>
            <h1>Counter With hook: { state }</h1>
            <hr/>

            <button onClick={() => increment(2)} className="btn btn-outline-success">+1</button>
            <button onClick={ reset } className="btn btn-outline-primary">Reset</button>
            <button onClick={() => decrement(2)} className="btn btn-outline-danger">-1</button>
        </>
    )
}
