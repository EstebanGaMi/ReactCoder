import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Card
      className=" items-center justify-center text-center"
      sx={{ maxWidth: 345 }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image={item.img}
        title={`image ${item.title}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {item.subtitle}
        </Typography>
        <Typography className=" font-semibold text-purple-500 " variant="h5">
          €{item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${item.id}`}>
          <Button variant="contained" color="secondary" sx={{ ml: 2 }}>
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
export default ProductCard;
