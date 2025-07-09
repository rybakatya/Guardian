<template>


<MainPage :agentType="AgentType.FrontLine" />
</template>


<style scoped>
h1 {
  margin-left:3px;
}
</style>

<script setup lang="ts">
import { AgentType } from "@/components/AgentType";
import MainPage from "../components/MainPage.vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const goToAbout = () => {
  router.push('/frontline');
};
</script>