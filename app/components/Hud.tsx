// Four corner brackets that snap in when the parent `.group` is hovered.
export default function Hud() {
  return (
    <>
      <span aria-hidden className="hud-corner hud-tl rounded-tl-md" />
      <span aria-hidden className="hud-corner hud-tr rounded-tr-md" />
      <span aria-hidden className="hud-corner hud-bl rounded-bl-md" />
      <span aria-hidden className="hud-corner hud-br rounded-br-md" />
    </>
  );
}
