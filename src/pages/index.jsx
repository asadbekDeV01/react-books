// import { data } from "autoprefixer";
// import axios from "axios";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";
import db from "../db.json";

export default function Home() {
  // const [data, setdata] = useState([]);
  const data = db.games;
  // setdata(db.games)
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => {
  //       setdata(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
  <Layout>
    <section>
 
      <div className="grid conteiner">
        {data.map((game) => {
          return <Game key={game.id} game={game} />;
        })}
      </div>
    </section>
  </Layout>);
}

const Game = ({ game }) => {
  return (
    <Link className="gameCard" to="/">
      <div className="game_img">
        <img src={game.imageURL} alt={game.title} />
      </div>
      <div className="game_content">
        <div className="gap-8">
          <p className="title">{game.title}</p>
          <p className="description">{game.description}</p>
        </div>
        <div className="card_bottom">
          <p className="developer">{game.developer}</p>
          <button type="button">Read more</button>
        </div>
      </div>
    </Link>
  );
};

// const User = ({ user }) => {
//   return (
//     <div>
//       <p>{user.name}</p>
//       <p>{user.username}</p>
//     </div>
//   );
// };
     {/* //       {data.map((game) => {
  //         return <div key={game.id}>{game.title}</div>
  //       })} */}
