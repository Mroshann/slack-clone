import { Button } from '@mui/material'
import { useState } from 'react'
import tw from 'twin.macro'
import { auth, db } from '../firebase'
import firebase from 'firebase/compat/app';
import { useAuthState } from 'react-firebase-hooks/auth';


const ChatInput = ({ channelName, channelId , chatRef}) => {
    const [user] = useAuthState(auth);
    const [input,setInput] = useState('');
    const sendMessage = (e) => {
        e.preventDefault();


        if(!channelId) {
            return false;
        }

        db.collection('rooms').doc(channelId).collection('message').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL
        })

        setInput("");

        chatRef?.current?.scrollIntoView({
            behavior: "smooth",
        });
    }
  return (
    <ChatInputContainer>
        <form >
            <input type="text" value={input} placeholder={`Message #${channelName}`} onChange={(e) => setInput(e.target.value)}/>
            <Button hidden type="submit" onClick={sendMessage}>
                SEND
            </Button>
        </form>
    </ChatInputContainer>
  )
}

export default ChatInput


const ChatInputContainer = tw.div`rounded-[20px] [> form]:relative [> form]:flex [> form]:justify-center [> form > input]:fixed [> form > input]:bottom-[30px] [> form > input]:w-[60%] [> form > input]:border-[1px] [> form > input]:border-gray-500 [> form > input]:p-[20px] [> form > input]:outline-none [> form > input]:rounded-[3px] [> form > button]:hidden`;