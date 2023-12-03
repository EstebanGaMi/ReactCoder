// import { Link } from "react-router-dom";
// import CounterContainer from "../../common/counter/CounterContainer";

// export const ItemDetail = ({
//   productSelected,
//   onAdd,
//   initial,
//   showCounter,
// }) => {
//   return (
//     <div>
//       <div className={"containerItemDetail"}>
//         <div className={"containerImage"}>
//           <img src={productSelected.img} alt="" />
//         </div>

//         <div className={"containerDetail"}>
//           <h2 style={{ fontFamily: "monospace" }}>
//             <span style={{ fontSize: "23px" }}>Nombre:</span>{" "}
//             {productSelected.title}
//           </h2>
//           <h2 style={{ fontFamily: "monospace" }}>
//             <span style={{ fontSize: "23px" }}>Descripcion:</span>{" "}
//             {productSelected.description}
//           </h2>
//           <h2 style={{ fontFamily: "monospace" }}>
//             <span style={{ fontSize: "23px" }}>Precio:</span> $
//             {productSelected.price}.-
//           </h2>
//         </div>
//       </div>

//       {initial && <h4>Ya tienes {initial} unidades</h4>}

//       {showCounter ? (
//         <div style={{ display: "flex", justifyContent: "center" }}>
//           <CounterContainer
//             stock={productSelected.stock}
//             onAdd={onAdd}
//             initial={initial}
//           />
//         </div>
//       ) : (
//         <Link to="/cart">Terminar compra</Link>
//       )}
//     </div>
//   );
// };

import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import CounterContainer from "../../common/counter/CounterContainer";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ItemDetail({ productSelected, onAdd }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <section className="flex w-3/4 justify-center m-auto mt-[180px] text-center">
      <CardMedia
        component="img"
        height="194"
        image={productSelected.img}
        alt={productSelected.name}
      />
      <Card className="w-3/4">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {productSelected.title}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <CardActions>
            <CounterContainer stock={productSelected.stock} onAdd={onAdd} />
          </CardActions>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>

            <Typography paragraph>{productSelected.description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </section>
  );
}
