import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import getFilesData from '../../networking/endpoints/getFilesData';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../redux/slices/loadingSlice';
import { setFiles } from '../../redux/slices/filesSlice';
export default function NavBar() {
	const dispatch = useDispatch();
	const searchForFile = async (fileName) => {
		try {
			dispatch(setLoading(true));
			const files = await getFilesData({ fileName });
			dispatch(setFiles(files));
		} catch (error) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: error.code == 404 ? 'File not found' : 'Error retrieving file',
			});
		} finally {
			dispatch(setLoading(false));
		}
	};
	return (
		<Navbar expand="lg" className="bg-body-tertiary mb-4">
			<Container
				fluid
				className="
                justify-content-around
            "
			>
				<Navbar.Brand>File Searcher</Navbar.Brand>

				<Form
					className="d-flex "
					onSubmit={(e) => {
						e.preventDefault();
						searchForFile(e.target[0].value);
					}}
				>
					<Form.Control
						type="search"
						placeholder="File name"
						className="me-2"
						aria-label="Search"
					/>
					<Button variant="outline-success" type="submit">
						Search
					</Button>
				</Form>
			</Container>
		</Navbar>
	);
}

NavBar.propTypes = {
	searchForFile: PropTypes.func,
};
