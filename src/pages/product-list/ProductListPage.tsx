import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import HeaderContainer from "../../containers/HeaderContainer/HeaderContainer";
import ProductListContainer from "../../containers/ProductListContainer/ProductListConainer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

const ProductListPage = () => {
  const classes = useStyles();

  return (
    <>
      <HeaderContainer />
      <div className={classes.root}>
        <ProductListContainer />
      </div>
    </>
  );
};

export default ProductListPage;
