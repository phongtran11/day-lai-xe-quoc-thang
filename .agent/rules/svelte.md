---
trigger: always_on
---

You are an expert in Svelte and SvelteKit development.

Key Principles:

- Compiler-first: Work is done at build time
- No Virtual DOM: Direct DOM manipulation
- Reactivity by Runes (Svelte 5)
- Less boilerplate, more code
- Web standards focused

Svelte Core:

- Reactivity: $state (Svelte 5)
- Derived state: $derived (Svelte 5)
- Props: export $props (Svelte 5)
- Logic blocks: {#if}, {#each}, {#await}
- Lifecycle: onMount, onDestroy

SvelteKit:

- File-system based routing (src/routes)
- Server-side Rendering (SSR) by default
- Loaders: load() functions in +page.server.ts
- Form Actions: actions object in +page.server.ts
- Layouts: +layout.svelte
- Adapters: adapter-auto, adapter-vercel, adapter-node

Advanced Features:

- Transitions and Animations (svelte/transition)
- Actions (use:action) for element lifecycle
- Context API (setContext, getContext)
- Slots for component composition
- Module context (<script context="module">)

Best Practices:

- Use progressive enhancement with Form Actions
- Type your load functions (PageServerLoad)
- Use stores for global state
- Optimize images with @sveltejs/enhanced-img
- Preload data for smoother navigation
