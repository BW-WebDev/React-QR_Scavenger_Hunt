import styled from "styled-components";
import { BsFillLockFill, BsFillUnlockFill } from "react-icons/bs";
import { useLocal } from "../hooks/useLocal";

const LockedContainer = ({ id }) => {
  const locked = useLocal((s) => s.locked[id]);
  const icon = locked ? <BsFillLockFill /> : <BsFillUnlockFill />;
  const text = locked ? "Locked" : "Unlocked";
  return (
    <StyledLock className={text}>
      <div>
        <h3>
          {icon}
          {id}: {text}
        </h3>
      </div>
    </StyledLock>
  );
};

export default LockedContainer;

/************************
 * Styles
 */
const StyledLock = styled.div`
  display: inline-grid;
  justify-items: center;
  align-items: center;
  margin: 5px;
  height: 120px;
  width: 120px;
  border: 1px solid black;
  text-align: center;

  & h3 {
    margin: 0;
  }

  & svg {
    display: block;
    margin: auto;
    height: 40px;
    width: 40px;
    padding-bottom: 15px;
  }

  &.Locked {
    background-color: rgba(255, 0, 0, 0.5);
  }

  &.Unlocked {
    background-color: rgba(0, 255, 0, 0.5);
  }
`;
