"use client"

import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import Player from '../molecules/Player';
import FootballField from '../molecules/FootballField';

interface PlayersData {
  teamName: string
  selectedPlayers: Players[]
}

interface Players {
  player_id: string
  player_complete_name: string
  player_image: string
  player_type: string
  position?: { x: number; y: number };
  teamName: string
}

const Team: React.FC<any> = ({ refreshPage }) => {
  const fieldRef = useRef<HTMLDivElement>(null);

  const [players, setPlayers] = useState<Players[]>([]);

  const [playersTeamOne, setPlayersTeamOne] = useState<Players[]>([]);
  const [playersTeamOneName, setPlayersTeamOneName] = useState<string>("");
  const [playersTeamTwo, setPlayersTeamTwo] = useState<Players[]>([]);
  const [playersTeamTwoName, setPlayersTeamTwoName] = useState<string>("");

  const handleDrop = (event: React.DragEvent) => {
    const id = event.dataTransfer.getData('text');
    const fieldRect = fieldRef.current?.getBoundingClientRect();

    if (fieldRect) {
      const x = event.clientX - fieldRect.left;
      const y = event.clientY - fieldRect.top;

      setPlayers((prevPlayers) =>
        prevPlayers.map((player) =>
          player.player_id === id ? { ...player, position: { x, y } } : player
        )
      );
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  }

  const handleRemoveTeam = (team: string) => {
    localStorage.removeItem(team)
    window.location.reload()
  }

  useEffect(() => {
    const teamOne = localStorage.getItem("team-one")
    if (teamOne) {
      const dataParsed = JSON.parse(teamOne)
      setPlayersTeamOne(dataParsed.selectedPlayers)
      setPlayersTeamOneName(dataParsed.teamName)
      // setPlayers(dataParsed)
    }
    
    const teamTwo = localStorage.getItem("team-two")
    if (teamTwo) {
      const dataParsed = JSON.parse(teamTwo)
      setPlayersTeamTwo(dataParsed.selectedPlayers)
      setPlayersTeamTwoName(dataParsed.teamName)
      // setPlayers(prevState => [...prevState, dataParsed])
    }
  }, [])

  useEffect(() => {
    if (playersTeamOne.length && playersTeamTwo.length) {
      setPlayers([...playersTeamOne, ...playersTeamTwo])
    }
  }, [playersTeamOne, playersTeamTwo])

  return (
    <div className="flex">
      <div className="flex flex-col space-y-2 m-4">
        <p className='text-center mb-4 text-green-light text-xl'>{playersTeamOneName}</p>
        {playersTeamOne.map((player) => (
          <Player key={player.player_id} id={player.player_id} image={player.player_image} />
        ))}
        {
          playersTeamOne.length ? (
            <button
            className={`w-16 p-2 border border-2 border-green text-white  text-base text-center shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]
              rounded-lg bg-green-light cursor-pointer hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] hover:opacity-85'
              `}
              onClick={() => handleRemoveTeam("team-one")}
              >
            Eliminar equipo
          </button>
          )
          : <></>
        }
      </div>
      <div
        ref={fieldRef}
        className="flex-1 relative"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <FootballField />
        {players.map(
          (player) =>
            player.position && (
              <div
                key={player.player_id}
                style={{
                  position: 'absolute',
                  left: player.position.x,
                  top: player.position.y,
                }}
              >
                <Player id={player.player_id} image={player.player_image} />
              </div>
            )
        )}
      </div>
      <div className="flex flex-col space-y-2 m-4">
        <p  className='text-center mb-4 text-green-light text-xl'>{playersTeamTwoName}</p>
        {playersTeamTwo.map((player) => (
          <Player key={player.player_id} id={player.player_id} image={player.player_image} />
        ))}
        {
          playersTeamTwo.length ? (
            <button
            className={`w-16 p-2 border border-2 border-green text-white text-base text-center shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]
            rounded-lg bg-green-light cursor-pointer hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] hover:opacity-85'
            `}
            onClick={() => handleRemoveTeam("team-one")}
          >
            Eliminar equipo
          </button>
          )
          : <></>
        }
      </div>
    </div>
  );
};

export default Team;
