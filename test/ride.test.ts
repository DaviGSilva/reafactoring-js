import Ride from '../src/Ride';

test('Should calculate a ride in first day of the month', function() {
    const ride = new Ride();
    ride.addSegment(10, new Date('2021-03-01T10:00:00'));
    expect(ride.calculateFare()).toBe(15);
});
test('Should calculate a night ride', function() {
    const ride = new Ride();
    ride.addSegment(10, new Date('2021-03-01T23:00:00'));
    expect(ride.calculateFare()).toBe(15);
});
test('Should calculate a normal ride', function() {
    const ride = new Ride();
    ride.addSegment(10, new Date('2021-03-07T10:00:00'));
    expect(ride.calculateFare()).toBe(29);
});
test('Should calculate a night ride on Sunday', function() {
    const ride = new Ride();
    ride.addSegment(10, new Date('2021-03-07T23:00:00'));
    expect(ride.calculateFare()).toBe(50);
});
test('Should calculate a ride with minimum price', function() {
    const ride = new Ride();
    ride.addSegment(3, new Date('2021-03-01T10:00:00'));
    expect(ride.calculateFare()).toBe(10);
});
