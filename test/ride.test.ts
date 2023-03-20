import Ride from '../src/Ride';

test('Deve calcular uma corrida no primeiro dia do mês', function() {
    const ride = new Ride();
    ride.addSegment(10, new Date('2021-03-01T10:00:00'));
    expect(ride.calculateFare()).toBe(15);
});
test('Deve calcular uma corrida noturna', function() {
    const ride = new Ride();
    ride.addSegment(10, new Date('2021-03-01T23:00:00'));
    expect(ride.calculateFare()).toBe(15);
});
test('Deve calcular uma corrida normal', function() {
    const ride = new Ride();
    ride.addSegment(10, new Date('2021-03-07T10:00:00'));
    expect(ride.calculateFare()).toBe(29);
});
test('Deve calcular uma corrida noturna no domingo', function() {
    const ride = new Ride();
    ride.addSegment(10, new Date('2021-03-07T23:00:00'));
    expect(ride.calculateFare()).toBe(50);
});
test('Deve calcular uma corrida com valor mínimo', function() {
    const ride = new Ride();
    ride.addSegment(3, new Date('2021-03-01T10:00:00'));
    expect(ride.calculateFare()).toBe(10);
});
