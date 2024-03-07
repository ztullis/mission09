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
    return (
      <h1
        style={{
          border: '2px solid black',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        <b>College Basketball Teams</b>
      </h1>
    );
  }

  class Team extends React.Component<TeamProps> {
    render() {
      const oneTeam = this.props;

      return (
        <div
          style={{
            border: '2px solid black',
            textAlign: 'center',
            padding: '20px',
          }}
        >
          <b>
            <h2>{oneTeam.school}</h2>
          </b>
          <p>Mascot: {oneTeam.name}</p>
          <p>
            Location: {oneTeam.city}, {oneTeam.state}
          </p>
          <br></br>
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
