import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/GameGrid.css'


function GameGrid() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('https://api.rawg.io/api/games', {
          params: {
            key: '36caa7ce95734d5ca5ab0e598641b025', //Api nyckel här, ska ersättas med .env fil senare för mer säkerhet
            page_size: 20, //Justerar till 20 spel som fetchas just nu.
          },
        });

        //loggar datan som fetchas hos rawg api, till konsolen
        console.log('Logging data from api', response.data)

        // Sätter värdet till usestate
        setGames(response.data.results);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    fetchGames();
  }, []);


  return (
    <div className="game-grid">
      {games.map((game, index) => (
        <div key={index} className="game-card">
          <img src={game.background_image} alt={game.name} />
          <h2>{game.name}</h2>
          <p>Rating: {game.rating}</p>
          {/* Lägga till fler detaljer senare!?*/}
        </div>
      ))}
    </div>
  );
}

export default GameGrid;
