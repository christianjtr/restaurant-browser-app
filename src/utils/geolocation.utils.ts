import { getDistance } from 'geolib';
import { Geolocation } from '@app-types';

const getDistanceBetweenTwoCoordPoints = (
  from: Geolocation.Point,
  to: Geolocation.Point,
): { distance: number; formattedDistance: string } => {
  const distance = getDistance(from, to);
  const formattedDistance = distance >= 1000 ? `${(distance / 1000).toFixed(1)} Km` : `${distance} m`;

  return {
    distance,
    formattedDistance,
  };
};

export { getDistanceBetweenTwoCoordPoints };
