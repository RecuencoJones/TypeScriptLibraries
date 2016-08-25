import {expect} from 'chai';
import {AnotherDoer} from '../../main/ts/LibraryB';

describe('AnotherDoer', () => {
  let sot: AnotherDoer;

  beforeEach(() => {
    sot = new AnotherDoer();
  });

  it('should do things', () => {
    expect(sot.doThings()).to.equal('Doing things...');
  });
});
