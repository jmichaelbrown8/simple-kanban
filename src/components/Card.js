import React, {Component} from 'react';

class Card extends Component {
  render() {
    const store = this.props.store;
    const card = this.props.card;
    const id = card.id;
    return <span className="card">
        <input type="text" defaultValue={card.description} onChange={() => {}} onBlur={(event) => {store.dispatch({type: "EDIT_CARD", description: event.target.value, id: id})}} />
        <button onClick={() => store.dispatch({type:'REMOVE_CARD', id: id})}>x</button>

      </span>;
  }
}

export default Card;
