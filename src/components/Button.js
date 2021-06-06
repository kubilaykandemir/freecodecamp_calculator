export const Button = (props) => {
  return (
    <div
      onClick={props.onClick}
      id={props.id}
      className="Button"
      value={props.value}
    >
      {props.label}
    </div>
  );
};
