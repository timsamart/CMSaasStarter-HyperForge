<script lang="ts">
  import {
    nodes,
    edges,
    searchQuery,
    filteredNodes,
    snapGrid,
    addNode,
    activeNode,
    updateNodeData,
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
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"

  let adminSection: Writable<string> = getContext("adminSection")
  adminSection.set("home")

  let selectedNodeLabel = ""
  let selectedNodePrompt = ""

  $: selectedNode = $activeNode
  $: if (selectedNode) {
    selectedNodeLabel = selectedNode.data.label
    selectedNodePrompt = selectedNode.data.prompt
  }

  function selectNode(node) {
    activeNode.set(node)
  }

  function handleNodeChange() {
    if (selectedNode) {
      updateNodeData(selectedNode.id, selectedNodeLabel, selectedNodePrompt)
    }
  }
</script>

<div class="dashboard-container">
  <div class="menu">
    <input
      type="text"
      placeholder="Search nodes..."
      class="search-bar p-2 border rounded border-gray-300 w-full"
      bind:value={$searchQuery}
    />
    <button
      on:click={addNode}
      class="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Add Random Node
    </button>
    <ul class="mt-2">
      {#each $filteredNodes as node}
        <li
          class="cursor-pointer p-2 hover:bg-gray-200"
          on:click={() => selectNode(node)}
        >
          {node.data.label}
        </li>
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
  <div class="details p-4">
    {#if selectedNode}
      <input
        type="text"
        bind:value={selectedNodeLabel}
        on:input={handleNodeChange}
        class="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      <textarea
        bind:value={selectedNodePrompt}
        on:input={handleNodeChange}
        class="mt-4 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        rows="4"
      />
    {:else}
      <p>Select a node to see details.</p>
    {/if}
  </div>
</div>
