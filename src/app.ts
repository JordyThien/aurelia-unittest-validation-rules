import { ValidationRules } from 'aurelia-validation';

export class App {
  public message: string = 'Hello World!';

  constructor() {
    ValidationRules
      .ensure((a: App) => a.message)
        .required()
        .withMessage('required')
      .on(this);
  }
}
