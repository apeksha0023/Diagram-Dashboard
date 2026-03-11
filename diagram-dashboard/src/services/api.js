export const getComponents = () => {
  return Promise.resolve([
    { id: 1, name: "Resistor", x: 30, y: 40 },
    { id: 2, name: "Capacitor", x: 60, y: 35 },
    { id: 3, name: "Diode", x: 45, y: 70 },
    { id: 4, name: "Transistor", x: 75, y: 55 }
  ]);
};