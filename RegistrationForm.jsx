import React from 'react';
import { Link } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
  
  function RegistrationForm() {
    return (
        <>
        <div className="flex bg-gradient-to-b absolute from-white to-purple-200 h-[100vh] w-full -mt-[15vh] font-semibold font-serif">
        <h1 className=" px-[16vh]  text-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text font-extrabold text-transparent">
          UnityLearn
        </h1>
        <div>
          <ul className=" flex font-serif flex-row text-blue-900 py-2">
            <li className=" px-[4vh] hover:text-gray-500 duration-500 z-50 cursor-pointer uppercase">
              <Link to='/home'>Home</Link>
            </li>
            <li className=" px-[4vh] hover:text-gray-500 duration-500 z-50 cursor-pointer uppercase">
              About
            </li>
            <li className=" px-[4vh] hover:text-gray-500 duration-500 z-50 cursor-pointer uppercase">
              <Link to='/donate'>Donate</Link>
            </li>
            <li className=" px-[4vh] hover:text-gray-500 duration-500 z-50 cursor-pointer uppercase">
            <Link to='/campaign'>Campaigns</Link>
            </li>
            <li className=" px-[4vh] hover:text-gray-500 duration-500 z-50 cursor-pointer uppercase">
              <Link to='/gallery'>Gallery</Link>
            </li>
            <li className=" px-[4vh] hover:text-gray-500 duration-500 z-50 cursor-pointer uppercase">
              <Link to='/register'>Complaints</Link>
            </li>
            <li className=" px-[4vh] hover:text-gray-500 duration-500 z-50 cursor-pointer uppercase">
              Contact
            </li>
          </ul>
          </div>
          </div>
      <MDBContainer className=' mt-[20vh]' fluid>
  
        <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
  
                <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Complaint Form</p>
  
                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size='lg'/>
                  <MDBInput label='Your Name' id='form1' type='text' className='w-100'/>
                </div>
  
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size='lg'/>
                  <MDBInput label='Your Email' id='form2' type='email'/>
                </div>
  
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="key me-3" size='lg'/>
                  <MDBInput label='Please enter your message' id='form4' type='text'/>
                </div>
  
                <div className='mb-4'>
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Agree to the terms and conditions' />
                </div>
  
                <MDBBtn className='mb-4' size='lg'>Send Complain</MDBBtn>
  
              </MDBCol>
  
              <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
              </MDBCol>
  
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
  
      </MDBContainer>
      </>
    );
  }
  
  export default RegistrationForm;
