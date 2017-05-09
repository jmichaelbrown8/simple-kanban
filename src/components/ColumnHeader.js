import React, {Component} from 'react';

class ColumnHeader extends Component {
  render() {
    const store = this.props.store;
    const column = this.props.column;
    const id = this.props.column.id;
    const index = this.props.index;
    return <span className="columnheader">
      <input defaultValue={column.name} id={id} onBlur={(event) => {store.dispatch({type: 'NAME_COLUMN', name:event.target.value, id:id})}} onChange={(event) => {}} />
      <button onClick={() => {store.dispatch({type: 'REMOVE_COLUMN', index: index})}}>x</button>
    </span>;
  }
}

export default ColumnHeader;
