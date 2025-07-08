<script setup lang="ts">
import { AgentType } from "./AgentType.ts"
import { ref, onMounted } from 'vue';
import { AvailableStates } from './State.ts'; // Adjust path as needed
import ConfirmedText from "./ConfirmedText.vue";
import YesOrNoChoiceBubble from "./YesOrNoChoiceBubble.vue";
import { State } from "./State.ts";
import Dropdown from "./elements/Dropdown.vue";
import CheckboxGrid from "./elements/CheckboxGrid.vue";
import { EscalationType } from "./EscalationType.ts";
import Modal from "./elements/Modal.vue";
import Navbar, { NavBarItem } from "./elements/Navbar.vue";
import HyperLink from "./elements/HyperLink.vue";
import ABS from "./tools/ABS.vue";
import Amisys from "./tools/Amisys.vue";
import Ember from "./tools/Ember.vue";
import Marx from "./tools/Marx.vue"
import MemberPortal from "./tools/MemberPortal.vue"
import MP from "./tools/MP.vue"
import Portico from "./tools/Portico.vue"
import UMV from "./tools/UMV.vue"
import TextAreaInput from "./elements/TextAreaInput.vue";

interface MainPageProps
{
  agentType : AgentType
}

const agentType = ref(AgentType.FrontLine);

//frontline variables
const props = defineProps<MainPageProps>();
const greetedMember = ref(false);
const verifiedHippa = ref(-1);
const offeredAssistanceToMember = ref(false);
const probedMember = ref(false);
const willingnessMember = ref(false);
const firstTimeCalling = ref(false);
const shownEmpathyToMember = ref(false);
const builtRapportWithMember = ref(false);
const checkedAlerts = ref(false);
const gapsInCare = ref(false);
const ihha = ref(false);
const offeredMemberAdditionalAssistance = ref(false);

const callReason = ref("");
const callAction = ref("");
const callResolution = ref("");

//met only variables
const greetedAgent = ref(false);
const agentName = ref('');
const serviceCenter = ref('');
const supervisorName = ref('');
const accountPopulated = ref(-1);
const obtainedMemberIDFromAgent = ref(false);
const confirmMemberName = ref(false);
const hippaIdentifiersObtained = ref(false);
const selectedHippaIdentifiers = ref<string[]>([]);
const offeredAssistanceToAgent = ref(false);
const willingnessAgent = ref (false);
const probedAgent = ref(false);
const checkNotes = ref(false);
const offerInteractionID = ref(false);
const interactionID = ref("");
const callEscalated = ref(false);
const offeredAgentAdditionAssistance = ref(false);
const callSupportType = ref<EscalationType>(EscalationType.Support);
const confirmUnderstanding = ref(false);
const showModal = ref(true);
const firstTimeCallingResponse = ref(-1);
const stateNames = AvailableStates.map(state => state.name);

const escalationOptions = Object.keys(EscalationType).filter(
  key => isNaN(Number(key))
);

const verificationItems: string[] = [
  "IVR",
  "Member ID",
  "Date Of Birth",
  "MBI",
  "Medicaid ID",
  "Subscriber ID",
  "SSN",
  "Phone number and Address",
  "Unverified"
];

const showABSWindow = ref(false);
const showAmisysWindow = ref(false);
const showEmberWindow = ref(false);
const showMarxMenu = ref(false);
const showMPWindow = ref(false);
const showPortalWindow = ref(false);
const showPorticoWindow = ref(false);
const showUMVWindow = ref(false);

const navItems: NavBarItem[] = [
  { 
    display: 'Tools',      
    action: () => console.log('Go Home'),
    children: [
    {
      display: 'ABS',
      action: () => (showABSWindow.value = true)
    },
    {
      display: 'Amisys',
      action: () => (showAmisysWindow.value = true)
    },
    {
      display: 'Ember',
      action: () => (showEmberWindow.value = true)
    },
    {
      display: 'MARX',
      action: () => (showMarxMenu.value = true)
    },
    {
      display: 'MP',
      action: () => (showMPWindow.value = true)
    },
    {
      display: 'Member Portal',
      action: () => (showPortalWindow.value = true)
    },
    {
      display: 'Portico',
      action: () => (showPorticoWindow.value = true)
    },
    {
      display: 'UMV',
      action: () => (showUMVWindow.value = true)
    }
    ]
  },
  {
    display: 'Resources',
    action: () => console.log('Resources'),
    children: [
    {
      display: "Abusive Caller",
      action:() => (window.open("https://cenpointprd.ad.wellcare.com/articles/a3d71ead-8d9c-ef11-93a8-005056bc7749?oid=tBXFsjSVnk-unQQPqZp5QQ%7CrR7Xo5yNEe-TqABQVrx3SQ%7CRTFEditor1%7C0&pos=1#:~:text=Caller%20is%20displaying%C2%A0%20abusive%20or%20gross/obscene%20behavior", "_blank", "width=800,height=600"))
    },
    {
      display: "Carrier Codes",
      action:() => (window.open("https://cenpointprd.ad.wellcare.com/articles/9f792ed1-b503-4758-8584-c0a2d0a52521?oid=tBXFsjSVnk-unQQPqZp5QQ%7C0S55nwO1WEeFhMCi0KUlIQ&pos=1", "_blank", "width=800,height=600"))
    },
    {
      display: "COE",
      action:() => (window.open("https://cenpointprd.ad.wellcare.com/articles/5b9fd9ea-5e30-4d59-ba90-151f2928ae40?oid=tBXFsjSVnk-unQQPqZp5QQ%7C6tmfWzBeWU26kBUfKSiuQA%7CRTFEditor1%7C3348&pos=1&text=COE%20Claims%20Scripting%20Resource%20%26%23xa0%3B#:~:text=Service%20Representative%20Scripting-,Center%20of%20Excellence%20(COE)%20Claims%20Customer%20Service%20Representative%20Scripting,-Hide%20All%20Sections", "_blank", "width=800,height=600"))
    },
    {
      display: "IHHA",
      action: () => (window.open("https://cenpointprd.ad.wellcare.com/articles/fb0877b9-f21c-4bb1-8625-b1b453bc2356?oid=tBXFsjSVnk-unQQPqZp5QQ%7CuXcI-xzysUuGJbG0U7wjVg%7CRTFEditor1%7C33926&pos=1&text=Frequently%20Asked%20Questions%20for%20%24100%20Member%20IHA%20Assessment%20Incentive#:~:text=Note%3A%20Keeping%20track%20of%20all%20the%20vendors%20of%20all%20the%20plans%20we%20service%20is%20not%20easy.%20To%20ensure%20that%20correct%20information%20is%20consistently%20given%2C%20it%20is%20vital%20to%20conduct%20the%20proper%20research%20before%20communicating%20whether%20it%20is%20one%20of%20the%20vendors%20or%20not", "_blank", "width=800,height=600"))
    },
    {
      display: "Spendables",
      action:() => console.log('spendables'),
      children: [
        {
          display: "WSC",
          action: () => (window.open("https://cenpointprd.ad.wellcare.com/articles/271852ea-49d5-4520-b2bd-fbd29fc41af4?oid=tBXFsjSVnk-unQQPqZp5QQ%7C6lIYJ9VJIEWyvfvSn8Qa9A%7CRTFEditor1%7C25021&pos=1&text=DSNP%20OTC%20Only#:~:text=Wellcare%20Spendables%20Card-,Wellcare%20Spendables%20Card,-Hide%20All%20Sections", "_blank", "width=800,height=600"))
        },
        {
          display: "HBP",
          action: () => (window.open("http://cenpointprd.ad.wellcare.com/articles/32a7f1ff-5eea-4674-a0af-62bfa7a5c207?oid=tBXFsjSVnk-unQQPqZp5QQ%7C__GnMupedEagr2K_p6XCBw%7CRTFEditor1%7C0&pos=3", "_blank", "width=800,height=600"))
        }
      ]
    },
    {
      display: "Templates",
      action: () => console.log("template"),
      children: [
        {
          display: "MET Chat",
          action: () => {
            var note:string = "";
            note += "Supervisor: ";
            note += "\nQuestion(s): ";
            note += "\nSystem(s) used: ";
            note += "\nArticle(s) reviewed: ";
            note += "\nState and Plan type: ";
            navigator.clipboard.writeText(note);
          }
        },
      ]
    },
    {
      display: "Update PCP",
      action: () => (window.open("https://cenpointprd.ad.wellcare.com/articles/54244404-e8c2-4877-8e0f-0f7a80424ff0?row=2&memory=95004", "_blank", "width=800,height=600"))
    },
  ]
  },
  {
    display: "Switch",
    action: () => 
    ( 
      agentType.value = (agentType.value == AgentType.MET) ? AgentType.FrontLine : AgentType.MET,
      greetedMember.value = false,
      verifiedHippa.value = -1,
      offeredAssistanceToMember.value = false,
      probedMember.value = false,
      willingnessMember.value = false,
      firstTimeCalling.value = false,
      shownEmpathyToMember.value = false,
      builtRapportWithMember.value = false,
      checkedAlerts.value = false,
      gapsInCare.value = false,
      ihha.value = false,
      offeredMemberAdditionalAssistance.value = false,

      greetedAgent.value = false,
      agentName.value = '',
      serviceCenter.value = '',
      supervisorName.value = '',
      accountPopulated.value = -1,
      obtainedMemberIDFromAgent.value = false,
      confirmMemberName.value = false,
      hippaIdentifiersObtained.value = false,
      selectedHippaIdentifiers.value = [],
      offeredAssistanceToAgent.value = false,
      willingnessAgent.value = false,
      probedAgent.value = false,
      checkNotes.value = false,
      offerInteractionID.value = false,
      interactionID.value = '',
      callEscalated.value = false,
      offeredAgentAdditionAssistance.value = false,
      callSupportType.value = EscalationType.Support,
      confirmUnderstanding.value = false,
      brandName.value = "",
      siteOne.value = "",
      siteTwo.value = "",
      currentState.value,
      firstTimeCallingResponse.value = -1,
      callReason.value = "",
      callAction.value = "",
      callResolution.value = ""

    )
  }

];
const brandName = ref<string | undefined>("");
const siteOne = ref<string | undefined>("");
const siteTwo = ref<string | undefined>("");
const currentState = ref<State | undefined>(undefined);
const handleStateChange = (selected: string) => {
  const state = AvailableStates.find(state => state.name === selected);
  currentState.value = state;
  brandName.value = state?.primaryBrandName;
  if(state?.secondaryBrandName != undefined && state?.secondaryBrandName != "")
     brandName.value += ", " + state?.secondaryBrandName;
  
  if(state?.teriataryBrandName != undefined && state?.teriataryBrandName != "")
    brandName.value += ", " + state?.teriataryBrandName;


  siteOne.value = state?.primarySiteLink;
  siteTwo.value = state?.secondarySiteLink;

};

const test = () => {
  alert(selectedHippaIdentifiers.value);
};

const fromString = (value: string): EscalationType =>  {
  if (value in EscalationType && isNaN(Number(value))) {
    return EscalationType[value as keyof typeof EscalationType];
  }
  return EscalationType.Support;
}

const onEscalateCall = (name:string) => {
  callEscalated.value = true;
  callSupportType.value = fromString(name);

};

onMounted(() => {
  agentType.value = props.agentType;
});

const copyNotes = () => {
  var notes:string = "";
  if(agentType.value == AgentType.MET) {
    notes += "Member ID: ";
    notes +="\nAgent Name: " + agentName.value;
    notes +="\nAgent Location: " + serviceCenter.value;
    notes +="\nAgent Supervisor: " + supervisorName.value;
    notes += "\nVerified HIPAA: ";
    if(selectedHippaIdentifiers.value.includes('Unverified') == true)
      notes += "No";
    else
      notes += "Yes";

    notes +="\nIdentifiers Used: ";

    selectedHippaIdentifiers.value.forEach((name) =>{
      notes += name + " ";
    });

    notes += "\nHas the member called before? ";
    notes += (firstTimeCallingResponse.value == 0) ? "Yes" : "No";

    notes += "\nReason for Call: " + callReason.value;
    notes += "\nAction: " + callAction.value;

    
    if(offeredAgentAdditionAssistance.value == true)
      callResolution.value += "\nAgent understood and had no further questions.";

    if(confirmUnderstanding.value == true)
      callResolution.value += "\nCaller understood and had no further questions."

    notes += "\nResolution: " + callResolution.value;
  }
  else if(agentType.value == AgentType.FrontLine)
  {
    notes += "Caller Name: ";
    notes += "InteractionID: ";
    notes +="\nHIPAA Verified: " + (verifiedHippa.value == 0) ? "Yes" : "No";
    notes += "\nReason for Call: " + callReason.value;
    notes += "\nAction: " + callAction.value;


    if(offeredMemberAdditionalAssistance.value == true)
      callResolution.value += "\nCaller understood and had no further questions."

    notes += "\nResolution: " + callResolution.value;
  }
  console.log(notes);
  navigator.clipboard.writeText(notes);
}


const query = ref('')

function searchCentralPoint() {
  console.log('Searching CentralPoint for:', query.value)
  // Add your actual search logic here
  var win = window.open('https://cenpointprd.ad.wellcare.com/search?search=' + query.value, ' Site Search | Wellcare', 'popup=1');
  win?.focus();
  win?.location.reload();
}
</script>

<template>
<Navbar :items="navItems" />

<Modal v-model:visible="showABSWindow">
    <ABS/>
</Modal>

<Modal v-model:visible="showAmisysWindow">
    <Amisys/>
</Modal>

<Modal v-model:visible="showEmberWindow">
    <Ember/>
</Modal>

<Modal v-model:visible="showMarxMenu">
    <Marx/>
</Modal>
<Modal v-model:visible="showPortalWindow">
    <MemberPortal/>
</Modal>

<Modal v-model:visible="showMPWindow">
    <MP/>
</Modal>

<Modal v-model:visible="showPorticoWindow">
    <Portico/>
</Modal>

<Modal v-model:visible="showUMVWindow">
    <UMV/>
</Modal>


<div v-if="agentType == AgentType.FrontLine" class="container">
  <ConfirmedText 
    v-model="greetedMember"
    label="Greet"
    question="Thank you for calling member services. My name is ___. In order to better assist you, may I please have your member id?"
    styleClass="text"
    labelClass="memberText"
  />
  <p class="toolText">IMPORTANT: If the caller asks a question or makes a statement instead of providing a member ID then this could be a <span style="color:yellow">CMS TEST CALL!</span></p>

  <YesOrNoChoiceBubble
    v-if="greetedMember == true"
    v-model="verifiedHippa"
    question="Were you able to verify HIPPA for caller?"
    style-class="taskText" 
  />

  <ConfirmedText 
    v-if="greetedMember == true && verifiedHippa != -1"
    v-model="offeredAssistanceToMember"
    styleClass="text" 
    labelClass="memberText"
    label="Offer Assitance"
    question="How may I assist you today?"  
/>

<ConfirmedText
  v-if="greetedMember == true && verifiedHippa != -1 && offeredAssistanceToMember == true"
  v-model="probedMember"
  styleClass="taskText"
  labelClass="memberText"
  label="Probe"
  question="Ask probing questions and repeat the concern back to caller"
/>

<ConfirmedText 
  v-if="greetedMember == true && verifiedHippa != -1 && offeredAssistanceToMember == true && probedMember == true"
  v-model="willingnessMember"
  styleClass="text"
  labelClass="memberText"
  label="Willingness Statement"
  question="I'll happily assist with this today!"
/>

<ConfirmedText 
  v-if="greetedMember == true && verifiedHippa != -1 && offeredAssistanceToMember == true && probedMember == true && willingnessMember == true"
  v-model="firstTimeCalling"
  styleClass="text"
  labelClass="memberText"
  label="FCR"
  question="Is this the first time you're calling about this?"
/>

<ConfirmedText 
  v-if="greetedMember == true && verifiedHippa != -1 && offeredAssistanceToMember == true && probedMember == true && willingnessMember == true && firstTimeCalling == true"
  v-model="shownEmpathyToMember"
  styleClass="taskText"
  labelClass="memberText"
  label="Empathy"
  question="If applicable show member empathy about anything they express dissatisfaction with."
/>

<ConfirmedText 
  v-if="greetedMember == true && verifiedHippa != -1 && offeredAssistanceToMember == true && probedMember == true 
    && willingnessMember == true && firstTimeCalling == true && shownEmpathyToMember == true"
  v-model="builtRapportWithMember"
  styleClass="taskText"
  labelClass="memberText"
  label="Rapport"
  question="Address member by their last name throughout the call."
/>

<ConfirmedText 
  v-if="greetedMember == true && verifiedHippa != -1 && offeredAssistanceToMember == true && probedMember == true 
    && willingnessMember == true && firstTimeCalling == true && shownEmpathyToMember == true && builtRapportWithMember == true"
  v-model="checkedAlerts"
  styleClass="taskText"
  labelClass="memberText"
  label="Alerts"
  question="If members accounts has any alerts ⚠️ be sure to click them and read them back word for word to the member"
/>


<ConfirmedText 
  v-if="greetedMember == true && verifiedHippa != -1 && offeredAssistanceToMember == true && probedMember == true 
    && willingnessMember == true && firstTimeCalling == true && shownEmpathyToMember == true && builtRapportWithMember == true
    && checkedAlerts == true"
  v-model="gapsInCare"
  styleClass="text"
  labelClass="memberText"
  label="GIC"
  question="I have some health reminders I would like to go over with you today."
/>

<ConfirmedText 
  v-if="greetedMember == true && verifiedHippa != -1 && offeredAssistanceToMember == true && probedMember == true 
    && willingnessMember == true && firstTimeCalling == true && shownEmpathyToMember == true && builtRapportWithMember == true
    && checkedAlerts == true && gapsInCare == true"
  v-model="ihha"
  styleClass="text"
  labelClass="memberText"
  label="IHHA"
  question="We are offering a free 45-min assessment, this is when one of our providers come to your home to review medical history and ask a few questions, at the end of the assessment you are eligible for a $100 gift card. Is this something you would be interested in?"
/>

<ConfirmedText 
  v-if="greetedMember == true && verifiedHippa != -1 && offeredAssistanceToMember == true && probedMember == true 
    && willingnessMember == true && firstTimeCalling == true && shownEmpathyToMember == true && builtRapportWithMember == true
    && checkedAlerts == true && gapsInCare && ihha == true"
  v-model="offeredMemberAdditionalAssistance"
  styleClass="text"
  labelClass="memberText"
  label="Additional Assistance"
  question="Is there anything else I can assist you with today?"
/>





</div>


<div v-if="agentType == AgentType.MET" class="container">
  <ConfirmedText 
    v-model="greetedAgent"
    styleClass="text"
    labelClass="memberText"
    label="Greet"
    question="Thank you for calling member escalations team my name is Russell could I please have your first and last name?"
  />

  <table>
    <tr>
      <td><label class="memberText" for="agentName">Agent Name:</label></td>
      <td><input type="text" id="agentName" v-model="agentName" /></td>
    </tr>
    <tr>
      <td><label class="memberText" for="serviceCenter">Service Center:</label></td>
      <td><input type="text" id="serviceCenter" v-model="serviceCenter" /></td>
    </tr>
    <tr>
      <td><label class="memberText" for="supervisorName">Supervisor Name:</label></td>
      <td><input type="text" id="supervisorName" v-model="supervisorName" /></td>
    </tr>
    <tr>
      <td><label class="memberText" for="interactionID">Interaction ID:</label></td>
      <td><input type="text" id="interactionID" v-model="interactionID" /></td>
    </tr>
  </table>

  <YesOrNoChoiceBubble
    v-if="greetedAgent == true"
    v-model="accountPopulated"
    question="Did account populate?"
    style-class="memberText" 
  />
  
  <ConfirmedText 
    v-if="greetedAgent == true && accountPopulated == 1"
    v-model="obtainedMemberIDFromAgent"
    styleClass="text"
    labelClass="memberText"
    label="Account Lookup"
    question="What is the member id of the account you're working in?"
  />

  <ConfirmedText 
    v-if="greetedAgent == true && (obtainedMemberIDFromAgent == true || accountPopulated == 0)"
    v-model="confirmMemberName"
    styleClass="text"
    labelClass="memberText"
    label="Member Name"
    question="Could you confirm the members first and last name?"
  />

  <ConfirmedText 
    v-if="greetedAgent == true && (obtainedMemberIDFromAgent == true || accountPopulated == 0) && confirmMemberName == true"
    v-model="hippaIdentifiersObtained"
    styleClass="text"
    labelClass="memberText"
    label="Verify"
    question="What two HIPPA identifiers did you use and are you speaking directly to the member?"
  />
  <CheckboxGrid
    v-if="greetedAgent == true && (obtainedMemberIDFromAgent == true || accountPopulated == 0) && confirmMemberName == true && hippaIdentifiersObtained == true"
    :items="verificationItems"
    :selected="selectedHippaIdentifiers"
    @update:selected="selectedHippaIdentifiers = $event"
  />

  <ConfirmedText 
    v-if="greetedAgent == true && (obtainedMemberIDFromAgent == true || accountPopulated == 0) && confirmMemberName == true && 
    hippaIdentifiersObtained == true"
    v-model="offeredAssistanceToAgent"
    styleClass="text"
    labelClass="memberText"
    label="Offer Assistance"
    question="How may I assist you today?"
  />

  <ConfirmedText 
    v-if="greetedAgent == true && (obtainedMemberIDFromAgent == true || accountPopulated == 0) && confirmMemberName == true && 
    hippaIdentifiersObtained == true && offeredAssistanceToAgent"
    v-model="willingnessAgent"
    styleClass="text"
    labelClass="memberText"
    label="Willingness Statement"
    question="I will happily assist with that!"
  />

  <ConfirmedText
    v-if="greetedAgent == true && (obtainedMemberIDFromAgent == true || accountPopulated == 0) && confirmMemberName == true && 
      hippaIdentifiersObtained == true && offeredAssistanceToAgent == true && willingnessAgent == true"
    v-model="probedAgent"
    styleClass="taskText"
    labelClass="memberText"
    label="Probe"
    question="Ask probing questions and repeat the concern back to agent."
  />

  <ConfirmedText
    v-if="greetedAgent == true && (obtainedMemberIDFromAgent == true || accountPopulated == 0) && confirmMemberName == true && 
      hippaIdentifiersObtained == true && offeredAssistanceToAgent == true && willingnessAgent == true && probedAgent == true"
    v-model="firstTimeCalling"
    styleClass="text"
    labelClass="memberText"
    label="FCR"
    question="Is this the first time the member has called about this?"
  />

  <YesOrNoChoiceBubble
    v-if="greetedAgent == true && (obtainedMemberIDFromAgent == true || accountPopulated == 0) && confirmMemberName == true && 
        hippaIdentifiersObtained == true && offeredAssistanceToAgent == true && willingnessAgent == true && probedAgent == true"
      v-model="firstTimeCallingResponse"
      style-class="memberText"
      question="Is this a repeat caller?" />
          

  <ConfirmedText
    v-if="greetedAgent == true && (obtainedMemberIDFromAgent == true || accountPopulated == 0) && confirmMemberName == true && 
      hippaIdentifiersObtained == true && offeredAssistanceToAgent == true && willingnessAgent == true && probedAgent == true
      && firstTimeCalling == true"
    v-model="checkNotes"
    styleClass="text"
    labelClass="memberText"
    label="Notes"
    question="Please give me a few moments to review the recent interactions. Feel free to check back in with the member."
  />

  <ConfirmedText
    v-if="greetedAgent == true && (obtainedMemberIDFromAgent == true || accountPopulated == 0) && confirmMemberName == true && 
      hippaIdentifiersObtained == true && offeredAssistanceToAgent == true && willingnessAgent == true && probedAgent == true
      && firstTimeCalling == true && checkNotes == true"
    v-model="offerInteractionID"
    styleClass="text"
    labelClass="memberText"
    label="Interaction ID"
    :question="`Your interaction ID is ${interactionID}`"
  />

  <ConfirmedText
    v-if="greetedAgent == true && (obtainedMemberIDFromAgent == true || accountPopulated == 0) && confirmMemberName == true && 
      hippaIdentifiersObtained == true && offeredAssistanceToAgent == true && willingnessAgent == true && probedAgent == true
      && firstTimeCalling == true && checkNotes == true && offerInteractionID == true && callSupportType == EscalationType.Support"
    v-model="offeredAgentAdditionAssistance"
    styleClass="text"
    labelClass="memberText"
    label="Additional Assistance"
    :question="`Is there anything else I can assist you with today?`"
  />

  <ConfirmedText
    v-if="greetedAgent == true && (obtainedMemberIDFromAgent == true || accountPopulated == 0) && confirmMemberName == true && 
      hippaIdentifiersObtained == true && offeredAssistanceToAgent == true && willingnessAgent == true && probedAgent == true
      && firstTimeCalling == true && checkNotes == true && offerInteractionID == true && callSupportType != EscalationType.Support"
    v-model="offeredAgentAdditionAssistance"
    styleClass="text"
    labelClass="memberText"
    label="Additional Assistance"
    :question="`Before I take over this call is there anything else I can assist you with today?`"
  />

  <ConfirmedText
    v-if="greetedAgent == true && (obtainedMemberIDFromAgent == true || accountPopulated == 0) && confirmMemberName == true && 
      hippaIdentifiersObtained == true && offeredAssistanceToAgent == true && willingnessAgent == true && probedAgent == true
      && firstTimeCalling == true && checkNotes == true && offerInteractionID == true && offeredAgentAdditionAssistance == true &&
      callSupportType == EscalationType.Escalate"
    v-model="greetedMember"
    styleClass="text"
    labelClass="memberText"
    label="Introduce"
    :question="`Hello my name is Russell from the member escalations team. The previous agent you were speaking with filled me in on the details and I am going to assist you from here.`"
  />
  

  <ConfirmedText
    v-if="greetedAgent == true && (obtainedMemberIDFromAgent == true || accountPopulated == 0) && confirmMemberName == true && 
      hippaIdentifiersObtained == true && offeredAssistanceToAgent == true && willingnessAgent == true && probedAgent == true
      && firstTimeCalling == true && checkNotes == true && offerInteractionID == true && offeredAgentAdditionAssistance == true &&
      callSupportType == EscalationType.Supervisor"
    v-model="greetedMember"
    styleClass="text"
    labelClass="memberText"
    label="Greet"
    :question="`Hello my name is Russell I am an account supervisor. The previous agent you were speaking with filled me in on the details and I am going to assist you from here.`"
  />
  
  <ConfirmedText
    v-if="greetedAgent == true && (obtainedMemberIDFromAgent == true || accountPopulated == 0) && confirmMemberName == true && 
      hippaIdentifiersObtained == true && offeredAssistanceToAgent == true && willingnessAgent == true && probedAgent == true
      && firstTimeCalling == true && checkNotes == true && offerInteractionID == true && offeredAgentAdditionAssistance == true &&
      callSupportType != EscalationType.Support && greetedMember"
    v-model="probedMember"
    styleClass="taskText"
    labelClass="memberText"
    label="Probe"
    :question="`Ask probing questions and repeat the concern back to caller.`"
  />

  <ConfirmedText 
    v-if="greetedAgent == true && (obtainedMemberIDFromAgent == true || accountPopulated == 0) && confirmMemberName == true && 
      hippaIdentifiersObtained == true && offeredAssistanceToAgent == true && willingnessAgent == true && probedAgent == true
      && firstTimeCalling == true && checkNotes == true && offerInteractionID == true && offeredAgentAdditionAssistance == true &&
      callSupportType != EscalationType.Support && greetedMember && probedMember"
    v-model="willingnessMember"
    styleClass="text"
    labelClass="memberText"
    label="Willingness Statement"
    question="I'll happily assist with this today!"
  />

  <ConfirmedText 
    v-if="greetedAgent == true && (obtainedMemberIDFromAgent == true || accountPopulated == 0) && confirmMemberName == true && 
      hippaIdentifiersObtained == true && offeredAssistanceToAgent == true && willingnessAgent == true && probedAgent == true
      && firstTimeCalling == true && checkNotes == true && offerInteractionID == true && offeredAgentAdditionAssistance == true &&
      callSupportType != EscalationType.Support && greetedMember && probedMember && willingnessMember"
    v-model="shownEmpathyToMember"
    styleClass="taskText"
    labelClass="memberText"
    label="Empathy"
    question="If applicable show member empathy about anything they express dissatisfaction with. Offer grievance where applicable."
  />

  <ConfirmedText 
  v-if="greetedAgent == true && (obtainedMemberIDFromAgent == true || accountPopulated == 0) && confirmMemberName == true && 
      hippaIdentifiersObtained == true && offeredAssistanceToAgent == true && willingnessAgent == true && probedAgent == true
      && firstTimeCalling == true && checkNotes == true && offerInteractionID == true && offeredAgentAdditionAssistance == true &&
      callSupportType != EscalationType.Support && greetedMember && probedMember && willingnessMember && shownEmpathyToMember"
    v-model="builtRapportWithMember"
    styleClass="taskText"
    labelClass="memberText"
    label="Rapport"
    question="Address member by their last name throughout the call."
  />

  <ConfirmedText 
  v-if="greetedAgent == true && (obtainedMemberIDFromAgent == true || accountPopulated == 0) && confirmMemberName == true && 
      hippaIdentifiersObtained == true && offeredAssistanceToAgent == true && willingnessAgent == true && probedAgent == true
      && firstTimeCalling == true && checkNotes == true && offerInteractionID == true && offeredAgentAdditionAssistance == true &&
      callSupportType != EscalationType.Support && greetedMember && probedMember && willingnessMember && shownEmpathyToMember &&
      builtRapportWithMember"
    v-model="confirmUnderstanding"
    styleClass="memberText"
    labelClass="memberText"
    label="FCR"
    question="Verify members concern has been addressed and if member understood the information provided"
  />
  
  <ConfirmedText 
  v-if="greetedAgent == true && (obtainedMemberIDFromAgent == true || accountPopulated == 0) && confirmMemberName == true && 
      hippaIdentifiersObtained == true && offeredAssistanceToAgent == true && willingnessAgent == true && probedAgent == true
      && firstTimeCalling == true && checkNotes == true && offerInteractionID == true && offeredAgentAdditionAssistance == true &&
      callSupportType != EscalationType.Support && greetedMember && probedMember && willingnessMember && shownEmpathyToMember &&
      builtRapportWithMember && confirmUnderstanding"
  v-model="offeredMemberAdditionalAssistance"
  styleClass="text"
  labelClass="memberText"
  label="Additional Assistance"
  question="Is there anything else I can assist you with today?"
/>

  <Dropdown
    label-style="memberText"
    :options="escalationOptions"
    label="Call Type:"
    @selectionChanged="onEscalateCall"
/>
</div>


<br/>

<div class="dropdown-row">


        <Dropdown
            label-style="memberText"
            :options="stateNames"
            label="State"
            @selectionChanged="handleStateChange"
        />


</div>
<p v-if="brandName != '' && brandName != undefined" class="text"><span class="memberText">State Brand: </span>{{ brandName }}</p>
<p v-if="siteOne != undefined && siteOne != ''"><span class="memberText">State Site: </span>
<HyperLink
  :content="siteOne"
  :target="siteOne"
  :bullet="false" />
</p>

<p v-if="siteTwo != undefined && siteTwo != ''"><span class="memberText">State Site: </span>
<HyperLink
  v-if="siteTwo != undefined && siteTwo != ''"
  :content="siteTwo"
  :target="siteTwo"
  :bullet="false" />
</p>  

<TextAreaInput 
  v-model="callReason" label="Call Reason: " />

<TextAreaInput 
  v-model="callAction" label="Call Action: " />

<TextAreaInput 
  v-model="callResolution" label="Call Resolution: " />


<button @click="copyNotes">Copy Notes</button>

<div class="search-container">
    <input
      v-model="query"
      type="text"
      placeholder="Search..."
      class="search-input"
    />
    <button class="search-button" @click="searchCentralPoint">
      Search CentralPoint
    </button>
  </div>

</template>

<style scoped>
.lab {
  margin-left: 0px;
}
.dropdown-row {
  display: flex;

}
</style>

