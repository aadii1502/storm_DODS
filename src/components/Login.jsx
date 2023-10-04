import React from "react";
 import * as Components from './Component';
 import Lottie from "lottie-react";
 import animation from '../assets/Animation - 1696423619881.json'

 function App() {
     const [signIn, toggle] = React.useState(true);
      return(
        <>
           <div className="flex py-6 font-semibold font-serif bg-gradient-to-b from-white to-violet-300 h-[100vh]">
        <h1 className=" px-[16vh] text-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text font-extrabold text-transparent">
          WELFARE
        </h1>
        <div>
          <ul className=" flex font-serif flex-row text-blue-900 py-2">
            <li className=" px-[4vh] hover:text-gray-500 duration-500 z-50 cursor-pointer uppercase">
              Home
            </li>
            <li className=" px-[4vh] hover:text-gray-500 duration-500 z-50 cursor-pointer uppercase">
              About
            </li>
            <li className=" px-[4vh] hover:text-gray-500 duration-500 z-50 cursor-pointer uppercase">
              Donate
            </li>
            <li className=" px-[4vh] hover:text-gray-500 duration-500 z-50 cursor-pointer uppercase">
              Blog
            </li>
            <li className=" px-[4vh] hover:text-gray-500 duration-500 z-50 cursor-pointer uppercase">
              Gallery
            </li>
            <li className=" px-[4vh] hover:text-gray-500 duration-500 z-50 cursor-pointer uppercase">
              Events
            </li>
            <li className=" px-[4vh] hover:text-gray-500 duration-500 z-50 cursor-pointer uppercase">
              Contact
            </li>
          </ul>
          </div>
          </div>
          <Lottie className="h-[60vh] absolute -mt-[70vh] flex  ml-[125vh]" animationData={animation}/>
          <Components.Container className=" flex justify-center items-center h-[60vh] -mt-[70vh] ml-[16vh]">
              <Components.SignUpContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Create Account</Components.Title>
                      <Components.Input type='text' placeholder='Name' />
                      <Components.Input type='email' placeholder='Email' />
                      <Components.Input type='password' placeholder='Password' />
                      <Components.Button>Sign Up</Components.Button>
                  </Components.Form>
              </Components.SignUpContainer>

              <Components.SignInContainer signinIn={signIn}>
                   <Components.Form>
                       <Components.Title>Sign in</Components.Title>
                       <Components.Input type='email' placeholder='Email' />
                       <Components.Input type='password' placeholder='Password' />
                       <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                       <Components.Button>Sign In</Components.Button>
                   </Components.Form>
              </Components.SignInContainer>

              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>

                  <Components.LeftOverlayPanel signinIn={signIn}>
                      <Components.Title>Welcome Back!</Components.Title>
                      <Components.Paragraph>
                          To keep connected with us please login with your personal info
                      </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(true)}>
                          Sign In
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>

                      <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Hello, User!</Components.Title>
                        <Components.Paragraph>
                            Enter Your personal details and start journey with us
                        </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sign Up
                            </Components.GhostButton> 
                      </Components.RightOverlayPanel>
                      
  
                  </Components.Overlay>
              </Components.OverlayContainer>

          </Components.Container>

          
          </>
      )
 }

 export default App;