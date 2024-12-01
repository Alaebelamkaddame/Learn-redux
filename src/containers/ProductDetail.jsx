import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct } from "../redux/actions/productAction";

function ProductsDetails() {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const productSelected = useSelector((state) => state.product);

    const fetchProductDetails = async (productId) => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
            if (response && response.data) {
                dispatch(selectProduct(response.data));
            }
        } catch (err) {
            console.error("Error fetching product details:", err);
        }
    };

    useEffect(() => {
        if (productId) {
            fetchProductDetails(productId);
        }
    }, [productId]);

    if (!productSelected || Object.keys(productSelected).length === 0) {
        return <div>Loading...</div>;
    }

    const { title, image, price, description, category } = productSelected;

    return (
        <div className="ui grid container">
            <div className="ui placeholder segment">
                <div className="ui two column stackable center aligned grid">
                    <div className="ui vertical divider">AND</div>
                    <div className="middle aligned row">
                        <div className="column lp">
                            <img className="ui fluid image" src={image} alt={title} />
                        </div>
                        <div className="column rp">
                            <h1>{title}</h1>
                            <h2>
                                <a className="ui teal tag label">${price}</a>
                            </h2>
                            <h3 className="ui brown block header">{category}</h3>
                            <p>{description}</p>
                            <div className="ui vertical animated button" tabIndex="0">
                                <div className="hidden content">
                                    <i className="shop icon"></i>
                                </div>
                                <div className="visible content">Add to Cart</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductsDetails;
