declare module LibraryA {
  export interface IDoer {
    doThings(): string;
  }

  export class Doer implements IDoer {
    constructor(message: string);
    doThings(): string;
  }
}
