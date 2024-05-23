export class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
     }
    
    move(x1: number, y1: number) {
        this.x += x1;
        this.y += y1;
    }

    rotate(angle: number) {
        const x1 = this.x * Math.cos(angle) - this.y * Math.sin(angle);
        const y1 = this.x * Math.sin(angle) + this.y * Math.cos(angle);
        this.x = x1;
        this.y = y1;
    }

    rotateAround(rotationPoint: Point, angle: number) {
        this.x -= rotationPoint.x;
        this.y -= rotationPoint.y;

        this.rotate(angle);

        this.x += rotationPoint.x;
        this.y += rotationPoint.y;
    }

    getDistance(point1: Point, point2: Point): number {
        const dx = point2.x - point1.x;
        const dy = point2.y - point1.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}