<!-- Matshidiso Dibakoane u25227506 -->
<template>
  <div class="post-page">
    <NuxtLink to="/" class="post-back">← Back to all posts</NuxtLink>
    <div v-if="pending" class="loading"><div class="spinner"></div><span>Loading post...</span></div>
    <div v-else-if="error" class="error-msg">Post not found or Strapi is not running.</div>
    <div v-else-if="post">
      <div class="post-header-category">{{ post.category }}</div>
      <h1 class="post-title">{{ post.title }}</h1>
      <div class="post-meta"><span>{{ post.author }}</span></div>
      <RichTextRenderer :content="post.content" />
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const config = useRuntimeConfig()
const { data, pending, error } = await useFetch(
  `${config.public.strapiUrl}/api/posts/${route.params.id}?populate=*`
)
const post = computed(() => data.value?.data || null)
</script>