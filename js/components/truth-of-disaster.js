/**
 * 灾难真相总结模块：天灾背后的人祸与政治动机
 * 实现点击标题展开/收起详细内容的功能，并以适当的UI展示内容
 */

// 导入通用图片模态框组件
import { setupImageGallery } from '../utils/image-modal.js';

// 创建灾难真相总结内容
export function createDisasterTruthSummaryContent() {
    // 创建主容器
    const container = document.createElement('div');
    container.className = 'bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8';

    // 创建标题（可点击）
    const title = document.createElement('h2');
    title.className = 'text-2xl font-bold text-gray-800 dark:text-white mb-4 cursor-pointer flex items-center';
    title.innerHTML = '灾难真相总结：天灾背后的人祸与政治动机 <svg class="w-6 h-6 ml-2 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';

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

    // 填充内容 - 根据 3_The truth of disaster.txt 改写
    content.innerHTML = `
      <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-5 border-l-4 border-gray-500 dark:border-gray-400 mb-6">
        <h3 class="text-xl font-bold text-gray-700 dark:text-gray-300 mb-3">核心总结：朝廷的眼中钉</h3>
        <div class="bg-white dark:bg-gray-600 p-4 rounded-lg shadow-sm">
          <p class="text-gray-700 dark:text-gray-300 mb-2">朱鱼威望过高，天上来渡漕运地位稳固，且其立场亲近后周而非新立的赵宋。这些因素使其成为朝廷的眼中钉，必欲除之而后快。</p>
        </div>
      </div>

      <div class="bg-red-50 dark:bg-red-900 rounded-lg p-5 border-l-4 border-red-500 dark:border-red-400 mb-6">
        <h3 class="text-xl font-bold text-red-700 dark:text-red-300 mb-3">“天灾人祸”的真相</h3>
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
           <p class="text-gray-700 dark:text-gray-300 mb-2">因此，才策划了黄河决堤这场所谓的“天灾人祸”。石守信当日与朝堂达成某种交易，故意不前往救援、不预警水灾。</p>
           <p class="text-gray-700 dark:text-gray-300 font-semibold mb-2">那么，“人祸”究竟是什么？“天灾”又真的是天灾吗？</p>
           <p class="text-gray-700 dark:text-gray-300">观点认为：瓠子堤<span class="text-sm text-gray-500 dark:text-gray-400">(Huzi Dike)</span>决堤本身就是<strong>人祸</strong>。所谓的“天灾”，不过是人为引发的灾难。</p>
           <p class="text-gray-700 dark:text-gray-300 mt-2">为何偏偏在赵匡胤黄袍加身那日决堤？这被视为朝廷伪造“不在场证明”、掩盖人为破坏的手段。</p>
        </div>
      </div>

      <div class="bg-purple-50 dark:bg-purple-900 rounded-lg p-5 border-l-4 border-purple-500 dark:border-purple-400 mb-6">
        <h3 class="text-xl font-bold text-purple-700 dark:text-purple-300 mb-3">政治动机：“天谴”与权力稳固</h3>
         <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
           <p class="text-gray-700 dark:text-gray-300 mb-2">赵宋建国本身“得位不正”，因此，被视为亲近前朝（后周）的朱鱼与天上来渡，必须承受一场来自“天意”的惩罚——即所谓的<strong>“天谴”</strong>。</p>
            <p class="text-gray-700 dark:text-gray-300 font-semibold">结论：朱鱼必须死，河伯必须消失，以巩固新朝的统治。</p>
        </div>
      </div>

       <div class="bg-blue-50 dark:bg-blue-900 rounded-lg p-5 border-l-4 border-blue-500 dark:border-blue-400">
         <h3 class="text-xl font-bold text-blue-700 dark:text-blue-300 mb-3">朱鱼的觉悟与慷慨悲歌</h3>
         <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
           <p class="text-gray-700 dark:text-gray-300">正是在生命最后一刻想通了这层政治算计，明白了自己和天上来渡已成牺牲品，朱鱼才慨然大笑，高唱《慷慨歌》，选择了壮烈的牺牲。</p>
         </div>
      </div>

      <!-- 相关图片证据 -->
      <div class="mt-8" id="truth-of-disaster-image-gallery">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4 border-b pb-2">相关图片证据</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="assets/images/debunk/TheTruthOfDisaster/图片1.png" alt="灾难真相证据 1" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/TheTruthOfDisaster/图片2.png" alt="灾难真相证据 2" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
        </div>
      </div>
    `;

    // 组装组件
    container.appendChild(title);
    container.appendChild(content);

    // 使用通用图片模态框组件设置图片点击事件
    setTimeout(() => {
      const imageGallery = content.querySelector('#truth-of-disaster-image-gallery');
      if (imageGallery) {
        setupImageGallery(imageGallery);
      }
    }, 100);

    return container;
}

// 初始化函数
export function initDisasterTruthSummary(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.appendChild(createDisasterTruthSummaryContent());
    }
}