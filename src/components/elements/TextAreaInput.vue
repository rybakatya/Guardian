<template>
  <div>
    <label class="label textStyle" :for="label">{{ label }}</label>
    <br />
    <textarea
      class="textBox textStyle"
      :id="label"
      v-model="text"
      rows="6"
      @input="onInput"
      @focus="isFocused = true"
      @blur="isFocused = false"
    ></textarea>
    <br />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue'

const props = defineProps<{
  label: string
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const text = ref(props.modelValue)
const isTyping = ref(false)
const isFocused = ref(false)

watch(() => props.modelValue, (newVal) => {
  text.value = newVal
})

function onInput(event: Event) {
  const value = (event.target as HTMLTextAreaElement).value
  text.value = value
  isTyping.value = true
  emit('update:modelValue', value)
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
  color: #b2b0bf;
  font-weight: 700;
  font-size: 18px;
  border: none;
}

.label {
  margin-left: 8px;
}

.button {
  margin-left: 8px;
}

.textBox {
  width: 95%;
  margin-left: 8px;
  min-height: 150px;
  max-width: 450px;
  overflow: hidden;
  resize: none;
  background-color: #151b23;
  outline-width: 1px;
  border: none;
  outline: 1px solid rgba(61, 68, 77, 0.75);
}

.textBox:focus {
  border: none;
  outline: 1px solid rgba(61, 68, 77, 1);
}

.button {
  background-color: #151b23;
}

.interim {
  color: #757575;
}
</style>
