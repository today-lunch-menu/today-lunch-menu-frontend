import { useEffect, useState } from 'react';
import { useKakaoLoader, CustomOverlayMap, Map } from 'react-kakao-maps-sdk';

export default function KakaoMap() {
  const [loading, error] = useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAOMAP_JAVASCRIPT_APP_KEY,
    libraries: ['clusterer', 'drawing', 'services'],
  });

  const [LatLng, setLatLng] = useState({
    lat: 33.450701,
    lng: 126.570667,
  });
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatLng({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setReady(true);
        },
        () => alert('위치 정보를 가져올 수 없습니다.'),
        { enableHighAccuracy: true, maximumAge: 0, timeout: Infinity }
      );
    }
  }, []);

  return (
    <Map id="map" center={LatLng} className="w-full h-[350px]" level={2}>
      <CustomOverlayMap position={LatLng}>
        {ready && (
          <div className="rounded-lg px-2 py-1 text-sm bg-white shadow-inner ring-1 ring-black/5">
            현위치
          </div>
        )}
      </CustomOverlayMap>
    </Map>
  );
}
