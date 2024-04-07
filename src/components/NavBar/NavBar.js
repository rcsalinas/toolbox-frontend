import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
export default function NavBar({ searchForFile }) {
	return (
		<Navbar expand="lg" className="bg-body-tertiary mb-4">
			<Container
				fluid
				className="
                justify-content-around
            "
			>
				<Navbar.Brand>File Searcher</Navbar.Brand>

				<Form className="d-flex " onSubmit={searchForFile}>
					<Form.Control
						type="search"
						placeholder="File name"
						className="me-2"
						aria-label="Search"
					/>
					<Button variant="outline-success">Search</Button>
				</Form>
			</Container>
		</Navbar>
	);
}

NavBar.propTypes = {
	searchForFile: PropTypes.func,
};
