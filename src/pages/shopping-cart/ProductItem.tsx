import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Add from "@material-ui/icons/Add";
import Delete from "@material-ui/icons/Delete";
import Remove from "@material-ui/icons/Remove";

import { Product } from "../../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flex: "1 0 auto",
    },
    image: {
      width: 151,
    },
    actions: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
  })
);

export interface ProductItemProps {
  product: Product;
  amount: number;
  onIncrease: (id: Product["id"]) => void;
  onDecrease: (id: Product["id"]) => void;
  onRemove: (id: Product["id"]) => void;
}

const ProductItem = ({
  product,
  amount,
  onIncrease,
  onDecrease,
  onRemove,
  ...rest
}: ProductItemProps) => {
  const classes = useStyles();

  const handleIncrease = () => {
    onIncrease(product.id);
  };

  const handleDecrease = () => {
    onDecrease(product.id);
  };

  const handleRemove = () => {
    onRemove(product.id);
  };

  const total = (parseFloat(product.price) * amount).toFixed(2);

  return (
    <Card className={classes.root} {...rest}>
      <CardMedia
        className={classes.image}
        image={product.image}
        title={product.image}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {product.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          {`${product.price} x ${amount} = ${total}`}
          </Typography>
        </CardContent>
        <div className={classes.actions}>
          <IconButton aria-label="Decrease in one" onClick={handleDecrease}>
            <Remove />
          </IconButton>
          <Typography component="div" variant="h5">
            {amount}
          </Typography>
          <IconButton aria-label="Increase in one" onClick={handleIncrease}>
            <Add />
          </IconButton>
          <IconButton aria-label="Remove from cart" onClick={handleRemove}>
            <Delete />
          </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default ProductItem;
