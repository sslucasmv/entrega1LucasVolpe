
import { useEffect, useState } from "react";
import ItemListContainer from "./ItemListContainer";
import productsMock from "./productsMock";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ItemCountContainer from "./components/common/itemCount/ItemCountContainer";


function App() {
  
  const [products, setProducts] = useState([]);


  useEffect(() => {
    productsMock()
      .then(response => {
        setProducts(response);
      })
      .catch(err => console.error(err));
  }, []);


console.log(products)
  return (
    <>
      <Navbar/>
      <div className="container-fluid pb-40">
        <div className="container-center pb-30">
          <div className="content-card pb-30">
          <ItemListContainer products={products}/>
          </div>
        </div>
      </div>
      
  <Footer />
 
       
    </>
  );
}

export default App;
