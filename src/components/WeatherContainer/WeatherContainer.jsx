import Card from 'react-bootstrap/Card'
import PropTypes from "prop-types";

const WeatherContainer = ({src,city, temp, region, country, time, currentWeather, condition })
const cardStyle = {
    width: 'auto',
    borderRadius: '30px',
    padding: '15px',
    maxHeight: currentWeather ? '23.5rem' : '15rem',
    display: 'flex',
    flexBasis: '30%',
    flexGrow: '100',
    flexDirection: currentWeather ? 'column' : 'row',
    justifyContent: 'space-between',
    alignItems: currentWeather ? 'flex-start' : 'center',
    margin: '0',
    boxShadow: '0.125 rem .25rem rgba(0, 0, 0, 0.2)',

}
return (
    <Card style={cardStyle}>
        {currentWeather && <h4 style={{color: 'grey'}}>Current Weather in {city}</h4>}
        <Card.Img variant="top" scr={src} style={{width: '5rem'}}/>
        <Card.Body></Card.Body>
    </Card>
)