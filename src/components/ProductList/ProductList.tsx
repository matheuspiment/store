import React from "react";
import Grid from "@material-ui/core/Grid";

import ProductCard, {
  ProductCardProps,
} from "../../components/ProductCard/ProductCard";
import { Product } from "../../types";

export interface ProductListProps {
  products: Product[];
  onBuyProductAction: ProductCardProps["onBuyAction"];
}

const ProductList = ({
  products,
  onBuyProductAction,
}: ProductListProps) => {
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <ProductCard product={product} onBuyAction={onBuyProductAction} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
