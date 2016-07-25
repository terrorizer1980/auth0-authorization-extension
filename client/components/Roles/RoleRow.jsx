import React, { PropTypes, Component } from 'react';

import { TableCell, TableIconCell, TableTextCell, TableRow } from '../Dashboard';

export default class RoleRow extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    index: PropTypes.number.isRequired,
    role: PropTypes.object.isRequired,
    renderActions: PropTypes.func.isRequired
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.role !== this.props.role;
  }

  render() {
    const { role, index } = this.props;

    return (
      <TableRow>
        <TableIconCell icon="322" />
        <TableTextCell>{ role.name || 'N/A' }</TableTextCell>
        <TableTextCell>{ role.description || 'N/A' }</TableTextCell>
        <TableCell>
          {this.props.renderActions(role, index)}
        </TableCell>
      </TableRow>
    );
  }
}
