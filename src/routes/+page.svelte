<script>
	import CoffeeCards from '$lib/components/CoffeeCards.svelte';
</script>

<div class="main__container">
	<CoffeeCards />
</div>

<style lang="postcss">
	.main__container {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-direction: column;
	}

	@media only screen and (max-width: 600px) {
		.main__container {
			max-width: 100%;
		}
	}
</style>
