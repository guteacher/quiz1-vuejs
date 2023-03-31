<template>
  <main>

    <section id="hero-header" role="banner">

      <HelloWorld msg="Welcome to the Coffee Shop website" />
      <HelloWorld msg="Add your hero header content here" />

    </section>

    <section id="card-list" role="list">

      <HelloWorld msg="Add your cads here" />
      
    </section>

  </main>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  data() {
    return {
      coffeeMenu: [],
    };
  },
  components: {
    HelloWorld,
  },
};
</script>
