import { useEffect, useState } from 'react';
import {
  useKakaoLoader,
  CustomOverlayMap,
  Map,
  MapMarker,
} from 'react-kakao-maps-sdk';

type KakaoMapProps = {
  keyword: string;
};

interface Marker {
  position: {
    lat: number;
    lng: number;
  };
  content: string;
}

export default function KakaoMap({ keyword }: KakaoMapProps) {
  const [loading, error] = useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAOMAP_JAVASCRIPT_APP_KEY,
    libraries: ['clusterer', 'drawing', 'services'],
  });

  const [LatLng, setLatLng] = useState({
    lat: 33.450701,
    lng: 126.570667,
  });
  const [map, setMap] = useState<kakao.maps.Map>();
  const [ready, setReady] = useState(false);

  const [markers, setMarkers] = useState<Marker[]>([]);
  const [info, setInfo] = useState<Marker>();

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

  useEffect(() => {
    if (!map || !ready) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(
      keyword,
      (data, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const bounds = new kakao.maps.LatLngBounds();

          const markers: Marker[] = data.map((place) => {
            bounds.extend(new kakao.maps.LatLng(+place.y, +place.x));
            return {
              position: {
                lat: +place.y,
                lng: +place.x,
              },
              content: place.place_name,
            };
          });

          setMarkers(markers);
          map?.setBounds(bounds);
        }
      },
      {
        location: new window.kakao.maps.LatLng(LatLng.lat, LatLng.lng),
        radius: 3000,
        sort: kakao.maps.services.SortBy.DISTANCE,
      }
    );
  }, [keyword, map, ready, LatLng]);

  return (
    <Map
      id="map"
      center={LatLng}
      className="w-full h-[350px]"
      level={2}
      onCreate={setMap}
    >
      {markers.map((marker) => (
        <MapMarker
          key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
          position={marker.position}
          onClick={() => setInfo(marker)}
        >
          {info && info.content === marker.content && (
            <div style={{ color: '#000' }}>{marker.content}</div>
          )}
        </MapMarker>
      ))}
      <CustomOverlayMap position={LatLng}>
        {ready && (
          <div className="rounded-lg px-2 py-1 text-sm font-semibold bg-white shadow-inner ring-1 ring-black/5">
            현위치
          </div>
        )}
      </CustomOverlayMap>
    </Map>
  );
}
