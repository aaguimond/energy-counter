import React, { useState } from 'react';
import nameToId from '../utils/monTable';

const fetchSprite = async (name) => {
    const monId = nameToId[name.toLowerCase()];
    if (!monId) {
        throw new Error(`Pokémon ${name} not found`);
    }

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${monId}/`);
    const data = await response.json();
    return data.sprites.front_default;
};

const Sprites = (setTeam) => {
    const [names, setNames] = useState(Array(6).fill(''));
    const [sprites, setSprites] = useState(Array(6).fill(''));

    const handleChange = (index, value) => {
        const newNames = [...names];
        newNames[index] = value;
        setNames(newNames);
    };

    const handleFetchSprites = async () => {
        try {
            const fetchedSprites = await Promise.all(
                names.map((name) => fetchSprite(name))
            );
            setSprites(fetchedSprites);
            setTeam(names);
        } catch (error) {
            console.error('Error fetching Pokémon sprites:', error);
        }
    };

    return (
        <div>
            {names.map((name, index) => (
                <div key={index}>
                    <input
                        type="text"
                        value={name}
                        placeholder={`${name}`}
                        onChange={(e) => handleChange(index, e.target.value)}
                    />
                    {sprites[index] && <img src={sprites[index]} alt={name} />}
                </div>
            ))}
            <button onClick={handleFetchSprites}>Confirm Team</button>
        </div>
    );
};

export default Sprites;