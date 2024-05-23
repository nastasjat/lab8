import { Point } from './Point';

describe('Point', () => {
  let point: Point;
  beforeEach(() => {
    point = new Point(1, 1);
  });
    
  it('should create a point', () => {
    expect(point).toBeTruthy();
  });
  
  it('should move the point to a new position if x = 2 and y = 3', () => {
    let x = 2, y = 3;
    point.move(x, y);
    expect(point.x).toBe(3);
    expect(point.y).toBe(4);
  });

  it('should rotate the point around the origin', () => {
    point.rotate(Math.PI / 2); 
    expect(point.x).toBeCloseTo(-1);
    expect(point.y).toBeCloseTo(1);
  });

  it('should rotate the point around a point with coordinates (2, 2)', () => {
    const center = new Point(2, 2);
    const expectedX = 3;
    const expectedY = 1;

    point.rotateAround(center, Math.PI / 2); 

    expect(point.x).toBeCloseTo(expectedX);
    expect(point.y).toBeCloseTo(expectedY);
  });

  it('should calculate the distance between point (0, 0) and point (3, 4)', () => {
    const point1 = new Point(0, 0);
    const point2 = new Point(3, 4);
    const expectedDistance = 5;

    const distance = point.getDistance(point1, point2);

    expect(distance).toBeCloseTo(expectedDistance);
  });
});