<template>
  <div class="about">
    <nav>
      <NuxtLink to="/router/guide">Guide</NuxtLink>
      <NuxtLink to="/router/reference">API Reference</NuxtLink>
      <NuxtLink to="/router/changelog">Changelog </NuxtLink>
      <NuxtLink to="/router/gitHub">GitHub</NuxtLink>
    </nav>
    <main>
      <NuxtChild />
    </main>
  </div>
</template>
<style lang="scss" scoped>
.about {
  > nav {
    > a {
      margin: 0 10px;
      color: #2c3e50;
      font-weight: bold;
      padding: 10px;
      display: inline-block;
      &.router-link-exact-active {
        color: rebeccapurple;
      }
    }
  }
}
</style>
