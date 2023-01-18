import { QRCodeSVG } from "qrcode.react";
import { useLocal } from "../hooks/useLocal";
import { useState } from "react";

import styled from "styled-components";
import { StyledButton } from "./UniversalStyles";
import { FaLink } from "react-icons/fa";

export default function QRCodeHolder({ URL }) {
  const locked = useLocal((s) => s.locked);
  const URLS = locked.map((v, i) => `https://9vebsg.csb.app/?ul=${i}`);
  const [url, setUrl] = useState(URLS[0]);

  return (
    <QRStyled>
      <div>
        <QRCodeSVG value={url} size={250} />
        <div>{url}</div>
      </div>
      <div className="BTNHolder">
        {URLS.map((l, i) => (
          <StyledButton
            key={"button" + i}
            onClick={() => {
              setUrl(l);
            }}
          >
            <FaLink />
            {`Unlock QR code for Lock:${i}`}
          </StyledButton>
        ))}
      </div>
    </QRStyled>
  );
}

/************************
 * Styles
 */
const QRStyled = styled.div`
  box-sizing: border-box;
  text-align: center;
  border: 1px solid black;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  padding: 15px;
  width: 100%;
  max-width: 600px;
  margin: auto;

  & .BTNHolder {
    display: grid;
    margin: auto;
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;
