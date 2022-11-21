
import { Route, Routes } from "react-router-dom";
import Button from "./component/Button";
import AuthPage from "./api/auth/AuthPage";
import UserPage from "./api/user/UserPage";
import InquiryPage from "./api/inquiry/InquiryPage";
import AuthSuccess from "./api/auth/apis/AuthSuccess";
import TransferPage from "./api/transfer/Transferpage";

function App() {

  return (
    <>
    <a href="/">Home</a> <br/>
    <Routes>
      <Route path="/" element = {<Button/>} />
      <Route path="/auth" element = {<AuthPage/>} />
      <Route path="/auth/success" element = {<AuthSuccess/>}/>
      <Route path="/transfer/" element = {<TransferPage/>}/>
      <Route path="/user" element = {<UserPage/>} />
      <Route path="/inquiry" element = {<InquiryPage/>} />
      
    </Routes>
    
        
    </>
  );
}

export default App;
