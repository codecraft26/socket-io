import React, { useState,useEffect } from 'react';
import videochatImage from './videochat.jpg';
import { useDispatch ,useSelector} from 'react-redux';
import {login,register,clearErrors} from "../../actions/userActions"
import { useNavigate} from 'react-router-dom';

const LoginSignup = ({location}) => {
  const navigate = useNavigate();

  const redirect = location && location.search ? location.search.split("=")[1] : "/profile";
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    username:""
  });
  const dispatch=useDispatch();
  const [activeTab, setActiveTab] = useState('login');

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

const [registerPassword,setRegisterPassword]=useState("")
  const [username,setUserName ]=useState("")

  const [name1,setName]=useState("")

  const { name, email, password } = user;

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }


    if (isAuthenticated) {

        navigate('/profile')
    }
  }, [ navigate, isAuthenticated]);


  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };


  const loginSubmit = (e) => {
    e.preventDefault();
    

    dispatch(login(loginEmail, loginPassword));
  };
  const registersumbit=(e)=>{
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name1);
    myForm.set("username", JSON.stringify(username));
    myForm.set("email", loginEmail);
    myForm.set("password",'64742626An@');
    dispatch(register(myForm));

   
  }
  return (
      <div>
        <div className="max-w-md rounded overflow-hidden shadow-lg flex">
  <img className="w-48 h-48 object-cover" src={videochatImage} alt="Video Chat" />
  <div className="flex flex-col justify-center px-6 py-4">
    <div className="font-bold text-xl mb-2">Video Chat Application</div>
   
 
    
     
  </div>
</div>

    <div className="w-full max-w-md mx-auto mt-10 p-4 bg-white rounded-lg shadow">



      <div className="flex justify-content-center">
        <button
          className={`px-4 py-2 rounded-tl-lg rounded-bl-lg ${
            activeTab === 'login' ? 'bg-blue-500 text-white' : 'text-blue-500'
          }`}
          onClick={() => handleTabChange('login')}
        >
          Login
        </button>
        <button
          className={`px-4 py-2 rounded-tr-lg rounded-br-lg ${
            activeTab === 'signup' ? 'bg-blue-500 text-white' : 'text-blue-500'
          }`}
          onClick={() => handleTabChange('signup')}
        >
          Signup
        </button>
      </div>
      <div className="p-4">
        {activeTab === 'login' ? (
          <form  onSubmit={loginSubmit} >
            {/* Your login form fields here */}
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="email"
              placeholder="Username"
              required
              value={loginEmail}
              onChange={(e)=>setLoginEmail(e.target.value)}
            />
          
            <input
              className="w-full mt-4 p-2 border border-gray-300 rounded"
              type="password"
              placeholder="Password"

            value={loginPassword}
            onChange={(e)=>setLoginPassword(e.target.value)}
            />
              <button className="w-full mt-4 py-2 px-4 bg-blue-500 text-white rounded">
              Signin
            </button>
          </form>
        ) : (
          <form   onSubmit={registersumbit}>
            {/* Your signup form fields here */}



            <input
              className="w-full mt-4 p-2 border border-gray-300 rounded"
              type="text"
              placeholder="name"
              value={name1}
              onChange={(e)=>setName(e.target.value)}
              />
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e)=>setUserName(e.target.value)}
              required
            />
            <input
              className="w-full mt-4 p-2 border border-gray-300 rounded"
              type="email"
              placeholder="Email"
              value={loginEmail}
              onChange={(e)=>setLoginEmail(e.target.value)}
            />
            <input
              className="w-full mt-4 p-2 border border-gray-300 rounded"
              type="password"
              placeholder="Password"
              value={registerPassword}

              onChange={(e)=>setRegisterPassword(e.target.value)}
             
              
            />
            <button className="w-full mt-4 py-2 px-4 bg-blue-500 text-white rounded">
              Signup
            </button>

            <button className='w-full mt-4 py-2 px-4 bg-blue-500 text-white rounded'> signup with google</button>
          </form>
        )}
      </div>
    </div>
    </div>
  );
};

export default LoginSignup;
