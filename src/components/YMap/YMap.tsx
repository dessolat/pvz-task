import { MutableRefObject, RefObject, forwardRef, memo, useMemo, useRef } from 'react';

import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';

import { type TPickUp } from 'types';

import cl from './YMap.module.scss';

type DotProps = {
  dot: TPickUp;
  autoBalloon?: boolean;
};

type YMapProps = {
  state?: ymaps.IMapState;
  defaultState?: ymaps.IMapState;
  options?: ymaps.IMapOptions;
  defaultOptions?: ymaps.IMapOptions;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
  className?: string;
  dots?: TPickUp[];
  dot?: TPickUp;
};

const Dot = forwardRef<MutableRefObject<ymaps.Map | undefined>, DotProps>(
  ({ dot, autoBalloon }, ref) => (
    <Placemark
      geometry={[dot.coords[0], dot.coords[1]]}
      options={{
        preset: 'islands#blueDeliveryIcon',
        openEmptyBalloon: true
      }}
      properties={{
        balloonContentHeader: `<p class=${cl.dotTitle}>${dot.address}</p>`,
        balloonContentBody: `<span class=${cl.bold}>ПВЗ ${dot.name}</span>     Стоимость доставки: <span class=${cl.bold}>${dot.deliveryCost} руб.</span> `,
        balloonContentFooter: `Хранение: <span class=${cl.bold}>${dot.storageDays} дней</span>     Доставка до пункта:  <span class=${cl.bold}>${dot.deliveryDays.min}-${dot.deliveryDays.max} дня</span>`
      }}
      instanceRef={autoBalloon ? (ref as unknown as MutableRefObject<ymaps.Map | undefined>) : undefined}
    />
  )
);

const YMap = ({ dots, dot, ...props }: YMapProps) => {
  const mapCenter = useMemo(
    () =>
      dot
        ? [dot.coords[0], dot.coords[1]]
        : dots && dots.length > 0
        ? dots
            .reduce(
              (acc, dot) => {
                acc[0] += dot.coords[0];
                acc[1] += dot.coords[1];

                return acc;
              },
              [0, 0]
            )
            .map(coord => coord / dots.length)
        : [55.75, 37.57],
    [dots, dot]
  );

  const ref = useRef<ymaps.Map | undefined>();

  return (
    <YMaps
      query={{
        // ns: 'use-load-option',
        load: 'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon',
        apikey: 'c4a5140a-c3db-459d-a0e0-56669d5f4c29'
      }}>
      <Map
        state={{ center: mapCenter, zoom: dot ? 18 : 12, controls: ['zoomControl', 'fullscreenControl'] }}
        onLoad={() => {
          dot &&
            setTimeout(() => {
              ref.current?.balloon.open();
            }, 5);
        }}
        onError={e => console.log(e)}
        modules={['control.ZoomControl']}
        {...props}>
        {dots && dots.map(dot => <Dot key={dot.id} dot={dot} />)}
        {dot && (
          <Dot
            dot={dot}
            autoBalloon
            ref={ref as unknown as RefObject<MutableRefObject<ymaps.Map | undefined>>}
          />
        )}
      </Map>
    </YMaps>
  );
};
export default memo(YMap);
