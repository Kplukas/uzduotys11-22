import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import axios from 'axios';

function App() {

    const [ro, setRo] = useState(true);

    const[books, setBooks] =useState(null);

    useEffect(() => {
        //----------axios budas
        //axios.get('https://in3.dev/knygos/')
        //.then(res => setBooks(res.data))

        //----------fetch budas
        fetch('https://in3.dev/knygos/')
        .then((res) => res.json())
        .then((data) => setBooks(data));

    },[])

    return (
        <div className="App">
            <div className="App-header">
                {/* <div className="kvad" style={{
                    transform: ro ? null :'rotate(90deg)'
                }}></div>
                <div>
                    <button onClick={() => setRo(true)}>GO</button>
                    <button onClick={() => setRo(false)} style={{transform: 'rotate(90deg)'}}>GO</button>
                </div> */}
                <ul>
                    {
                        books?.map(b => <li key={b.id}>{b.title}</li>)
                    }
                </ul>
            </div>
            
        </div>
    );
}

export default App;