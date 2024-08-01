<script lang="ts">
	export let handler: () => void;
	export let disabled: boolean;
	export let text: string;
</script>

<button class="button" on:click={handler} {disabled}>
	{text}
</button>

<style lang="postcss">
	.button {
		width: 100%;
		max-width: inherit;
		height: 50px;
		margin-bottom: 20px;
		background: linear-gradient(45deg, #6f4e37, #8d6748);
		color: white;
		border: none;
		font-size: 22px;
		text-transform: capitalize;
		font-weight: 800;
		text-align: center;
		line-height: 40px;
		cursor: pointer;
		transition: background 0.3s ease;
	}

	.button:hover {
		background: linear-gradient(45deg, #5d3a1f, #7b5536);
	}
</style>
