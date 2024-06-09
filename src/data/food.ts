import { culinaryCulture } from './culinary-culture';
import { emotion } from './emotion';
import { weather } from './weather';

type WeatherKeys = keyof typeof weather;
type WeatherKeyMap = { [K in WeatherKeys]: K };

const foodKeys = (Object.keys(weather) as WeatherKeys[]).reduce(
  <K extends WeatherKeys>(acc: { [P in K]: P }, key: K) => {
    acc[key] = key;
    return acc;
  },
  {} as WeatherKeyMap,
);

export const food: Record<WeatherKeys, any[]> = {
  [foodKeys.sunny]: [],
  [foodKeys.partlyCloudy]: [],
  [foodKeys.mostlyCloudy]: [],
  [foodKeys.cloudy]: [],
  [foodKeys.rain]: [],
  [foodKeys.snow]: [],
  [foodKeys.rainOrSnow]: [],
  [foodKeys.snowOrRain]: [],
  [foodKeys.thunderstorm]: [],
  [foodKeys.fog]: [],
  [foodKeys.yellowDust]: [],
};
