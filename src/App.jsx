import React from 'react';
import Sprites from './components/Sprites';
import Counter from './components/Counter';

function App() {
    const [team, setTeam] = useState([]);

    return (
        <div className='App'>
            <h1>Energy Counter</h1>
            <Sprites setTeam={setTeam} />
        </div>
    )
}