import axios from 'axios';
import { URL } from '@/common/constant/Constant';

const instance = axios.create({
	baseURL: URL,
});

export const Apis = {
	Get: (page: number) =>
		instance.get('', {
			params: {
				filter_conditions: JSON.stringify({
					$and: [{ title: `%${''}%` }, { $or: [{ enroll_type: 0, is_free: true }] }],
				}),
				offset: page === 1 ? 0 : (page - 1) * 20,
				count: 20,
			},
		}),
};
