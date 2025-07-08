<template>
  <teleport to="body">
    <div v-if="visible" class="modal-overlay" @click.self="close">
      <div class="modal-window">
        <button class="modal-close" @click="close">×</button>
        <div class="modal-body">
          <slot />
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, watch } from 'vue'

const props = defineProps<{ visible: boolean }>()
const emit = defineEmits<{ (e: 'update:visible', val: boolean): void }>()

function close() {
  emit('update:visible', false)
}

// lock body scroll
watch(() => props.visible, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})
</script>

<style>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
}

.modal-window {
  background: #151B23;
  color: #fff;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  height:90%;
  position: relative;
  overflow: hidden;
}

.modal-body {
  padding: 1.5rem;
  height: calc(100% - 2.5rem);
  overflow-y: auto;
}

.modal-close {
  position: absolute;
  top: 0.5rem;
  right: 0.75rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
}
</style>