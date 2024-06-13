import { useCallback, useState } from 'react';

const useSearch = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  return [searchValue, handleSearchChange] as [string, (value: string) => void];
};

export default useSearch;
