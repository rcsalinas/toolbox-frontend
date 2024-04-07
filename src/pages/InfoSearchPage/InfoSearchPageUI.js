import React from 'react';
import FilesTable from '../../components/FilesTable/FilesTable';
import Container from 'react-bootstrap/Container';
import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay';

import PropTypes from 'prop-types';
import './InfoSearchPage.css';

export default function InfoSearchPageUI({ rows, loading }) {
	return (
		<>
			<LoadingOverlay show={loading} />
			<Container
				className="
		flex-column
		"
			>
				<FilesTable rows={rows} />
			</Container>
		</>
	);
}

InfoSearchPageUI.propTypes = {
	rows: PropTypes.arrayOf(PropTypes.object),
	loading: PropTypes.bool.isRequired,
};
