import React, { Component } from "react";
import "./css/App.css";
import Header from "./Header.js";
import ActiveTasks from "./ActiveTasks.js";
import AddTask from "./AddTask";
import FinishedTasks from "./FinishedTasks";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasksArr: [],
      date: "",
      priority: false,
      taskText: "",
      minDate: "",
    };
  }

  componentDidMount() {
    let date = new Date();
    date = date.toISOString().substr(0, 10);
    this.setState({
      date: date,
      minDate: date,
    });
  }

  handleAddTaskEvents = (event) => {
    if (event.target.name === "addTask_Text") {
      console.log(event.target.value);
      this.setState({
        taskText: event.target.value,
      });
    }

    if (event.target.name === "addTask_Date") {
      this.setState({
        date: event.target.value,
      });
    }

    if (event.target.name === "addTask_Priority") {
      this.setState({
        priority: !this.state.priority,
      });
    }

    if (event.target.name === "addTask_Btn") {
      console.log("click click");
      const task = {
        id: "",
        date: "",
        priority: false,
        text: "",
      };

      task.id = (function () {
        return new Date().getTime() + Math.floor(Math.random() * 1000);
      })();

      task.date = this.state.date;
      task.priority = this.state.priority;
      task.text = this.state.taskText;

      this.setState({
        tasksArr: [...this.state.tasksArr, task],
        priority: false,
        taskText: "",
        date: this.state.minDate,
      });
    }
  };

  render() {
    const { date, priority, taskText, minDate } = this.state;
    return (
      <div className="appWrapper">
        <Header />
        <AddTask
          handleAddTaskEvents={this.handleAddTaskEvents}
          date={date}
          priority={priority}
          taskText={taskText}
          minDate={minDate}
        />
        <ActiveTasks tasksArr={this.state.tasksArr} />
        <FinishedTasks />
      </div>
    );
  }
}

export default App;
