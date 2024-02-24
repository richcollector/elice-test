import axios from 'axios';
import { URL, PAGE_PER_COUNT } from '@/common/constant/Constant';

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
				offset: page === 1 ? 0 : (page - 1) * PAGE_PER_COUNT,
				count: PAGE_PER_COUNT,
			},
		});
	},
};
