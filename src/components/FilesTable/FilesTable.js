import React from 'react';
import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';

function FilesTable({ rows }) {
	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>File Name</th>
					<th>Text</th>
					<th>Number</th>
					<th>Hex</th>
				</tr>
			</thead>
			<tbody>
				{rows.map((row, rowIndex) =>
					row.lines.map((line, lineIndex) => (
						<tr key={`${rowIndex}-${lineIndex}`}>
							<td>{row.file}</td>
							<td>{line.text}</td>
							<td>{line.number}</td>
							<td>{line.hex}</td>
						</tr>
					)),
				)}
			</tbody>
		</Table>
	);
}

FilesTable.propTypes = {
	rows: PropTypes.arrayOf(PropTypes.object),
};

export default FilesTable;
