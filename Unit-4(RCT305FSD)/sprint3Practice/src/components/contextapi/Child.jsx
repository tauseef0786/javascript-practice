import React, { useContext } from 'react';
import Mycontext from './Mycontext';

export default function Child() {
    const { value, setValue, bgColor, setBgColor, toggleColor, count, setCount, increment, decrement } = useContext(Mycontext);

    return (
        <div style={{ backgroundColor: bgColor, padding: "20px" }}>
        <h1>Name: {value.name}</h1>
        <h1>Strength: {value.strength}</h1>
        <button onClick={toggleColor}>Toggle Color</button>
        <h1>Count: {count}</h1>
        <button onClick={increment}>INC</button>
        <button onClick={decrement}>DEC</button>
    </div>
    );
}



