import { useState } from "react";
import "./App.css";
import { Command } from '@tauri-apps/api/shell'

function App() {

  const [o, setO] = useState("")

  async function greet() {
    const command = Command.sidecar('binaries/my-sidecar')
    const output = await command.execute()
    setO(output.stdout)
  }

  return (
    <div className="container">

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <button type="submit">Greet</button>
        <h1>{o}</h1>
      </form>

    </div>
  );
}

export default App;
