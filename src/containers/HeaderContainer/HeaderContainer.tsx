import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import { useAppSelector } from "../../hooks/redux";
import Header from "../../components/Header/Header";
import routes from "../../routes";

const HeaderContainer = () => {
  const itemsAmount = useAppSelector((state) => state.cart.items.length);
  const history = useHistory();

  const handleClickOnCart = useCallback(() => {
    history.push(routes.SHOPPING_CART);
  }, [history]);

  return <Header itemsAmount={itemsAmount} onClickOnCart={handleClickOnCart} />;
};

export default HeaderContainer;
