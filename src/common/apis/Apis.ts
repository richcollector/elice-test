import axios from 'axios';
import { URL } from '@/common/constant/Constant';

const instance = axios.create({
	baseURL: URL,
});

export const Apis = {
	get: (page: number, filterList: Array<Object>) => {
		return instance.get('', {
			params: {
				filter_conditions: JSON.stringify({
					$and: [
						{ title: `%${''}%` },
						{
							$or: [...filterList],
						},
					],
				}),
				offset: page === 1 ? 0 : (page - 1) * 20,
				count: 20,
			},
		});
	},
};
