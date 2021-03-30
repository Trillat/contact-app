
import "./index.css";

const oneline = true;

function Contact() {
  return(
  <div className="Contact"> 
      <div className="name">
    <h4>MH Trillat</h4>
    <section>
    <img src= "https://i.pinimg.com/474x/05/a6/f6/05a6f6db1051024604ecd90bf231dfb7.jpg"/>
    </section>
        <div className="status">
          <p>{oneline ? 'Oneline': 'Offline'}</p>
      </div>
         </div>
         </div>
      
  );


}



export default Contact;