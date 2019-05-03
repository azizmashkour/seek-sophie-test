<template>
  <main>
    <Slider/>
    <Offer/>
    <DaylyProgram/>
    <Faqs/>
    <Map/>
    <Magazines/>
  </main>
</template>

<script>
import { Faqs, Magazines, Map, Slider, Offer, DaylyProgram } from "./";
export default {
  components: {
    DaylyProgram,
    Faqs,
    Magazines,
    Map,
    Offer,
    Slider
  }
};
</script>
