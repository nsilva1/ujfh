import React from 'react';

export default () => {
  return (
    <footer className="text-white" style={{ backgroundColor: 'black' }}>
      <div className="row">
        <div className="col-md-3">
          <h3>Customer Services</h3>
          <p>Help Center</p>
          <p>Terms and Policy</p>
          <p>Open Dispute</p>
        </div>
        <div className="col-md-3">
          <h3>My Account</h3>
          <p>Login</p>
          <p>Register</p>
          <p>Settings</p>
          <p>My Orders</p>
          <p>My Wishlist</p>
        </div>
        <div className="col-md-3">
          <h3>About</h3>
          <p>Our History</p>
          <p>How to Buy</p>
          <p>Delivery and Payment</p>
          <p>Advertise</p>
          <p>Partnership</p>
        </div>
        <div className="col-md-3">
          <h3>Contacts</h3>
          <p>Phone: +234XXXXXXXXXX</p>

          <div className="icons ">
            <i className="fab fa-facebook fa-2x" />
            <i className="fab fa-youtube fa-2x" />
            <i className="fab fa-instagram fa-2x" />
            <i className="fab fa-twitter fa-2x" />
          </div>
        </div>
      </div>
      &copy; {new Date().getFullYear()} UJ Fashion House
    </footer>
  );
};
