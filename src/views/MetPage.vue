<template>

  <MainPage :agentType="AgentType.MET" />
  </template>
  <script setup lang="ts">
  import { AgentType } from '@/components/AgentType';
  import MainPage from '@/components/MainPage.vue';
  
  </script>