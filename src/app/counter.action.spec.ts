import {decrement, increment, reset} from "./counter.actions";


describe('Counter Actions', () => {
  it('should have increment action', () => {
      expect(increment).toBeTruthy();
  })
  it('should have decrement action', () => {
    expect(decrement).toBeTruthy();
  })
  it('should have reset action', () => {
    expect(reset).toBeTruthy();
  })
})
