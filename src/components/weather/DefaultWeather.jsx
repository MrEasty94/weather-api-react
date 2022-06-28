

function DefaultWeather({ defaultWeather, isLoading }) {

	return (<>
			{isLoading ? <p>Loading...</p> : null}
			{!isLoading ? 
			<div className="default-weather-container">
				<div className="default-weather-location">
				<h2>
					{defaultWeather.name}
				</h2>
				</div>
				<div className="weather-current-temp">
			 		<h3 className="current-temp-heading">
			 			Current Temp
			 		</h3>
			 		<p className="current-temp-data">
			 			{defaultWeather.main.temp}
			 		</p>
			 	</div>
			 	<div className="weather-min-temp">
			 		<h3 className="min-temp-heading">
			 			Min Temp
			 		</h3>
			 		<p className="min-temp-data">
			 			{defaultWeather.main['temp_min']}
			 		</p>
			 	</div>
			 	<div className="weather-max-temp">
			 		<h3 className="max-temp-heading">
			 			Max Temp
			 		</h3>
			 		<p className="max-temp-data">
			 			{defaultWeather.main['temp_max']}
			 		</p>
			 	</div>
			 	<div className="weather-summary">
			 		<h3 className="weather-summary-heading">
			 			Summary
			 		</h3>
			 		<p className="weather-summary-data">
			 			{defaultWeather.weather[0].main}
			 		</p>
			 	</div>
			 </div> : null}
			</>)
}

export default DefaultWeather
