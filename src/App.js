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

  const BASE_URL = "https://randomuser.me/api/";
  const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

  const [userData,setUserData] = useState(null)
  const [people,setPeople] = useState([])  
  const [activeIcon, setActiveIcon] = useState(0)
  const [loading,setLoading] = useState(false)


  const getUserData = async()=> {
    setLoading(true)

    try {
       const response =  await axios.get(BASE_URL)
       
       if(response.status !== 200) {
         throw new Error("Data is not fetched")
        }
        setPeople(response.data.results)
        setLoading(false)
    } catch (error) {
      console.log(error);
    }
 
}
  
  useEffect(()=>{
   
    getUserData()
  },[])

  console.log(people);

const icons = (data) => [
  {
    svg: data.gender === "male" ? manSvg : womanSvg,
    key: "name",
    value: `${data.name.first} ${data.name.last}`
  },
  {svg: mailSvg, key: "mail", value: "data.email"},
  {svg:data.gender === "male" ? manAgeSvg : womanAgeSvg, key: "age", value: data.dob.age},
  {
    svg:mapSvg,
    key:"street",
    value: `${data.location.street.number} ${data.location.street.name}`
  },
  {
    svg: phoneSvg,
    key: "phone number",
    value: "data.cell"
  },
  {
    svg: padlockSvg,
    key: "password",
    value: "data.login.password"
  },
]

if (!userData) return null
const iconData = icons(userData)


  return (
    <main>
     
  <div key={person.id} className="block">  
  <div className="block bcg-orange">
        <img src={logo} alt="logo" id="logo" />
      </div>
        <div className="container">
          <img src= {person.picture.large} alt="random user" className="user-img" />
          <p className="user-title">My{iconData[activeIcon].key} is</p>
      <p className="user-value">{iconData[activeIcon]}</p>
          <div className="values-list">
            <button className="icon" data-label="name">
          <img src={svgIcon.svg} alt="user" id="iconImg" 
            onMouseOver={() => {
  
            }}
          />
            </button>
            <button className="icon" data-label="email"
            onMouseOver={()=>{
            
            }}
            >
              <img src={mailSvg} alt="mail" id="iconImg" />
            </button>
            <button className="icon" data-label="age"
          onMouseOver={() => {
          
          }}
            >
              <img src={person.gender === "male" ? manAgeSvg : womanAgeSvg} alt="age" id="iconImg" />
            </button>
            <button className="icon" data-label="street"
          onMouseOver={() => {
          
          }}>
              <img src={mapSvg} alt="map" id="iconImg" />
            </button>
            <button className="icon" data-label="phone"
          onMouseOver={() => {
           
          }}
            >
              <img src={phoneSvg} alt="phone" id="iconImg" />
            </button>
            <button className="icon" data-label="password"
          onMouseOver={() => {
          
          }}
            >
              <img src={padlockSvg} alt="lock" id="iconImg" />
            </button>
          </div>
          <div className="btn-group">
        {loading ? <button className="btn" type="button">
          loading...
        </button> : <button onClick={()=>getUserData()} className="btn" type="button">
              new user
            </button>}  
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
      
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />
      </div>
    </main>
  );
}

export default App;