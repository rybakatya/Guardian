<template>
  <div>
    <label class="label textStyle" :for="label">{{ label }}</label>
    <br />
    <!-- Textarea for manual typing and speech results -->
    <textarea
      class="textBox textStyle"
      :id="label"
      :value="text"
      @input="onInput"
      rows="6"
    ></textarea>
    <br />
    <!-- Button to Start/Stop Recognition when Pressed -->
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  text: string
  label: string
}>()

const emit = defineEmits<{
  (e: 'update:text', value: string): void
}>()

function onInput(event: Event) {
  const value = (event.target as HTMLTextAreaElement).value
  emit('update:text', value)
}
</script>

<style scoped>
.final {
  display: flex;
  width: auto;
  display: block;
  height: inherit;
  min-height: 150px;
}

.textStyle {
  color: #B2B0BF;
  font-weight: 700;
  font-size: 18px;
  border: none;
}

.label {
  margin-left: 8px;
}



.textBox {
  width: 95%;
  margin-left: 8px;
  min-height: 150px;
  max-width: 450px;
  overflow: hidden;
  field-sizing: content;
  resize: none;
  background-color: #151B23;
  outline-width: 1px;
  border: none;
  outline: 1px solid rgba(61, 68, 77, 0.75);
}

.textBox:focus {
  border: none;
  outline: 1px solid rgba(61, 68, 77, 1);
}

</style>
