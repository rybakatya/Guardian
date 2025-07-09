<template>
  <a class="hyp-link" href="#" @click.prevent="openPopup(target)">
    {{ content }}
  </a>
  <br/>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = withDefaults(defineProps<{
  content: string
  target: string
  bullet?:boolean
}>(),{
  bullet:true
})

function openPopup(url: string) {
  window.open(url, '_blank', 'width=800,height=600')
}
</script>

<style scoped>
.hyp-link {
  color: #4eaaff; /* light blue */
  font-weight: 700;
  text-decoration: none;
  transition: color 0.2s ease, border-bottom 0.2s ease;
}

.list{
  display: list-item;
  list-style-type: disc;
  list-style-position: inside;
}

.hyp-link:hover,
.hyp-link:focus {
  color: #b0d0ff;
  outline: none;
}

.hyp-link:active {
  color: #ffffff;
}

.text {
  margin-left: 0;
}
</style>
