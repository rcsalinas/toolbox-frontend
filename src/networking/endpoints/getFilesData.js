import api from '../api';
import { configuration } from '../../config/configuration';

const getFilesData = async () => {
	try {
		const response = await api.get(configuration.BASE_URL + 'files/data');

		const data = await response.data;
		return data;
	} catch (error) {
		throw new Error(error.response.data.error);
	}
};

export default getFilesData;
