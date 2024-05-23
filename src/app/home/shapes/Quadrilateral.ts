import { Point } from './Point';
import { Polygon } from './Polygon';

export class Quadrilateral extends Polygon {
    constructor(points: Point[], color: string) {
        super(points, color);
    }

    isQuadrilateral(): boolean {
        return this.points.length === 4;
    }

}