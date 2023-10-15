import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { customTheme } from "../../../../themeConfig";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

export const Cart = () => {
  return (
    <>
      <section className="flex justify-center items-center m-auto my-[15%] text-center">
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                Es
              </Avatar>
            }
            title="Esteban Garay"
            subheader="September 15, 2023"
          />
          <img src="./products/mate1.png" alt="" />

          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Mate1
            </Typography>
          </CardContent>
          <CardActions disableSpacing className="flex justify-center">
            <ThemeProvider theme={customTheme}>
              <Button
                onClick={() => onAdd(count)}
                variant="contained"
                color="secondary"
                sx={{ ml: 2 }}
              >
                Buy now
              </Button>
            </ThemeProvider>
            <ThemeProvider theme={customTheme}>
              <Button
                onClick={() => onAdd(count)}
                variant="contained"
                color="secondary"
                sx={{ ml: 2 }}
              >
                Discart
              </Button>
            </ThemeProvider>
          </CardActions>
        </Card>
      </section>
    </>
  );
};
