import cl from './Side.module.scss';

import { type THandleFilterChange, type TPickUp } from 'types';

import PickUpsList from '../PickUpsList';
import PickUpsFilter from '../PickUpsFilter/PickUpsFilter';
import PickUpsCounter from '../PickUpsCounter/PickUpsCounter';

type Props = {
  list: TPickUp[];
  handleFilterChange: THandleFilterChange;
};

const Side = ({ list, handleFilterChange }: Props) => {
  return (
    <div className={cl.side}>
      <PickUpsCounter pickupsCount={list.length} />
      <PickUpsFilter handleFilterChange={handleFilterChange} />
      <PickUpsList list={list} />
    </div>
  );
};
export default Side;
