import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

const fetchWeatherData = async (location: string) => {
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${location}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
      'x-rapidapi-key': '0f85e33055mshb2d116d12997e82p11fcc0jsnd17f3a25ce20',
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export async function WeatherDetails({ location }: { location: string }) {
  if (location.length === 0) {
    return (
      <Box sx={{ p: 4, borderRadius: 4, bgcolor: 'common.white' }}>
        <Typography variant="h4">No location provided</Typography>
        <Typography>Please provide a location to search for.</Typography>
      </Box>
    );
  }

  try {
    const locationData = await fetchWeatherData(location);
    return (
      <Box sx={{ p: 4, borderRadius: 4, bgcolor: 'common.white' }}>
        <Typography variant="h4">{locationData.current.temp_f} °F</Typography>
        <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          <Image
            src={`https:${locationData.current.condition.icon}`}
            width={30}
            height={30}
            alt="Conditions image"
          />
          <Typography>{locationData.current.condition.text}</Typography>
        </Box>
        <Typography>
          Wind: {locationData.current.wind_mph} mph,{' '}
          {locationData.current.wind_degree}° {locationData.current.wind_dir}
        </Typography>
      </Box>
    );
  } catch (error) {
    return (
      <Box sx={{ p: 4, borderRadius: 4, bgcolor: 'common.white' }}>
        <Typography variant="h4">Something went wrong</Typography>
        <Typography>An error occurred when fetching weather data.</Typography>
      </Box>
    );
  }
}
