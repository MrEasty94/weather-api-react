import CustomWeather from './components/weather/CustomWeather';
import DefaultWeather from './components/weather/DefaultWeather';
import {useEffect, useState} from 'react';




function App() {
  
  const DEFAULT_API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=6e55d48adff6a34af29e6922dd82682b';
  const [customWeather, setCustomWeather] = useState([]);
  const [defaultWeather, setDefaultWeather] = useState({});
	const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);

 const fetchWeather = async () => {
	
    setLoading(true);
    console.log('Rendering');
  
      try {
        const response = await fetch(DEFAULT_API_URL);
        if(!response.ok) throw response;
        const data = await response.json();
        setDefaultWeather(data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        setReload(false)
      }
  
      catch(err){
        console.log(err);
      }
  }

	useEffect(() => {fetchWeather()}, []);


  return (
  <>
      <DefaultWeather defaultWeather={defaultWeather} isLoading={loading} />
      {/* <CustomWeather /> */}
  </>
  )
}

export default App

