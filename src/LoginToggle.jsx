import { useState } from "react";

function LoginToggle() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? "Logout" : "Login"}
      </button>

      {loggedIn ? <p>Welcome back!</p> : <p>Please login</p>}
    </>
  );
}

export default LoginToggle;
