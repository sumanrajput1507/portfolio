import React, {useState } from "react";

function Contact() {
  const [text,setText]=useState({
    firstname:"",
    email:"",
    message:""
  })

  const handleClick=() =>{
    setText("My Name is suman")
  }
  const handleChange=()=>{
      console.log("change text")
  }
  return (
    <>
      <section className="about_main">
        <h2>Contact</h2>
        <div className="contact_main">
          <div className="contact_page">
            <div className="content_box">
              <div className="design bg_pink contact_content">
                  <img src="" alt="" />
                  <div className="contact_text">
                     <h4>Phone:</h4>
                     <span>+919877253317</span>
                  </div>
              </div>
            </div>
            <div className="content_box">
              <div className="design bg_pink contact_content">
              <img src="" alt="" />
                  <div className="contact_text">
                     <h4>Enail:</h4>
                     <span>suman.rajput1507@gmail.com</span>
                  </div>
              </div>
            </div>
            <div className="content_box">
              <div className="design bg_pink contact_content">
              <img src="" alt="" />
                  <div className="contact_text">
                     <h4>Address:</h4>
                     <span>H.No 76/3,Raj Nagar</span>
                     <span>Jalandhar,Punjab</span>
                  </div>
              </div>
            </div>
          </div>
          <form action="">
            <h3>I'm Always Open To Discussing Produuct
               design work or partnerships.</h3>
               <div className="input_box">
               <label htmlFor="">Name *</label>
               <input type="text" name="firstname"/>
                  
               </div>
               <div className="input_box">
               <label htmlFor="">Email *</label>
               <input type="email" value={text} name="email"/> 
               </div>
               <div className="input_box">
               <label htmlFor="">Message *</label>
               <textarea name="message" class="input-box message false " cols="30" rows="10" ></textarea>
               </div>
               <button onClick={handleClick}>Submit</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
