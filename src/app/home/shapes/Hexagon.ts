import { Point } from './Point';
import { Polygon } from './Polygon';

export class Hexagon extends Polygon {
    constructor(points: Point[], color: string) {
        super(points, color);
    }

    isHexagon(): boolean {
        return this.points.length === 6;
    }
}
