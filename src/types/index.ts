import type { RequestEvent } from '../../.svelte-kit/types/src/routes/api/coffee/$types';

export interface CoffeeInfo {
	id: number;
	uuid: string;
	blend_name: string;
	origin: string;
	variety: string;
	notes: string;
	intensifier: string;
	image_url?: string;
}

export interface ImageProps {
	file: string;
	license: string;
	owner: string;
	width: number;
	height: number;
	filter: string;
	tags: string;
	tagMode: string;
}

export type CoffeeInfoPromises = Promise<[CoffeeInfo, ImageProps]>;

export interface CoffeeRequestBody {
	isNew: boolean;
}

export interface CoffeeRequestEvent extends RequestEvent {
	body: CoffeeRequestBody;
}
