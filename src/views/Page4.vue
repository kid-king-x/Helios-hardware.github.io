<template>
  <div class="card-container">
    <div class="large-card" v-for="article in articles" :key="article.id">
      <h2>{{ article.title }}</h2>
      <div v-html="getMarkdownContent(article.summary)"></div>
      <iframe
          v-if="article.pdf"
          :src="article.pdf"
          style="width: 100%; height: 800px; border: none;"
      ></iframe>
    </div>
  </div>
</template>

<script>
import { marked } from 'marked';

export default {
  data() {
    return {
      articles: [
        {
          id: 1,
          title: '',
          summary: '',
          pdf: './教你焊接的漫画.pdf', // PDF 文件路径
        },
      ],
    };
  },
  methods: {
    getMarkdownContent(markdown) {
      return marked(markdown);
    },
  },
};
</script>

<style scoped>
.card-container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.large-card {
  width: 60%;
  height: 90%;
  margin-left: 6% ;
  margin-top: -10%; /* 向上移动卡片 */
  background: #FFFFFF;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 32px; /* 增加内边距 */
  min-height: 600px; /* 设置最小高度 */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0);
  transition: transform 0.3s, box-shadow 0.3s;
  z-index: 10;
  position: relative;
}

.large-card img {
  max-width: 100%;
  height: auto;
}

.large-card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0);
}
</style>
