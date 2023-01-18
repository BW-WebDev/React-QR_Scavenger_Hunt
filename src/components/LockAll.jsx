import { BsFillFileEarmarkLock2Fill } from "react-icons/bs";
import { useLocal } from "../hooks/useLocal";
import { StyledButton } from "./UniversalStyles";

const LockAll = () => {
  const setLockAll = useLocal((s) => s.setLockAll);
  return (
    <StyledButton onClick={() => setLockAll()}>
      <BsFillFileEarmarkLock2Fill /> lock all
    </StyledButton>
  );
};

export default LockAll;
