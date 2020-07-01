import {counterReducer, initialState} from "./counter.reducer";
import {decrement, increment, reset} from "./counter.actions";

describe('counter reducer', ()=> {


  it('initial state of counter = 0', () => {
    expect(initialState).toEqual(0);
  })
  it('state to be 1 after increment action', () => {
    expect(counterReducer(initialState, increment)).toEqual(1);
  })
  it('steate should be -1 after decrement', () => {
    expect(counterReducer(initialState, decrement)).toEqual(-1);
  })
  it('reset should return to state zero', () => {
    expect(counterReducer(33, reset)).toEqual(0);
  })
});
