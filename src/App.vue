<template>
  <div class="shell" :style="{ backgroundImage: 'url(' + activeItemImage + ')' }">

    <nav class="navbar" :class="{ 'scrolled': isScrolled }">
      <div class="nav-links">
        <router-link to="/" class="nav-link">
          <img src="/favicon.jpg" alt="Logo" class="logo" />
          <span>kid-king-x</span>
        </router-link>
        <router-link to="/page1" class="nav-link">
          <img src="/t1.jpg" alt="Logo" class="logo" />
          <span>1.安全</span>
        </router-link>
        <router-link to="/page2" class="nav-link">
          <img src="/t2.jpg" alt="Logo" class="logo" />
          <span>2.PCB</span>
        </router-link>
        <router-link to="/page3" class="nav-link">
          <img src="/t3.jpg" alt="Logo" class="logo" />
          <span>3.焊接</span>
        </router-link>
        <router-link to="/page4" class="nav-link">
          <img src="/t4.jpg" alt="Logo" class="logo" />
          <span>4.焊接漫画</span>
        </router-link>
      </div>
    </nav>


    <div class="header">
      <h2 class="title">Helios-Hardware</h2>
      <h3 class="subtitle">西南交通大学Helios战队硬件组</h3>
    </div>
    <router-view />
    <div class="timeline">
      <div
          class="item"
          v-for="(item, index) in timelineItems"
          :key="index"
          :class="{ 'item--active': activeIndex === index }"
          :data-text="item.dataText"
          ref="timelineItemsRefs"
      >
        <div class="content">
          <img
              :src="item.image"
              alt=""
              class="img"
              @click="navigate(item.link)"
          />
          <h2 class="content-title">{{ item.year }}</h2>
          <p class="content-desc">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';  // 导入 useRouter

export default {
  setup() {
    const activeIndex = ref(0);
    const activeItemImage = ref('');
    const timelineItemsRefs = ref([]);
    const isScrolled = ref(false);
    const router = useRouter();


    const timelineItems = [
      {year: '24.10.19', image: './1.jpg', description: '实验室安全问题是最重要的，为了个人也为了队友的生命财产安全，请仔细阅读文档', dataText: '实验室安全问题', link: '/page1'},

      {year: '24.10.19', image: './2.jpg', description: '简单介绍了元器件，以及元器件挑选所需要注意的事项。写了嘉立创eda的下单流程，后续会把pcb小周边的工程上传（暂时没有上传）\n' +
            '\n' +
            '部分资料来源于：\n' +
            '\n' +
            '* 6302 Triz 实验室', dataText: 'PCB入门', link: '/page2'},

      {year: '24.10.19', image: './3.jpg', description: '注意安全使用工具，以防伤到自己或他人\n' +
            '\n' +
            '部分资料来源于：\n' +
            '\n' +
            '* 6302 Triz 实验室\n' +
            '\n' +
            '* 19级学长 冯元', dataText: '焊接工具、焊接技巧', link: '/page3'},

      {year: '24.10.19', image: './4.jpg', description: '注意安全使用工具，以防伤到自己或他人\n' +
            '\n' +
            '部分资料来源于：\n' +
            '\n' +
            '* 6302 Triz 实验室\n' +
            '\n' +
            '* 19级学长 冯元', dataText: '焊接漫画', link: '/page4'},

      {year: '2_training', image: './5.jpg', description: '初心高于胜负，成长大于输赢', dataText: '还未更新', link: '/page5'},

      {year: '3_training', image: './6.jpg', description: '初心高于胜负，成长大于输赢', dataText: '还未更新', link: '/page6'},

      {year: '4_training', image: './7.jpg', description: '初心高于胜负，成长大于输赢', dataText: '还未更新', link: '/page7'},

      {year: '5_training', image: './8.jpg', description: '初心高于胜负，成长大于输赢', dataText: '还未更新', link: '/page8'},

      {year: '6_training', image: './9.jpg', description: '初心高于胜负，成长大于输赢', dataText: '还未更新', link: '/page9'},

      {year: '1_training', image: './10.jpg', description: '初心高于胜负，成长大于输赢', dataText: '还未更新', link: '/page10'},

    ];

    const navigate = (link) => {
      router.push(link);  // 跳转到指定链接
    };

    const handleScroll = () => {

      const pos = window.scrollY;
      isScrolled.value = window.scrollY > 0; // 根据滚动位置设置变量

      const windowHeight = window.innerHeight;
      const threshold = windowHeight / 4; // 设定中间范围的阈值
      timelineItemsRefs.value.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top <= (windowHeight / 2 - threshold) && rect.bottom >= (windowHeight / 2 - threshold)) {
          activeIndex.value = index;
          activeItemImage.value = item.querySelector('.img').src;
        }
      });
    };

    onMounted(() => {
      activeItemImage.value = timelineItems[0].image; // 初始背景图
      window.addEventListener('scroll', handleScroll);
      const parentElement = document.querySelector('.shell').parentElement; // 获取父元素
      console.log(parentElement); // 这里可以操作父元素
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      activeIndex,
      activeItemImage,
      timelineItems,
      timelineItemsRefs,
      isScrolled,
      navigate // 添加此行
    };
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

.shell {
  margin: 0; /* 添加这一行 */
  width: 100%;
  position: relative;
  padding: 80px 0;
  transition: 0.3s ease 0s;
  background-attachment: fixed;
  background-size: cover; /* 使用cover填充背景 */
}

.shell:before {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(99, 99, 99, 0.8);
  content: "";
  z-index: 0; /* 确保在最底层 */
}

.header {
  width: 100%;
  text-align: center;
  margin-bottom: 80px;
  position: relative;
}

.title {
  color: #fff;
  font-size: 46px;
  font-weight: normal;

}

.timeline {
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 800px;
  position: relative;
}

.content-title {
  font-weight: normal;
  font-size: 46px;
  margin: -10px 0 0 0;
  transition: 0.4s;
  padding: 0 10px;
  box-sizing: border-box;
  color: #fff;
}

.content-desc {
  margin: 0;
  font-size: 15px;
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.7);
  line-height: 25px;
}

.timeline:before {
  position: absolute;
  left: 50%;
  width: 15px;
  height: 100%;
  margin-left: -1px;
  content: "";
  background: rgba(255, 255, 255, 0.07);
}

.item {
  padding: 40px 0;
  opacity: 0.3;
  filter: blur(2px);
  transition: 0.5s;
  box-sizing: border-box;
  width: calc(50% - 40px);
  display: flex;
  position: relative;
  transform: translateY(-80px);
}

.item:before {
  content: attr(data-text);
  letter-spacing: 3px;
  width: 100%;
  position: absolute;
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
  border-left: 2px solid rgba(255, 255, 255, 0.5);
  top: 70%;
  margin-top: -5px;
  padding-left: 15px;
  opacity: 0;
  right: calc(-100% - 56px);
  font: 900 20px '';
  letter-spacing: 5px;
}

.item:nth-child(even) {
  align-self: flex-end;
}

.item:nth-child(even):before {
  right: auto;
  text-align: right;
  left: calc(-100% - 56px);
  padding-left: 0;
  border-left: none;
  border-right: 2px solid rgba(255, 255, 255, 0.5);
  padding-right: 15px;
}

.item--active {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0px);
}

.item--active:before {
  top: 50%;
  transition: 0.3s all 0.2s;
  opacity: 1;
}

.item--active .content-title {
  margin: -50px 0 20px 0;
}

.img {
  max-width: 100%;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s; /* 添加平滑过渡 */
}

.img:hover {
  transform: scale(1.05); /* 鼠标悬停时缩放到 1.05 倍 */
}

.subtitle {
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  letter-spacing: 5px;
  margin: 10px 0 0 0;
  font-weight: normal;
}

.footer {
  padding: 95px 0;
  text-align: center;
}

.footer a {
  color: #999;
  display: inline-block;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: transparent; /* 默认透明 */
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between; /* 使用 space-between */
  transition: background-color 0.3s; /* 添加平滑过渡 */
  z-index: 1000; /* 确保导航栏在其他内容上方 */
}


.navbar.scrolled {
  background-color: rgba(255, 255, 255, 0.5); /* 滚动后背景颜色 */
}

.nav-link {
  flex: 1; /* 让每个链接占据相同的空间 */
  display: flex; /* 使用 flexbox 布局 */
  align-items: center; /* 垂直居中对齐 */
  color: white; /* 默认文字颜色 */
  text-decoration: none;
  justify-content: center; /* 水平居中对齐内容 */
  padding: 10px; /* 添加内边距 */
  transition: background-color 0.3s, color 0.3s; /* 添加平滑过渡 */
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.2); /* 鼠标悬停时的背景颜色 */
  color: #000; /* 鼠标悬停时的文字颜色 */
}


.nav-links {
  display: flex; /* 使用 flexbox 布局 */
  justify-content: space-between; /* 均匀分布 */
  width: 100%; /* 让它占满整个导航栏 */
}


.logo {
  height: 40px; /* 根据需要调整高度 */
  margin-right: 10px; /* 添加间距 */
  align-items: flex-start;
}


/* 确保内容不被导航栏遮挡 */
router-view {
  padding-top: 60px; /* 根据导航栏高度调整 */
}

@media only screen and (max-width: 767px) {
  .item {
    align-self: baseline !important;
    width: 100%;
    padding: 0 30px 150px 80px;
  }

  .item:before {
    left: 10px !important;
    padding: 0 !important;
    top: 50px;
    text-align: center !important;
    width: 60px;
    border: none !important;
  }

  .item:last-child {
    padding-bottom: 40px;
  }
}

@media only screen and (max-width: 767px) {
  .timeline:before {
    left: 40px;
  }
}
</style>