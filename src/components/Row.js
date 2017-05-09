import React, {Component} from 'react';
import Card from './Card';
import uuid from 'uuid';

class Row extends Component {
  render() {
    const store = this.props.store;
    const row = this.props.row;
    const index = this.props.index;
    const id = this.props.row.id;
    const columns = store.getState().board.columns;
    const cards = store.getState().board.cards.filter(function(card){return card.row === id;});
    return <div className="row">
        <span className="rowheader">
          <input defaultValue={row.name} onChange={() => {}} onBlur={(event) => {store.dispatch({type: 'NAME_ROW', name: event.target.value, id:id})}} />
          <button onClick={() => {store.dispatch({type: 'REMOVE_ROW', index: index})}}>x</button>
        </span>

        {columns.map((column, cIndex) =>
          <span className="cell" key={column+row+cIndex+index}>
            {cards.map((card, i) => {
              if (card.column === column.id)
                return <Card key={card.id} store={store} card={card} />;
              return "";
            })}

            <button onClick={() => {store.dispatch({type: 'ADD_CARD', card:{id: uuid.v4(), row: id, column: column.id, description: "new card"}})}}>+ card</button>
          </span>
        )}

      </div>;
  }
}

export default Row;
