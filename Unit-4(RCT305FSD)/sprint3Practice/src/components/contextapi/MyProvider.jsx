import React, { useState } from 'react';
import Mycontext from './Mycontext';

function MyProvider({ children }) {
    const [value, setValue] = useState({
        name: "RCT-B41",
        strength: 150
    });

    const [bgColor, setBgColor] = useState("white");
    const toggleColor = () => {
        setBgColor((prevColor) => (prevColor === "white" ? "blue" : "white"));
    };

    const [count, setCount] = useState(0);

    function increment() {
        setCount((prevCount) => prevCount + 1);
    }

    function decrement() {
        setCount((prevCount) => prevCount - 1);
    }

    return (
        <Mycontext.Provider value={{ value, setValue, bgColor, setBgColor, toggleColor, count, setCount, increment, decrement }}>
            {children}
        </Mycontext.Provider>
    );
}

export default MyProvider;
