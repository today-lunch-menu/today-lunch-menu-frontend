import Recommend from './components/Recommend';
import Header from './components/ui/Header';

function App() {
  return (
    <>
      <Header
        title="오늘 점심 뭐 먹을래?"
        description="경아님이 점심 메뉴를 추천해드립니다! 🎉"
      />
      <Recommend reason="비오니까" menu="돼지 국밥" />
    </>
  );
}

export default App;
