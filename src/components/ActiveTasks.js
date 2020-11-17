import "./css/ActiveTasks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ActiveTasks = (props) => {
  let tasksArr = [...props.tasksArr];
  let display;
  const handleAddTaskEvents = props.handleAddTaskEvents;

  tasksArr = tasksArr.map((elem) => {
    let element;
    if (elem.done === false) {
      element = (
        <>
          <div className="eachActiveTask" key={elem.id}>
            <div className="informations">
              <div style={{ color: "grey" }}>{elem.date}</div>
              {elem.priority === true ? (
                <div style={{ color: "red" }}>{elem.text}</div>
              ) : (
                <div>{elem.text}</div>
              )}
            </div>
            <div className="actions">
              <button
                name="makeTaskDone"
                id={elem.id}
                onClick={handleAddTaskEvents}
              >
                <FontAwesomeIcon icon={faCheckCircle} />
              </button>
              <button
                name="removeTask"
                id={elem.id}
                onClick={handleAddTaskEvents}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </div>
          </div>
          <hr />
        </>
      );
    } else {
      element = null;
    }
    return element;
  });

  if (tasksArr.length === 0) {
    display = "Brak zadań do wyświetlenia";
  } else {
    display = (
      <div>
        <div style={{ marginBottom: "15px", fontSize: "24px" }}>
          Lista zadań:
          <hr />
        </div>{" "}
        {tasksArr}
      </div>
    );
  }

  return <div className="section">{display} </div>;
};

export default ActiveTasks;
