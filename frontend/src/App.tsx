import { useState } from "react";
import "./App.css"
import Board from "@/components/Board";

export default function App() {
  const [xIsNext, setxIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handleClick(nextSquares:(string|null)[]) {
    setHistory([...history, nextSquares]);
    setxIsNext(!xIsNext);
  }
  return(
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handleClick}/>
      </div>
      <div className="game-info">
        <ol>

        </ol>
      </div>
    </div>
  )
}
