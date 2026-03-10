import Sidebar from "./Sidebar";
import Student from "./Student";
import Product from "./Product";
import Counter from "./use-state/Counter";
import Greet from "./use-state/Greet";
import Togg from "./use-state/Togg";
import ArrUpdate from "./use-state/ArrUpdate";
function MyHeader() {
  const name = "khadss";
  let a = 5;
  let b = 10;
  let c = a + b;
  let isloggedin = false;
  const click = () => {
    alert("button clicked ");
  };

  // let menus = ["home", "About", "Service"];
  // let products = ["dairymilk", "Kitkat", "Maruti suzuki", "alto"];
  let products = [
    { pname: "daiymilk", price: 2000, cat: "mobile" },
    { pname: "Kitkat", price: 2000, cat: "mobile" },
    { pname: "Maruti suzukik", price: 2000, cat: "mobile" },
  ];
  return (
    <>
      {" "}
      {isloggedin ? <h1>Wecome to {name}</h1> : <h1>Please login</h1>}
      <p>
        {a < b ? <h6>B is greater</h6> : <h6>A is greater</h6>}
        {a}+{b}={c}{" "}
      </p>
      {/* <Sidebar menu={menus}></Sidebar> */}
      {/* <Sidebar product={products}></Sidebar> */}
      {products.map((products, index) => (
        <Product
          key={index}
          pname={products.pname}
          price={products.price}
          cat={products.cat}
        ></Product>
      ))}
      <button onClick={click}>click</button>
      <ArrUpdate></ArrUpdate>
      <Student name="rahul" age="25"></Student>
      <Student name="pretty" age="12"></Student>
      <Greet></Greet>
      <Togg></Togg>
      {/* <Product name="dairy milk" price="20" category="chocolate"></Product>
      <Product name="kitkat" price="20" category="chocolate"></Product>
      <Product name="maruti suzuki" price="2000000" category="car"></Product> */}
      <Counter></Counter>
    </>
  );
}

export default MyHeader;
