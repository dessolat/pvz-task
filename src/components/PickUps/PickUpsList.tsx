import { type TPickUp } from 'types';
import PickUpsItem from './PickUpsItem/PickUpsItem';

type Props = {
  list: TPickUp[];
};

const PickUpsList = ({ list }: Props) => {
  if (list.length === 0) return <p>Подходящих пунктов самовывоза не найдено.</p>;
  return (
    <ul>
      {list.map(pickup => (
        <PickUpsItem key={pickup.id} pickup={pickup} />
      ))}
    </ul>
  );
};
export default PickUpsList;
