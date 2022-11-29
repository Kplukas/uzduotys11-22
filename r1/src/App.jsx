import './App.scss';

function App() {

    const now = () => {
        console.log('now')
    }

    return (
        <div className="App">
            <div className="App-header">
                <button onClick={now} >Press on 9:00PM</button>
            </div>

        </div>
    );
}

export default App;