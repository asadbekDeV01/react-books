import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";

export default function Home() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
        <Layout>
        <section>
          <div className="grid conteiner">
          {data.map((user) => {
            return <User key={user.id} user={user} />;
          })}
          </div>
        </section>
        </Layout>
      
  );
}

const User = ({ user }) => {
    return (
        <div>
            <p>{user.name}</p>
            <p>{user.username}</p>
        </div>
    );
};
