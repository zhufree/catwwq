/**
 * 天上来与朱鱼相关时间线梳理模块
 * 实现点击标题展开/收起详细内容的功能，并以适当的UI展示内容
 * 包含时间线图片展示功能
 */

// 导入通用图片模态框组件
 import { setupImageGallery } from '../utils/image-modal.js';

// 创建天上来与朱鱼相关时间线内容
export function createZhuYuTimelineContent() {
    // 创建主容器
    const container = document.createElement('div');
    container.className = 'bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8';

    // 创建标题（可点击）
    const title = document.createElement('h2');
    title.className = 'text-2xl font-bold text-gray-800 dark:text-white mb-4 cursor-pointer flex items-center';
    title.innerHTML = '天上来与朱鱼相关时间线梳理 <svg class="w-6 h-6 ml-2 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';

    // 创建内容区域（默认隐藏）
    const content = document.createElement('div');
    content.className = 'mb-6 hidden';

    // 填充内容 - 根据 1_Timeline of ferry.txt 改写
    // 使用 div 和箭头来模拟时间线流程
    content.innerHTML = `
      <div class="space-y-4">
        <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm">
          <p class="text-gray-700 dark:text-gray-300"><strong class="text-blue-600 dark:text-blue-400">十五年前：</strong> 契丹入侵。朱鱼与前前任河伯张彦霖 <span class="text-sm text-gray-500 dark:text-gray-400">【张错之父】</span>、现任河伯冯夷 <span class="text-sm text-gray-500 dark:text-gray-400">【冯如之之父】</span>结识。</p>
        </div>

        <div class="flex justify-center">
          <svg class="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>

        <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm">
          <p class="text-gray-700 dark:text-gray-300">张彦霖不愿承担河伯责任，被朱鱼劝说后改变主意，假意投诚契丹，最终水淹天上来渡。</p>
        </div>

        <div class="flex justify-center">
          <svg class="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>

        <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm">
          <p class="text-gray-700 dark:text-gray-300">朱鱼知晓龙王真相，接替张彦霖成为新一任河伯。</p>
        </div>

         <div class="flex justify-center">
          <svg class="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>

        <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm">
          <p class="text-gray-700 dark:text-gray-300">朱鱼利用河伯之力大破契丹数万大军。</p>
        </div>

         <div class="flex justify-center">
          <svg class="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>

        <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm">
          <p class="text-gray-700 dark:text-gray-300">契丹仍攻入开封，屠戮张家。张错独自逃生，被朱鱼收养。</p>
        </div>

        <div class="flex justify-center">
          <svg class="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>

        <div class="p-4 bg-yellow-50 dark:bg-yellow-900 rounded-lg shadow-sm border-l-4 border-yellow-400">
          <p class="text-gray-700 dark:text-gray-300"><strong class="text-yellow-700 dark:text-yellow-300">公元960年：</strong> 黄河决堤，同时赵匡胤黄袍加身，建立赵宋。</p>
        </div>

         <div class="flex justify-center">
          <svg class="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>

        <div class="p-4 bg-orange-50 dark:bg-orange-900 rounded-lg shadow-sm border-l-4 border-orange-400">
          <p class="text-gray-700 dark:text-gray-300">望汛人石守信因故未能前往救援黄河水灾 <span class="text-sm text-gray-500 dark:text-gray-400">【暗示水灾亦有人祸因素，石守信或有自身谋划】</span>。</p>
        </div>

         <div class="flex justify-center">
          <svg class="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>

        <div class="p-4 bg-red-50 dark:bg-red-900 rounded-lg shadow-sm border-l-4 border-red-400">
          <p class="text-gray-700 dark:text-gray-300">雪昭天听，鼓破人不至。朱鱼动用“朝生暮落花”之力，燃尽生命拯救水灾，最终牺牲。</p>
        </div>
      </div>
    `;

    // 创建图片展示区域
    const imageGallery = document.createElement('div');
    imageGallery.className = 'mt-6 hidden';
    imageGallery.innerHTML = `
      <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">时间线相关图片资料</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="relative group">
          <img src="/assets/images/debunk/ZhuyuTimeline/图片1.png" alt="朱鱼时间线图片1" class="w-full h-auto rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity">
          <!-- 隐藏查看大图按钮 -->
        </div>
        <div class="relative group">
          <img src="/assets/images/debunk/ZhuyuTimeline/图片2.png" alt="朱鱼时间线图片2" class="w-full h-auto rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity">
          <!-- 隐藏查看大图按钮 -->
        </div>
        <div class="relative group">
          <img src="/assets/images/debunk/ZhuyuTimeline/图片3.png" alt="朱鱼时间线图片3" class="w-full h-auto rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity">
          <!-- 隐藏查看大图按钮 -->
        </div>
        <div class="relative group">
          <img src="/assets/images/debunk/ZhuyuTimeline/图片4.png" alt="朱鱼时间线图片4" class="w-full h-auto rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity">
          <!-- 隐藏查看大图按钮 -->
        </div>
        <div class="relative group">
          <img src="/assets/images/debunk/ZhuyuTimeline/图片5.png" alt="朱鱼时间线图片5" class="w-full h-auto rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity">
          <!-- 隐藏查看大图按钮 -->
        </div>
        <div class="relative group">
          <img src="/assets/images/debunk/ZhuyuTimeline/图片6.png" alt="朱鱼时间线图片6" class="w-full h-auto rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity">
          <!-- 隐藏查看大图按钮 -->
        </div>
        <div class="relative group">
          <img src="/assets/images/debunk/ZhuyuTimeline/图片7.png" alt="朱鱼时间线图片7" class="w-full h-auto rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity">
          <!-- 隐藏查看大图按钮 -->
        </div>
        <div class="relative group">
          <img src="/assets/images/debunk/ZhuyuTimeline/图片8.png" alt="朱鱼时间线图片8" class="w-full h-auto rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity">
          <!-- 隐藏查看大图按钮 -->
        </div>
        <div class="relative group">
          <img src="/assets/images/debunk/ZhuyuTimeline/图片9.png" alt="朱鱼时间线图片9" class="w-full h-auto rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity">
          <!-- 隐藏查看大图按钮 -->
        </div>
        <div class="relative group">
          <img src="/assets/images/debunk/ZhuyuTimeline/图片10.png" alt="朱鱼时间线图片10" class="w-full h-auto rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity">
          <!-- 隐藏查看大图按钮 -->
        </div>
      </div>
      <!-- 使用通用模态框组件，不需要在这里创建模态框 -->
    `;

    // 添加点击事件，同时展开/收起图片区域
    title.addEventListener('click', () => {
      content.classList.toggle('hidden');
      imageGallery.classList.toggle('hidden');
      // 旋转箭头
      const arrow = title.querySelector('svg');
      arrow.classList.toggle('rotate-180');
    });

    // 组装组件
    container.appendChild(title);
    container.appendChild(content);
    container.appendChild(imageGallery);

    // 使用通用图片模态框组件设置图片点击事件
    setTimeout(() => {
      // 为图片库中的所有图片添加点击事件
      setupImageGallery(imageGallery);
    }, 100);

    return container;
}

// 初始化函数
export function initZhuYuTimeline(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.appendChild(createZhuYuTimelineContent());
    }
}