import axios from 'axios';
import { URL, PAGE_PER_COUNT } from '@/common/constant/Constant';

const instance = axios.create({
	baseURL: URL,
});

export const Apis = {
	get: (title: string, filterList: Array<Object>, page: number) => {
		return instance.get('', {
			params: {
				filter_conditions: JSON.stringify({
					$and: [
						{ title: `%${title}%` },
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
