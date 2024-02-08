import { Signal, useSignal } from "@preact/signals";

class Move {
  X: number;
  Y: number;
  // MoveIndex: number;

  constructor(X: number, Y: number) {
    this.X = X;
    this.Y = Y;
  }
}

type PlayMove = {
  value: string;
};

const Square = () => {
  const value: Signal<string> = useSignal("");

  function handleClick() {
    value.value = "X";
  }

  return (
    <div
      onClick={handleClick}
      style={{
        background: "#fff",
        border: "1px solid #999",
        float: "left",
        padding: 0,
        height: "34px",
        width: "34px",
        textAlign: "center",
      }}
    >
      {value}
    </div>
  );
};

const Gameboard = () => {
  return (
    <div>
      {[0, 1, 2].map((x) => (
        <div key={x} style={{ display: "flex", flexDirection: "column" }}>
          <div>
            {[0, 1, 2].map((y) => {
              const move: Move = { X: x, Y: y };
              return (
                <Square
                  key={y}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default function TicTacToe() {
  const moves: Signal<Move[]> = useSignal(new Array<Move>());
  return <Gameboard />;
}
