import { useState } from 'react';
import './assets/css/App.css';
import Animation from "./components/Animation";
import Logged from './components/Logged';
import { hash } from "./utils";

function App() {
  // eslint-disable-next-line
  const [token] = useState(hash.access_token ? hash.access_token : false);

  return (
    <>
      {!token ? 
        <Animation />
      :
        <Logged token={token} />
      }
    </>
  );
}

export default App;