import { Button } from "./Button";

export const Buttons = (props) => {
  return (
    <div className="Button__container">
      {/* first row */}
      <Button onClick={props.onClick} id="clear" value={"clear"} label="AC" />
      <Button onClick={props.onClick} id="delete" value={"del"} label="del" />
      <Button onClick={props.onClick} id="divide" value={"/"} label="/" />
      <Button onClick={props.onClick} id="multiply" value={"*"} label="X" />
      {/* second row */}
      <Button onClick={props.onClick} id="seven" value={"7"} label="7" />
      <Button onClick={props.onClick} id="eight" value={"8"} label="8" />
      <Button onClick={props.onClick} id="nine" value={"9"} label="9" />
      <Button onClick={props.onClick} id="subtract" value={"-"} label="-" />
      {/* third row */}
      <Button onClick={props.onClick} id="four" value={"4"} label="4" />
      <Button onClick={props.onClick} id="five" value={"5"} label="5" />
      <Button onClick={props.onClick} id="six" value={"6"} label="6" />
      <Button onClick={props.onClick} id="add" value={"+"} label="+" />
      {/* fourth row */}
      <Button onClick={props.onClick} id="one" value={"1"} label="1" />
      <Button onClick={props.onClick} id="two" value={"2"} label="2" />
      <Button onClick={props.onClick} id="three" value={"3"} label="3" />
      <Button onClick={props.onClick} id="equals" value={"="} label="=" />
      {/* fifth row */}
      <Button onClick={props.onClick} id="zero" value={"0"} label="0" />
      <Button onClick={props.onClick} id="decimal" value={"."} label="." />
    </div>
  );
};
