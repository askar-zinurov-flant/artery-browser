import { createRouter } from 'sv-router';
import Home from './routes/Home.svelte';
import Subscription from './routes/Subscription.svelte';
import Layout from "./lib/Layout.svelte";

export const { p, navigate, isActive, preload, route } = createRouter(
    {
        '/': Home,
        '/:topic': Subscription,
        layout: Layout,
    }
);
