import { Leva, button, useControls } from "leva";
import { useLocal } from "../hooks/useLocal";

export default function AddLeva({ URL }) {
  const saveStorage = useLocal((s) => s.saveStorage);
  const removeStorage = useLocal((s) => s.removeStorage);
  const toggleUnlock = useLocal((s) => s.toggleUnlock);
  const locked = useLocal((s) => s.locked);

  // Add Storage Buttons
  useControls(
    "Local Storage",
    {
      "Save Storage": button(() => saveStorage()),
      "Get Storage": button(() => getStorage()),
      "Remove Storage": button(() => removeStorage())
    },
    { collapsed: true }
  );

  // Add unlock option to Leva
  const actionBTNS = {};
  locked.forEach(
    (n, i) => (actionBTNS[`Toggle Lock ${i}`] = button(() => toggleUnlock(i)))
  );
  useControls("Unlocked", actionBTNS, { collapsed: true });

  return (
    <Leva
      hideTitleBar // default = false, hides the GUI header
      collapsed // default = false, when true the GUI is collpased
      hidden
    />
  );
}
