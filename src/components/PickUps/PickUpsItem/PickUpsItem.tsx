import { type TPickUp } from 'types';

import cl from './PickUpsItem.module.scss';
import { Link } from 'react-router-dom';

type Props = {
  pickup: TPickUp;
};

const PickUpsItem = ({ pickup: { id, metro, address, deliveryCost, storageDays } }: Props) => {
  return (
    <li className={cl.pickup}>
      <Link to={`${id}`}>
        <p>м. {metro}</p>
        <p>{address}</p>

        <p>
          Стоимость доставки: {deliveryCost} руб. Хранение {storageDays} дней.
        </p>
      </Link>
    </li>
  );
};
export default PickUpsItem;
