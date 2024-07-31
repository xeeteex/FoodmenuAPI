import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

const ItemCard = ({ meal: { strMeal, strMealThumb,idMeal } }) => {

  const nav = useNavigate();

  // const per = {
  //   ni: {
  //     a: 9
  //   }
  // };

  // const { ni: { a } } = per;
  return (
    <Card className=" overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src={strMealThumb}
          alt="ui/ux review check"
        />
      </CardHeader>
      
      <CardBody className="space-y-2">
        <Typography variant="h5" color="blue-gray">
          {strMeal}
        </Typography>

        
        
        <Button onClick={() => nav(`/item-detail/${idMeal}`)}>View Detail</Button>
      </CardBody>




    </Card>
  )
}

export default ItemCard