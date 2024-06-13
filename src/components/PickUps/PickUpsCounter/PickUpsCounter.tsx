import { getEndingByNumber } from "utils";

import cl from './PickUpsCounter.module.scss'

type Props = {
  pickupsCount: number;
};

const PickUpsCounter = ({ pickupsCount }: Props) => {
  return (
    <p>
      Найдено:{' '}
      <span className={cl.accent}>
        {pickupsCount} пункт{getEndingByNumber(pickupsCount)}
      </span>{' '}
      выдачи заказов:
    </p>
  );
};
export default PickUpsCounter;
