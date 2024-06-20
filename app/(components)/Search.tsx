'use client';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('location', term);
    } else {
      params.delete('location');
    }
    replace(`${pathname}?${params.toString()}`);
    console.log(term);
  }, 300);

  return (
    <Box>
      <TextField
        label="Search"
        variant="filled"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('location')?.toString()}
        sx={{
          bgcolor: 'common.white',
          '& .MuiInputBase-root': {
            bgcolor: 'common.white',
          },
        }}
      />
    </Box>
  );
}
