import { useEffect, useState } from 'react';

import useDebounce from 'hooks/useDebounce';

import { type THandleFilterChange } from 'types';

type Props = {
  handleSearchChange: THandleFilterChange;
} & React.InputHTMLAttributes<HTMLInputElement>;

const SearchField = ({ handleSearchChange, ...props }: Props) => {
  const [value, setValue] = useState('');

  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    handleSearchChange(debouncedValue);
  }, [debouncedValue, handleSearchChange]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <input onChange={onChange} {...props} />;
};
export default SearchField;
