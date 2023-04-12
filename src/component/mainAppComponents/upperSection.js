import "../mainAppComponents/mainComponent.css"

// import UilReact from '@iconscout/react-unicons/icons/uil-react'; //  implement it later
// import { UilBrightness } from '@iconscout/react-unicons';

const UpperSection = ({ data }) => {
    console.log(data);
    const timeZone = "current time"
    const d = new Date();
    let currentDate = d.toString();
    return (
        <div className="upperSection">
            {/* <img alt = "Weather-background" className="weather-img" src = "https://www.maketecheasier.com/assets/uploads/2020/06/Featured-Image-Live-Weather-Wallpapers-Android.jpg.webp" /> */}
            <div className="weatherMain glass">
                {/* <div className="glassEffect"></div> */}
                {/* <UilBrightness size="60" color="white"/> */}
                <img alt="weather-icon" className="weather-icon" src={`https://raw.githubusercontent.com/bobangajicsm/react-weather-app/main/public/icons/${data.weather[0].icon}.png`} />
                <h1 className="name">{data.city}</h1>
                <h4 className="weatherCondition">{data.weather[0].description}</h4>
                <h1 className="degree">{Math.round(data.main.temp)}°C</h1>
                <h6>{currentDate}</h6>
            </div>

            <div className="weatherExtra glass">
                {/* <div className="glassEffect"></div>*/}
                <h1>Details</h1>
                <p><span>Feels like : </span><span>{Math.round(data.main.feels_like)}°C</span></p>
                <p><span>Wind :</span><span>{data.wind.speed} km/s</span></p>
                <p><span>Humidity :</span><span>{data.main.humidity} percent</span></p>
                <p><span>Pressure :</span><span>{data.main.pressure} hPa</span></p>
            </div>
        </div>
    )
}
export default UpperSection;