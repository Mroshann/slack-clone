import { Add, Apps, BookmarkBorder, Create, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt } from '@mui/icons-material'
import React from 'react'
import tw from 'twin.macro'
import SidebarOption from './SidebarOption'
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Sidebar = () => {
  const [user] = useAuthState(auth);
  const [channels] = useCollection(db.collection("rooms"));
  return (
    <SidebarContainer>
        <SidebarHeader>
            <SidebarInfo>
                <h2>Slack Community</h2>
                <h3>
                    <FiberManualRecord/> {" "}
                    {user.displayName}
                </h3>
            </SidebarInfo>
            <Create/>
        </SidebarHeader>
        <SidebarOption Icon={InsertComment} title="Threads"/>
        <SidebarOption Icon={Inbox} title="Mentions & reactions"/>
        <SidebarOption Icon={Drafts} title="Saved items"/>
        <SidebarOption Icon={BookmarkBorder} title="Channel browser"/>
        <SidebarOption Icon={PeopleAlt} title="People & user groups"/>
        <SidebarOption Icon={Apps} title="Apps"/>
        <SidebarOption Icon={FileCopy} title="File browser"/>
        <SidebarOption Icon={ExpandLess} title="Show less"/>
        <hr/>
        <SidebarOption Icon={ExpandMore} title="Channels"/>
        <hr />
        <SidebarOption Icon={Add} addChannelOption title="Add Channel"/>
        {channels?.docs.map((doc) => (
          <SidebarOption title={doc.data().name} key={doc.id} id={doc.id}/>
        ))}
    </SidebarContainer>
  )
}

export default Sidebar


const SidebarContainer = tw.div`bg-slack-color mt-[60px] text-white flex-[0.3] max-w-[250px] border-[1px] border-[#49274b] [> hr]:my-[10px] [> hr]:border-[1px] [> hr]:border-[#49274b]   overflow-scroll [&::-webkit-scrollbar ]:hidden`;
const SidebarHeader = tw.div`flex justify-between items-center px-[10px] py-[8px] border-b-[1px] border-[#49274b]
[> .MuiSvgIcon-root]:rounded-full [> .MuiSvgIcon-root]:bg-white [> .MuiSvgIcon-root]:p-[8px] [> .MuiSvgIcon-root]:text-[#49274b] [> .MuiSvgIcon-root]:!text-[35px]  [> .MuiSvgIcon-root]:cursor-pointer `;
const SidebarInfo = tw.div`flex-1 [> h2]:text-[15px] flex flex-col items-start  [>h3 > .MuiSvgIcon-root]:text-green-600 [>h3]:text-[12px] [>h3]:text-neutral-100 [>h3]:font-normal [> h3 > .MuiSvgIcon-root]:text-[12px] [> h2]:uppercase [> h2 ]:font-extrabold [> h3]:capitalize   mt-[1px] mr-[2px] justify-start mb-2`;