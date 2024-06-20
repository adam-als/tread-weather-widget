import Typography from '@mui/material/Typography';

const fetchWeatherData = async () => {
  const url =
    'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
      'x-rapidapi-key': 'e6fe8715ffmsh6eeb2fdf8ede7b6p18ddb9jsnaa6dde18421c',
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};

export async function WeatherDetails({ location }: { location: string }) {
  return (
    <>
      <Typography variant="h4">76°F</Typography>
      <Typography>Condition: Not too bad</Typography>
      <Typography>Wind speed and heading</Typography>
    </>
  );
}
