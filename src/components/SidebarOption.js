import React from 'react'
import tw from 'twin.macro'
import { db } from '../firebase';
import { enterRoom, selectRoom } from '../features/appSlice';
import { useDispatch } from 'react-redux';

const SidebarOption = ({ Icon , title , addChannelOption, id}) => {
  const dispatch = useDispatch(selectRoom);
  const addChannel = () => {
    console.log("hello")
    const channelName = prompt('Please enter the channel name');

    if(channelName) {
      db.collection('rooms').add({
        name: channelName,
      })
    }
  };

  const selectChannel = () => {
   if(id) {
    dispatch(enterRoom({
      roomId: id,
    }))
   }
  };
  return (
    <SidebarOptionContainer onClick={ addChannelOption ? addChannel : selectChannel}>
        {Icon && <Icon fontSize="small" className=" p-[2px]"/>}
        {Icon ? (<h3>{title}</h3>) : (
            <SidebarOptionChannel>
                <span>#</span> {title}
            </SidebarOptionChannel>
        ) }
    </SidebarOptionContainer>
  )
}

export default SidebarOption


const SidebarOptionContainer = tw.div` mt-[2px]  flex text-[15px] items-center px-[10px] py-[5px] [> .MuiSvgIcon-root]:text-[30px] [> h3 ]:font-medium cursor-pointer space-x-2 hover:opacity-90 hover:bg-[#340e36] [>h3 > span]:p-[5px] [>h3 > span]:text-[20px]
`;

const SidebarOptionChannel = tw.h3` font-light [> span]:px-[5px] my-[-5px] items-center justify-between flex `;