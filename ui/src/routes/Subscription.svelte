<script>
    import { route, isActive, p } from '../router';
    import { appState } from "../lib/AppState.svelte.js";
    import Listener from '../lib/Listener.svelte'

    let subscription = $derived.by(() => {
        return appState.subscriptions.find(sub => route.params.topic == sub.path);
    });
</script>

{#if subscription}
    {#key subscription.path}
        {#each [...subscription.listeners] as listener}
            <Listener {listener} />
        {/each}
    {/key}
{/if}
