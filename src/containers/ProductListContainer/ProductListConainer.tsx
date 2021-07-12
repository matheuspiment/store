import React, { useCallback } from "react";

import ProductList, {
  ProductListProps,
} from "../../components/ProductList/ProductList";
import { useAppDispatch } from "../../hooks/redux";
import { add } from "../../slicers/cartSlice";
import useFetchProducts from "./useFetchProducts";

const ProductListContainer = () => {
  const dispatch = useAppDispatch();
  const { products, isLoading, error } = useFetchProducts();

  const handleBuyProductAction = useCallback(
    (product: Parameters<ProductListProps["onBuyProductAction"]>[0]) => {
      dispatch(add(product));
    },
    [dispatch]
  );

  return (
    <ProductList
      onBuyProductAction={handleBuyProductAction}
      products={products}
    />
  );
};

export default ProductListContainer;
