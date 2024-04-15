import type { Earthquake } from '@/types';
import { apiCall } from './api-call';

type GetQuakesOptions = {
  /** Start of date range to fetch quakes */
  startTime: Date;
  /** End of date range to fetch quakes */
  endTime: Date;
};

export async function getQuakes(
  options: GetQuakesOptions,
): Promise<Earthquake[]> {
  const { startTime, endTime } = options;

  const response = await apiCall.get('/query', {
    params: {
      format: 'geojson',
      starttime: startTime.toISOString(),
      endtime: endTime.toISOString(),
    },
  });

  return response.data.features;
}
