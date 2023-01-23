import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

const HeaderAuth = () => {
  return ( 
    <div className="wrapper">
      <Login />
      <SignUp />
    </div>
    
   );
}
 
export default HeaderAuth;