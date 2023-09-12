import React from 'react'
import NewVendorRegiForm from './newVendorRegiForm';

const NewVendorRegComponents = () => {
  return (
    <div>
    <div>
    <div className="w3-top">
      <div className="w3-bar w3-theme-d2 w3-left-align w3-large nav-bar"  >
        <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2"> 
          <i className="fa fa-bars"></i>
        </a>
        <a href="#" className="w3-bar-item w3-button w3-padding-large w3-theme-d4 nirvaa-cls-tag " >
          <i className="fa fa-home w3-margin-right"></i> Nirvaa CLS
        </a>
        <a
          href="#"
          className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white"
          title="My Account"
        >
          Logout
        </a>
      </div>
    </div>

    <div
      id="navDemo"
      className="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large"
    >
      <a href="#" className="w3-bar-item w3-button w3-padding-large">
        Link 1
      </a>
      <a href="#" className="w3-bar-item w3-button w3-padding-large">
        Link 2
      </a>
      <a href="#" className="w3-bar-item w3-button w3-padding-large">
        Link 3
      </a>
      <a href="#" className="w3-bar-item w3-button w3-padding-large">
        My Profile
      </a>
    </div>

    <div
      className="w3-container "
    
    >
      {/* -- The Grid -- */}
      <div className="w3-row">
        {/* -- Left Column -- */}
        <div className="w3-col m3">
          {/* -- Profile -- */}
          <div className=" w3-card w3-round w3-white top-portion-my-profile">
            <div className="w3-container employee-box">
              <h4 className="w3-center">My Profile</h4>
              <hr />
              <p>
                <i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i>
                Employee ID:-
              </p>
              <p>
                <i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i>
                Employee Type:-
              </p>
              <p>
                <i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i>
                Name:- <i id="Name"></i>
              </p>
            </div>
          </div>
          <br />

          {/* -- Accordion -- */}
          <div className="w3-card w3-round">
            <div className="w3-white" id="add"></div>
          </div>
          <br />

          <br />
        </div>

         <div className="w3-col m4">
          <div className="w3-container w3-card w3-white w3-round w3-margin"></div>
        </div> 
      </div>
      <div className="w3-col m4"></div>
    </div>

    <br />
  </div>
  <div className="w3-col m3 note-line">
         <p  className="instructor-line">
           Note:- Do not use " " in this form
         </p>
       </div>
    

    <NewVendorRegiForm/>
    <div>
    <footer
      className="w3-container w3-theme-d3 w3-padding-16 footer-mainTag"
    >
      <h5>Nirvaa CLS</h5>
    </footer>
    <footer
      className="w3-container w3-theme-d5 footer-subline footer-mainTag-1"

    >
      <p>
        Powered by
        
          CSS-3
        
      </p>
    </footer>
  </div>
    </div>
  )
}

export default NewVendorRegComponents;
