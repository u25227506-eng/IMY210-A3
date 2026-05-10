<!-- Matshidiso Dibakoane u25227506 -->
<template>
  <div>
    <nav class="navbar">
      <NuxtLink to="/" class="navbar-logo">the<span>.</span>blog</NuxtLink>
      <div class="navbar-links">
        <NuxtLink to="/" active-class="active">Home</NuxtLink>
        <NuxtLink to="/search" active-class="active">Search</NuxtLink>
      </div>
    </nav>
    <slot />
    <footer class="footer">
      <p>© 2026 Matshidiso Dibakoane · u25227506 · IMY210 </p>
    </footer>
  </div>
</template>