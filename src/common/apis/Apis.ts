import axios from 'axios';
import { URL, PAGE } from '@/common/constant/Constant';
import { ChipsParams } from '../type/Type';

export interface GetCourseParams {
	title: string;
	chips: ChipsParams[];
	offset?: number;
}

const instance = axios.create({
	baseURL: URL,
});

export const Apis = {
	get: async ({ title, chips, offset }: GetCourseParams) => {
		return await instance.get('', {
			params: {
				filter_conditions: JSON.stringify({
					$and: [{ title: `%${title}%` }, { $or: [...chips] }],
				}),
				offset: offset || 0,
				count: PAGE.PAGE_PER_COUNT,
			},
		});
	},
};
