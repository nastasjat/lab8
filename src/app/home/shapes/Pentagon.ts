import { Point } from './Point';
import { Polygon } from './Polygon';

export class Pentagon extends Polygon {
    constructor(points: Point[], color: string) {
        super(points, color);
    }

    isPentagon(): boolean {
        return this.points.length === 5;
    }
}
