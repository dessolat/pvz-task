import cl from './PickUpsFilter.module.scss'

import SearchField from 'components/UI/SearchField';

import { type THandleFilterChange } from 'types';

type Props = {
  handleFilterChange: THandleFilterChange;
};

const PickUpsFilter = ({ handleFilterChange }: Props) => {
  return <div>
		<SearchField className={cl.searchField} handleSearchChange={handleFilterChange} placeholder='Поиск по адресу' />
	</div>;
};
export default PickUpsFilter;
