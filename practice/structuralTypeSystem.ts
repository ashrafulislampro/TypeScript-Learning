interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x} ${p.y}`);
}

// logs "12, 26"
const point = { x: 10, y: 28 };
logPoint(point);
