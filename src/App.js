import Search from "../src/component/search/search";
import './App.css';
// import MainApp from "./component/mainAppComponents/mainapp";
import {WEATHER_API_URL,WEATHER_API_KEY} from "./api";
import {useState} from "react";
import UpperSection from '../src/component/mainAppComponents/upperSection';
import LowerSection from '../src/component/mainAppComponents/lowerSection';



function App() {

  const [currentWeather,setCurrentWeather] = useState(null);
  const [forecast,setForecast] = useState(null);

  const handleOnSearchChange=(searchData)=>{
    console.log(searchData);

    const [lat,lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastWeatherFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentWeatherFetch,forecastWeatherFetch])
    .then(async(response)=>{
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather({city: searchData.label, ...weatherResponse});
      setForecast({city: searchData.label, ...forecastResponse});
    })
    .catch((err) => console.error(err));
  }
 
  // console.log(currentWeather);
  // console.log("division")
  // console.log(forecast);

  return (
    <div className="App">
    <Search
    onSearchChange = {handleOnSearchChange} //created a extra function to call data from search.js
    />
   <div className="mainContainer">
   {currentWeather && <UpperSection data ={currentWeather}/>}
   {forecast && <LowerSection data = {forecast}/>}
   </div>
  </div>
  );
  
}

export default App;
