import { Signal, useSignal } from "@preact/signals";

type Move = {
  X: number;
  Y: number;
  // MoveIndex: number;
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
                <div
                  key={y}
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
                </div>
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
