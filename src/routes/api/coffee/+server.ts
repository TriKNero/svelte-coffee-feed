import { json } from '@sveltejs/kit';
import type { CoffeeInfoPromises, CoffeeRequestEvent } from '../../../types';
import { error } from '@sveltejs/kit';

class CoffeeRequestManager {
	private cachedCoffee: CoffeeInfoPromises | null;
	private prevCache: CoffeeInfoPromises | null;
	private readonly coffeeInfoURL: string;
	private readonly coffeeImageURL: string;

	constructor() {
		this.cachedCoffee = null;
		this.prevCache = null;
		this.coffeeInfoURL = 'https://random-data-api.com/api/coffee/random_coffee';
		this.coffeeImageURL = 'https://loremflickr.com/json/400/400/coffee,bean';
	}

	async fetchCoffee() {
		const coffeeData = await fetch(this.coffeeInfoURL);
		return coffeeData.json();
	}

	async fetchImage() {
		const imageData = await fetch(this.coffeeImageURL);
		return imageData.json();
	}

	async getJSONFromCachedCoffeeInfo() {
		if (!this.cachedCoffee) return;
		const [coffeeData, imageData] = await this.cachedCoffee;
		return json({ ...coffeeData, image_url: imageData?.file });
	}

	rollbackCache() {
		this.cachedCoffee = this.prevCache;
	}

	async coffeeRequestHandler({ request }: CoffeeRequestEvent) {
		try {
			const { isNew } = await request.json();

			if (isNew || !this.cachedCoffee) {
				this.prevCache = this.cachedCoffee;
				this.cachedCoffee = Promise.all([this.fetchCoffee(), this.fetchImage()]);
				return await this.getJSONFromCachedCoffeeInfo();
			} else {
				return await this.getJSONFromCachedCoffeeInfo();
			}
		} catch (err: unknown) {
			this.rollbackCache();
			if (err instanceof Error) {
				console.error('Error: something went wrong', err);
				throw error(400, { message: `Something went wrong ${err?.message}` });
			}
		}
	}
}

const requestManager = new CoffeeRequestManager();

export async function POST(request: CoffeeRequestEvent) {
	return requestManager.coffeeRequestHandler(request);
}
