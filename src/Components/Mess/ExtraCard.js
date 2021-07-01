const ExtraCard = ({name, id, price, AddItemToCart,editing, MessItemList, setMessItemList, remove}) => {
  return (
    <div className="d-flex p-2 justify-content-between bg-secondary rounded m-2">
      <div className="p-2 text-white text-bold">
        <strong>{name}</strong>

      </div>
      <div className="d-flex justfiy-content-between">
        <div className="p-2 text-white">
          <strong>{price}{' '}Rs.</strong>

        </div>
        <button className="btn btn-primary mx-1" onClick={() => AddItemToCart (id)}>
          I want this
        </button>
          {
            editing?
            <button className="my-auto mx-1 bg-danger text-white" style={{border: "none"}} onClick={() => remove(name)}>-</button>
            : null
          }
      </div>
    </div>
  );
};

export default ExtraCard;
