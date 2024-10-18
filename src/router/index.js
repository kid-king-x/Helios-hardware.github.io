import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue'; // 引入主组件
import Page1 from '../views/Page1.vue'; // 导入目标页面组件
import Page2 from '../views/Page2.vue'; // 导入目标页面组件
import Page3 from '../views/Page3.vue'; // 导入目标页面组件
import Page4 from '../views/Page4.vue'; // 导入目标页面组件
import Page5 from '../views/Page5.vue'; // 导入目标页面组件
import Page6 from '../views/Page6.vue'; // 导入目标页面组件
import Page7 from '../views/Page7.vue'; // 导入目标页面组件
import Page8 from '../views/Page8.vue'; // 导入目标页面组件
import Page9 from '../views/Page9.vue'; // 导入目标页面组件
import Page10 from '../views/Page10.vue'; // 导入目标页面组件

const routes = [
  { path: '/page1', component: Page1 },
  { path: '/page2', component: Page2 },
  { path: '/page3', component: Page3 },
  { path: '/page4', component: Page4 },
  { path: '/page5', component: Page5 },
  { path: '/page6', component: Page6 },
  { path: '/page7', component: Page7 },
  { path: '/page8', component: Page8 },
  { path: '/page9', component: Page9 },
  { path: '/page10', component: Page10 }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }; // 返回到页面顶部
  }
});

export default router;
