import * as app from "./app";
import * as math from "./math";
test("calls math.add", () => {
  const addMock = jest.spyOn(math, "add");
  // override the implementation
  addMock.mockImplementation(() => "mock");
  expect(app.doAdd(1, 2)).toEqual("mock");
  // restore the original implementation
  addMock.mockRestore();
  expect(app.doAdd(1, 2)).toEqual(3);
});

//Anula la implementación original y devuelve el valor "mock", 
//Con el fin de verificar que se esté usando el mock
//luego se realmacena la implementación original 
//y se comprueba si su resultado es correcto