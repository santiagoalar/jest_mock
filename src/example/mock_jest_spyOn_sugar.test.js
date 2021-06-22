import * as app from "./app";
import * as math from "./math";
test("calls math.add", () => {
  // store the original implementation
  const originalAdd = math.add;
  // mock add with the original implementation
  math.add = jest.fn(originalAdd);
  // spy the calls to add
  expect(app.doAdd(1, 2)).toEqual(3);
  expect(math.add).toHaveBeenCalledWith(1, 2);
  // override the implementation
  math.add.mockImplementation(() => "mock");
  expect(app.doAdd(1, 2)).toEqual("mock");
  expect(math.add).toHaveBeenCalledWith(1, 2);
  // restore the original implementation
  math.add = originalAdd;
  expect(app.doAdd(1, 2)).toEqual(3);
});

//Anula la implementación original y devuelve el valor "mock", 
//Con el fin de verificar que se esté usando el mock
//luego se realmacena la implementación original 
//y se comprueba si su resultado es correcto

