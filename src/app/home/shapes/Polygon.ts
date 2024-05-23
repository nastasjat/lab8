import { Point } from './Point';

export abstract class Polygon {
    points: Point[];
    color: string;

    constructor(points: Point[], color: string) {
        this.points = points;
        this.color = color;
    }

    move(dx: number, dy: number) {
        this.points.forEach(point => point.move(dx, dy));
    }

    rotate(angle: number, center: Point) {
        this.points.forEach(point => point.rotateAround(center, angle));
    }

    setColor(color: string) {
        this.color = color;
    }

    scale(factor: number) {
        const centerX = this.points.reduce((sum, point) => sum + point.x, 0) / this.points.length;
        const centerY = this.points.reduce((sum, point) => sum + point.y, 0) / this.points.length;
        const center = new Point(centerX, centerY);

        this.points.forEach(point => {
            point.x = center.x + (point.x - center.x) * factor;
            point.y = center.y + (point.y - center.y) * factor;
        });
    }
}