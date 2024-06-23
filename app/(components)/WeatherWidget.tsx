import { Suspense } from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Search from './Search';
import { WeatherDetails } from './WeatherDetails';

function WeatherDetailsSkeleton() {
  return <Skeleton sx={{ height: '20vh', width: '20vw' }} />;
}

export function WeatherWidget({ location }: { location: string }) {
  return (
    <Box
      component="section"
      sx={{
        display: 'grid',
        gap: 4,
        width: 'fit-content',
        borderRadius: 8,
        p: 6,
        bgcolor: 'background.paper',
      }}
    >
      <Suspense fallback={<WeatherDetailsSkeleton />}>
        <WeatherDetails location={location} />
      </Suspense>
      <Search placeholder="enter a location" />
    </Box>
  );
}
