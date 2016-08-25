import {Doer} from '../../../../LibraryClassA/src/main/ts/LibraryA';

export class AnotherDoer {
  constructor() {

  }

  doThings(): string {
    return new Doer().doThings();
  }
}
