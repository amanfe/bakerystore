import { HeaderContent } from "../common/mockData";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Header = () => {
  const cartDetails = useSelector(store => store.cart.items);
  const option = (item) => {
    return (
        <Link key={item.id} to={item.path} style={{"textDecoration": "inherit", "color": "inherit"}}>
            <div key={item.id} className="header-option">
                <img className="header-img" src={item.image} alt={item.name} />
                <div className="text-content">
                <p>{item.title}</p>   {/* Alternative - use image or Font-awesome. Avoinind for demo purpose  */}
                <p className="header-item-desc">{item.previewDescription}</p>
                </div>
            </div>
        </Link>
    );
  };

  return (
    <header className="header-container">
      <div className="caremal-background">
        <Link to="/cart">
          cart: {cartDetails.length}
        </Link>
      </div>
      <div className="header-display">
        {HeaderContent.map((el) => option(el))}
      </div>
    </header>
  );
};

export default Header;
