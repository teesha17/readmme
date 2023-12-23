import React, { useState , useEffect } from 'react'
import './Contact.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Contact = () => {
  const [user , setuser] = useState(
    {
      Name:'' , Email:'' ,Message:''
    }
  );
  
  const data = (e) => {
    const { name, value } = e.target;
    setuser({...user , [name]:value })
  }

  const senddata = async (e) => {
    const { Name , Email ,Message} = user
    e.preventDefault();
    const options = {
      method:'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        Name , Email , Message
      })
    }

    const res = await fetch('https://oih-database-default-rtdb.firebaseio.com/Message.json' , options)
    console.log(res)
    if(res){
      alert("your message sent")
    }else{
      alert("An error occured");
    }
  }
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className='contact-container'>
      <div className='contentBox'>
        <p className='contact-heading' data-aos="fade-right">Contact Us</p>
        <form method="POST" data-aos="zoom-in">
          <input type="text" name="Name" value={user.Name} placeholder='Enter your E-mail' required autoComplete='off' onChange={data} />
          <input type="text" name="Email" value={user.Email} placeholder='Enter your Name' required autoComplete='off' onChange={data} />
          <textarea style={{ width: '300px', height: '130px' }} name="Message" value={user.Message} placeholder='Your Message' autoComplete='off' onChange={data}></textarea>
          <button className='sendbutton' type='submit' onClick={senddata} data-aos="flip-left">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
