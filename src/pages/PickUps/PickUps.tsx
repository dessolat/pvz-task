import cl from './PickUps.module.scss';

import pickupsData from 'assets/pickupsData.json';

import Side from 'components/PickUps/Side/Side';
import YMap from 'components/YMap/YMap';

import useFilteredPickUps from 'hooks/useFilteredPickUps';
import useSearch from 'hooks/useSearch';

import { type TPickUp } from 'types';

const PickUps = () => {
  const [filter, handleFilterChange] = useSearch();

  const filteredList = useFilteredPickUps(pickupsData as TPickUp[], filter);

  return (
    <div className='container'>
      <div className={cl.wrapper}>
        <Side list={filteredList} handleFilterChange={handleFilterChange} />
        <YMap height={'70vh'} dots={filteredList} />
      </div>
    </div>
  );
};
export default PickUps;
