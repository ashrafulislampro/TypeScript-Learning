interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x} ${p.y}`);
}

// logs "12, 26"
const point = { x: 10, y: 28 };
// logPoint(point);

const point2 = { x: 12, y: 26, z: 80 };
// logPoint(point2);

const rect = { x: 33, y: 3, width: 30, height: 80 };
// logPoint(rect);

class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(15, 30);
logPoint(newVPoint);
