import expect from 'expect.js';
import deepFreeze from 'deep-freeze';
import card, {
    MOVE_CARD,
    EDIT_CARD
} from './card';

describe('card state', () => {
  it('should return the default state', () => {
    const initialState = card();
    expect(initialState.column).to.eql("");
    expect(initialState.row).to.eql("");
    expect(initialState.description).to.eql("");
  });

  it('should edit the card description', () => {
    const initialState = card();
    deepFreeze(initialState);
    const resultingState = card(initialState, { type: EDIT_CARD, description: 'New description' });
    expect(resultingState.description).to.eql('New description');
  });

  it('should move the card', () => {
    const initialState = card();
    deepFreeze(initialState);
    const resultingState = card(initialState, { type: MOVE_CARD, row: "cheese", column: "wiz"});
    expect(resultingState.row).to.eql("cheese");
    expect(resultingState.column).to.eql("wiz");
  });
});
