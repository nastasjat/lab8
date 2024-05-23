import { Pentagon } from './Pentagon';
import { Point } from './Point';


describe('Pentagon', () => {
    let pent: Pentagon;

    beforeEach(() => {
        const points = [
            new Point(0, 0),
            new Point(2, 0),
            new Point(2.5, 2),
            new Point(1, 3),
            new Point(-0.5, 2)
        ];
        pent = new Pentagon(points, 'green');
    });
    
    it('should create a pentagon with 5 points', () => {
        expect(pent.points.length).toBe(5);
        expect(pent.color).toBe('green');
    });

    it('should return false if not given 5 points', () => {
        const points = [
            new Point(0, 0),
            new Point(1, 0),
            new Point(1, 1)
        ];
        const pent = new Pentagon(points, 'red');
        expect(pent.isPentagon()).toBeFalsy();
    });

    it('should move the pentagon', () => {
        pent.move(2, 3);
        const expectedPoints = [
            { x: 2, y: 3 },
            { x: 4, y: 3 },
            { x: 4.5, y: 5 },
            { x: 3, y: 6 },
            { x: 1.5, y: 5 }
        ];

        pent.points.forEach((point, index) => {
            expect(point.x).toBeCloseTo(expectedPoints[index].x);
            expect(point.y).toBeCloseTo(expectedPoints[index].y);
        });
    });

    it('should scale the pentagon', () => {
        pent.scale(0.5);
        const expectedPoints = [
            { x: 0.5, y: 0.7 },
            { x: 1.5, y: 0.7 },
            { x: 1.75, y: 1.7 },
            { x: 1, y: 2.2 },
            { x: 0.25, y: 1.7 }
        ];

        pent.points.forEach((point, index) => {
            expect(point.x).toBeCloseTo(expectedPoints[index].x);
            expect(point.y).toBeCloseTo(expectedPoints[index].y);
        });
    });

    it('should rotate the pentagon around a center point (1.5, 1.5)', () => {
        const center = new Point(1.5, 1.5);
        pent.rotate(Math.PI / 2, center);
        const expectedPoints = [
            { x: 3, y: 0 },
            { x: 3, y: 2 },
            { x: 1, y: 2.5 },
            { x: 0, y: 1 },
            { x: 1, y: -0.5 }
        ];

        pent.points.forEach((point, index) => {
            expect(point.x).toBeCloseTo(expectedPoints[index].x);
            expect(point.y).toBeCloseTo(expectedPoints[index].y);
        });
    });

    it('should change the color of the pentagon', () => {
        pent.setColor('blue');
        expect(pent.color).toBe('blue');
    });
});
