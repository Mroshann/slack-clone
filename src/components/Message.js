import tw from "twin.macro"

const Message = ({ message, timestamp ,user ,userImage}) => {
  return (
    <MessageContainer>
        <img src={userImage} alt="" />
        <MessageInfo>
            <h4>
                {user} {" "}
                <span>
                    {new Date(timestamp?.toDate()).toUTCString()}
                </span>
            </h4>
            <p>{message}</p>
        </MessageInfo>
    </MessageContainer>
  )
}

export default Message


const MessageContainer = tw.div`flex items-center p-[20px] [> img]:h-[50px] [> img]:rounded-[8px] space-x-[10px]`;
const MessageInfo = tw.div`[> h4 > span]:text-gray-500 [> h4 > span]:font-light [> h4 > span]:ml-[4px] [> h4 > span]:text-[12px] [> h4]:font-bold`;