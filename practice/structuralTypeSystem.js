function logPoint(p) {
    console.log("".concat(p.x, " ").concat(p.y));
}
// logs "12, 26"
var point = { x: 10, y: 28 };
// logPoint(point);
var point2 = { x: 12, y: 26, z: 80 };
// logPoint(point2);
var rect = { x: 33, y: 3, width: 30, height: 80 };
// logPoint(rect);
var VirtualPoint = /** @class */ (function () {
    function VirtualPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    return VirtualPoint;
}());
var newVPoint = new VirtualPoint(15, 30);
logPoint(newVPoint);
