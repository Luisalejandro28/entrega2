import "./ItemDetail.css";
const ItemDetail = ({ item }) => {
  return (
    <div className="CardDetail">
      <img src={item.img} alt={item.title} className="img-product" />
      <div className="card-detail">
        <div className="item-content">
          <div>{item.title}</div>
          <div>{item.description}</div>
          <div>{item.price}$</div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
