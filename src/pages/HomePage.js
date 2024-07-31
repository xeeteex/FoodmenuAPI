import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const HomePage = () => {
  const nav = useNavigate();
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();

  const getData = async () => {
    setLoad(true);

    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );

      // setLoad(false); finslly used
      setData(response.data);
    } catch (err) {
      setErr(err?.messsage);
      // setLoad(false);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (load) {
    return <h1>Loading...</h1>;
  }

  if (err) {
    return <h1>{err}</h1>;
  }

  return (
    <div className="p-4 grid grid-cols-3 gap-3">
      {data &&
        data?.categories.map((cata) => {
          return (
            <div
              onClick={() => nav(`/category-item/${cata.strCategory}`)}
              key={cata.idCategory}
              className="shadow-xl "
            >
              <h1>{cata.strCategory}</h1>
              <img src={cata.strCategoryThumb} alt="" />
            </div>
          );
        })}
    </div>
  );
};
export default HomePage;
