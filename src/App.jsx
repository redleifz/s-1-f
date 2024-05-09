import axios from "axios";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      const result = await axios.post("http://localhost:5000/register", {
        username: username,
        password: password,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full h-screen bg-[#D5E1F9] flex justify-center items-center">
        <div className="bg-white w-[500px] h-[400px] flex flex-col items-center">
          <span className="text-[#95A2EE] font-bold text-3xl pt-10">
            Tic Tac Toe
          </span>
          <span>Registration</span>
          <div className="w-full flex flex-col gap-1 px-10">
            <span>Username</span>
            <input
              placeholder="Enter username"
              className="border-2 border--gray-500"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col gap-1 px-10">
            <span>Password</span>
            <input
              placeholder="Enter username"
              className="border-2 border--gray-500"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex gap-3 mt-5">
            <button className="p-3">Login</button>
            <button
              className="p-3 bg-[#95A2EE] text-white "
              onClick={(e) => {
                register();
              }}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
