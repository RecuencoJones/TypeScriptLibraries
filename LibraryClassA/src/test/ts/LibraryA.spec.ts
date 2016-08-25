import {expect} from 'chai';
import {Doer} from '../../main/ts/LibraryA';

describe('Doer', () => {
  let sot: Doer;

  beforeEach(() => {
    sot = new Doer('Doing things...');
  });

  it('should do things', () => {
    expect(sot.doThings()).to.equal('Doing things...');
  });
});
