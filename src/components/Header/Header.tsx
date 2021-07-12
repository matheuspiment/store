import React from "react";
import { isInteger } from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles(() => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: "block",
  },
  sectionDesktop: {
    display: "flex",
  },
}));

const Header = ({
  itemsAmount = 0,
  onClickOnCart
}: {
  itemsAmount?: number;
  onClickOnCart: () => void;
}) => {
  const classes = useStyles();

  const shoppingCartLabel =
    isInteger(itemsAmount) && itemsAmount > 0
      ? `show ${itemsAmount} items in the cart`
      : "No items in your cart";

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Store
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton data-testid="btn-cart" aria-label={shoppingCartLabel} color="inherit" onClick={onClickOnCart}>
              <Badge badgeContent={itemsAmount} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
