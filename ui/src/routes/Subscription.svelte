<script>
    import { route, isActive, p } from '../router';
    import { state } from "../state.svelte.js";
    import Listener from '../lib/Listener.svelte'

    let subscription = $derived(state.subscriptions.find(sub => isActive(`/${sub.path}`)));
</script>

{#if subscription}
    {#each subscription.listeners as listener}
        <Listener {listener} edit={false} />
    {/each}
{/if}
