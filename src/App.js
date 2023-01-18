import LockHolder from "./components/LockedHolder";
import QRCodeHolder from "./components/QRCodeHolder";
import AddLeva from "./components/AddLeva";
import QRScanner from "./components/QRScanner";
import LockAll from "./components/LockAll";
import { useLocal } from "./hooks/useLocal";
import { useEffect } from "react";
import { Title, TwoColumn, Subtitle } from "./components/UniversalStyles";

export default function App() {
  const getURLVars = useLocal((s) => s.getURLVars);
  const getStorage = useLocal((s) => s.getStorage);
  useEffect(() => getStorage(), []);
  useEffect(() => getURLVars(window.location), [getURLVars]);

  return (
    <div className="App">
      <Title>QR Scavenger</Title>
      <Subtitle>QR Codes to find:</Subtitle>
      <Subtitle>
        Scan QR code below on phone. It will load this page and unlock the
        selected lock
      </Subtitle>
      <QRCodeHolder />
      <Subtitle>Lock Status & Scanner:</Subtitle>
      <TwoColumn>
        <QRScanner />
        <LockAll />
      </TwoColumn>
      <LockHolder />
      <AddLeva />
    </div>
  );
}
