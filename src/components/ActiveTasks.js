import "./css/ActiveTasks.css";

const ActiveTasks = (props) => {
  let tasksArr = [...props.tasksArr];
  let display;
  tasksArr = tasksArr.map((elem) => {
    return (
      <div className="eachActiveTask">
        <div style={{ color: "grey" }}>{elem.date}</div>
        {elem.priority === true ? (
          <div style={{ color: "red" }}>{elem.text}</div>
        ) : (
          <div>{elem.text}</div>
        )}
        <hr />
      </div>
    );
  });

  if (tasksArr.length === 0) {
    display = "Brak zadań do wyświetlenia";
  } else {
    display = (
      <div>
        <div style={{ marginBottom: "10px", fontSize: "24px" }}>
          Lista zadań:
        </div>{" "}
        {tasksArr}
      </div>
    );
  }

  return <div className="section">{display} </div>;
};

export default ActiveTasks;
