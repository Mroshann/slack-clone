import { InfoOutlined, StarBorderOutlined } from '@mui/icons-material'
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import tw from 'twin.macro'
import { selectRoom } from '../features/appSlice'
import ChatInput from './ChatInput'
import { db } from '../firebase'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import Message from './Message'

const Chat = () => {
    const chatRef = useRef(null);
    const roomId = useSelector(selectRoom);
    
    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    )

    const [roomMessage, loading] = useCollection(
        roomId && db.collection('rooms').doc(roomId).collection('message').orderBy("timestamp","asc")
    )

    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behavior: "smooth",
        });
    },[roomId,loading])
  return (
    <ChatContainer>
        {roomDetails && roomDetails && (
            <>
            <Header>
                <HeaderLeft>
                    <h4>
                        <strong>#{roomDetails?.data().name}</strong>
                    </h4>
                    <StarBorderOutlined/>
                </HeaderLeft>
                <HeaderRight>
                    <p>
                        <InfoOutlined/> Details
                    </p>
                </HeaderRight>
            </Header>
            <ChatMessages>
                {roomMessage?.docs.map((doc) => {
                    const { message, timestamp, user, userImage} = doc.data();

                    return (
                        <Message 
                        key = {doc.id}
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage={userImage}
                        />
                    )
                })}
                <div ref={chatRef} className="pb-[200px]"></div>
            </ChatMessages>

            <ChatInput 
            chatRef={chatRef} 
            channelName= {roomDetails?.data().name}
            channelId = {roomId} 
            />
        </>
        )}
    </ChatContainer>
  )
}

export default Chat

const ChatContainer = tw.div`mt-[60px] [>h1]:font-bold flex-[0.7] grow overflow-y-scroll`;
const Header = tw.div`flex justify-between border-b-[1px] border-[lightgray] p-[20px]`;
const HeaderLeft = tw.div` [> h4 >.MuiSvgIcon-root]:ml-[10px] [> h4 >.MuiSvgIcon-root]:text-[18px] [> h4 ]:flex [> h4]:lowercase flex items-center space-x-[10px]`;
const HeaderRight = tw.div`[> p]:flex [> p]:items-center [> p]:text-[14px] [> p >.MuiSvgIcon-root]:!mr-[5px] [> p >.MuiSvgIcon-root]:text-[15px] `;
const ChatMessages = tw.div``
