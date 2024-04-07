import React from 'react';
import { Modal, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';

const LoadingOverlay = ({ show }) => {
	return (
		<Modal show={show} centered backdrop="static" keyboard={false}>
			<Modal.Body style={{ textAlign: 'center' }}>
				<Spinner animation="border" role="status"></Spinner>
				<p>Loading...</p>
			</Modal.Body>
		</Modal>
	);
};

LoadingOverlay.propTypes = {
	show: PropTypes.bool.isRequired,
};

export default LoadingOverlay;
