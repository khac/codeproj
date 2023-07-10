import './App.css';
import React from 'react';
import TopNav from './components/topNav/index.jsx';
import LatestUpdates from './components/LatestUpdates/index.jsx';
import FooterSection from './components/FooterSection/index.jsx';
import AboutMe from './components/AboutMe/index.jsx';

function App() {
  const [showAbout, setShowAbout] = React.useState(false);
  return (
    <div className="App">
      <TopNav setShowAbout={setShowAbout} />
      {showAbout ? <AboutMe /> : <LatestUpdates />}
      <FooterSection setShowAbout={setShowAbout}  />
    </div>
  );
}

export default App;
