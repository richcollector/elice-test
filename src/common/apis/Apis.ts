import axios from 'axios';
import { URL } from '@/common/constant/Constant';

const instance = axios.create({
	baseURL: URL,
});

export const Apis = {
	Get: () =>
		instance.get('', {
			params: {
				filter_conditions: JSON.stringify({
					$and: [{ title: `%${''}%` }, { $or: [{ enroll_type: 0, is_free: true }] }],
				}),
				offset: 0,
				count: 20,
			},
		}),
};
