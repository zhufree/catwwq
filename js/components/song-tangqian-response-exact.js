/**
 * 赵宋对旧唐钱举措及后果分析模块 (原文呈现)
 * 将关于赵宋应对旧唐钱及唐钱策后果的分析文本，按照标准UI模块格式进行展示。
 * 实现点击标题展开/收起详细内容的功能。
 */

// 导入通用图片模态框组件
import { setupImageGallery } from '../utils/image-modal.js';

// 创建赵宋应对唐钱策略分析内容 (原文)
export function createSongTangqianResponseExactContent() {
    // 创建主容器
    const container = document.createElement('div');
    container.className = 'bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8';

    // 创建标题（可点击）
    const title = document.createElement('h2');
    title.className = 'text-2xl font-bold text-gray-800 dark:text-white mb-4 cursor-pointer flex items-center';
    title.innerHTML = '赵宋的应对策略与结果 <svg class="w-6 h-6 ml-2 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';

    // 创建内容区域（默认隐藏）
    const content = document.createElement('div');
    content.className = 'mb-6 hidden';

    // 添加点击事件
    title.addEventListener('click', () => {
      content.classList.toggle('hidden');
      // 旋转箭头
      const arrow = title.querySelector('svg');
      arrow.classList.toggle('rotate-180');
    });

    // 填充内容 - 占位符文本 (后续需要替换为实际分析内容)
    content.innerHTML = `
      <div class="bg-blue-50 dark:bg-blue-900 rounded-lg p-5 border-l-4 border-blue-500 dark:border-blue-400 mb-6">
        <h3 class="text-xl font-bold text-blue-700 dark:text-blue-300 mb-3">1. 赵宋的策略</h3>
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
          <p class="text-gray-700 dark:text-gray-300">游戏文案铁证：（来源游戏-武林录-暗涌-庙堂-以铁制钱）</p>
          <p class="text-gray-700 dark:text-gray-300">游戏文案铁证：（来源游戏-博物志-拾遗-杂物-铁钱）</p>
          <p class="text-gray-700 dark:text-gray-300">赵匡胤为何要推广铁钱：（来源百度百科-四川铁钱）</p>
        </div>
      </div>

      <div class="mb-6 bg-green-50 dark:bg-green-900 rounded-lg p-5 border-l-4 border-green-500 dark:border-green-400">
        <h3 class="text-xl font-bold text-green-700 dark:text-green-300 mb-3">2. 策略实施的结果</h3>
         <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
           <p class="text-gray-700 dark:text-gray-300">游戏文案铁证：（来源游戏-武林录-暗涌-庙堂-以铁制钱）（内容同上）</p>
           <p class="text-gray-700 dark:text-gray-300">结果：货币贬值，经济环境恶化。</p>
           <p class="text-gray-700 dark:text-gray-300">游戏文案铁证：（来源游戏-传闻-汴京）</p>
           <p class="text-gray-700 dark:text-gray-300">游戏文案铁证：（来源游戏-武林录-暗涌-万象楼-铁钱之患）</p>
           <p class="text-gray-700 dark:text-gray-300">NPC证词：（来源游戏-地图虹桥-与NPC易知对话）</p>
         </div>
      </div>

       <!-- 图片库 -->
       <div id="song-response-gallery-placeholder" class="mt-8 pt-6 border-t border-gray-300 dark:border-gray-600"></div>
    `;

    // 添加图片库逻辑
    const imageGalleryContainer = content.querySelector('#song-response-gallery-placeholder');
    const imageDir = 'assets/images/debunk/Policy of government and result/';
    const imageFiles = [
        "图片1.png", "图片2.png", "图片3.png", "图片4.png", "图片5.png", "图片6.png",
        "图片7.png", "图片8.png", "图片9.png", "图片10.png", "图片11.png", "图片12.png"
    ];

    if (imageGalleryContainer && imageFiles.length > 0) {
        imageGalleryContainer.innerHTML = ''; // 清空占位符
        imageGalleryContainer.className = 'mt-8 pt-6 border-t border-gray-300 dark:border-gray-600 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'; // 应用网格布局

        imageFiles.forEach(file => {
            const imgContainer = document.createElement('div');
            imgContainer.className = 'aspect-w-1 aspect-h-1'; // 保持宽高比

            const img = document.createElement('img');
            img.src = imageDir + file;
            img.alt = '赵宋应对唐钱策略证据 ' + file.replace('.png', '');
            img.className = 'w-full h-full object-cover rounded-lg shadow-md cursor-pointer transition-transform duration-200 hover:scale-105';
            img.loading = 'lazy';
            img.onerror = () => { 
                img.alt = `无法加载图片: ${file}`; 
                img.src=''; 
                imgContainer.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-lg text-xs text-gray-500 dark:text-gray-400">无法加载 ${file}</div>`;
            }; 
            imgContainer.appendChild(img);
            imageGalleryContainer.appendChild(imgContainer);
        });

        // 图片加载后设置模态框
        setTimeout(() => {
            setupImageGallery(imageGalleryContainer);
        }, 100);
    } else if (imageGalleryContainer) {
        imageGalleryContainer.innerHTML = '<p class="text-center text-gray-500 dark:text-gray-400">相关证据截图暂缺</p>';
    }

    // 组装组件
    container.appendChild(title);
    container.appendChild(content);

    return container;
}

// 初始化函数
export function initSongTangqianResponseExact(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.appendChild(createSongTangqianResponseExactContent());
    } else {
        console.error(`Container with id "${containerId}" not found for Song Tangqian response exact analysis.`);
    }
}