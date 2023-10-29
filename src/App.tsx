import Navbar from './components/Navbar';
import RecommendMenu from './components/RecommendMenu';
import FindRestaurants from './components/FindRestaurants';

export default function App() {
  return (
    <>
      <Navbar />
      <RecommendMenu reason="비오니까" menu="돼지국밥" />
      <FindRestaurants menu="돼지국밥" />
    </>
  );
}
