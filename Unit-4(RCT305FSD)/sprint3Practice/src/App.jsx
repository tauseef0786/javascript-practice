import React from 'react';
import './App.css';
import Child from './components/contextApi/Child';
import MyProvider from './components/contextApi/Myprovider';

function App() {
    return (
        <MyProvider>
            <Child />
        </MyProvider>
    );
}

export default App;
