// --- START OF FILE tangqian-timeline-exact.js ---

/**
 * 唐钱传入时间线分析模块 (原文呈现)
 * 将关于唐钱传入开封时间线的分析文本，按照标准UI模块格式进行展示。
 * 实现点击标题展开/收起详细内容的功能。
 */

// 导入通用图片模态框组件
import { setupImageGallery } from '../utils/image-modal.js';

// 创建唐钱时间线分析内容 (原文)
export function createTangqianTimelineExactContent() {
    // 创建主容器
    const container = document.createElement('div');
    container.className = 'bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8';

    // 创建标题（可点击）- 使用原文首行
    const title = document.createElement('h2');
    title.className = 'text-2xl font-bold text-gray-800 dark:text-white mb-4 cursor-pointer flex items-center';
    title.innerHTML = '唐钱传入时间铁证 <svg class="w-6 h-6 ml-2 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';

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

    // 填充内容 - 直接使用提供的文本原文
    content.innerHTML = `
      <div class="bg-blue-50 dark:bg-blue-900 rounded-lg p-5 border-l-4 border-blue-500 dark:border-blue-400 mb-6">
        <h3 class="text-xl font-bold text-blue-700 dark:text-blue-300 mb-3">时间点与证据来源</h3>
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
          <p class="text-gray-700 dark:text-gray-300">唐钱传入时间铁证：建隆二年，李煜即位以后，公元961年。</p>
        </div>
      </div>
      <div class="bg-green-50 dark:bg-green-900 rounded-lg p-5 border-l-4 border-green-500 dark:border-green-400 mb-6">
        <h3 class="text-xl font-bold text-green-700 dark:text-green-300 mb-3">第一次唐钱入京分析</h3>
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
           <p class="text-gray-700 dark:text-gray-300">1、第一次唐钱入京前因后果、时间线、涉及人物。</p>
           <p class="text-gray-700 dark:text-gray-300">我把饭喂嘴里，来源标明，欢迎所有人随时上游戏查证。有些人连百度都不会用游戏都没有下，居然还能写小作文造谣纸片人，真是滑天下之大稽，奇也怪哉。</p>
           <p class="text-gray-700 dark:text-gray-300">李煜登基时间（来源百度百科）</p>
           <p class="text-gray-700 dark:text-gray-300">唐钱传入开封游戏文案铁证：（来源游戏-武林录-明暗故事-暗涌-庙堂-唐钱进京）</p>
           <p class="text-gray-700 dark:text-gray-300">没有解锁本条暗涌的，可以去市卖司与NPC吴价对话，获得此条暗涌。</p>
           <p class="text-gray-700 dark:text-gray-300">此条暗涌已经详细交代①旧唐钱进京的时间：即李煜即位时（开封主线的两年前），并用了“开始”这个词作为证明——是两年前的李煜即位以后，唐钱才开始进入开封。</p>
           <p class="text-gray-700 dark:text-gray-300">②详细交代了此次唐钱进京对开封的影响，且用“导致”一词为此事定性（这是一个标志性的因果关系词汇）——是此次的唐钱入京，使得开封物价不稳，通货膨胀。</p>
           <p class="text-gray-700 dark:text-gray-300">正是因为此次的唐钱入京，使得赵宋开始收缴唐钱，以图稳定物价。</p>
           <p class="text-gray-700 dark:text-gray-300">唐钱收缴对错不是我本条帖子讨论的重点，我只分析一下李煜在唐钱案中做过的事。</p>
           <p class="text-gray-700 dark:text-gray-300">①大肆锻造唐钱，使唐钱大量入京。</p>
           <p class="text-gray-700 dark:text-gray-300">②与绣金楼合作，使史鸩暴力收缴唐钱，引发官民矛盾，使赵宋内乱。</p>
           <p class="text-gray-700 dark:text-gray-300">（这里有可能有李祚插手，但现在文案线索有限，后续有新的线索我会补充）</p>
           <p class="text-gray-700 dark:text-gray-300">此事赵大哥人物志也可以侧面佐证，现在的唐钱收缴局面，史鸩“功不可没”。</p>
           <p class="text-gray-700 dark:text-gray-300">这里与无忧帮互通有无的多半是史鸩，因此主线里少东家偷了洪肆手卷以后，前来捉拿的都是官府的人。</p>
           <p class="text-gray-700 dark:text-gray-300">③写乞怜歌，创造舆论，迫使赵宋开国库安民。</p>
        </div>
      </div>

      <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-5 border-l-4 border-gray-500 dark:border-gray-400 mb-6">
        <h3 class="text-xl font-bold text-gray-700 dark:text-gray-200 mb-3">结论：时间线总结</h3>
        <div class="bg-white dark:bg-gray-600 p-4 rounded-lg shadow-sm space-y-2">
          <p class="text-gray-700 dark:text-gray-300">结论：两年前李煜即位→使唐钱入京→与绣金楼合作安插史鸩→让史鸩暴力收缴唐钱引发矛盾→民不聊生。</p>
        </div>
      </div>

       <div class="bg-indigo-50 dark:bg-indigo-900 rounded-lg p-5 border-l-4 border-indigo-500 dark:border-indigo-400">
         <h3 class="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-3">术语说明：新旧唐钱</h3>
         <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
           <p class="text-gray-700 dark:text-gray-300">后续文档中，将沿用游戏已有的“新旧概念”作为区分。将李煜引入的唐钱称为旧唐钱，道主温无缺等人接济百姓用的唐钱称为新唐钱。</p>
         </div>
       </div>

        <!-- Placeholder for Image Gallery -->
       <div id="tangqian-timeline-gallery-placeholder" class="mt-8 pt-6 border-t border-gray-300 dark:border-gray-600">
            <p class="text-center text-gray-500 dark:text-gray-400">（相关证据截图，如游戏内文案、人物志等，可在此处展示）</p>
            <!-- Image elements would be added here dynamically if available -->
       </div>
    `;

    // 添加图片库逻辑
    const imageGalleryContainer = content.querySelector('#tangqian-timeline-gallery-placeholder');
    const imageDir = 'assets/images/debunk/Evidence of the first introduction/'; // 图片目录
    const imageFiles = [ // 图片文件名列表
        "图片1.png", "图片2.png", "图片3.png", "图片4.png", 
        "图片5.png", "图片6.png", "图片7.png", "图片8.png"
    ];

    if (imageGalleryContainer && imageFiles.length > 0) {
        imageGalleryContainer.innerHTML = ''; // 清空占位符
        imageGalleryContainer.className = 'mt-8 pt-6 border-t border-gray-300 dark:border-gray-600 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'; // 应用网格布局

        imageFiles.forEach(file => {
            const imgContainer = document.createElement('div');
            imgContainer.className = 'aspect-w-1 aspect-h-1'; // 保持宽高比

            const img = document.createElement('img');
            img.src = imageDir + file;
            img.alt = '唐钱传入时间证据 ' + file.replace('.png', '');
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
        // 如果没有图片，可以保留或修改占位符文本
        imageGalleryContainer.innerHTML = '<p class="text-center text-gray-500 dark:text-gray-400">相关证据截图暂缺</p>';
    }

    // 组装组件
    container.appendChild(title);
    container.appendChild(content);

    return container;
}

// 初始化函数
export function initTangqianTimelineExact(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.appendChild(createTangqianTimelineExactContent());
    } else {
        console.error(`Container with id "${containerId}" not found for Tangqian timeline exact analysis.`);
    }
}

// --- END OF FILE tangqian-timeline-exact.js ---