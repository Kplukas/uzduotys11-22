import { useState } from 'react';
import './App.scss';

function App() {

    const[color, setColor] = useState(true);

    const[count, setCount] = useState(1);

    {/*     const now = () => {
                console.log('now')
            } 
    */}

    const change = () => {
        setColor(!color);
    }

    const add = () => {
        setCount(countNow => countNow +1)
    }

    return (
        <div className="App">
            <div className="App-header">
                <h1 style={{color: color ? 'red' : 'blue'}}>Bebras {count}</h1>
                <button onClick={change} >Bebras color change</button>
                <button onClick={add} >Add</button>
                {/* <button onClick={now} >Press on 9:00PM</button> */}
            </div>

        </div>
    );
}

export default App;