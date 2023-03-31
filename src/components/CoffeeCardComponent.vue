<template>
    <div class="card">
        Create your card here
    </div>
</template>

<script>
export default {
  name: "CoffeeCardComponent",
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