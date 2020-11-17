const FinishedTasks = (props) => {
  let tasksArr = [...props.tasksArr];

  tasksArr = tasksArr.map((elem) => {
    let element = null;
    if (elem.done === true) {
      element = (
        <div>
          <div>{elem.date}</div>
          <div>{elem.text}</div>
          <hr />
        </div>
      );
    }
    return element;
  });

  return (
    <div className="section">
      <div>
        Zadania zakończone: <hr></hr>
      </div>
      {tasksArr}
    </div>
  );
};

export default FinishedTasks;
