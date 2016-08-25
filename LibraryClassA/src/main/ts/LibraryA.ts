export interface IDoer {
  doThings(): string;
}

export class Doer implements IDoer {
  private message: string;

  constructor(message: string) {
    this.message = message;
  }

  doThings(): string {
    return this.message;
  }
}
