import cl from './PickUp.module.scss';

import { Navigate, useParams } from 'react-router-dom';

import pickupsData from 'assets/pickupsData.json';

import YMap from 'components/YMap/YMap';
import Side from 'components/PickUp/Side/Side';

import { type TPickUp } from 'types';

const PickUp = () => {
  const { id } = useParams();

  if (!id || !/^\d+$/.test(id)) return <Navigate to={'/pickups'} replace />;

  const selectedPickUp = pickupsData.find(pickup => pickup.id === parseInt(id));

	if (!selectedPickUp) return <Navigate to={'/pickups'} replace />

  return (
    <div className='container'>
      <div className={cl.wrapper}>
        <Side pickup={selectedPickUp as TPickUp} />
        <YMap height={'70vh'} dot={selectedPickUp as TPickUp} /> 
      </div>
    </div>
  );
};
export default PickUp;
