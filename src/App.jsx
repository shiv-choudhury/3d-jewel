import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-red-200">
      <ProductList />
    </div>
  );
}

export default App;
