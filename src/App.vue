<template>
  <div>
    <div id="menu-wrapper">
      <img alt="Vue logo" src="@/assets/logo.png" />
      <nav id="menu" role="navigation">
        <router-link to="/">Home</router-link>
        <router-link to="/about">Our Product</router-link>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2F2105;
}

#menu-wrapper {
  display: flex;
  justify-content: start;
  align-items: center;

  img {
    width: auto;
    height: fit-content;
  }
  nav {
    padding: 30px;

    a {
      margin-right: 30px;
      font-weight: bold;
      color: #2F2105;

      &.router-link-exact-active {
        color: #FF902A;
      }
    }
  }
}
</style>
