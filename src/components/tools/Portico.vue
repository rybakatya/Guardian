<template>
<h1 class="text">Portico</h1>

<p class="toolText">If we cannot locate a doctor in omni then we need at least 2 sources of information stating dr is par before updating primary care physicians, or reffering specialists.</p>

<p class="text">Portico is used to verify if a provider is in-network with Wellcare by Allwell/Wellcare by Healthnet. </p>
<p class="text">Login: centene\CN# </p>
<p class="text">Password: Single Sign On (SSO) </p>
<br/>
<p class="toolText">WHEN ASKING FOR HELP WITH DETERMINING PAR STATUS INCLUDE NPI CARRIER CODE AND LOCATION AND IF CALIFORNIA INCLUDE PPGID OR PPG NAME(only if ppg id is unobtainable)</p>
<br/>
<h3 class="text">CentralPoint Articles:</h3>
<HyperLink
	content="Provider Search and Par Status"
	target="https://cenpointprd.ad.wellcare.com/articles/2d563a11-6d32-47fd-8007-2a620e0a66bd"/>


<HyperLink
	content="Provider’s Network Status in Portico"
	target="https://cenpointprd.ad.wellcare.com/articles/1b0416f7-418e-4635-8355-c81cd1596b9b" />
</template>
<script setup lang="ts">
import HyperLink from '../elements/HyperLink.vue';
</script>