<script lang="ts">
	export let text: string;
	export let variant: 'h1' | 'h2' | 'subtitle' | 'body1' = 'body1';
</script>

{#if variant === 'h1'}
	<h1 class="typography {variant}" title={text}>{text}</h1>
{:else if variant === 'h2'}
	<h2 class="typography {variant}" title={text}>{text}</h2>
{:else if variant === 'subtitle'}
	<h3 class="typography {variant}" title={text}>{text}</h3>
{:else}
	<p class="typography {variant}" title={text}>{text}</p>
{/if}

<style lang="scss">
	.typography {
		text-overflow: ellipsis;
		overflow-x: clip;
		white-space: nowrap;
		margin-bottom: 10px;
		letter-spacing: 1px;
	}

	.typography.h1 {
		font-size: 30px;
		font-weight: 800;
		color: #1a1a1a;
	}

	.typography.h2 {
		font-size: 22px;
		font-weight: 800;
		color: #1a1a1a;
	}

	.typography.subtitle {
		font-size: 18px;
		font-weight: 400;
		color: #a2a2a2;
	}

	.typography.body1 {
		font-size: 14px;
		font-weight: 400;
		color: #343434;
	}
</style>
