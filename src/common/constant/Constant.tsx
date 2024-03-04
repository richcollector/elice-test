import { ChipInformation, ChipType, ChipValue } from '../type/Type';

export const ORIGIN_URL = 'https://api-rest.elice.io/org/academy/course/list/';

export const URL = 'api/getList';

export const PAGE = { SHOW_LIMIT: 4, PAGE_PER_COUNT: 20 };

export const FILTER_LIST_NAME = { Free: 'Free', Payment: 'Payment' };

export const NO_IMAGE = 'img/no_image.gif';

export const CHIPS: Record<ChipType, Record<ChipValue, ChipInformation>> = {
	price: {
		free: {
			value: 'free',
			title: '무료',
			params: {
				is_free: true,
				enroll_type: 0,
			},
		},
		paid: {
			value: 'paid',
			title: '유료',
			params: {
				is_free: false,
				enroll_type: 0,
			},
		},
	},
};

export const CHIPS_ARRAY = Object.keys(CHIPS) as ChipType[];
