import { useState } from "react";
import axios from "axios";
const projectID = "e9f59ebd-4b3d-4c1a-8d9c-8666ea00eef1";

const Modal = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": projectID,
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
      setError("");
    } catch (err) {
      setError(window.alert("Incorrect Username or Password!"));
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat with friends</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div className="bottom-buttons">
            <div align="center">
              <button type="submit" className="button">
                <span>Login</span>
              </button>

              <button type=" submit" className="button">
                <span>Sign Up</span>
              </button>
            </div>
          </div>
          <div className="info_box">
            <div className="heading01">
            Hello! 
          <span class="emoji wave-hand animated"></span></div>
            For New Users: <br />
            Username: Unknown <br />
            Password:123456789
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>
  );
};

export default Modal;
