import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const api = {
  key: "66d3f5f60bc745bf0db900685fca77fe",
  base: "https://api.openweathermap.org/data/2.5/"
}
function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === 'Enter'){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setQuery('');
        setWeather(result);
      })
    }
  }

const currentDate = (d) =>{
  let months = ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September', 
'October', 'November', 'December'];
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let day = days[d.getDay()];
let date = d.getDate();
let month = months[d.getMonth()]
let year = d.getFullYear();

return `${day} ${date} ${month} ${year}`
}

  return (
    <div className={((typeof weather.main != "undefined") ? ((weather.main.temp > 25) ? 'App suphot' : 'App') : 'App spring')}
    >
      <main>
        <div className="container-fluid">
          <div className="row">
          <div className="col-sm-4 text-center"></div>
          <div className="col-sm-4 text-center search-box">
          <input type="text" className="search-bar text-center "
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          placeholder="Enter Your Place..." />
          </div>
          <div className="col-sm-4 text-center"></div>
          </div>
          <br/>



  {(typeof weather.main != "undefined") ? (
  
  <div>
<div className="row">
          <div className="col-sm-4 text-center"></div>
          <div className="col-sm-4  location-box">
  <div className="location text-center">{weather.name}, {weather.sys.country}</div>
  <div className="date text-center"> {currentDate(new Date())}</div>
          </div>
  <div className="col-sm-4 text-center"></div>
          </div>
          <br/>
          <div className="row">
          <div className="col-sm-4 text-center"></div>
            <div className="col-sm-4 weather-box text-center" >
              <div className="temp" style={{boxShadow:'0px 3px 0px rgba(0, 0, 0, 0.63)'}}>
                {Math.round(weather.main.temp)}°c
              </div>
              <br/>
              <div className="roww">
                <div className=" minimum text-center" style={{boxShadow:'0px 3px 0px rgba(0, 0, 0, 0.63)'}}>MIN <br/>{Math.round(weather.main.temp_min)}</div>
                <div className=" maximum text-center" style={{boxShadow:'0px 3px 0px rgba(0, 0, 0, 0.63)'}}>MAX <br/> {Math.round(weather.main.temp_max)}</div>

              </div>
              <br/>
              <div className="rowww">
                <div className=" mum text-center" style={{boxShadow:'0px 3px 0px rgba(0, 0, 0, 0.63)'}}>PRESSURE <br/>{Math.round(weather.main.pressure)}</div>
                <div className=" mum text-center" style={{boxShadow:'0px 3px 0px rgba(0, 0, 0, 0.63)'}}>WIND <br/> {Math.round(weather.wind.speed)} m/s</div>
                <div className=" mum text-center" style={{boxShadow:'0px 3px 0px rgba(0, 0, 0, 0.63)'}}>HUMIDITY <br/> {Math.round(weather.main.humidity)}%</div>


              </div>
              <br/>
              <div className="weather">
              <img src={"http://openweathermap.org/img/wn/" + weather.weather[0].icon +'.png'}  alt="icon"/><br/>
                {weather.weather[0].main}<br/>

                {weather.weather[0].description}

              </div>
            </div>
          
          <div className="col-sm-4 text-center"></div>
          </div>



  </div>
  
  
  ) : ('')}
          
           



        </div>
        
      </main>
    </div>
  );
}

export default App;
