import { Link } from 'react-router-dom';
import cl from './Side.module.scss';

import { type TPickUp } from 'types';

type Props = {
  pickup: TPickUp;
};

const Side = ({ pickup }: Props) => {
  return (
    <div className={cl.side}>
      <Link to={'pickups'} className={cl.link}>
        ← Все пункты выдачи
      </Link>
      <p>Пункт выдачи "{pickup.name}"</p>
      <p>Адрес: {pickup.address}</p>
      <div>
        <p>Как добраться:</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi officia omnis dolorem quidem,
          explicabo tempora.
        </p>
      </div>
    </div>
  );
};
export default Side;
