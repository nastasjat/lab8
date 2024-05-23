import { Point } from './Point';
import { Hexagon } from './Hexagon';

describe('Hexagon', () => {
    let hex: Hexagon;

    beforeEach(() => {
        const points = [
            new Point(0, 0),
            new Point(1, 0),
            new Point(2, 1),
            new Point(1, 2),
            new Point(0, 2),
            new Point(-1, 1)
        ];
        hex = new Hexagon(points, 'blue');
    });

    it('should create a pentagon with 6 points', () => {
        expect(hex.points.length).toBe(6);
        expect(hex.color).toBe('blue');
    });

    it('should return false if not given 6 points', () => {
        const points = [
            new Point(0, 0),
            new Point(1, 0),
            new Point(1, 1)
        ];
        const pent = new Hexagon(points, 'red');
        expect(pent.isHexagon()).toBeFalsy();
    });


    it('should move the hexagon', () => {
        hex.move(2, 3);
        const expectedPoints = [
            { x: 2, y: 3 },
            { x: 3, y: 3 },
            { x: 4, y: 4 },
            { x: 3, y: 5 },
            { x: 2, y: 5 },
            { x: 1, y: 4 }
        ];

        hex.points.forEach((point, index) => {
            expect(point.x).toBeCloseTo(expectedPoints[index].x);
            expect(point.y).toBeCloseTo(expectedPoints[index].y);
        });
    });

    it('should rotate the hexagon around a center point', () => {
        const center = new Point(0, 0);
        hex.rotate(Math.PI / 2, center);
        const expectedPoints = [
            { x: 0, y: 0 },
            { x: 0, y: 1 },
            { x: -1, y: 2 },
            { x: -2, y: 1 },
            { x: -2, y: 0 },
            { x: -1, y: -1 }
        ];

        hex.points.forEach((point, index) => {
            expect(point.x).toBeCloseTo(expectedPoints[index].x);
            expect(point.y).toBeCloseTo(expectedPoints[index].y);
        });
    });

    it('should scale the hexagon', () => {
        hex.scale(2);
        const expectedPoints = [
            { x: -0.5, y: -1 },
            { x: 1.5, y: -1 },
            { x: 3.5, y: 1 },
            { x: 1.5, y: 3 },
            { x: -0.5, y: 3 },
            { x: -2.5, y: 1 }
        ];

        hex.points.forEach((point, index) => {
            expect(point.x).toBeCloseTo(expectedPoints[index].x);
            expect(point.y).toBeCloseTo(expectedPoints[index].y);
        });
    });

    it('should change the color of the hexagon', () => {
        hex.setColor('red');
        expect(hex.color).toBe('red');
    });
});
