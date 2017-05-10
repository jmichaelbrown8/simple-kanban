import React, {Component} from 'react';

class RowHeader extends Component {

  nameRow(e) {
    this.props.store.dispatch({type: 'NAME_ROW', name: e.target.value, id: this.props.row.id});
  }

  removeRow(e) {
    if (confirm('Are you sure you want to remove this row?')) {
      this.props.store.dispatch({type: 'REMOVE_ROW', index: this.props.index});
    }
  }

  render() {
    const row = this.props.row;
    return <span className="rowheader">
      <input defaultValue={row.name} onChange={() => {}} onBlur={this.nameRow.bind(this)} />
      <button onClick={this.removeRow.bind(this)}>x</button>
    </span>;
  }
}

export default RowHeader;
