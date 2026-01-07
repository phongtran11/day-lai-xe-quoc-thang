<script lang="ts">
	interface Props {
		size?: number | string;
		strokeWidth?: number | string;
		class?: string;
	}

	let { size = 18, strokeWidth = 2, class: className = '' }: Props = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width={strokeWidth}
	stroke-linecap="round"
	stroke-linejoin="round"
	class={className}
>
	<path d="m12 19-7-7 7-7" />
	<path d="M19 12H5" />
</svg>
