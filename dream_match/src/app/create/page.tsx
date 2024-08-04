"use client"

import Loading from "@/components/molecules/Loading";
import { getData } from "@/services/get-data";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Teams {
  team_key: string
  players: Players[]
  team_name: string
  team_badge: string
}

interface Players {
  player_id: string
  player_complete_name: string
  player_image: string
  player_type: string
}

const CreateTeam: React.FC = () => {
  const [teams, setTeams] = useState<Teams[]>([])
  const [players, setPlayers] = useState<Players[]>([])
  const [selectedPlayers, setSelectedPlayers] = useState<Players[]>([])
  const [teamName, setTeamName] = useState<string>("")

  const fetchData  = async () => {
    const dataTeams = await getData()
    setTeams(dataTeams)
  }

  const handleAddNewPlayer = (player: Players) => {
    const copySelectedPlayer = [...selectedPlayers]
    const playerFiltered = copySelectedPlayer.filter(p => p.player_id !== player.player_id)

    if (playerFiltered.length === copySelectedPlayer.length) {
      if (selectedPlayers.length < 5) {
        setSelectedPlayers([...selectedPlayers, player])
      }
    } else {
      setSelectedPlayers(playerFiltered)
    }
  }

  const handleCreateTeam = () => {
    let storageKey = "team-one"

    if (localStorage.getItem(storageKey)) {
      storageKey = "team-two"
      if (localStorage.getItem(storageKey)) {
        alert("No puedes crear mas de dos equipos")
        cleanStates()
        return
      }
    }

    localStorage.setItem(storageKey, JSON.stringify({ teamName, selectedPlayers}))
    alert("Equipo creado con exito")
    cleanStates()
  }

  const cleanStates = () => {
    setSelectedPlayers([])
    setPlayers([])
    setTeamName("")
  }

  useEffect(() => {
    fetchData ()
  }, [])

  return (
    <section >
      <div className="flex justify-center items-center gap-4">
        <button
          className={`p-2 border border-2 border-green text-white text-xl text-center shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] rounded-lg
            ${!teamName ? 'bg-gray cursor-not-allowed' : 'bg-green-light cursor-pointer hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] hover:opacity-85'}
            `}
          disabled={!teamName}
          onClick={handleCreateTeam}
          >
          Crear equipo
        </button>
        {
          selectedPlayers.length === 5 && (
            <input
              className="p-2 border border-2 border-green rounded-lg w-3/12	"
              type="text"
              placeholder="Ingresa el nombre de tu equipo"
              onChange={(e) => setTeamName(e.target.value)}
            />
          )
        }
      </div>
      <div className="w-11/12 m-auto m-8">
        <div className="h-[200px] m-4 flex justify-center">
          {
            selectedPlayers?.length ? selectedPlayers.map((player: Players) => {
              return (
                <div
                  key={player.player_id}
                  className="w-[300px] border border-green-light m-2 mb-2 p-2 rounded-lg flex items-center justify-start gap-2 m-2 text-green-light hover:bg-gray hover:text-white hover:cursor-pointer"
                >
                  <Image
                    src={player.player_image || "/notFound.png"}
                    alt={player.player_complete_name}
                    height={100}
                    width={100}
                  />
                  <div className="flex flex-col items-start justify-center">
                    <h3>{player.player_complete_name}</h3>
                    <p className="text-lg text-start">{player.player_type}</p>
                  </div>
                </div>
              )
            })
            : (
              <div className="text-center">
                <h3>Elige tus judagores</h3>
                <p>Puedes elegir un maximo de 5 jugadores de cualquier equipo</p>
              </div>
            )
          }
        </div>
      </div>
      <div className="h-full w-11/12 m-auto flex justify-center items-baseline gap-4">
        <div className="h-full flex flex-col items-center justify-center w-5/12 border border-green border-2 p-4 rounded-lg">
          {
            teams?.length ? teams.map((team: Teams) => {
              return (
                <ul key={team.team_key} className="w-full border border-white bg-green-light m-2 rounded-lg hover:opacity-85 hover:cursor-pointer">
                  <li
                    className="flex items-center justify-start text-2xl gap-12 m-2 text-white"
                    onClick={() => setPlayers(team.players)}
                    >
                    <Image
                      src={team.team_badge}
                      alt={team.team_name}
                      height={100}
                      width={100}
                    />
                    {team.team_name}
                  </li>
                </ul>
              )
            })
            : <Loading />
          }
        </div>
        <div className="w-5/12 border border-green border-2 p-4 rounded-lg">
          {
            players?.length ? players.map((player: Players) => {
              return (
                <div
                  key={player.player_id}
                  className="border border-green-light m-2 mb-2 p-2 rounded-lg flex items-center justify-start text-2xl gap-12 m-2 text-green-light hover:bg-gray hover:text-white hover:cursor-pointer"
                  onClick={() => handleAddNewPlayer(player)}
                >
                  <Image
                    src={player.player_image || "/notFound.png"}
                    alt={player.player_complete_name}
                    height={100}
                    width={100}
                  />
                  <div className="flex flex-col items-start justify-center">
                    <h3>{player.player_complete_name}</h3>
                    <p className="text-lg text-start">{player.player_type}</p>
                  </div>
                </div>
              )
            })
            : (
              <p>Selecciona un equipo para ver los jugadores</p>
            )
          }
        </div>
      </div>
    </section>
  );
};

export default CreateTeam;
