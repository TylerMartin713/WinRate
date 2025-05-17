import { useEffect, useState } from "react";
import { GetMediaByUserId } from "../../Services/GetMediaByUserId.jsx";
import { useOutletContext } from "react-router-dom";
import { MediaCard } from "./MediaCard.jsx";
import TradingViewWidget from "./ChartWidget.jsx";

export const UserMedia = () => {
  const [media, setMedia] = useState([]);
  const { currentUser } = useOutletContext();
  useEffect(() => {
    if (currentUser.id) {
      GetMediaByUserId(currentUser.id).then(setMedia);
    }
  }, [currentUser.id]);

  return (
    <div>
      {/* {media.map((item) => {
        return <MediaCard key={item.id} media={item} />;
      })} */}
      <div className="mt-8 w-full">
        <TradingViewWidget />
      </div>
    </div>
  );
};
