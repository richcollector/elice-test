// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ORIGIN_URL } from '@/common/constant/Constant';
import axios from 'axios';
import { IList } from '@/common/type/Type';

const instance = axios.create({
	baseURL: ORIGIN_URL,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const response = await instance.get<IList>('', {
			params: { ...req.query },
		});

		res.status(200).json(response.data);
	} catch {
		res.status(500);
	}
}
