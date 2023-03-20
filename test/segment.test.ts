import Segment from '../src/Segment';

test('Não deve existir segmento com distância inferior a zero', function() {
    expect(
        function() {
            new Segment(-10, new Date('2021-03-01T10:00:00'));
        }
    ).toThrow(new Error('Invalid distance'));
});
test('Não deve existir segmento com data inválida', function() {
    expect(
        function() {
            new Segment(10, new Date('abcdef'))
        }
    ).toThrow(new Error('Invalid date'));
});
