import "./Button.css"

export default function Button({ children }) {
  return <button className="btn btn--hover btn--focus">{children}</button>;
}
