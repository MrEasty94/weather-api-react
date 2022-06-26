import {useEffect, useState} from 'react';
import ListItem from './components/ListItem';


const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=6e55d48adff6a34af29e6922dd82682b';


function App() {
  
  const [weather, setWeather] = useState([]);
  
  useEffect(() => {
    const fetchWeather = async () => {
      
      try{
        const response = await fetch(API_URL);
        if(!response.ok) throw response;
        
        const data = await response.json();
        
        setWeather(data);
        console.log(data);
      }
      catch(err) {
        console.log(err)
      }

    };
    fetchWeather();
  }, []);


  return (
  <>
      <ListItem data={weather}/>
  </>
  )
}

export default App

