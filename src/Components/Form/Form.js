import React, {useState} from 'react'
import './Form.css'

const Form = () => {

    const [userData, setUserData] = useState({
        name:"",
        email:"",
        number:"",
        });
        
        let name, value;
        function postUserData(event) {
          name = event.target.name;
          value = event.target.value;
      
          setUserData({ ...userData, [name]:value })
        }
      
        // connect to firebase
        const submitData = async(event) => {
          event.preventDefault();
          const {name,
          email,
          number,
         } = userData;
          const res = await fetch(
            'https://socialpubli-7e6a6-default-rtdb.firebaseio.com/userDataRecords.json',{
              method: "POST",
              headers:{
                "Content-Type": "application/json",
              },
              body:JSON.stringify({
                name,
                email,
                number,
              }),
            }
            );
      
            if(res) {
              alert("Data Stored")
            }else {
              alert("Please fill the Data")
            }
        };

  return (
    <div class="container">  
    <form id="contact" action="" method="post">
      <h3>Quick Contact</h3>
      <h4>Contact us today, and get reply with in 24 hours!</h4>
      <fieldset>
        <input placeholder="Your name" name='name' required value={userData.name} onChange={postUserData} type="text" tabindex="1" autofocus />
      </fieldset>
      <fieldset>
        <input placeholder="Your Email Address" name='email' value={userData.email} onChange={postUserData} type="email" tabindex="2" required />
      </fieldset>
      <fieldset>
        <input placeholder="Your Phone Number" name='number' value={userData.number} onChange={postUserData} type="tel" tabindex="3" required />
      </fieldset>
      <fieldset>
        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending" onClick={submitData}>Submit</button>
      </fieldset>
    </form>
   
    
  </div>
  )
}

export default Form