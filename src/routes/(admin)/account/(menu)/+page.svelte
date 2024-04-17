<script lang="ts">
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"

  // Get the admin section store from the context
  let adminSection: Writable<string> = getContext("adminSection")
  // Set the current section to 'home'
  adminSection.set("home")
</script>

<svelte:head>
  <title>Account</title>
</svelte:head>

<main class="container mx-auto p-4">
  <h1 class="text-2xl font-bold mb-4">Dashboard</h1>

  <!-- Information alert about the demo nature of the content -->
  <div class="alert alert-error max-w-lg">
    <div class="flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <div>
        <p class="font-bold">Demo Content</p>
        <p>
          This page is just a placeholder. Replace this page with your app's
          content and functionality.
        </p>
        <p>
          The <a href="/account/billing" class="link">billing</a> and
          <a href="/account/settings" class="link">settings</a> pages are functional
          demos.
        </p>
      </div>
    </div>
  </div>

  <!-- User and download statistics -->
  <section class="my-6">
    <h2 class="text-xl font-bold">Users</h2>
    <div class="stats stats-vertical sm:stats-horizontal">
      <div class="stat">
        <div class="stat-title">Downloads</div>
        <div class="stat-value">31K</div>
        <div class="stat-desc">↗︎ 546 (2%)</div>
      </div>
      <div class="stat">
        <div class="stat-title">Users</div>
        <div class="stat-value text-secondary">4,200</div>
        <div class="stat-desc">↗︎ 40 (2%)</div>
      </div>
    </div>
  </section>

  <!-- Accounts and revenue details -->
  <section class="my-6">
    <h2 class="text-xl font-bold">Accounts</h2>
    <div class="stats stats-vertical sm:stats-horizontal">
      <div class="stat">
        <div class="stat-title">New Registers</div>
        <div class="stat-value">1,200</div>
        <div class="stat-desc">↘︎ 90 (14%)</div>
      </div>
      <div class="stat">
        <div class="stat-title">Churned Accounts</div>
        <div class="stat-value">42</div>
        <div class="stat-desc">↘︎ 6 (12%)</div>
      </div>
    </div>
  </section>

  <!-- Revenue details section -->
  <section class="my-6">
    <h2 class="text-xl font-bold">Revenue</h2>
    <div class="stats stats-vertical sm:stats-horizontal">
      <div class="stat">
        <div class="stat-title text-success">Revenue</div>
        <div class="stat-value text-success">$4200</div>
        <div class="stat-desc">↗︎ $180 (4%)</div>
      </div>
      <div class="stat">
        <div class="stat-title">New Subscribers</div>
        <div class="stat-value">16</div>
        <div class="stat-desc">↘︎ 1 (7%)</div>
      </div>
    </div>
  </section>
</main>
