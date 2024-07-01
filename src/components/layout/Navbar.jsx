import CartWidget from "../common/CartWidget"

const Navbar = () => {
        return <nav>
                <h1>Logo</h1>
                        <ul>
                                <li>Toda las categorias</li>
                                <li>Deportivas</li>
                                <li>Urbanas</li>
                        </ul>
                <h4>Carrito</h4>
                <CartWidget />
        </nav>
}
export default Navbar
