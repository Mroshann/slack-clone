import { AccessTime, HelpOutline, Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import tw from "twin.macro";
import { auth } from "../firebase";


const Header = () => {
  const [user] = useAuthState(auth);
  return (
     <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
        src={user?.photoURL}
        alt={user?.displayName}
        onClick={() => auth.signOut()}/>
        <AccessTime/>
      </HeaderLeft>

      <HeaderSearch>
        <Search/>
        <input placeholder="Search AJAYAFAAM" />
      </HeaderSearch>

      <HeaderRight>
        <HelpOutline/>
      </HeaderRight>

     </HeaderContainer>
  )
}


export default Header

const HeaderContainer = tw.div` flex justify-between py-[10px] items-center fixed w-full bg-slack-color text-[white]`;
const HeaderLeft = tw.div` flex items-center flex-[0.3] ml-[20px] [> .MuiSvgIcon-root ]:ml-auto [> .MuiSvgIcon-root]:mr-[30px]`;
const HeaderAvatar = tw(Avatar)` cursor-pointer hover:opacity-[0.8] `;

const HeaderSearch = tw.div`flex flex-[0.4] opacity-100 rounded-[6px] bg-[#421f44] text-center px-[50px] text-gray-500 border-[1px]  border-gray-500 [> input ]:bg-transparent [> input ]:border-none [> input ]:text-center space-x-6 [> input ]:outline-none [> input ]:text-[white] [> input ]:min-w-[30vw] [> input ]:text-[15px]` 

const HeaderRight = tw.div`flex-[0.3] flex items-end [> .MuiSvgIcon-root]:ml-auto  [> .MuiSvgIcon-root]:mr-[20px]`;