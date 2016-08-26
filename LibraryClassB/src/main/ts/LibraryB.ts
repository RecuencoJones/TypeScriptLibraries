import {IDoer, Doer} from 'library-a/src/main/ts/LibraryA';

export class AnotherDoer {
  private doer: IDoer;

  constructor() {
    this.doer = new Doer('Do things...');
  }

  doThings(): string {
    return this.doer.doThings();
  }
}
