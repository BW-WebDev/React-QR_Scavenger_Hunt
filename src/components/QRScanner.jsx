import { useState } from "react";
import QrReader from "react-qr-reader";
import { useLocal } from "../hooks/useLocal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiQrScan } from "react-icons/bi";

import styled from "styled-components";
import { StyledButton } from "./UniversalStyles";

export default function QRScanner() {
  const [data, setData] = useState("Nothing");
  const [show, setShow] = useState(false);
  const [showBTN, setShowBTN] = useState(false);

  const setUnlockFromURL = useLocal((s) => s.setUnlockFromURL);

  const handleError = (err) => {
    console.error(err);
  };

  const enterVal = (scannedURL) => {
    setShow(false);
    setData(scannedURL);
  };

  const handleScan = (scannedURL) => {
    if (scannedURL) {
      const valid = setUnlockFromURL(scannedURL);
      if (valid) {
        setData(scannedURL);
        setShowBTN(true);
      }
    }
  };
  return (
    <>
      {show && (
        <QRReaderStyled className="modal">
          <div>
            <AiOutlineCloseCircle onClick={() => setShow(false)} />
            <QrReader
              className="scanBox"
              delay={500}
              onError={handleError}
              onScan={handleScan}
            />
            <p>{data}</p>
            {showBTN && <button onClick={enterVal}>Submit</button>}
          </div>
        </QRReaderStyled>
      )}
      <StyledButton onClick={() => setShow(true)}>
        <BiQrScan /> Scan Code
      </StyledButton>
    </>
  );
}

/************************
 * Styles
 */
const QRReaderStyled = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: grid;
  top: 0;
  left: 0;
  text-align: center;
  display: inline-block;
  border: 1px solid black;
  padding: 10px;
  background-color: #555;
  & svg {
    height: 35px;
    width: 35px;
    transform: translateX(230px);
  }
  & .scanBox {
    max-width: 500px;
    max-height: 500px;
    margin: auto;
  }
`;
