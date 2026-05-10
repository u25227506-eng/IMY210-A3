<!-- Author: Matshidiso Dlamini - 25227506 -->
<template>
  <div>
    <div class="container">
      <div class="page-header">
        <h1>Search <span>Posts</span></h1>
        <p>Search by post title or author name.</p>
      </div>
      <div v-if="error" class="error-msg">Failed to load posts. Make sure Strapi is running.</div>
      <input v-model="query" type="text" class="search-input" placeholder="Search by title or author..." />
      <div v-if="pending" class="loading"><div class="spinner"></div><span>Loading...</span></div>
      <div v-else>
        <p v-if="query" class="search-results-label">
          <span>{{ filteredPosts.length }}</span> result{{ filteredPosts.length !== 1 ? 's' : '' }} for "{{ query }}"
        </p>
        <div class="posts-grid">
          <PostCard v-for="post in filteredPosts" :key="post.id" :post="post" />
        </div>
        <div v-if="query && filteredPosts.length === 0" class="no-results">
          <h3>No results found</h3><p>Try a different search term.</p>
        </div>
        <div v-if="!query" class="no-results">
          <h3>Start typing to search</h3><p>Enter a post title or author name above.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Author: Matshidiso Dlamini - 25227506
const config = useRuntimeConfig()
const query = ref('')
const { data, pending, error } = await useFetch(`${config.public.strapiUrl}/api/posts?populate=*`)
const posts = computed(() => data.value?.data || [])
const filteredPosts = computed(() => {
  if (!query.value.trim()) return []
  const q = query.value.toLowerCase()
  return posts.value.filter(p =>
    p.title?.toLowerCase().includes(q) || p.author?.toLowerCase().includes(q)
  )
})
</script>