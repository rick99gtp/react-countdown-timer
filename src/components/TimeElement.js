import "./TimeElement.css";

const TimeElement = (props) => {
  return (
    <div className="time-element">
      <p>{props.time}</p>
      <span>{props.timeName}</span>
    </div>
  );
};

export default TimeElement;
