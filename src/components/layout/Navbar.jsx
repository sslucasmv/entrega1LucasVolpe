import CartWidget from "../common/CartWidget"

const Navbar = () => {
        return <nav>
                <div className="nav-center">
                <div className="logo">
                        <img src="https://github.com/sslucasmv/entrega1LucasVolpe/blob/main/src/images/logourbanshop.png" />
                        <div className="logo-title">
                                <span className="color-logo1">URBAN</span>
                                <span  className="color-logo2">SHOP</span>
                        </div>
                        
                        
                </div>     
           
                        <ul className="navigation">
                                <li>Toda las categorias</li>
                                <li>Deportivas</li>
                                <li>Urbanas</li>
                        </ul>
                <h4>Carrito</h4>
                <CartWidget />
                </div>
        </nav>
}
export default Navbar
