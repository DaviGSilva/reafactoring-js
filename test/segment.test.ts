import Segment from '../src/Segment';

test('should throw an error if segment distance less than zero', function() {
    expect(
        function() {
            new Segment(-10, new Date('2021-03-01T10:00:00'));
        }
    ).toThrow(new Error('Invalid distance'));
});
test('should throw an error if invalid segment date', function() {
    expect(
        function() {
            new Segment(10, new Date('abcdef'))
        }
    ).toThrow(new Error('Invalid date'));
});
