import React, { Component } from "react";
import Tareas from "./Tareas";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tareas: [],
      uncheckedCount: 0,
    };
  }

  addTodo() {
    const tarea = {
      titulo: prompt("Tarea a realizar"),
      checked: false,
    };

    const newArray = Array.from(this.state.tareas);
    newArray.push(tarea);
    this.setState({ tareas: newArray });
    this.setState({ uncheckedCount: this.state.uncheckedCount + 1 });
  }

  uncheckedCount(e) {
    if (e.target.checked) {
      this.setState({ uncheckedCount: this.state.uncheckedCount - 1 });
    } else {
      this.setState({ uncheckedCount: this.state.uncheckedCount + 1 });
    }
  }

  render() {
    return (
      <div>
        <h1 class="center title">TODO App</h1>
        <div class="flow-right controls">
          <p> Item count: {this.state.tareas.length} </p>
          <p> Unchecked count: {this.state.uncheckedCount} </p>
        </div>
        <button class="button center" onClick={this.addTodo.bind(this)}>
          Agregar Tarea
        </button>

        <Tareas
          tareas={this.state.tareas}
          unchecked={this.uncheckedCount.bind(this)}
        />
      </div>
    );
  }
}

export default App;
