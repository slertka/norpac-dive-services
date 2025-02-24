<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconBoat.vue'
import ToolingIcon from './icons/IconSalvage.vue'
import BuoyIcon from './icons/IconBuoy.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Vessel Maintenance & Inspections</template>
    Hull cleanings, race wipes, zinc installation, underwater video inspections, and propeller installations and approvals.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <BuoyIcon />
    </template>
    <template #heading>Buoy Installation or Inspection</template>
    Mooring buoy system installation, inspection, or repair.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Salvage</template>
    Retrieval of lost underwater items ranging from lost phone retrieval to full vessel salvage.
  </WelcomeItem>
</template>
