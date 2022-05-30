import React, { useState } from "react";
import { useMoralis, useMoralisFile } from "react-moralis";


function UserProfile() {

  const { login, isAuthenticated, authenticate, Moralis, setUserData } = useMoralis();
  const { saveFile } = useMoralisFile();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("")
  const user = Moralis.User.current();

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handleAvatar = (event) => setAvatar(event.target.files[0]);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     const { ethereum } = window;
  //     ethereum.on("accountsChanged", (account) =>
  //       console.log("account")
  //     );
  //   }

  // }, []);

  const signupFunc = async () => {
    // call the setUserData in Moralis to save the user data in Moralis 
    // and make sure local variable is saved throughout the application
    const fileIpfs = await saveFile("avatar", avatar, { saveIPFS: true })
    console.log(fileIpfs);
    setUserData({
      username,
      email,
      // check if password is an empty string (skip if undefined)
      password: password === "" ? undefined : password,
      avatar: fileIpfs
    })

    try {
      await user.signUp();
      alert("successfully changed");
      // Hooray! Let them use the app now.
    } catch (error) {
      // Show the error message somewhere and let the user try again.
      alert("Error: " + error.code + " " + error.message);
    }
  }

  // const signupFunc = async () => {
  //   console.log(username, password, email);

  //   user.set("username", username);
  //   user.set("password", password);
  //   user.set("email", email);
  
  return (
    <div>
      <img src={user?.attributes.avatar._url} alt="" />
      <form>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
        /><br /><br />
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="username"
        /><br /><br />
        <div>Avatar</div><br />
        <input
          type="file"
          onChange={handleAvatar}
        />
      </form>
      <button onClick={signupFunc}>Change</button>
    </div>
  );

    
  
}



export default UserProfile;