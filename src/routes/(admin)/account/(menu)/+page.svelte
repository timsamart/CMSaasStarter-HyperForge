<script lang="ts">
  import {
    nodes,
    edges,
    searchQuery,
    filteredNodes,
    snapGrid,
    addNode,
  } from "./flowLogic.ts"
  import "./styles.css"
  import { writable, derived } from "svelte/store"
  import {
    SvelteFlow,
    Controls,
    Background,
    BackgroundVariant,
    MiniMap,
  } from "@xyflow/svelte"
  import "@xyflow/svelte/dist/style.css"
</script>

<div class="dashboard-container">
  <div class="menu">
    <input
      type="text"
      placeholder="Search nodes..."
      class="search-bar"
      bind:value={$searchQuery}
    />
    <button on:click={addNode}>Add Random Node</button>
    <ul>
      {#each $filteredNodes as node}
        <li>{node.data.label}</li>
      {/each}
    </ul>
  </div>
  <div class="editor" style="height: calc(100vh - 40px);">
    <SvelteFlow {nodes} {edges} {snapGrid} fitView>
      <Controls />
      <Background variant={BackgroundVariant.Dots} />
      <MiniMap />
    </SvelteFlow>
  </div>
  <div class="details">
    <!-- Details and settings for the selected node will go here -->
  </div>
</div>

<style>
  /* Your CSS here */
</style>
