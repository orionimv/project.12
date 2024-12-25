import WeatherContainer from "../WeatherContainer/index.js"
import PropTypes from "prop-types";

const CurrentWeather = ({weather}) => {

    if (!weather) {
        return <div>Loading..</div>
    }

    return (
        <WeatherContainer country={weather.location.country}
                          temp = {weather.current.temp_c}
                          src = {weather.current.conditions.icon}
                          city = {weather.location.name}
                          currentWeather = {true}
                          time = {weather.current.last_update.slice(-5)}
                          condition = {weather.current.condition.text}
    />
    )
}

CurrentWeather.prototype = {
    weather: PropTypes.object.isRequired
}

export default CurrentWeather