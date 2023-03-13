import { calculateRides } from '../src/main';

test("Deve calcular uma corrida no primeiro dia do mês", function() {
    expect(calculateRides([{ distance: 10, date: new Date("2021-03-01T10:00:00") }])).toBe(15);
});
test("Deve calcular uma corrida noturna", function() {
    expect(calculateRides([{ distance: 10, date: new Date("2021-03-01T23:00:00") }])).toBe(15);
});
test("Deve calcular uma corrida asdadasdas", function() {
    expect(calculateRides([{ distance: 10, date: new Date("2021-03-07T10:00:00") }])).toBe(29);
});
test("Deve calcular uma corrida noturna no domingo", function() {
    expect(calculateRides([{ distance: 10, date: new Date("2021-03-07T23:00:00") }])).toBe(50);
});
test("Não deve calcular uma corrida com distância inferior a zero", function() {
    const segments = [
        { distance: -10, date: new Date("2021-03-01T10:00:00") }
    ];
    expect(() => calculateRides(segments)).toThrow(new Error('Invalid distance'));
});
test("Não deve calcular uma corrida com data inválida", function() {
    const segments = [
        { distance: 10, date: new Date("abcdef") }
    ];
    expect(() => calculateRides(segments)).toThrow(new Error('Invalid date'));
});
test("Deve calcular uma corrida com valor mínimo", function() {
    expect(calculateRides([{ distance: 3, date: new Date("2021-03-01T10:00:00") }])).toBe(10);
});
