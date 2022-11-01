<script setup>
import { ref } from 'vue';
import MenuIcon from 'vue-material-design-icons/Menu.vue';

const layout = [
  { x: 0, y: 0, w: 2, h: 4, i: 0 },
  { x: 2, y: 0, w: 2, h: 4, i: 1 },
  { x: 4, y: 0, w: 2, h: 4, i: 2 },
  { x: 6, y: 0, w: 2, h: 4, i: 3 },
  { x: 8, y: 0, w: 2, h: 4, i: 4 },
  { x: 8, y: 0, w: 2, h: 4, i: 5 },
  { x: 0, y: 5, w: 2, h: 4, i: 6 },
  { x: 2, y: 5, w: 2, h: 4, i: 7 },
  { x: 4, y: 5, w: 2, h: 4, i: 8 },
  { x: 6, y: 3, w: 2, h: 4, i: 9 },
];

const move = () => {
  console.log('move');
};

const moved = () => {
  console.log('moved');
};

const bounded = ref(true);
</script>

<style>
.img-thumbnail {
  height: auto;
  max-width: 100%;
}
</style>

<template>
  <h3>Grid layout for vue 3 with draggable, resize, responsive events.</h3>
  <p>
    Rewritten to TypeScript, Composition API and migrated to Vue3. See the
    <a href="https://www.npmjs.com/package/vue3-drr-grid-layout"
      >vue3-drr-grid-layout</a
    >
    project.
  </p>

  <GridLayout
    v-model:layout="layout"
    :col-num="12"
    :row-height="35"
    :maxRows="2"
    :isResizable="false"
    :is-bounded="bounded"
    @move="move"
    @moved="moved"
  >
    <template #default="{ gridItemProps }" :maxRows="3">
      <grid-item
        v-for="item in layout"
        :key="item.i"
        v-bind="gridItemProps"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        @move="move"
        @moved="moved"
      >
        <img
          crossorigin="anonymous"
          src="https://placedog.net/120/200"
          class="img-thumbnail"
        />
      </grid-item>
    </template>
    <!-- <template #item="{ item }">
      {{ item.i }}
    </template> -->
  </GridLayout>
</template>
