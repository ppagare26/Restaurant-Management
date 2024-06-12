  import React from 'react'
  import { useSearchParams } from 'react-router-dom';
  import { useState,useEffect } from 'react';
  import Spinner from '../spinners/Spinner';
  const TeamView = () => {
    const [searchParams] = useSearchParams();
    const team = searchParams.get('team');

    const [teamData,setTeamData] = useState();
    const [loading,setLoading] = useState(false);
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    useEffect( () => {
      const fetchTeam = async () => {
        setLoading(true);
        const apiUrl = `/api/teams?name=${team}%20Team`;
        try {
          const res = await fetch(apiUrl);
          const data = await res.json();
         // console.log(data);
          await delay(3000);

          setTeamData(data);
        } catch (error) {
          console.log('Error Fetching Team data',error);
        } finally{
          setLoading(false);
        }
      }
      fetchTeam();
    },  [team] );
    //console.log({teamData});
    return (
      <div>
        <h1>{team ? `${team} Team` : 'Team Page'}</h1>
        
        {team && (
          <div>
            <div> {loading && <Spinner loading={loading}/> } </div>
            {!loading && teamData && (
              <div>
                <p>Welcome to the {teamData[0].name}!</p>
                <ul>
                  {teamData[0].members.map(member => (
                    <li key={member.id}>{member.name} - {member.role}</li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        )}
      </div>
    );
  };

  export default TeamView