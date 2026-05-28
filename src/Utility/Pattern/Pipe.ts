export class PipeService {

  private functions: Function[] = []

  constructor() {
    this.functions = [];
  }

  register(func: Function) {
    this.functions.push(func);
  }

  execute(input: any) {
    return this.functions.reduce((result, func) => func(result), input);
  }
}
