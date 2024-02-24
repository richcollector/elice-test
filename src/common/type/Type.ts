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

export interface IFilter {
	Free: boolean;
	Payment: boolean;
}
