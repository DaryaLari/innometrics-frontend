import React from "react";
import Header from "./components/Header";
import styles from "./style.css";

class App extends React.Component {
  state = {
    opened: true
  }
  render() {
      return (
          <div>
            <Header/>
            {this.state.opened && <h2 className={styles.colored}>App</h2>}
            <h3 onClick={() => this.setState({opened: !this.state.opened})}>Click me</h3>
          </div>

      )
  }
}

export default App;