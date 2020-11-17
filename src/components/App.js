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
    // console.log(event.currentTarget);

    if (event.currentTarget.name === "addTask_Text") {
      this.setState({
        taskText: event.target.value,
      });
    }

    if (event.currentTarget.name === "addTask_Date") {
      this.setState({
        date: event.target.value,
      });
    }

    if (event.currentTarget.name === "addTask_Priority") {
      this.setState({
        priority: !this.state.priority,
      });
    }

    if (event.currentTarget.name === "removeTask") {
      let tasksArr = [...this.state.tasksArr];
      console.log(tasksArr);
      const id = event.currentTarget.id;
      console.log(id);
      tasksArr = tasksArr.filter((el) => {
        return Number(el.id) !== Number(id);
      });
      this.setState({
        tasksArr,
      });
    }

    if (event.currentTarget.name === "makeTaskDone") {
      let tasksArr = [...this.state.tasksArr];
      console.log(tasksArr);
      const id = event.currentTarget.id;
      console.log(id);
      tasksArr = tasksArr.map((el) => {
        if (Number(el.id) === Number(id)) {
          el.done = true;
        }
        return el;
      });
      this.setState({
        tasksArr,
      });
    }

    if (event.currentTarget.name === "addTask_Btn") {
      const task = {
        id: "",
        date: "",
        priority: false,
        text: "",
        done: false,
      };

      task.id = (function () {
        return new Date().getTime() + Math.floor(Math.random() * 1000);
      })();

      task.date = this.state.date;
      task.priority = this.state.priority;
      task.text = this.state.taskText;

      if (task.text === "") {
        window.alert("treść zadania nie może być pusta!");
      } else {
        this.setState({
          tasksArr: [...this.state.tasksArr, task],
          priority: false,
          taskText: "",
          date: this.state.minDate,
        });
      }
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
        <ActiveTasks
          tasksArr={this.state.tasksArr}
          handleAddTaskEvents={this.handleAddTaskEvents}
        />
        <FinishedTasks tasksArr={this.state.tasksArr} />
      </div>
    );
  }
}

export default App;
