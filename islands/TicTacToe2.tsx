import { useState } from "preact/hooks";

type SquareProps = {
  value: string | null;
  onSquareClick: (i: number) => void;
};
const Square = ({ value, onSquareClick }: SquareProps) => {
  // const [value, setValue] = useState<string>('');

  // function handleClick() {
  //   setValue('X');
  // }

  return (
    <button
      onClick={onSquareClick}
      style={{
        background: "#fff",
        border: "1px solid #999",
        float: "left",
        fontSize: "24px",
        fontWeight: "bold",
        lineHeight: "34px",
        height: "34px",
        marginRight: "-1px",
        marginTop: "-1px",
        padding: 0,
        textAlign: "center",
        width: "34px",
      }}
    >
      {value}
    </button>
  );
};

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array<string | null>(9).fill(null));

  const handleClick = (i: number) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  function calculateWinner(squares: Array<string | null>) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] && squares[a] === squares[b] && squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div class="flex flex-col">
      <div>{status}</div>
      <div class="flex flex-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div class="flex flex-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div class="flex flex-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}
