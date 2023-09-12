import React ,{useState}from 'react'
import Button from "react-bootstrap/Button";
import { FaSistrix } from "react-icons/fa";
import Form from "react-bootstrap/Form";

const ServiceFolder = () => {


    const [inputList, setInputList] = useState([
        {
          selectService: "",
          subSelectService: "",
          selectAmc: "",
          assignValue: "",
          remark: "",
        },
      ]);
    
      const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
      };
    
      const handleAddClick = () => {
        setInputList(...inputList, {
          selectService: "",
          subSelectService: "",
          selectAmc: "",
          assignValue: "",
          remark: "",
        });
      };
  return (   
 
          <div className="service-section">
          {inputList.map((x, i) => {
            return (
            <div className="service-section-create-project">
          
              <div className="input-container-service-create-project">
                <Form.Select
                  aria-label="Default select example"
                  className="select-service-create-project"
                  name="selectService"
                  value={x.selectService}
                  onChange={(e) => handleInputChange(e, i)}
                >
                  <option>Select Service</option>
                  <option value="1">Electrial</option>
                  <option value="2">HVAC</option>
                  <option value="3">IBMS</option>
                  <option value="4">FMS</option>
                  <option value="4">IT</option>
                  <option value="4">Sales</option>
                  <option value="4">Others</option>
                </Form.Select>
              </div>
        
              <div className="input-container-service-create-project">
                <Form.Select
                  aria-label="Default select example"
                  className="select-service-create-project"
                  name="subSelectService"
                  value={x.subSelectService}
                  onChange={(e) => handleInputChange(e, i)}
                >
                  <option>------</option>
                </Form.Select>
              </div>

              <div className="input-container-service-create-project">
                <Form.Select
                  aria-label="Default select example"
                  className="select-service-create-project"
                  name="selectAmc"
                  value={x.selectAmc}
                >
                  <option>Select AMC</option>
                  <option value="1">Operation & Maintenance</option>
                  <option value="2">Comprehensive AAC</option>
                  <option value="3">Non Comprehensive AAC</option>
                  <option value="4">One Time Activity</option>
                  <option value="4">Warrenty</option>
                </Form.Select>
              </div>

              <div className="input-container-service-create-project">
                <input
                  type="text"
                  className="form-control select-service-create-project"
                  placeholder="Assign Value"
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  name="assignValue"
                  value={x.assignValue}
                  onChange={(e) => handleInputChange(e, i)}
                />
              </div>

              <div className="input-container-service-create-project">
                <label className="label-create-project">
               
                  Remark:
                </label>
                <div className="input-details-create-project">
                  <textarea
                    rows={2}
                    cols={49}
                    placeholder="Type text here"
                    className="text-area-create-project"
                    name="remark"
                    value={x.remark}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </div>
              </div>

              <div className="btn-submit-create-project">
                <Button variant="primary" onClick={handleAddClick}>
                  Create
                </Button>
              </div>
          
            </div>
            );
        })}
          </div>
     
    
    
    
    
   
  )
}

export default ServiceFolder;