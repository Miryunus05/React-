import axios from "axios";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        try {
            const response = await axios.post("https://test-ecommerce-gamma.vercel.app/auth",{
                login: userName,
                password: password,
            });
            if (response.data.token) {
                localStorage.setItem("auth-tokin", response.data.token);
                navigate("/");
            }
         } catch (error) {
                alert("Foydalanuvchi username yoki parol xato")
                console.log("Xatolik yuz berdi");
            }
        }

        return(
          <div className="w-screen h-screen bg-gray-300 flex justify-center items-center">
            <form action="" className="flex flex-col shadow-xl p-5">
              <label htmlFor="">Email address</label>
              <input type="email"  className="py-2 px-8 outline-none"/><br />
              <label htmlFor="">Password</label>
              <input type="password" className="py-2 px-8 outline-none"/>

              <button onChange={handleSubmit} className="bg-blue-400 w-[100px] ml-[30%] mt-5 h-[30px]">Sent</button>
            </form>
          </div>
        )
    

}

export default Login;


