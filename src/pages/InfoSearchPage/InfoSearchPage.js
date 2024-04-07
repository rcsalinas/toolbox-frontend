import React from 'react';
import getFilesData from '../../networking/endpoints/getFilesData';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { setLoading } from '../../redux/slices/loadingSlice';
import { setFiles } from '../../redux/slices/filesSlice';
import FilesTable from '../../components/FilesTable/FilesTable';
import Container from 'react-bootstrap/Container';
import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay';

function InfoSearchPage() {
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.loading.isLoading, shallowEqual);
	const data = useSelector((state) => state.files.files, shallowEqual);
	React.useEffect(() => {
		const getData = async () => {
			try {
				dispatch(setLoading(true));
				const files = await getFilesData();
				dispatch(setFiles(files));
			} catch (error) {
				console.error(error);
			} finally {
				dispatch(setLoading(false));
			}
		};
		getData();
	}, [dispatch]);
	console.log(data);
	return (
		<>
			<LoadingOverlay show={loading} />
			<Container className="flex-column">
				{data.files && <FilesTable rows={data.files} />}
			</Container>
		</>
	);
}
export default React.memo(InfoSearchPage);
