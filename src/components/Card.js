import React, {Component} from 'react';

class Card extends Component {

  removeCard(e) {
    if(confirm('Are you sure you want to delete this card?')) {
        this.props.store.dispatch({type: 'REMOVE_CARD', id: this.props.card.id});
    }
  }

  editCard(e) {
    this.props.store.dispatch({type: "EDIT_CARD", description: e.target.value, id: this.props.card.id})
  }

  render() {
    const card = this.props.card;
    return <span className="card">
        <textarea defaultValue={card.description} onChange={() => {}} onBlur={this.editCard.bind(this)} />
        <button onClick={this.removeCard.bind(this)}>x</button>
      </span>;
  }
}

export default Card;
