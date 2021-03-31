import React from "react";
import "../contact.css";

const name = "MH Trillat";
const avatar = "https://i.pinimg.com/474x/05/a6/f6/05a6f6db1051024604ecd90bf231dfb7.jpg";
const oneline = true;

function Contact() {
  return (
    <div className="Contact">

      <img className="avatar" src={avatar} />
      <div >
        <h4 className="name">{name}</h4>
        <div className="status">
          <div className={oneline ? "status-online" : "status-offline"}></div>
          <p className="status-text">{oneline ? 'Oneline' : 'Offline'}</p>
        </div>
      </div>
    </div>

  );


}


export default Contact;
