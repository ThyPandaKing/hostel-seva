import React from 'react';
import OrderItem from './OrderItem';

export const BillModal = ({Cart, TotalPrice}) => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target="#BillModal"
      >
        Place Order
      </button>

      <div
        className="modal fade"
        id="BillModal"
        tabIndex="-1"
        aria-labelledby="BillModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="BillModalLabel">Order Details</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body mx-5">
              <h3>Some Bill Name</h3>
              <hr />
              {Cart.map (item => {
                return <OrderItem item={item} key={item._id} />;
              })}
              <div
                className="total d-flex"
                style={{justifyContent: 'space-between'}}
              >
                <h5>Total Amount</h5>
                <div>{TotalPrice}.00</div>
              </div>
              <button className="btn  btn-secondary float-right mt-3">
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
