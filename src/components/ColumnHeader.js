import React, {Component} from 'react';

class ColumnHeader extends Component {

  nameColumn(e) {
    this.props.store.dispatch({type: 'NAME_COLUMN', name:e.target.value, id:this.props.id});
  }

  removeColumn(e) {
    if (confirm('Are you sure you want to remove the column?')) {
      this.props.store.dispatch({type: 'REMOVE_COLUMN', index: this.props.index});
    }
  }

  render() {
    const column = this.props.column;
    const id = this.props.column.id;
    return <span className="columnheader">
      <input defaultValue={column.name} id={id} onBlur={this.nameColumn.bind(this)} onChange={() => {}} />
      <button onClick={this.removeColumn.bind(this)}>x</button>
    </span>;
  }
}

export default ColumnHeader;
