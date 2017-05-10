import React, {Component} from 'react';
import Card from './Card';
import uuid from 'uuid';

class Cell extends Component {

  render() {
    const store = this.props.store;
    const cards = store.getState().board.cards;
    const column = this.props.column;
    const row = this.props.row;

    return <span className="cell">
      {cards.map((card, i) => {
        if (card.column === column.id && card.row === row.id)
          return <Card key={card.id} store={store} card={card} />;
        return "";
      })}
      <div className="spacer"></div>
      <button onClick={() => {store.dispatch({type: 'ADD_CARD', card:{id: uuid.v4(), row: row.id, column: column.id, description: 'New card'}})}}>+ card</button>
    </span>;
  }
}

export default Cell;
