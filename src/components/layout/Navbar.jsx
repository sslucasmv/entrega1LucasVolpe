import CartWidget from "../common/CartWidget"

const Navbar = () => {
return <nav>

                <div className="nav-center">
                        <div className="logo">
                                <a href="" className="link-logo">
                                        <img src="https://i.ibb.co/7Gjg8NB/logourbanshop.png"/>
                                        
                                        <div className="logo-title">
                                                <span className="color-logo1">URBAN</span>
                                                <span  className="color-logo2">SHOP</span>
                                        </div> 
                                </a>
                        </div>     
                        <ul className="navigation">
                                <li><a href="">Toda las categorias</a></li>
                                <li><a href="">Deportivas</a></li>
                                <li><a href="">Urbanas</a></li>
                                <li><a href="">Zapatilla</a></li>
                                <li><a href="">Urbanas</a></li>
                        </ul>
                        <div className="card-widget">
                                <div className="icon-avatar">
                                <i class="fa-solid fa-user icon-user"></i>
                                </div>
                                <CartWidget />
                        </div>
                </div>
        </nav>
}
export default Navbar
