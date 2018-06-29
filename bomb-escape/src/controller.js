export const Directions = {
  UP: "UP",
  DOWN: "DOWN",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
  STAY: "STAY"
}

// const initialState = {
//   boardWidth: 31,
//   boardHeight: 31,
//   playerPosition: {
//     x: BOARD_WIDTH / 2,
//     y: BOARD_HEIGHT / 2
//   },
//   bombs: [
//     {
//       timer: 2,
//       x: 0,
//       y: 0
//     }
//   ],
//   gameOver: false
// }

export const doTurn = (gameState) => {
  return Directions.STAY;
}