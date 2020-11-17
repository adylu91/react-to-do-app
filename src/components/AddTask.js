import "./css/AddTask.css";

const AddTask = (props) => {
  const handleAddTaskEvents = props.handleAddTaskEvents;
  const priortiy = props.priority;
  const minDate = props.minDate;
  const date = props.date;
  const taskText = props.taskText;
  return (
    <div className="addTask_Wrapper section">
      <label htmlFor="addTask_Task">
        Data zadania:
        <input
          type="date"
          id="addTask_Date"
          name="addTask_Date"
          value={date}
          min={minDate}
          // max="2018-12-31"
          onChange={handleAddTaskEvents}
        ></input>
      </label>

      <label htmlFor="addTask_Priority">
        Dodaj wysoki priorytet:
        <input
          type="checkbox"
          id="addTask_Priority"
          name="addTask_Priority"
          checked={priortiy}
          onChange={handleAddTaskEvents}
        ></input>
      </label>

      <div>
        <button
          className="addTask_Btn"
          name="addTask_Btn"
          onClick={handleAddTaskEvents}
        >
          Dodaj
        </button>
      </div>

      <div>
        <label htmlFor="addTask_Text"> Treść zadania:</label>
        <input
          type="text"
          name="addTask_Text"
          id="addTask_Text"
          placeholder="Wpisz treść zadania..."
          onChange={handleAddTaskEvents}
          value={taskText}
        />
      </div>
    </div>
  );
};

export default AddTask;
