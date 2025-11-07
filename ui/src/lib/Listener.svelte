<script>
    import {Listgroup, ListgroupItem, Label, Input, Button, InputAddon, ButtonGroup, Toggle} from "flowbite-svelte";
    import {ArrowDownOutline, ArrowUpOutline} from "flowbite-svelte-icons";

    let {listener, edit = false} = $props();
    let editing = $state(edit);

    const propClass = "";
</script>

<div>
    <article class="p-4 m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <heading class="flex justify-between">
            <h5 class="mb-4 text-xl font-medium">
                {#if listener.synchronize }
                    <ArrowDownOutline class="inline"></ArrowDownOutline>
                {:else}
                    <ArrowUpOutline class="inline"></ArrowUpOutline>
                {/if}

                Subscription {listener.id}
            </h5>
            <span>
                <Toggle id="edit_listener_{listener.id}" bind:checked={editing}>Edit</Toggle>
            </span>
        </heading>
        <div class="flex">
            <div class="w-1/2">
                <ButtonGroup class={propClass}>
                    <InputAddon class="w-52">Id</InputAddon>
                    <Input value={listener.id} readonly></Input>
                </ButtonGroup>
                <ButtonGroup class={propClass}>
                    <InputAddon class="w-52">Subscriber</InputAddon>
                    <Input value={listener.subscriber} readonly></Input>
                </ButtonGroup>
                <ButtonGroup class={propClass}>
                    <InputAddon class="w-52">Latest Index</InputAddon>
                    <Input type="number" bind:value={listener.latest_index} readonly={!editing}></Input>
                </ButtonGroup>
                <ButtonGroup class={propClass}>
                    <InputAddon class="w-52">Service</InputAddon>
                    <Input value={listener.service} readonly></Input>
                </ButtonGroup>
                <ButtonGroup class={propClass}>
                    <InputAddon class="w-52">Model</InputAddon>
                    <Input value={listener.model} readonly></Input>
                </ButtonGroup>
                <ButtonGroup class={propClass}>
                    <InputAddon class="w-52">Synchronization Heartbeat</InputAddon>
                    <Input value={listener.synchronization_heartbeat} readonly></Input>
                </ButtonGroup>
                <ButtonGroup class={propClass}>
                    <InputAddon class="w-52">Synchronization In Progress</InputAddon>
                    <Input value={listener.synchronization_in_progress} readonly></Input>
                </ButtonGroup>
                <ButtonGroup class={propClass}>
                    <InputAddon class="w-52">Syncable</InputAddon>
                    <Input value={listener.synchronize} readonly></Input>
                </ButtonGroup>
            </div>
            <div class="w-1/2">

            </div>
        </div>
        <div class="m-5 flex justify-end">
            <Button disabled={!editing}>Save</Button>
        </div>
    </article>
</div>
