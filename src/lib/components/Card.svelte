<script lang="ts">
	import Typography from '$lib/components/Typography.svelte';
	import Chip from '$lib/components/Chip.svelte';
	import type { CoffeeInfo } from '../../types';

	export let card: CoffeeInfo;
</script>

<div class="card">
	{#if card.image_url}
		<div class="card__image" style="background-image: url({card.image_url})">
			<p class="card__image_intensifier">
				{card.intensifier}
			</p>
		</div>
	{:else}
		<div class="placeholder"></div>
	{/if}
	<div class="card__info">
		<Typography text={card.variety} variant="subtitle" />
		<Typography text={card.blend_name} variant="h2" />
		<Typography text={card.origin} variant="body1" />

		<div class="tags-container">
			<div class="tags">
				{#each card.notes.split(', ') as note, index}
					<Chip text={note} variant={index} />
				{/each}
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.card {
		border-bottom: 1px solid #ccc;
		margin-bottom: 16px;
		width: 100%;
		position: relative;
		background-color: #fff;
	}

	.card:last-child {
		border-bottom: 0;
	}

	.tags-container {
		position: relative;
	}

	.tags {
		display: flex;
		overflow-x: auto;
		white-space: nowrap;
		gap: 10px;
		padding-right: 20px;
	}

	.tags::after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		height: 100%;
		width: 20px;
		background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
		pointer-events: none;
		z-index: 1;
	}

	.tags::-webkit-scrollbar {
		display: none;
	}

	.placeholder {
		background: #ccc;
		width: 100%;
		max-width: inherit;
		height: 400px;
	}

	.card__image {
		width: 100%;
		max-width: inherit;
		height: 400px;
		max-height: 400px;
		position: relative;
		background-color: gray;
		animation: fadeBackground 0.5s ease;
		background-size: cover;
		background-repeat: no-repeat;
	}

	@keyframes fadeBackground {
		0% {
			opacity: 0.25;
		}
		50% {
			opacity: 0.5;
		}
		75% {
			opacity: 0.75;
		}
		100% {
			opacity: 1;
		}
	}

	.card__image_intensifier {
		color: white;
		position: absolute;
		right: 10px;
		padding: 10px;
		font-weight: 800;
		font-size: 1.4em;
		text-shadow: 1px 1px 2px #000;
	}

	.card__info {
		padding: 20px 0;
		line-height: 20px;
	}

	@media only screen and (max-width: 600px) {
		.card {
			max-width: 100%;
		}

		.card__image {
			max-width: 100%;
		}

		.card__info {
			max-width: 100%;
			padding: 20px;
			line-height: 20px;
		}
	}
</style>
