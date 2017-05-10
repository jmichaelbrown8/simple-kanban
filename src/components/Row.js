import React, {Component} from 'react';
import RowHeader from './RowHeader';
import Cell from './Cell';

class Row extends Component {

  nameRow(e) {
    this.props.store.dispatch({type: 'NAME_ROW', name: e.target.value, id: this.props.row.id});
  }

  removeRow(e) {
    if (confirm('Are you sure you want to remove this row?')) {
      this.props.store.dispatch({type: 'REMOVE_ROW', index: this.props.index});
    }
  }

  render() {
    const store = this.props.store;
    const row = this.props.row;
    const columns = store.getState().board.columns;
    return <div className="row">
        <RowHeader row={row} index={this.props.index} store={store} />

        {columns.map((column, cIndex) =>
          <Cell key={column.id+":"+row.id} column={column} row={row} store={store} />
        )}

      </div>;
  }
}

export default Row;
