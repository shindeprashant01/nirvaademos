import React from "react";
import { CgCalculator } from "react-icons/cg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// import './productDetails.css';

const ProductDetails = () => {
  return (
    <div>
      <div className="tags">
        <h2>Products</h2>
        <hr />
      </div>
      <div className="product-details">
        <div className="product-sub-details">
          <div className="input-container-vendor-detail">
            <label className="label-pforms">Product Details:</label>
            <input
              type="text"
              className="form-control input-details-vendor-detail"
              placeholder="Address"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
          <div className="input-container-vendor-detail">
            <label className="label-pforms">HSN/SAC Codes:</label>
            <input
              type="text"
              className="form-control input-details-vendor-detail"
              placeholder="HSN/SAC Codes"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
          <div className="input-container-vendor-detail">
            <label className="label-pforms">Moddel:</label>
            <input
              type="text"
              className="form-control input-details-vendor-detail"
              placeholder="Model"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
          <div className="input-container-vendor-detail">
            <label className="label-pforms">Description:</label>
            <input
              type="text"
              className="form-control input-details-vendor-detail"
              placeholder="Description"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
          <div className="input-container-vendor-detail">
            <label className="label-pforms">UOM:</label>
            <input
              type="text"
              className="form-control input-details-vendor-detail"
              placeholder="UOM"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
          <div className="input-container-vendor-detail">
            <label className="label-pforms">Make:</label>
            <input
              type="text"
              className="form-control input-details-vendor-detail"
              placeholder="Make"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
          <div className="input-container-vendor-detail">
            <label className="label-pforms">Qunatity:</label>
            <input
              type="text"
              className="form-control input-details-vendor-detail"
              placeholder="Quantity"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
          <div className="input-container-vendor-detail">
            <label className="label-pforms">Rate:</label>
            <input
              type="text"
              className="form-control input-details-vendor-detail"
              placeholder="Rate"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
          <div className="input-container-vendor-detail">
            <label className="label-pforms">Value:</label>
            <input
              type="text"
              className="form-control input-details-vendor-detail"
              placeholder="Value"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>

          <div className="input-container-vendor-detail">
            <label className="labels-pforms-unique">GST Type:</label>
            <div className="input-div-pforms">
              <Form.Select aria-label="Default select example input-div-pforms-label">
                <option>Open this select menu</option>
                <option value="1">GST</option>
                <option value="2">IGST</option>
              </Form.Select>
            </div>
          </div>

          <div className="input-container-vendor-detail">
            <label className="labels-pforms-unique">GST %:</label>
            <div className="input-div-pforms">
              <Form.Select aria-label="Default select example input-div-pforms-label">
                <option>Open this select menu</option>
                <option value="1">5%</option>
                <option value="2">8%</option>
                <option value="2">12%</option>
                <option value="2">18%</option>
                <option value="2">23%</option>
              </Form.Select>
            </div>
          </div>

          <div className="input-container-vendor-detail">
                      <label className="label-pforms">Product Value:</label>
                      <input
                        type="text"
                        className="form-control input-details-vendor-detail-unique"
                        placeholder="Product Value"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                      <span>
                      <CgCalculator className="various-icon" />
                      </span>
                    </div>
        </div>
        
        
      </div>
      <div className="btn-submit-pform">
        <Button variant="primary"> Add Products</Button>
      </div>
      <hr />
    </div>
  );
};

export default ProductDetails;

// <div>
//           <label className="label-pforms">GST Type :</label>
//           <select className="input-details-pforms">
//             <option>GST</option>
//             <option>IGST</option>
//           </select>
//         </div>
//         <div>
//           <label className="label-pforms">GST % :</label>
//           <select className="input-details-pforms">
//             <option>5%</option>
//             <option>8%</option>
//             <option>12%</option>
//             <option>18%</option>
//             <option>23%</option>
//           </select>
//         </div>
//         <div className="icon-label">
//           <label className="label-pforms">Product Value:</label>
//           <input type="text" className="input-details-pforms-unique" />
//           <span>
//             
//           </span>
//         </div>