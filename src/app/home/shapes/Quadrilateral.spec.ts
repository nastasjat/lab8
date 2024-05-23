import { Point } from './Point';
import { Quadrilateral } from './Quadrilateral';

describe('Quadrilateral', () => {
    let quad: Quadrilateral;

    beforeEach(() => {
        const points = [
            new Point(0, 0),
            new Point(1, 0),
            new Point(1, 1),
            new Point(0, 1)
        ];
        quad = new Quadrilateral(points, 'purple');
    });
    
    it('should create a quadrilateral with 4 points', () => {
        expect(quad.points.length).toBe(4);
        expect(quad.color).toBe('purple');
    });

    it('should return false if not given 4 points', () => {
        const points = [
            new Point(0, 0),
            new Point(1, 0),
            new Point(1, 1)
        ];
        const quad = new Quadrilateral(points, 'red');
        expect(quad.isQuadrilateral()).toBeFalsy();
    });

    it('should move the quadrilateral', () => {
        quad.move(2, 3);
        expect(quad.points[0].x).toBe(2);
        expect(quad.points[0].y).toBe(3);
        expect(quad.points[1].x).toBe(3);
        expect(quad.points[1].y).toBe(3);
        expect(quad.points[2].x).toBe(3);
        expect(quad.points[2].y).toBe(4);
        expect(quad.points[3].x).toBe(2);
        expect(quad.points[3].y).toBe(4);
    });

    it('should scale the quadrilateral', () => {
        quad.scale(0.5);
        expect(quad.points[0].x).toBeCloseTo(0.25);
        expect(quad.points[0].y).toBeCloseTo(0.25);
        expect(quad.points[1].x).toBeCloseTo(0.75);
        expect(quad.points[1].y).toBeCloseTo(0.25);
        expect(quad.points[2].x).toBeCloseTo(0.75);
        expect(quad.points[2].y).toBeCloseTo(0.75);
        expect(quad.points[3].x).toBeCloseTo(0.25);
        expect(quad.points[3].y).toBeCloseTo(0.75);
    });

    it('should rotate the quadrilateral around a center point (1.5, 1.5)', () => {
        const center = new Point(1.5, 1.5);
        quad.rotate(Math.PI / 2, center);
        expect(quad.points[0].x).toBeCloseTo(3);
        expect(quad.points[0].y).toBeCloseTo(0);
        expect(quad.points[1].x).toBeCloseTo(3);
        expect(quad.points[1].y).toBeCloseTo(1);
        expect(quad.points[2].x).toBeCloseTo(2);
        expect(quad.points[2].y).toBeCloseTo(1);
        expect(quad.points[3].x).toBeCloseTo(2);
        expect(quad.points[3].y).toBeCloseTo(0);
    });

    it('should change the color of the quadrilateral', () => {
        quad.setColor('white');
        expect(quad.color).toBe('white');
    });
});
