import { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function KakaoMap() {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new window.kakao.maps.Map(container, options);
  }, []);

  return <div id="map" className="w-full h-[400px]" />;
}
