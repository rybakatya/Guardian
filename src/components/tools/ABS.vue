<script setup lang="ts">
import HyperLink from '../elements/HyperLink.vue';


</script>

<template>
    <h1 class="text">ABS</h1>

    <span class="toolText">Log in to this at least once a week or you will lose access to this app. </span>
    <br/>
    <p class="text">Centene Connect  > Blue Zone Session Manager > ABS integrity (secure)  </p>

    <h2 class="text">Common Prompts for ABS</h2>
    <ul class ="text">
        <li class ="item">MMPRVXFR : Member Provider transfer </li>
        <li class ="item">MMCORPRV: member provider correction </li>
        <li class ="item">PRVSRC:Provider Search – PPG Status, contract, product and address/telephone information (used for ppg search) </li>
        <li class ="item">PHYSRC– Physician’s status, contract, product, license, schooling and address/telephone information.  </li>
        <li class ="item">MMINQ: Member Inquiry – Subscriber/Member status, effective date, PPG/PCP, Medical/Supplemental Benefits plans, etc  </li>
        <li class ="item">MMSUBID - Material Request (Member ID or Welcome Packet ,Post Enrollment Kit)</li>
    </ul>

    <h2 class="text">Articles:</h2>
    <HyperLink 
        content="Medicare Employer Participating Physician Group (PPG), Primary Care Physician (PCP) Change "
        target="https://cenpointprd.ad.wellcare.com/articles/d3d18ba1-66b9-438a-84e4-bb653fb90480" />

    <HyperLink
        content="Julian Perpetual and Leap Year Calendar"
        target="https://cenpointprd.ad.wellcare.com/articles/23b063c0-1575-4270-b1a6-905a533e56c7?row=1&memory=80163" />
    
    <HyperLink 
        content="ABS Manual"
        target="https://cnet.centene.com/sites/MOR/Team/CC/Training%20Resources/2021%20CCC%20Medicare%20New%20Hire%20Training/Week%203/Modules/ABS%20Module.pdf#search=ABS%20CLaims"/>
</template>

<style scoped>
.item {
    margin: 0px 0px 0px 5%;
}
</style>