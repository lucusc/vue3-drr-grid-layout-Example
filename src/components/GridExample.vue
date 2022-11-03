<script setup>
import { ref, onMounted } from 'vue';
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import { GridStack } from 'gridstack';

let count = ref(0);
let info = ref('');
let grid = null;

const items = [
  { x: 2, y: 1, h: 2, content: 'item 1' },
  { x: 2, y: 4, w: 3, content: 'item 2' },
  { x: 4, y: 2, content: 'item 3' },
  { x: 3, y: 1, h: 2, content: 'item 4' },
  { x: 0, y: 6, w: 2, h: 2, content: 'item 5' },
];

onMounted(() => {
  grid = GridStack.init({
    minRow: 1,
    cellHeight: '70px',
    float: false,
    dragInOptions: { appendTo: 'body', helper: 'clone' },
  });
  grid.load(items);

  grid.on('change', (event, element) => {
    const node = element.gridstackNode;
    info.value = `you just dragged node #${node.id} to ${node.x},${node.y} – good job!`;
  });
});

const addNewWidget = () => {
  const node = items[count.value] || {
    x: Math.round(12 * Math.random()),
    y: Math.round(5 * Math.random()),
    w: Math.round(1 + 3 * Math.random()),
    h: Math.round(1 + 3 * Math.random()),
  };
  node.id = node.content = String(count.value++);
  grid.addWidget(node);
};
</script>

<style>
.img-thumbnail {
  height: auto;
  max-width: 100%;
}

.grid-stack {
  background: #fafad2;
}
.grid-stack-item-content {
  background-color: #18bc9c;
}
</style>

<template>
  <h3>Grid layout for vue 3 using GridStack</h3>
  <p></p>

  <div class="grid-stack"></div>

  <button type="button" @click="addNewWidget()">Add Widget</button>
  {{ info }}
</template>
