<script lang="ts">
	import { writable } from 'svelte/store';
	import { onMount, onDestroy } from 'svelte';
	import type { CoffeeInfo } from '../../types';
	import Card from '$lib/components/Card.svelte';
	import ErrorMessage from '$lib/components/ErrorMessage.svelte';
	import CustomButton from '$lib/components/CustomButton.svelte';

	const coffeeCards = writable<CoffeeInfo[]>([]);
	let loading = writable(false);
	let error = writable('');
	let autoUpdaterId = 0;

	const autoUpdate = () => {
		return setInterval(() => fetchCoffee(true), 30 * 1000);
	};

	const resetAutoUpdater = () => {
		clearInterval(autoUpdaterId);
		autoUpdaterId = autoUpdate();
	};

	const fetchCoffee = async (requestNew?: boolean) => {
		loading.set(true);
		error.set('');
		try {
			const response = await fetch('/api/coffee', {
				method: 'POST',
				body: JSON.stringify({ isNew: Boolean(requestNew) })
			});
			if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

			const coffee: CoffeeInfo = await response.json();
			coffeeCards.update((cards) => [...cards, coffee]);
		} catch (err: unknown) {
			if (err instanceof Error) console.log('Error ', err?.message);
			error.set('Too many request, please try again later');
		} finally {
			loading.set(false);
		}
	};

	const onLoadMoreClick = () => {
		fetchCoffee(true);
		resetAutoUpdater();
	};

	onMount(() => {
		fetchCoffee();
		autoUpdaterId = autoUpdate();
	});

	onDestroy(() => clearTimeout(autoUpdaterId));
</script>

<div class="coffeeApp__container">
	<ErrorMessage {error} />
	<CustomButton
		handler={onLoadMoreClick}
		disabled={$loading}
		text={$loading ? 'Loading...' : 'Load more coffee'}
	/>
	{#each $coffeeCards.reverse() as card}
		<Card {card} />
	{/each}
</div>

<style lang="postcss">
	.coffeeApp__container {
		padding: 30px;
		width: 500px;
	}

	@media only screen and (max-width: 600px) {
		.coffeeApp__container {
			padding: 0;
			max-width: 100%;
		}
	}
</style>
