import './App.css';
import { Navbar } from 'reactstrap';
import { Link } from 'react-scroll';
import Popup from "./Popup";
import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div >
      <Navbar className="navbar navbar-light sticky-top" >
        <h3 id="brand"><Link to="top"  >PHAMA</Link></h3>
        <span className='link'><Link to="Introduce"  >Introduce</Link></span>
        <span className='link'><Link to="Advantage" >Advantage</Link></span>
        <span className='link'><Link to="Contact" >Contact</Link></span>
      </Navbar>
      <a id="top" href=" " > </a>
      <div className="homepage">
        <h1 id="h1">Pharmacy <br /> Vending Machine</h1>
      </div>

      <div className="introduce" id="Introduce">
        <h3 className='introduce-h3'>For pharmacies</h3>
        <span className="introduce-span">YOUR PHARMACY, OUR TECHNOLOGY.</span>
        <p className="introduce-paragraph">For all pharmacy operators,
          whether you are part of a large chain or an independent,
          our technology integrates into your pharmacy operations
          and provides convenient and safe dispensing options.</p>
        <img src="/images/Vending-Machine.png" alt="" />
      </div>

      <div className='advantage' id="Advantage">
        <h3 className="advantage-h3">Advantage</h3>
        <div className="advantage-wrap">
          <div>
            <img className="icon" id="icon" src="/images/Customize(w).png" alt="" />
            <h5>Tailored formulary</h5>
            <span>Each MedCenter location can support a different medication formulary tailored to clinical, demographic, or business needs.</span>
          </div>
          <div>
            <img className="icon" src="/images/Regulated(w).png" alt="" />
            <h5>Regulated</h5>
            <span>Adheres to the strict regulations required to permit remote dispensing, while ensuring patient safety and loss prevention.</span>
          </div>
          <div>
            <img className="icon" src="/images/Accuracy(w).png" alt="" />
            <h5>Accuracy</h5>
            <span>A sophisticated robotic picking and labeling system minimizes errors versus traditional human systems.</span>
          </div>
          <div>
            <img className="icon" src="/images/Safety(w).png" alt="" />
            <h5>Safety</h5>
            <span>All regulated acts are performed under the supervision of licensed health professionals.</span>
          </div>
          <div>
            <img className="icon" src="/images/Contactless(w).png" alt="" />
            <h5>Contactless</h5>
            <span>Moves medications from “in the vault” to “in a patient’s hands” without being touched by a human.</span>
          </div>
        </div>
      </div>

      <div className="contact" id="Contact">
        <h3 className="contact-h3">Get free consultation</h3>
        <span className="contact-span">from our technical specialist</span>
        <button className="contact-button" onClick={togglePopup}>Contact us</button>
        {isOpen && <Popup
          handleClose={togglePopup}
          content={
            <div className="contact-box">
              <h2>For illustration only</h2>
              <span>Please click<a href="https://vigilant-euclid-197035.netlify.app/">Link</a>
                to my profolio webpage </span>
            </div>
          }
        />}
      </div>

      <div className="copyright">
        <span>Copyright © 2022 by WeiHang</span>
      </div>

    </div >
  );
}

export default App;
