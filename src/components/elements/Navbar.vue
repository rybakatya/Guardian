<template>
  <nav class="navbar">
    <ul class="nav-list">
      <li
        v-for="item in items"
        :key="item.display"
        class="nav-item"
        @mouseenter="open(item)"
        @mouseleave="close(item)"
      >
        <span class="nav-link" @click="item.action()">
          {{ item.display }}
          <template v-if="item.children">
            <svg class="chevron" viewBox="0 0 10 6"><path d="M0 0l5 6 5-6z"/></svg>
          </template>
        </span>

        <ul v-if="item.children" :class="['dropdown', { open: item.open }]">
          <li
            v-for="child in item.children"
            :key="child.display"
            class="dropdown-item"
            @mouseenter="open(child)"
            @mouseleave="close(child)"
          >
            <span class="dropdown-link" @click="child.action()">
              {{ child.display }}
              <template v-if="child.children">
                <svg class="chevron" viewBox="0 0 10 6"><path d="M0 0l5 6 5-6z"/></svg>
              </template>
            </span>

            <ul
              v-if="child.children"
              :class="['dropdown sub', { open: child.open }]"
            >
              <li
                v-for="grand in child.children"
                :key="grand.display"
                class="dropdown-item"
                @click="grand.action()"
              >
                <span class="dropdown-link">
                  {{ grand.display }}
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { defineProps, reactive } from 'vue'

export interface NavBarItem {
  display: string
  action: () => void
  children?: NavBarItem[]
  open?: boolean
}

const props = defineProps<{ items: NavBarItem[] }>()
const items = reactive<NavBarItem[]>(props.items)

function open(item: NavBarItem) {
  item.open = true
}

function close(item: NavBarItem) {
  item.open = false
}
</script>

<style scoped>
.navbar {
  background-color: #2c3e50;
  padding: 0 1rem;
  user-select: none;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0.5rem 0;
}

.nav-item {
  position: relative;
  margin-right: 1.5rem;
}

.nav-link {
  color: #ecf0f1;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
}

.chevron {
  width: 0.6rem;
  height: 0.4rem;
  fill: currentColor;
  margin-left: 0.25rem;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background: #34495e;
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 4px;
  min-width: 150px;
  display: none;
  z-index: 999;
}

.dropdown.open {
  display: block;
}

.dropdown-item {
  position: relative;
}

.dropdown-link {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  color: #ecf0f1;
  white-space: nowrap;
}

.dropdown-link:hover {
  background-color: #3d566e;
}

/* second-level submenu */
.dropdown.sub {
  top: 0;
  left: 100%;
  background-color: #3b5163;
  border-radius: 0 4px 4px 0;
  margin: 0; /* prevent gap */
}

.dropdown.sub .dropdown-link .chevron {
  transform: rotate(90deg);
}
</style>
