import React, { useEffect, useState } from "react";

import logo from "./assets/logo.png";
import mailSvg from "./assets/mail.svg";
import manSvg from "./assets/man.svg";
import womanSvg from "./assets/woman.svg";
import manAgeSvg from "./assets/growing-up-man.svg";
import womanAgeSvg from "./assets/growing-up-woman.svg";
import mapSvg from "./assets/map.svg";
import phoneSvg from "./assets/phone.svg";
import padlockSvg from "./assets/padlock.svg";
import Footer from "./components/footer/Footer";
import axios from "axios";


function App() {
  const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

  const [people,SetPeople] = useState([])
  const [loading,setLoading] = useState(true)
  const BASE_URL = "https://randomuser.me/api/";



  const getRandomPeople = async()=> {

    try {
       const response =  await axios.get(BASE_URL)
       
       if(response.status !== 200) {
         throw new Error("Data is not fetched")
        }
        SetPeople(response.data.results)
    } catch (error) {
      console.log(error);
    }
 

  
}
  
  useEffect(()=>{
   
    getRandomPeople()
  },[])

  console.log(people);


  return (
    <main>
   
{people.map((person)=>(
  
  <div key={person.id} className="block">  
  <div className="block bcg-orange">
        <img src={logo} alt="logo" id="logo" />
      </div>
        <div className="container">
          <img src={person.picture.medium} alt="random user" className="user-img" />
          <p className="user-title">My ... is</p>
          <p className="user-value">{person.name.first} {person.name.last}</p>
          <div className="values-list">
            <button className="icon" data-label="name">
              <img src={womanSvg} alt="user" id="iconImg" />
            </button>
            <button className="icon" data-label="email">
              <img src={mailSvg} alt="mail" id="iconImg" />
            </button>
            <button className="icon" data-label="age">
              <img src={womanAgeSvg} alt="age" id="iconImg" />
            </button>
            <button className="icon" data-label="street">
              <img src={mapSvg} alt="map" id="iconImg" />
            </button>
            <button className="icon" data-label="phone">
              <img src={phoneSvg} alt="phone" id="iconImg" />
            </button>
            <button className="icon" data-label="password">
              <img src={padlockSvg} alt="lock" id="iconImg" />
            </button>
          </div>
          <div className="btn-group">
            <button onClick={()=>getRandomPeople()} className="btn" type="button">
              new user
            </button>
            <button className="btn" type="button">
              add user
            </button>
          </div>

          <table className="table">
            <thead>
              <tr className="head-tr">
                <th className="th">Firstname</th>
                <th className="th">Email</th>
                <th className="th">Phone</th>
                <th className="th">Age</th>
              </tr>
            </thead>
            <tbody>
              <tr className="body-tr"></tr>
            </tbody>
          </table>
        </div>
      </div>
))}
      
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />
      </div>
    </main>
  );
}

export default App;