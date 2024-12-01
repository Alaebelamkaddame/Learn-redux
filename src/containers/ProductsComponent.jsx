import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductsComponent() {
    const products = useSelector((state) => state.allProducts.products);

    return (
        <div className="ui grid">
            {products.map((product) => (
                <div className="four wide column" key={product.id}>
                    <Link to={`/product/${product.id}`}>
                        <div className="ui card">
                            <div className="image">
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className="content">
                                <div className="header">{product.title}</div>
                                <div className="meta price">${product.price}</div>
                                <div className="meta">{product.category}</div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ProductsComponent;
