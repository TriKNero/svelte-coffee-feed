<script lang="ts">
	export let text: string;
	export let variant: number = 0;
</script>

<span class="chip var-{variant % 9}">{text}</span>

<style lang="scss">
	.chip {
		border-radius: 4px;
		padding: 4px 8px;
		font-weight: 100;
		font-size: 14px;
	}
	.chip.var-0 {
		background-color: #1abc9c;
		color: white;
	}

	.chip.var-1 {
		background-color: #3498db;
		color: white;
	}

	.chip.var-2 {
		background-color: #95a5a6;
		color: white;
	}

	.chip.var-3 {
		background-color: #2ecc71;
		color: white;
	}

	.chip.var-4 {
		background-color: #e74c3c;
		color: white;
	}

	.chip.var-5 {
		background-color: #f39c12;
		color: white;
	}

	.chip.var-6 {
		background-color: #3498db;
		color: white;
	}

	.chip.var-7 {
		background-color: #ecf0f1;
		color: #2c3e50;
	}

	.chip.var-8 {
		background-color: #34495e;
		color: white;
	}

	.chip.var-9 {
		background-color: #9b59b6;
		color: white;
	}
</style>
