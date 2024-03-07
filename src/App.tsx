import React from 'react';
import teamsData from './CollegeBasketballTeams.json';

interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

function App() {
  const teams = teamsData.teams;

  function Welcome() {
    return <h1>College Basketball Teams</h1>;
  }

  class Team extends React.Component<TeamProps> {
    render() {
      const oneTeam = this.props;

      return (
        <div>
          <h2>{oneTeam.school}</h2>
          <h2>Mascot: {oneTeam.name}</h2>
          <h2>
            Location: {oneTeam.city}, {oneTeam.state}
          </h2>
        </div>
      );
    }
  }

  function TeamList() {
    return (
      <div>
        {teams.map((teamNum) => (
          <Team {...teamNum} />
        ))}
      </div>
    );
  }

  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;

/*
import React, { useState, useEffect } from 'react';
import './App.css';

interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

function App() {
  const [teamNames, setTeamNames] = useState<TeamProps[]>([]);

  useEffect(() => {
    fetch('./CollegeBasketballTeams.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTeamNames(data.teams);
      })
      .catch((error) => console.error('Error fetching team data:', error));
  }, []);

  function Welcome() {
    return <h1>College Basketball Teams</h1>;
  }

  class Team extends React.Component<TeamProps> {
    render() {
      const oneTeam = this.props;

      return (
        <div>
          <h2>{oneTeam.school}</h2>
          <h2>Mascot: {oneTeam.name}</h2>
          <h2>
            Location: {oneTeam.city}, {oneTeam.state}
          </h2>
        </div>
      );
    }
  }

  function TeamList() {
    return (
      <div>
        {teamNames.map((teamNum: TeamProps, index: number) => (
          <Team key={index} {...teamNum} />
        ))}
      </div>
    );
  }

  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
*/
