import { useCallback, useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import RecommendMenu from './components/RecommendMenu';
import FindRestaurants from './components/FindRestaurants';

import foods from './data/weather-foods';

export default function App() {
  const [reason, setReason] = useState('');
  const [menu, setMenu] = useState('');
  const [randomCount, setRandomCount] = useState(-1);
  const target = useRef<any[]>(null);

  const onClickOtherMenu = useCallback(() => {
    if (target.current) {
      setRandomCount(Math.floor(Math.random() * target.current.length));
    }
  }, []);

  useEffect(() => {
    target.current = foods.sunny;

    setReason('맑으니까');
  }, []);

  useEffect(() => {
    if (reason) {
      onClickOtherMenu();
    }
  }, [reason, onClickOtherMenu]);

  useEffect(() => {
    if (randomCount >= 0 && target.current) {
      const food = target.current[randomCount];

      setMenu(food.name);
    }
  }, [randomCount]);

  return (
    <>
      <Navbar />
      <RecommendMenu
        reason={reason}
        menu={menu}
        onClickOtherMenu={onClickOtherMenu}
      />
      <FindRestaurants menu={menu} />
    </>
  );
}
