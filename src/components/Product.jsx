function Product({ pname, price, cat }) {
  return (
    <div style={styles.card}>
      <h2>{pname}</h2>
      <p>Price:{price}</p>
      <p>Category:{cat}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px",
    borderRadius: "8px",
    width: "200px",
    textAlign: "center",
  },
};
export default Product;
