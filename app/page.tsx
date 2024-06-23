import Box from '@mui/material/Box';
import { WeatherWidget } from './(components)/WeatherWidget';

export default function Home({
  searchParams,
}: {
  searchParams?: {
    location?: string;
  };
}) {
  const location = searchParams?.location || '';
  return (
    <Box
      component="main"
      sx={{
        flex: 1,
        background:
          'radial-gradient(circle, rgba(178,232,199,1) 0%, rgba(101,96,247,1) 100%, rgba(160,163,223,1) 100%)',
        display: 'grid',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <WeatherWidget location={location} />
    </Box>
  );
}
