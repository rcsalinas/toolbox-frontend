import api from '../api';
import { configuration } from '../../config/configuration';

const getFilesData = async (params = {}) => {
	try {
		const response = await api.get(configuration.BASE_URL + 'files/data', {
			params,
		});

		const data = await response.data;
		return data;
	} catch (error) {
		let errorCode = null;

		if (error.response) {
			errorCode = error.response.status;
		}

		throw { code: errorCode };
	}
};

export default getFilesData;
