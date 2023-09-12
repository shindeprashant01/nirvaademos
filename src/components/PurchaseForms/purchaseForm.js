import React from "react";
import "./purchaseForm.css";
import ProductDetails from "./ProductDetails/productDetails";
import TotalDetails from "./TotalDetails/totalDetails";
import Button from "react-bootstrap/Button";
import { FaSistrix } from "react-icons/fa";
// import { BootstrapIcon } from 'react-bootstrap-icons';

// import SearchIcon from '@mui/icons-material/Search';
// import SearchIcon from '@mui/icons-material/Search';

const PurchaseForm = () => {
  return (
    <div>
      <form>
        <div className="w3-container w3-card w3-white w3-round w3-margin main-box-p">
          <div className="container-pforms">
            <div className="forms-outline-pforms">
              <div>
                <div className="tags">    
                  <h2>Purchase Form</h2> <hr />
                </div>

                {/* Purchase Form Section -- Start*/}
                <div className="purchase-form">
                  <div className="input-container-pform">
                    <label className="label-pforms">Purchase Order No:</label>
                    <div>
                      <input
                        type="text"
                        className="form-control input-details-pform"
                        placeholder="Purchase Order No."
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </div>
                  </div>

                  <div className="input-container-pform">
                    <label className="label-pforms">Quatation Number:</label>
                    <div>
                      <input
                        type="text"
                        className="form-control input-details-pform"
                        placeholder="Quatation No."
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </div>
                  </div>

                  <div className="input-container-pform">
                    <label className="label-pforms">Bill To:</label>

                    <input
                      type="text"
                      className="form-control input-details-pform"
                      placeholder="Bill To."
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                </div>
                {/* Purchase Form Section -- Ended  */}

                <div className="tags">
                  <h2>Vendor Details</h2>
                  <hr />
                </div>

                {/* Vendor Details Section -- Start */}
                <div className="vendor-details">
                  <div className="vendor-sub-details">
                    <div className="input-container-vendor-detail">
                      <label className="label-pforms">Company Name:</label>
                      <input
                        type="text"
                        className="form-control input-details-vendor-detail-unique"
                        placeholder=" Company Name"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                      <span>
                        <FaSistrix className="various-icon" />
                      </span>
                    </div>
                    <div className="input-container-vendor-detail">
                      <label className="label-pforms">Address:</label>
                      <input
                        type="text"
                        className="form-control input-details-vendor-detail"
                        placeholder="Address"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </div>
                    <div className="input-container-vendor-detail">
                      <label className="label-pforms">Vendor Name:</label>
                      <input
                        type="text"
                        className="form-control input-details-vendor-detail"
                        placeholder="Vendor Name"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </div>

                    <div className="input-container-vendor-detail">
                      <label className="label-pforms">Contact No.:</label>
                      <input
                        type="number"
                        className="form-control input-details-vendor-detail"
                        placeholder="Contact No."
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </div>

                    <div className="input-container-vendor-detail">
                      <label className="label-pforms">GSTIN No.:</label>
                      <input
                        type="number"
                        className="form-control input-details-vendor-detail"
                        placeholder="GSTIN No."
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="tags">
                  <h2>Ship To</h2>
                  <hr />
                </div>
                <div className="ship-details">
                  <div className="ship-sub-details">
                    <div className="input-container-vendor-detail">
                      <label className="label-pforms">Name:</label>
                      <input
                        type="text"
                        className="form-control input-details-vendor-detail"
                        placeholder="Name"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </div>

                    <div className="input-container-vendor-detail">
                      <label className="label-pforms">Address:</label>
                      <input
                        type="text"
                        className="form-control input-details-vendor-detail"
                        placeholder="Address"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </div>

                    <div className="input-container-vendor-detail">
                      <label className="label-pforms">S.E.Name:</label>
                      <input
                        type="text"
                        className="form-control input-details-vendor-detail-unique"
                        placeholder="S.E Name"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                      <span>
                        <FaSistrix className="various-icon" />
                      </span>
                    </div>
                    <div className="input-container-vendor-detail">
                      <label className="label-pforms">Contact No.:</label>
                      <input
                        type="number"
                        className="form-control input-details-vendor-detail"
                        placeholder="Contact No."
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </div>

                    <div className="input-container-vendor-detail">
                      <label className="label-pforms">S.E.Name:</label>
                      <input
                        type="text"
                        className="form-control input-details-vendor-detail-unique"
                        placeholder="S.E Name"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                      <span>
                        <FaSistrix className="various-icon" />
                      </span>
                    </div>
                    <div className="input-container-vendor-detail">
                      <label className="label-pforms">Contact No.:</label>
                      <input
                        type="number"
                        className="form-control input-details-vendor-detail"
                        placeholder="Contact No."
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="ship-details">
                <div className="ship-sub-details">
                <ProductDetails />
                
                </div>
                 </div>
                 <div className="total-detail">
                 <TotalDetails/>
                 
                 </div>
                 <div className="btn-submit-pform">
                 <Button variant="primary">Submit</Button>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PurchaseForm;



