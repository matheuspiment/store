import React, { useCallback } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import HeaderContainer from "../../containers/HeaderContainer/HeaderContainer";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import ProductItem, { ProductItemProps } from "./ProductItem";
import { exclude, increase, decrease } from "../../slicers/cartSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

const ShoppingCartPage = () => {
  const classes = useStyles();

  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const handleIncrease = useCallback(
    (id: ProductItemProps["product"]["id"]) => {
      dispatch(increase(id));
    },
    [dispatch]
  );

  const handleDecrease = useCallback(
    (id: ProductItemProps["product"]["id"]) => {
      dispatch(decrease(id));
    },
    [dispatch]
  );

  const handleRemove = useCallback(
    (id: ProductItemProps["product"]["id"]) => {
      dispatch(exclude(id));
    },
    [dispatch]
  );

  return (
    <>
      <HeaderContainer />
      <div className={classes.root}>
        <Grid container spacing={3}>
          {cartItems.map((item) => (
            <Grid key={item.product.id} item xs={12}>
              <ProductItem
                product={item.product}
                amount={item.amount}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                onRemove={handleRemove}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default ShoppingCartPage;
