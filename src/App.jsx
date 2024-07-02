
import { useEffect, useState } from "react";
import ItemListContainer from "./ItemListContainer";
import Navbar from "./components/layout/Navbar";
import productsMock from "./productsMock";


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productsMock()
      .then(response => {
        setProducts(response);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="container-center">
          <div className="content-card">
          <ItemListContainer products={products} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
