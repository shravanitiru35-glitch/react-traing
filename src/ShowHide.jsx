import { useState } from "react";

function ShowHide() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Text
      </button>
      {show && <p>This is a toggle-able paragraph.</p>}
    </>
  );
}

export default ShowHide;