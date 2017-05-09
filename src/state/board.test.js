import expect from 'expect.js';
import deepFreeze from 'deep-freeze';
import board, {
    row,
    column,
    ADD_COLUMN,
    REMOVE_COLUMN,
    NAME_COLUMN,
    MOVE_COLUMN,
    ADD_ROW,
    REMOVE_ROW,
    NAME_ROW,
    MOVE_ROW,
    ADD_CARD,
    REMOVE_CARD,
    MOVE_CARD,
} from './board';
import card from './card';

describe('board state', () => {
    it('should provide the initial state', () => {
        const initialState = board(undefined, {});
        expect(initialState.cards).to.eql([]);
        expect(initialState.columns).to.eql([]);
        expect(initialState.rows).to.eql([]);
    });

    describe('column actions', () => {
        it('should add a column to the end', () => {
            // assemble
            const initialState = board({
                columns: [column({id: '1', name: 'TODO'})]
            });
            // act
            const resultingState = board(initialState, {
                type: ADD_COLUMN,
                column: {id: '2', name: 'DOING'}
            });
            // assert
            expect(resultingState.columns).to.eql([column({id: '1', name: 'TODO'}), column({id: '2', name: 'DOING'})]);

        })

        it('should remove the correct column from the column list', () => {
            // assemble
            const initialState = board({
                columns: [column({id: '1', name: 'TO DO'}), column({id: '2', name: 'DOING'}), column({id: '3', name: 'DONE'})]
            });
            deepFreeze(initialState);
            // act
            const resultingState = board(initialState, {
                type: REMOVE_COLUMN,
                index: 1
            });
            // assert
            expect(resultingState.columns).to.eql([column({id: '1', name: 'TO DO'}), column({id: '3', name: 'DONE'})]);

        })

        it('should rename the correct column', () => {
            // assemble
            const initialState = board({
                columns: [column({id: '1', name: 'TO DO'}), column({id: '2', name: 'DOING'}), column({id: '3', name: 'DONE'})],
                cards: [card({column: '1'}), card({column: '2'})]
            });
            // act
            const resultingState = board(initialState, {
                type: NAME_COLUMN,
                id: '2',
                name: 'IN PROGRESS'
            });
            // assert
            expect(resultingState.columns).to.eql([column({id: '1', name: 'TO DO'}), column({id: '2', name: 'IN PROGRESS'}), column({id: '3', name: 'DONE'})]);
            expect(resultingState.cards).to.eql([card({column: '1'}), card({column:'2'})]);

        })

        it('should move the column to the left', () => {
            // assemble
            const initialState = board({
                columns: ['TO DO', 'DOING', 'DONE']
            });
            // act
            const resultingState = board(initialState, {
                type: MOVE_COLUMN,
                index: 2,
                newIndex: 1
            });
            // assert
            expect(resultingState.columns).to.eql(['TO DO', 'DONE', 'DOING']);

        })

        it('should move the column to the right', () => {
            // assemble
            const initialState = board({
                columns: ['TO DO', 'DOING', 'DONE']
            });
            // act
            const resultingState = board(initialState, {
                type: MOVE_COLUMN,
                index: 1,
                newIndex: 2
            });
            // assert
            expect(resultingState.columns).to.eql(['TO DO', 'DONE', 'DOING']);

        })

        it('should stay where it is', () => {
            // assemble
            const initialState = board({
                columns: ['TO DO', 'DOING', 'DONE']
            });
            // act
            const resultingState = board(initialState, {
                type: MOVE_COLUMN,
                index: 2,
                newIndex: 2
            });
            // assert
            expect(resultingState.columns).to.eql(['TO DO', 'DOING', 'DONE']);

        })
      });


      describe('row actions', () => {
        it('should add a row to the bottom', () => {
            // assemble
            const initialState = board({
                rows: [row({id: '0', name: 'HIGH PRIORITY'})]
            });
            // act
            const resultingState = board(initialState, {
                type: ADD_ROW,
                row: row({id:'1', name:'LOW PRIORITY'})
            });
            // assert
            expect(resultingState.rows).to.eql([row({id: '0', name: 'HIGH PRIORITY'}), row({id:'1', name:'LOW PRIORITY'})]);

        })

        it('should remove the correct index from the ROW list', () => {
            // assemble
            const initialState = board({
                rows: [row({id:'0', name:'HIGH PRIORITY'}), row({id:'1', name:'MIDDLE PRIORITY'}), row({id:'2', name:'LOW PRIORITY'})]
            });
            deepFreeze(initialState);
            // act
            const resultingState = board(initialState, {
                type: REMOVE_ROW,
                index: 1
            });
            // assert
            expect(resultingState.rows).to.eql([row({id:'0', name:'HIGH PRIORITY'}), row({id:'2', name:'LOW PRIORITY'})]);

        })

        it('should rename the correct ROW', () => {
            // assemble
            const initialState = board({
                rows: [row({id:'0', name:'HIGH PRIORITY'}), row({id:'1', name:'MIDDLE PRIORITY'}), row({id:'2', name:'LOW PRIORITY'})],
                cards: [card({row: '0'}), card({row: '1'})]
            });
            // act
            const resultingState = board(initialState, {
                type: NAME_ROW,
                id: '1',
                name: 'NICE TO HAVE'
            });
            // assert
            expect(resultingState.rows).to.eql([row({id:'0', name:'HIGH PRIORITY'}), row({id:'1', name:'NICE TO HAVE'}), row({id:'2', name:'LOW PRIORITY'})]);
            expect(resultingState.cards).to.eql([card({row: '0'}), card({row: '1'})]);

        })

        it('should move the ROW to the left', () => {
            // assemble
            const initialState = board({
                rows: ['HIGH PRIORITY', 'MIDDLE PRIORITY', 'LOW PRIORITY']
            });
            // act
            const resultingState = board(initialState, {
                type: MOVE_ROW,
                index: 2,
                newIndex: 1
            });
            // assert
            expect(resultingState.rows).to.eql(['HIGH PRIORITY', 'LOW PRIORITY', 'MIDDLE PRIORITY']);

        })

        it('should move the ROW to the right', () => {
            // assemble
            const initialState = board({
                rows: ['HIGH PRIORITY', 'MIDDLE PRIORITY', 'LOW PRIORITY']
            });
            // act
            const resultingState = board(initialState, {
                type: MOVE_ROW,
                index: 1,
                newIndex: 2
            });
            // assert
            expect(resultingState.rows).to.eql(['HIGH PRIORITY', 'LOW PRIORITY', 'MIDDLE PRIORITY']);

        })

        it('should stay where it is', () => {
            // assemble
            const initialState = board({
                rows: ['HIGH PRIORITY', 'MIDDLE PRIORITY', 'LOW PRIORITY']
            });
            // act
            const resultingState = board(initialState, {
                type: MOVE_ROW,
                index: 2,
                newIndex: 2
            });
            // assert
            expect(resultingState.rows).to.eql(['HIGH PRIORITY', 'MIDDLE PRIORITY', 'LOW PRIORITY']);

        })
      });

        // CARD ACTIONS
      describe('card actions', () => {
        it('should add a card', () => {
            // assemble
            const initialState = board();
            const myCard = card();
            // act
            const resultingState = board(initialState, {
                type: ADD_CARD,
                card: myCard
            });
            // assert
            expect(resultingState.cards).to.eql([myCard]);

        });

        it('should remove a card', () => {
          const initialState = board({
            cards: [card({id: 0})]
          });

          const resultingState = board(initialState, {
            type: REMOVE_CARD,
            id: 0
          });

          expect(resultingState.cards).to.eql([]);
        });

        it('should move up', () => {
          const initialState = board({
            cards: [card({description: "High priority"}), card({description: "Low priority"})]
          });

          const resultingState = board(initialState, {
            type: MOVE_CARD,
            index: 1,
            newIndex: 0
          });

          expect(resultingState.cards[0].description).to.eql("Low priority");
        });

        it('should move down', () => {
          const initialState = board({
            cards: [card({description: "High priority"}), card({description: "Low priority"}), card({description: "Low priority"})]
          });

          const resultingState = board(initialState, {
            type: MOVE_CARD,
            index: 0,
            newIndex: 5
          });

          expect(resultingState.cards[2].description).to.eql("High priority");

        });

        it('should stay where it is', () => {
          const initialState = board({
            cards: [card({description: "High priority"}), card({description: "Low priority"})]
          });

          const resultingState = board(initialState, {
            type: MOVE_CARD,
            index: 1,
            newIndex: 1
          });

          expect(resultingState.cards[0].description).to.eql("High priority");
        });

    });
});
