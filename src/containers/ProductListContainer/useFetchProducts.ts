import { useEffect, useState } from "react";
import axios from "axios";

const useFetchProducts = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetch() {
      setIsLoading(true);

      try {
        const response = await axios({
          url: "https://5d6da1df777f670014036125.mockapi.io/api/v1/product",
        });

        setProducts(response.data)
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetch();
  }, []);

  return { products, isLoading, error };
};

export default useFetchProducts;
