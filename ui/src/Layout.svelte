<script lang="ts">
    import type { Snippet } from 'svelte';
    import "./app.css";
    import {Navbar, NavBrand, SplitPane, Pane, Spinner, SidebarGroup, SidebarItem} from "flowbite-svelte";
    import { ArrowUpRightDownLeftOutline} from "flowbite-svelte-icons";
    import {p, route, isActive} from './router';
    import {state} from './state.svelte';

    let subscriptionData = fetch('./subscriptions')
        .then(res => res.json())
        .then((data) => {
            state.subscriptions = data;
            return data;
        });

    const nonActiveClass = "flex items-center p-2 text-base font-normal text-green-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700";
    const activeClass = "flex items-center p-2 text-base font-normal text-primary-900 bg-primary-200 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-100 dark:hover:bg-gray-700";

    let { children }: { children: Snippet } = $props();
</script>

<main>
    <Navbar>
        <NavBrand href={p("/")}>
         <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
             Artery Browser
         </span>
        </NavBrand>
    </Navbar>

    {#await subscriptionData}
        <Spinner/>
    {:then}
        <SplitPane minSize={300} initialSizes={[30, 70]} class="h-screen">
            <Pane>
                <SidebarGroup>
                    {#each state.subscriptions as subscription}
                        <SidebarItem class={isActive(`/${subscription.path}`) ? activeClass : nonActiveClass}
                                label={subscription.path} href={p(`/${subscription.path}`)}>
                            {#snippet icon()}
                                <ArrowUpRightDownLeftOutline class="inline h-5 w-5" />
                            {/snippet}
                        </SidebarItem>
                    {/each}
                </SidebarGroup>
            </Pane>
            <Pane class="bg-secondary-100">
                {@render children()}
            </Pane>
        </SplitPane>
    {:catch error}
        <p>{error.message}</p>
    {/await}
</main>
