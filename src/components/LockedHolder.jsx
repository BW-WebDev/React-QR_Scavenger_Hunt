import styled from "styled-components";
import { useLocal } from "../hooks/useLocal";
import LockedContainer from "./LockedContainer";

const LockedHolder = ({ id }) => {
  const locked = useLocal((s) => s.locked);
  return (
    <StyledHolder className="locks">
      {locked.map((l, i) => (
        <LockedContainer key={`l${i}`} id={i} />
      ))}
    </StyledHolder>
  );
};

export default LockedHolder;

/************************
 * Styles
 */
const StyledHolder = styled.div`
  display: block;
  margin: auto;
  text-align: center;
`;
