import { writable, derived, get } from 'svelte/store';

export const initialFlowData = {
  nodes: [
    { id: '1', type: 'input', data: { label: 'Input Node', prompt: 'Describe the input.' }, position: { x: 250, y: 5 } },
    { id: '2', type: 'output', data: { label: 'Output Node', prompt: 'Describe the output.' }, position: { x: 250, y: 150 } },
    { id: '3', type: 'default', data: { label: 'Default Node', prompt: 'Default prompt.' }, position: { x: 100, y: 100 } }
  ],
  edges: [
    { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', label: 'A Connection' }
  ]
};

export const nodes = writable(initialFlowData.nodes);
export const edges = writable(initialFlowData.edges);
export const searchQuery = writable('');
export const activeNode = writable(null);

export const filteredNodes = derived([nodes, searchQuery], ([$nodes, $searchQuery]) =>
  $nodes.filter(node => node.data.label.toLowerCase().includes($searchQuery.toLowerCase()))
);

export const snapGrid = [25, 25];

export function addNode() {
  const newNodeId = `${Math.floor(Math.random() * 10000)}`;
  const newNode = {
    id: newNodeId,
    type: 'default',
    data: { label: `Node ${newNodeId}`, prompt: 'New node prompt.' },
    position: { x: Math.random() * 250 + 50, y: Math.random() * 250 + 50 }
  };
  nodes.update(n => [...n, newNode]);
}

export function updateNodeData(nodeId, newLabel, newPrompt) {
  nodes.update(allNodes => {
    return allNodes.map(node => {
      if (node.id === nodeId) {
        return {...node, data: {...node.data, label: newLabel, prompt: newPrompt}};
      }
      return node;
    });
  });
}
