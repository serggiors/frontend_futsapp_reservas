import "./LoginButton.css"

export function LoginButton({ onLoginClick }) {
  return <button className="LoginButton" type="submit" onClick={onLoginClick}>Ingresar</button>
}