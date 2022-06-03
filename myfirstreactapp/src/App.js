

import './App.css';
import NavBar from './navbar'
import Center from './center'
import LeftSideBar from './sidebannerLeft'
import RightSideBar from './sidebannerRight'

function App() {
  return (
    <div className="App">

      <div className='NavBar'> <NavBar/> </div>

      <body className="MainBody">
      <div className="LeftSide"> <LeftSideBar/> </div>

      <div className="center"> <Center /> </div>
  
      <div className="RightSide"> <RightSideBar/> </div>
      </body>
    </div>
  );
}

export default App;
