<script lang="ts">
	let { table, renderRichText }: { table: any; renderRichText: (richText: any[]) => string } =
		$props();

	const { has_column_header, has_row_header, children: rows } = table;
</script>

<div class="my-8 w-full overflow-x-auto rounded-xl border border-slate-200">
	<table class="!m-0 w-full border-collapse text-left text-sm">
		<tbody class="divide-y divide-slate-200">
			{#each rows as row, rowIndex}
				<tr class="divide-x divide-slate-200 transition-colors hover:bg-slate-50">
					{#each row.table_row.cells as cell, colIndex}
						{@const isHeader =
							(has_column_header && rowIndex === 0) || (has_row_header && colIndex === 0)}
						{#if isHeader}
							<th class="bg-slate-50/50 p-4 font-semibold text-slate-900">
								{@html renderRichText(cell)}
							</th>
						{:else}
							<td class="p-4 text-slate-700">
								{@html renderRichText(cell)}
							</td>
						{/if}
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
