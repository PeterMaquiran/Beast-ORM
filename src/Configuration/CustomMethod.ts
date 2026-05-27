import { Model as ModelType } from '../Presentation/Api';
class CustomMethod {


  add(Model:typeof ModelType<any>, methodName: string, value:object) {
    // Add a static method to the model for accessing the table schema.


    (Model as any)[methodName] = function () {
      return value
    };

    (Model.prototype as any)[methodName] = function () {
      return value
    }

  }


  addStatic(Model:typeof ModelType<any>, methodName: string, value:object) {
    // Add a static method to the model for accessing the table schema.

    (Model as any)[methodName] = function () {
      return value
    }

  }

  addStaticMethodNowrap(Model:typeof ModelType<any>, methodName: string, func:Function) {
    // Add a static method to the model for accessing the table schema.
    (Model as any)[methodName] =  func

    (Model.prototype as any)[methodName] = func
  }
}


export const customMethod = new CustomMethod()
