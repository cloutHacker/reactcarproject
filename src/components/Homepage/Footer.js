const Footer = () => {
    return (
<div>
<div className="container-fluid by-dark sticky-bottom mt-auto">
  <footer className="py-0">
    <div className="row">
      <div className="col-2">
        <h5 className="text-underline">About us</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
        </ul>
      </div>

      <div className="col-2">
        <h5 className="text-underline">Social media</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Twitter
            <span className="fa fa-bird"></span>
          </a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Instagram
            <span className="fa fa-cart-arrow-down"></span>
          </a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Facebook</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">whatsapp</a></li>
        </ul>
      </div>

      <div className="col-2">
        <h5 className="text-underline">Lincense</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Terms and Conditions</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Privacy</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Copyright</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">License</a></li>
        </ul>
      </div>

      <div className="col-4 offset-1">
        <form>
          <h5>Add your comments</h5>
          <p>Please let me know your comments.</p>
          <div className="d-flex w-100 gap-2">
            <label className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
            <button className="btn btn-primary" type="button">Send</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex justify-content-between py-4 my-4 border-top">
      <p>&copy; 2021 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-dark" href="#"></a></li>
        <li className="ms-3"><a className="link-dark" href="#"></a></li>
        <li className="ms-3"><a className="link-dark" href="#"></a></li>
      </ul>
    </div>
  </footer>
</div>

</div>
    )
}

export default Footer;