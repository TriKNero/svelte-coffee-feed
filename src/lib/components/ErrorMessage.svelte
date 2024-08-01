<script lang="ts">
	import type { Writable } from 'svelte/store';
	export let error: Writable<string>;
</script>

{#if $error}
	<div class="error__message">{$error}...</div>
{/if}

<style lang="postcss">
	.error__message {
		color: red;
		margin-bottom: 10px;
		text-align: center;
	}
</style>
