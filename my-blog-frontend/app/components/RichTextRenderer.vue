<!-- Author: Matshidiso Dlamini - 25227506 -->
<template>
  <div class="post-content">
    <template v-for="(block, i) in content" :key="i">
      <p v-if="block.type === 'paragraph'">
        <template v-for="(child, j) in block.children" :key="j">
          <strong v-if="child.bold">{{ child.text }}</strong>
          <em v-else-if="child.italic">{{ child.text }}</em>
          <code v-else-if="child.code">{{ child.text }}</code>
          <span v-else>{{ child.text }}</span>
        </template>
      </p>
      <h2 v-else-if="block.type === 'heading' && block.level === 2">
        <span v-for="(child, j) in block.children" :key="j">{{ child.text }}</span>
      </h2>
      <h3 v-else-if="block.type === 'heading' && block.level === 3">
        <span v-for="(child, j) in block.children" :key="j">{{ child.text }}</span>
      </h3>
      <ul v-else-if="block.type === 'list' && block.format === 'unordered'">
        <li v-for="(item, j) in block.children" :key="j">
          <span v-for="(child, k) in item.children" :key="k">{{ child.text }}</span>
        </li>
      </ul>
      <ol v-else-if="block.type === 'list' && block.format === 'ordered'">
        <li v-for="(item, j) in block.children" :key="j">
          <span v-for="(child, k) in item.children" :key="k">{{ child.text }}</span>
        </li>
      </ol>
      <blockquote v-else-if="block.type === 'quote'">
        <span v-for="(child, j) in block.children" :key="j">{{ child.text }}</span>
      </blockquote>
    </template>
  </div>
</template>

<script setup>
// Author: Matshidiso Dlamini - 25227506
defineProps({ content: { type: Array, default: () => [] } })
</script>