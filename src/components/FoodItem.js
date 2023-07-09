const FoodItem = ({title, image, price}) => {
    return (
        <div className="cart">
            <img className="image" src={image} />
            <div className="cart-detail">
                <h4 className="title">{title}</h4>
                <h4 className="price">{price}</h4>
            </div>
        </div>
    )
}

export default FoodItem;