export interface ICourse {
	id: number;
	enroll_type: number;
	price: string;
	price_usd: string;
	discounted_price: string;
	discounted_price_usd: string;
	discount_rate: null | any;
	course_type: number;
	title: string;
	short_description: string;
	logo_file_url: null | string;
	is_discounted: boolean;
	is_free: boolean;
}

export interface IList {
	courseCount: number;
	courses: ICourse[];
}

export type ChipType = 'price';

export type QueryKey = 'keyword' | ChipType;

export type ChipValue = PriceChipValue;

export type PriceChipValue = 'free' | 'paid';

export interface ChipsParams {
	is_free: boolean;
	enroll_type: 0 | 4;
}

export interface ChipInformation {
	value: ChipValue;
	title: string;
	params: ChipsParams;
}
