<!-- Matshidiso Dibakoane u25227506 -->
 <template>
  <NuxtLink :to="`/post/${post.documentId}`" class="post-card">
    <span class="post-card-category">{{ post.category }}</span>
    <h2 class="post-card-title">{{ post.title }}</h2>
    <p class="post-card-snippet">{{ post.snippet }}</p>
    <div class="post-card-meta">{{ post.author }}</div>
  </NuxtLink>
</template>

<script setup>
// Author: Matshidiso Dlamini - 25227506
defineProps({ post: { type: Object, required: true } })
</script>