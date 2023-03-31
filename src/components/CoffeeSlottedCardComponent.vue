<template>
    <div class="card">
        Create your slotted card here
    </div>
</template>

<script>
export default {
  name: "CoffeeSlottedCardComponent",
  props: {
    addYourPropHere: String
  }
};
</script>

<style scoped>
    div.card {
        padding: 5px;
        border: 1px solid black
    }
</style>