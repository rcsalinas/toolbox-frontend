import React from 'react';
import InfoSearchPageUI from './InfoSearchPageUI';
import getFilesData from '../../networking/endpoints/getFilesData';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../redux/slices/loadingSlice';

export default function InfoSearchPage() {
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.loading);
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		const getData = async () => {
			try {
				dispatch(setLoading(true));
				const files = await getFilesData();
				dispatch(setLoading(false));
				setData(files.files);
			} catch (error) {
				dispatch(setLoading(false));
				console.error(error);
			}
		};
		getData();
	}, [dispatch]);
	return <InfoSearchPageUI rows={data} loading={loading.isLoading} />;
}
