import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import RecommendMenu from './components/RecommendMenu';
import FindRestaurants from './components/FindRestaurants';

export default function App() {
  const [reason, setReason] = useState('');
  const [menu, setMenu] = useState('');

  useEffect(() => {
    setReason('비오니까');
    setMenu('떡볶이');
  }, []);

  return (
    <>
      <Navbar />
      <RecommendMenu reason={reason} menu={menu} />
      <FindRestaurants menu={menu} />
    </>
  );
}
