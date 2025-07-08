<template>
<h1 class="text">Market Prominence</h1>
<span class="toolText">Log in to this at least once a week or you will lose access to this app. </span>
<h2 class="text">Overview</h2>
<p class="text">Market Prominence (MP) is software that was designed to track CMS regulatory requirements for enrollment and membership.  We us MP as the source of truth for Medicare membership data.  CSA will utilize MP to view member billing invoice history, payments, LEP, LIS, and enrollment application.  It will also be used as a back up to the MARx system.</p>
<HyperLink 
	content="Market Prominence - Viewing Billing, Payment, LEP, LIS and Enrollment Application Information " 
	target="https://cenpointprd.ad.wellcare.com/articles/3188c26b-cb54-4465-8ea6-6e31ecb53f9a"/>
<HyperLink
	content="Late Enrollment Penalty (LEP) Questions "
	target="https://cenpointprd.ad.wellcare.com/articles/dd28899e-e3e6-4354-aa7c-455c9f73f7b3"
/>

<HyperLink 
	content="Low Income Subsidy"
	target="https://cenpointprd.ad.wellcare.com/articles/71c0f4bd-fbae-4075-a8f1-7dd489ebd33e "
/>

<p class="text">
	Cards – All cards have a category & subcategory.
	<br/>
	Medicare Data > Enrollment Info
	<br />
	Member Data > Contacts – This card allows you to view AOR, POA, Emergency Contact(s) and G&A Rep (Emergency Contact in Market Prominence DOES NOT equal permission to give out PHI)
	<br />
	Member Data > Notes – This card allows you to view notes entered by enrollment team & others.  This card is for viewing purposes only, you are unable to add or remove notes.
	<br />
	Financial > Premium - The premium amount the member is responsible for will be listed under ‘Member Expectation’ Column
	<br />
	Activity > Scheduled and Completed -This card will show time stamps & tasks and letters in or out, you cannot actually view the letter in this system.
	<br />
	Check MP notes card if having questions regarding eligibility etc.
	<br />

</p>

</template>
<script setup lang="ts">
import HyperLink from '../elements/HyperLink.vue';
</script>