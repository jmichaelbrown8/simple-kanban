import React, {Component} from 'react';
import Row from './components/Row';
import ColumnHeader from './components/ColumnHeader';
import Card from './components/Card';
import uuid from 'uuid';
import './App.css';

class App extends Component {
    render() {
        const store = this.props.store;
        const board = store.getState().board;
        
        const orphans = board.cards.filter((card) => {
          var inRows = board.rows.reduce((acc, val) => {
            return acc || card.row === val.id;
          }, false);

          var inCols = board.columns.reduce((acc, val) => {
            return acc || card.column === val.id;
          }, false);

          return !(inRows && inCols);
        });

        return (
            <div>
              <div id="columns">
                <span className="columnspacer"></span>
                {board.columns.map((column, index) => <ColumnHeader key={column+index} store={store} column={column} index={index} />)}
                <button onClick={() => {store.dispatch({type: 'ADD_COLUMN', column: {name: 'New Column', id: uuid.v4()}})}}>+ Column</button>
              </div>

              <div id="rows">
                {board.rows.map((row, index) => <Row key={row + index} store={store} row={row} index={index} />)}
              </div>
              <button onClick={() => {store.dispatch({type: 'ADD_ROW', row: {name: 'New Row', id: uuid.v4()}})}}>+ Row</button>

              <div id="catchall">
                {orphans.map((card, index) => <Card key={card.description + index} card={card} store={store} index={index} />) }
              </div>
            </div>
        );
    }
}

export default App;
