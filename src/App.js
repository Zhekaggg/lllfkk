
import './App.css';
import './card.css';
import './card1.css';
import './lol.css';

import ResponsiveAppBar from './component/navbro'
import Soos from './component/soso'
import Card from './component/card'

function App() {
  return (
    <div className="App">
        <ResponsiveAppBar/>
        <Soos/>
        <Card/>
    </div>
  );
}

export default App;
