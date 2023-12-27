<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<h1>Welcome to SvelteKit "{data.firstName || 'Anonim'}"</h1>
<p>
  Visit <a
    href="https://kit.svelte.dev"
    class="bg-red-300">kit.svelte.dev</a> to read the documentation
</p>
