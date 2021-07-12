import React, { MouseEvent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { Product } from "../../types";

const useStyles = makeStyles({
  root: {
    width: "auto",
  },
  media: {
    height: 140,
  },
});

export interface ProductCardProps {
  product: Product;
  onBuyAction: (product: Product) => void;
}

const ProductCard = ({
  product,
  onBuyAction,
}: ProductCardProps) => {
  const classes = useStyles();

  const handleBuyAction = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    onBuyAction(product);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea aria-label={`See product ${product.name}`}>
        <CardMedia
          className={classes.media}
          image={product.image}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleBuyAction}>
          Buy
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
