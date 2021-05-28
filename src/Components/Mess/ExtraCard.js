const ExtraCard = ({name, id, price, AddItemToCart}) => {
  return (
    <div className="d-flex p-2 justify-content-around bg-secondary rounded m-2">
      <div className="p-2 text-white text-bold">
        <strong>{name}</strong>

      </div>
      <div className="p-2 text-white">
        <strong>{price}{' '}Rs.</strong>

      </div>
      <button className="btn btn-primary" onClick={() => AddItemToCart (id)}>
        I want this
      </button>
    </div>
  );
};

export default ExtraCard;
