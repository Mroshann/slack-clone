import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";
import tw from "twin.macro";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { auth } from "./firebase";
import { useAuthState } from 'react-firebase-hooks/auth'
import Login from "./components/Login";
import Spinner from "react-spinkit";

function App() {
  const [user, loading] = useAuthState(auth);

  if(loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png" alt="" 
          />
          <Spinner
          name="ball-spin-fade-loader"
          color="purple"
          fadeIn="none"
          />
        </AppLoadingContents>
      </AppLoading>
    )
  }
  return (
    <div className=" ">
      
      <Router>
       {!user ? (
        <Login />
       ): (
        <>
        <Header/>
        <AppBody>
          <Sidebar/>
          <Routes>
            <Route exact path="/" element={<Chat/>}/>
          </Routes>
        </AppBody>
      </>
       )}
      </Router>
    
    </div>
  );
}

export default App;

const AppBody = tw.div`flex h-screen`;
const AppLoading = tw.div`grid place-items-center h-screen w-full`;
const AppLoadingContents = tw.div`flex items-center pb-[100px] flex-col justify-center [>img]:h-[100px]  [>img]:p-[20px] [>img]:mb-[40px]`;