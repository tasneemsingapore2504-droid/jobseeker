function Sidebar(props) {
  return (
    <>
      <div class="sidebar">
        {/* <a class="active" href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a> */}
      </div>
      <div class="content">
        <h1>Responsive Sidebar</h1>
        <p>Write the content here</p>
        {/* <h4>
          {props.menu.map((menus) => (
            <h3>{menus}</h3>
          ))}
        </h4> */}
        <h4>
          {props.product.map((products) => (
            <h3>{products}</h3>
          ))}
        </h4>
      </div>
    </>
  );
}
export default Sidebar;
