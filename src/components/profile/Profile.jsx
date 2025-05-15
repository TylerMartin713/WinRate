import { useEffect, useState } from "react";
import { GetUserProfileStats } from "../../Services/GetUserProfileStats.jsx";

export const Profile = ({ currentUser }) => {
  const [user, setUser] = useState([]);
  const [longInput, setLongInput] = useState("");
  useEffect(() => {
    GetUserProfileStats(currentUser.id).then(setUser);
  }, [currentUser.id]);

  return (
    <article>
      <header>STATS</header>
      <section>
        <input
          type="number"
          placeholder="Add Long Trades"
          value={longInput}
          onChange={(event) => {
            setLongInput(event.target.value);
          }}
        />
        <div>Long Trades: {user.userStat?.tradeLong}</div>
      </section>
      <section>
        <div>Short Trades: {user.userStat?.tradeShort}</div>
      </section>
      <section>
        <div>AVG Trade Direction: {user.userStat?.avgTradeDirection}</div>
      </section>
    </article>
  );
};
