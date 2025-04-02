import React, { useEffect } from 'react';
import './Dashboard.css';
import Footer from './shared/Footer';
import { useNavigate } from "react-router";

const Dashboard = () => {


  // let navigate = useNavigate();

  // useEffect(() => {

  //   if (!localStorage.getItem('user')) {
  //     navigate("/");
  //     console.log("object======================================")
  //   }
  // }, [])
  
  return (
    <div  className='dashboard'>
      <h1>Welcome To Your Career Guide</h1>
          <div className='stream'>
              <a href=""><img src="images/physic.png" alt="" /></a>
              <a href=""><img id='Bcom-im' src="images/acc.png" alt="" /></a>
              <a href=""><img src="images/history3.png" alt="" /></a>
          </div>

      <h1 className='still-confussed'>Still confused?</h1> <br />
      <button className='start-quiz'>Try the quiz</button>

          <Footer/>
    </div>
    
  );
};

export default Dashboard;
