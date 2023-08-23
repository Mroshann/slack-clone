import { Button } from '@mui/material'
import React from 'react'
import tw from 'twin.macro'
import { auth, provider } from '../firebase'

const Login = () => {
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch(err => alert(err.message));
        
    }
  return (
    <LoginContainer>
        <LoginInnerContainer>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png" alt="" />
            <h1>Sign in to the Community</h1>
            <p>community.slack.com</p>
            <Button  onClick={signIn}> Sign in with Google</Button>
        </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login

const LoginContainer = tw.div`bg-[#f8f8f8] grid place-items-center h-screen `;
const LoginInnerContainer = tw.div`items-center flex flex-col   p-[100px] text-center bg-white rounded-[10px] shadow-2xl [> img]:object-contain [> img]:h-[100px]  [> img]:mb-[40px] [> Button]:!text-white [> Button]:!bg-[#0a8d48] [> Button]:!mt-[50px] [> h1]:font-bold [> h1]:text-[30px]`;