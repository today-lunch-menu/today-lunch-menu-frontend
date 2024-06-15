import { korean, western, japanese, chinese, asian } from './culture-food';
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

export const food = {
  [foodKeys.sunny]: [
    korean['돼지국밥'],
    korean['순대국밥'],
    korean['전주비빔밥'],
    korean['소머리국밥'],
    korean['콩나물국밥'],
    korean['떡볶이'],
    korean['육개장'],
    korean['닭개장'],
    korean['참치김밥'],
    korean['제육볶음'],
    korean['갈비찜'],
    korean['바지락칼국수'],
    korean['해물칼국수'],
    korean['콩국수'],
    korean['냉면'],
    korean['고등어조림'],
    korean['알탕'],
    asian['목살 필라프'],
    asian['새우 필라프'],
  ],
  [foodKeys.partlyCloudy]: [korean['돼지국밥'], korean['순대국밥']],
  [foodKeys.mostlyCloudy]: [korean['돼지국밥'], korean['순대국밥']],
  [foodKeys.cloudy]: [korean['돼지국밥'], korean['순대국밥']],
  [foodKeys.rain]: [
    korean['돼지국밥'],
    korean['순대국밥'],
    korean['소머리국밥'],
    korean['굴국밥'],
    korean['김치전'],
    korean['해물파전'],
    korean['동래파전'],
    korean['곱창전골'],
    korean['버섯전골'],
  ],
  [foodKeys.snow]: [korean['돼지국밥'], korean['순대국밥'], korean['추어탕']],
  [foodKeys.thunderstorm]: [
    korean['돼지국밥'],
    korean['순대국밥'],
    korean['비빔밥'],
    korean['한식 카레'],
    korean['김밥'],
  ],
  [foodKeys.fog]: [korean['돼지국밥'], korean['순대국밥']],
  [foodKeys.yellowDust]: [korean['돼지국밥'], korean['순대국밥']],
};
