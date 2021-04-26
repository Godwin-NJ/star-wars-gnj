import React,{useState,useEffect} from 'react'
import Planet from './component/Planet'
import ApiPlanet from './component/ApiPlanet'

function App() {

      const[planetDisplay, setPlanetDisplay] = useState([])

    useEffect(() => {
      ApiPlanet().then(value => setPlanetDisplay(value))
    },[])



  return (
    <div className="App">
      <div className=" bg-washed-blue pa4 ma4 ph6">
        <h2 className="tc ttu">stars wars</h2>
        < Planet planetDisplay={planetDisplay}/>
      </div>
      </div>
      
  );
}

export default App;
