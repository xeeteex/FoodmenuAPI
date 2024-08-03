
import React from 'react'
import { useParams } from 'react-router';
import ItemCard from '../components/ItemCard';
import { useApiHooks } from '../hooks/apiHooks';

const ItemByCategory = () => {

  const { cata } = useParams();

  const [load,data,err] =useApiHooks('https://www.themealdb.com/api/json/v1/1/filter.php',{c: cata})

  // const nav = useNavigate();

  // const [data, setData] = useState();
  // const [load, setLoad] = useState(false);
  // const [err, setErr] = useState();

  // const getData = async () => {
  //   setLoad(true);
  //   try {
  //     const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php', {
  //       params: {
  //         c: cata
  //       }
  //     });


  //     setData(response.data);

  //   } catch (err) {
  //     console.log(err);
  //     setErr(err?.message);

  //   } finally {
  //     setLoad(false);

  //   }
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  if (load) {
    return <h1>Loading....</h1>
  }

  if (err) {
    return <h1>{err}</h1>
  }


  console.log(data);

  return (
    <div className='p-4 grid grid-cols-3 gap-4'>

      {data && data?.meals?.map((meal) => {
        return <ItemCard 
        meal={meal}
        key={meal.idMeal}/>

        // <div onClick={() => nav(`/item-detail/${meal.idMeal}`)} key={meal.idMeal} className='shadow-xl'>
        //   <h1>{meal.strMeal}</h1>
        //   <img src={meal.strMealThumb} alt="" />

        // </div>
      })}




    </div>
  )
}

export default ItemByCategory