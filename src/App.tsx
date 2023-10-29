import Header from './components/ui/Header';
import RecommendMenu from './components/RecommendMenu';
import FindRestaurants from './components/FindRestaurants';

function App() {
  return (
    <>
      <Header
        title="오늘 점심 뭐 먹을래?"
        description="경아님이 점심 메뉴를 추천해드립니다! 🎉"
      >
        Button?
      </Header>
      <RecommendMenu reason="비오니까" menu="돼지 국밥" />
      <FindRestaurants menu="돼지 국밥" />
    </>
  );
}

export default App;
