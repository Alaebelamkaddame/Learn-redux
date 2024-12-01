import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { setProducts } from "../redux/actions/productAction";
import ProductsComponent from "./ProductsComponent";

function ProductsList() {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();

    const fetchProduct = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            if (response && response.data) {
                dispatch(setProducts(response.data));
            }
        } catch (err) {
            console.error("Error fetching products:", err);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    console.log("Products fetched from Redux:", products);

    return (
        <div className="ui grid container">
            <ProductsComponent />
        </div>
    );
}

export default ProductsList;
 