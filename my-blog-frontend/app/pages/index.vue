<!-- Matshidiso Dibakoane u25227506 -->
 <template>
  <div>
    <div class="container">
      <div class="page-header">
        <h1>All <span>Posts</span></h1>
        <p>A personal blog on tech, travel and lifestyle</p>
      </div>
      <div v-if="error" class="error-msg">Failed to load posts. Make sure Strapi is running.</div>
      <div v-if="pending" class="loading"><div class="spinner"></div><span>Loading posts...</span></div>
      <div v-else>
        <div class="filter-bar">
          <label for="cat">Filter by:</label>
          <select id="cat" class="filter-select" v-model="selectedCategory">
            <option value="">All Categories</option>
            <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
          </select>
        </div>
        <div class="posts-grid">
          <PostCard v-for="post in filteredPosts" :key="post.id" :post="post" />
        </div>
        <div v-if="filteredPosts.length === 0" class="no-results">
          <h3>No posts found</h3><p>Try a different category.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Author: Matshidiso Dibakoane - 25227506
const config = useRuntimeConfig()
const selectedCategory = ref('')
const { data, pending, error } = await useFetch(`${config.public.strapiUrl}/api/posts?populate=*`)
const posts = computed(() => data.value?.data || [])
const categories = computed(() => [...new Set(posts.value.map(p => p.category).filter(Boolean))])
const filteredPosts = computed(() => {
  if (!selectedCategory.value) return posts.value
  return posts.value.filter(p => p.category === selectedCategory.value)
})
</script>