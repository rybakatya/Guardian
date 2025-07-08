<template>
<h1 class="text">Member Portal</h1>

<p class="text">
	Make sure member is on correct Wellcare by Allwell/Healthnet Website (Not a Wellcare Legacy website).
	<br/>
	<br/>
	Works best in Google Chrome (issues with Firefox and Safari).
	<br />
	<br />
	Email can only be used to create one account, and changing the email address in OMNI does not change the member portal email.

</p>
<br/>
<h3 class="text">CentralPoint Articles:</h3>
<HyperLink 
	content="Member Secure Portal Master Troubleshooting Guide"
	target="https://cenpointprd.ad.wellcare.com/articles/58fe0232-e776-401f-b7ec-b95df9b23aca"/>

<HyperLink 
	content="Portal Account Recovery, Verification, and Password Reset for Members and Providers"
	target= "https://cenpointprd.ad.wellcare.com/articles/a8d73fe2-8fa8-4f46-b0f0-0f715c76c5c5" />

<HyperLink
	content="Member Secure Web Portal Requirements"
	target="https://cenpointprd.ad.wellcare.com/articles/3107dab9-2391-45bc-a0e0-e93a79a683a1"/>

<HyperLink
	content="Wellcare Complete Web Support-A-User"
	target="https://cenpointprd.ad.wellcare.com/articles/6b8a32fc-66c0-4371-9d06-ecbed1a4837a" />

<br/>
<h3 class="text">Met Contacts and Resources</h3>
<p class="text"> Category: <span class="white">Secure Web Portal</span></p>
<br/>
<h3 class="text">Technical Support Numbers(CA Only)</h3>
<ul>
	<li class="phone_number_item" >
		EGWP: 800-547-2967
	</li>
	<li class="phone_number_item">
		Healthnet/Calviva: 866-458-1047
	</li>
</ul>
<br />

<h3 class="text">Support Sites</h3>
<HyperLink 
	content="Allwell/Healthnet/Calviva"
	target="https://support.membersecurelogin.com/static/support/supportSiteMedicarePicker.html" />

<HyperLink
	content="EGWP"
	target="https://support.healthnetemployerplans.com/medicare/support/users" />

<HyperLink
	content="Wellcare Complete/Ascension"
	target="https://support.wellcarecomplete.com/medicare/support/users/ " />

</template>
<script setup lang="ts">
import HyperLink from '../elements/HyperLink.vue';
</script>

<style>
.phone_number_item {
		display: list-item;
		list-style-type: disc;
		list-style-position: inside;
		font-weight: 700;
}
.white {
	color:white;
}
</style>