import { Link } from "react-router-dom";
import icon from "../../img/icon.svg";
import logo from "../../img/logo.png";
import s from './header.module.css';
import { useSelector } from 'react-redux';

function Header() {
    const shopping_cart = useSelector(store => store.shopping_cart);
    const shopping_cart_length = shopping_cart.reduce((total, item) => total + item.count, 0); // Убираем повторный вызов reduce

    return (
        <div className={s.header}>
            <Link to="/">
                <img className={s.logo} src={logo} alt="Logo" />
            </Link>
            <div className={s.navBar}>
                <Link className={s.navBarElem} to="/">
                    <p className={s.navBarText}>Home</p>
                </Link>
                <Link className={s.navBarElem} to="/categories/all">
                    <p className={s.navBarText}>Categories</p>
                </Link>
                <Link className={s.navBarElem} to="/products/all">
                    <p className={s.navBarText}>Products</p>
                </Link>
                <Link className={s.navBarElem} to="/products/sales">
                    <p className={s.navBarText}>Sales</p>
                </Link>
            </div>
            <Link to="/shopping_cart">
                {shopping_cart_length > 0 && (
                    <p className={s.countShoppingCart}>{shopping_cart_length}</p>
                )}
                <img className={s.icon} src={icon} alt="Shopping Cart" />
            </Link>
        </div>
    );
}

export default Header;
