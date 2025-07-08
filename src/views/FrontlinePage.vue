<template>

<MainPage :agentType="AgentType.FrontLine" />
</template>
<script setup lang="ts">
import { AgentType } from '@/components/AgentType';
import MainPage from '@/components/MainPage.vue';

</script>