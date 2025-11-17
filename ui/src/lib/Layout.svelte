<script lang="ts">
    import type { Snippet } from 'svelte';
    import "../app.css";
    import {Navbar, NavBrand, SplitPane, Pane, Spinner, SidebarGroup, SidebarItem} from "flowbite-svelte";
    import { ArrowUpRightDownLeftOutline} from "flowbite-svelte-icons";
    import {p, route, isActive} from '../router';
    import {appState} from './AppState.svelte';

    let subscriptionData = fetch(`${import.meta.env.VITE_API_URL}/subscriptions`)
        .then(res => res.json())
        .then((data) => {
            appState.subscriptions = data;
            return data;
        });

    const activeClass = "bg-primary-200";

    let { children }: { children: Snippet } = $props();
</script>

<main>
    <Navbar>
        <NavBrand href={p("/")}>
         <span class="self-center whitespace-nowrap text-xl font-semibold">
             Artery Browser
         </span>
        </NavBrand>
    </Navbar>

    {#await subscriptionData}
        <Spinner/>
    {:then}
        <SplitPane minSize={300} initialSizes={[30, 70]} class="h-screen">
            <Pane class="min-w-200 overflow-auto">
                <SidebarGroup>
                    {#each appState.subscriptions as subscription}
                        <SidebarItem class={["flex items-center p-2 rounded-lg hover:bg-primary-100 hover:text-primary-900", isActive(`/${subscription.path}`) && activeClass]}
                                label={subscription.path} href={p(`/${subscription.path}`)}>
                            {#snippet icon()}
                                <ArrowUpRightDownLeftOutline class="inline h-5 w-5" />
                            {/snippet}
                        </SidebarItem>
                    {/each}
                </SidebarGroup>
            </Pane>
            <Pane class="bg-front-light overflow-auto bg-primary-50 min-w-100">
                {@render children()}
            </Pane>
        </SplitPane>
    {:catch error}
        <p>{error.message}</p>
    {/await}
</main>
