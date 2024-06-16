import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import RecommendMenu from './components/RecommendMenu';
import FindRestaurants from './components/FindRestaurants';

import foods from './data/food';

export default function App() {
  const [reason, setReason] = useState('');
  const [menu, setMenu] = useState('');

  useEffect(() => {
    const random = Math.floor(Math.random() * foods.rain.length);
    const target = foods.rain[random];

    setReason('비오니까');
    setMenu(target.name);
  }, []);

  return (
    <>
      <Navbar />
      <RecommendMenu reason={reason} menu={menu} />
      <FindRestaurants menu={menu} />
    </>
  );
}
