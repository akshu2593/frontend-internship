import React, { useState } from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard';
import Map from './components/Map';

function App() {
  const [profiles, setProfiles] = useState([
    
    {
      id: 1,
      name: 'John Doe',
      description: 'Web Developer',
      address: '123 Main St, City, Country',
    },
{
      id: 2,
      name: 'John D',
      description: 'Web Developer',
      address: '123 Main St, City, Country',
    },
{
      id: 3,
      name: 'John e',
      description: 'Backend Developer',
      address: '123 Main St, City, Country',
    },
   
  ]);

  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className="App">
      <header>
        <h1>Profile Explorer</h1>
      </header>
      <div className="content">
        <div className="profile-list">
          {profiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              onSummaryClick={handleSummaryClick}
            />
          ))}
        </div>
        <div className="map-container">
          <Map selectedProfile={selectedProfile} />
        </div>
      </div>
    </div>
  );
}

export default App;