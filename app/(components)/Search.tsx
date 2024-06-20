'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('location', term);
    } else {
      params.delete('location');
    }
    replace(`${pathname}?${params.toString()}`);
    console.log(term);
  }

  return (
    <div>
      <label htmlFor="search">Search</label>
      <input
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('location')?.toString()}
      />
    </div>
  );
}
