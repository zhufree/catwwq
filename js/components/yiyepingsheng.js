/**
 * 一叶平生故事辟谣模块
 * 实现点击标题展开/收起详细内容的功能
 */

// 导入通用图片模态框组件
import { setupImageGallery } from '../utils/image-modal.js';

// 创建一叶平生辟谣内容
export function createYiyepingshengContent() {
  // 创建主容器
  const container = document.createElement('div');
  container.className = 'bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8';
  
  // 创建标题（可点击）
  const title = document.createElement('h2');
  title.className = 'text-2xl font-bold text-gray-800 dark:text-white mb-4 cursor-pointer flex items-center';
  title.innerHTML = '一叶平生故事中百姓之苦的根本原因 <svg class="w-6 h-6 ml-2 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';
  
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
  
  // 填充内容
  content.innerHTML = `
    <!-- 谣言辟谣卡片 -->
    <div class="mb-6 bg-red-50 dark:bg-red-900 rounded-lg p-5 border-l-4 border-red-500 dark:border-red-400 shadow-md">
        <div class="flex items-start">
            <div class="flex-shrink-0 bg-red-100 dark:bg-red-800 rounded-full p-2 mr-3">
                <svg class="w-6 h-6 text-red-500 dark:text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            </div>
            <div>
                <p class="text-lg font-semibold text-red-700 dark:text-red-300 mb-2">谣言：一叶平生支线，那些百姓的惨全是温无缺导致的。</p>
                <div class="mt-3 bg-white dark:bg-gray-700 rounded-lg p-4 shadow-inner">
                    <p class="text-gray-700 dark:text-gray-300 mb-2"><strong>辟谣：</strong>当然不是。</p>
                    <p class="text-gray-700 dark:text-gray-300 mb-2">一叶平生支线讲的是契丹屠城时期的故事（公元946年）。</p>
                    <p class="text-gray-700 dark:text-gray-300 mb-2">温无缺散发的屠城<span class="font-bold text-red-600 dark:text-red-400">传言</span>是在赵匡胤入主开封之前（公元960年），两者相隔十几年。</p>
                    <p class="text-gray-700 dark:text-gray-300 mb-2">契丹屠城是真实历史，一叶平生支线多次提及时间线。百姓的苦难大多源于此。</p>
                    <p class="text-gray-700 dark:text-gray-300 mb-2">将十几年前的锅甩给刚来开封两三年的温无缺，是混淆视听。</p>
                </div>
            </div>
        </div>
    </div>

    <!-- 时间线背景说明 -->
    <div class="mb-6 bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
      <p class="text-gray-800 dark:text-gray-200 font-semibold mb-2">游戏中的三个“屠城”时间点：</p>
      <!-- 时间线UI -->
      <div class="relative py-4">
          <!-- 时间线轴 -->
          <div class="absolute left-3 w-1 h-full bg-blue-500 dark:bg-blue-400 transform -translate-x-1/2"></div>
          
          <!-- 时间点1 -->
          <div class="relative pl-8 mb-6">
              <div class="absolute left-0 top-0 w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-400 flex items-center justify-center text-white font-bold z-10">1</div>
              <div class="ml-2 bg-blue-100 dark:bg-blue-900 p-3 rounded-lg shadow-sm">
                  <p class="text-sm text-gray-800 dark:text-gray-200"><strong class="text-blue-600 dark:text-blue-300">946年：</strong>契丹人屠城【事实】。一叶平生多数百姓苦难的开端，龟奶奶失去相公。</p>
              </div>
          </div>
          
          <!-- 时间点2 -->
          <div class="relative pl-8 mb-6">
              <div class="absolute left-0 top-0 w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-400 flex items-center justify-center text-white font-bold z-10">2</div>
              <div class="ml-2 bg-blue-100 dark:bg-blue-900 p-3 rounded-lg shadow-sm">
                  <p class="text-sm text-gray-800 dark:text-gray-200"><strong class="text-blue-600 dark:text-blue-300">951年：</strong>周太祖郭威屠城【事实】。灭汉立后周，真盈盈死于此时。</p>
              </div>
          </div>
          
          <!-- 时间点3 -->
          <div class="relative pl-8">
              <div class="absolute left-0 top-0 w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-400 flex items-center justify-center text-white font-bold z-10">3</div>
              <div class="ml-2 bg-blue-100 dark:bg-blue-900 p-3 rounded-lg shadow-sm">
                  <p class="text-sm text-gray-800 dark:text-gray-200"><strong class="text-blue-600 dark:text-blue-300">960年：</strong>赵匡胤入主开封，温无缺散发屠城【传闻】。</p>
              </div>
          </div>
      </div>
    </div>

    <!-- 温无缺角色分析 -->
    <div class="mb-6 bg-green-50 dark:bg-green-900 rounded-lg p-5 border-l-4 border-green-500 dark:border-green-400 shadow-md">
        <div class="flex items-start">
            <div class="flex-shrink-0 bg-green-100 dark:bg-green-800 rounded-full p-2 mr-3">
                <svg class="w-6 h-6 text-green-500 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </div>
            <div>
                <p class="text-lg font-semibold text-green-700 dark:text-green-300 mb-2">关于温无缺散布传闻时的状态：</p>
                <div class="mt-3 bg-white dark:bg-gray-700 rounded-lg p-4 shadow-inner">
                    <p class="text-gray-700 dark:text-gray-300 mb-2">请注意温无缺的<strong class="text-green-600 dark:text-green-400">成长曲线</strong>：未央城主东阙（冷血） → 盈盈（小货娘） → 温无缺完全版（为民发声）。</p>
                    <p class="text-gray-700 dark:text-gray-300 mb-2">散发传闻时（960年），她仍处于<strong class="text-green-600 dark:text-green-400">东阙阶段</strong>，虽被龟奶奶所救，但未完全醒悟，目标仍是回未央城。</p>
                    <p class="text-gray-700 dark:text-gray-300 mb-2">此时行为逻辑是“还小恩，舍大义”，未考虑传闻对其他人的影响。</p>
                    <p class="text-gray-700 dark:text-gray-300 mb-2">一叶平生中唯一与她<span class="font-bold">直接相关</span>的不平事即是此事。</p>
                    <p class="text-gray-700 dark:text-gray-300 mb-2">目睹难民后，她才开始<strong class="text-green-600 dark:text-green-400">醒悟</strong>，屠城传闻事件是她人生的<strong class="text-green-600 dark:text-green-400">分界线</strong>。</p>
                    <p class="text-gray-700 dark:text-gray-300 mb-2">此后，尤其在目睹财库真相、承认罪过后，她的“良心”复苏。</p>
                    <p class="text-gray-700 dark:text-gray-300">自960年后，温无缺再未做过与民众利益相左之事。</p>
                </div>
            </div>
        </div>
    </div>
    
    <!-- 一叶平生支线相关图片 -->
    <div class="mt-8" id="yiyepingsheng-image-gallery">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4 border-b pb-2">相关图片证据</h3>
        <div class="grid grid-cols-2 gap-4">
            <img src="assets/images/debunk/yiyepingsheng/1.png" alt="一叶平生截图1" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
            <img src="assets/images/debunk/yiyepingsheng/2.png" alt="一叶平生截图2" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
            <img src="assets/images/debunk/yiyepingsheng/3.png" alt="一叶平生截图3" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
            <img src="assets/images/debunk/yiyepingsheng/4.png" alt="一叶平生截图4" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
            <img src="assets/images/debunk/yiyepingsheng/5.png" alt="一叶平生截图5" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
            <img src="assets/images/debunk/yiyepingsheng/6.png" alt="一叶平生截图6" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
            <img src="assets/images/debunk/yiyepingsheng/7.png" alt="一叶平生截图7" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
            <img src="assets/images/debunk/yiyepingsheng/8.png" alt="一叶平生截图8" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
            <img src="assets/images/debunk/yiyepingsheng/9.png" alt="一叶平生截图9" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
            <img src="assets/images/debunk/yiyepingsheng/10.png" alt="一叶平生截图10" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
        </div>
    </div>
  `;
  
  // 组装组件
  container.appendChild(title);
  container.appendChild(content);

  // 使用通用图片模态框组件设置图片点击事件
  setTimeout(() => {
    const imageGallery = content.querySelector('#yiyepingsheng-image-gallery');
    if (imageGallery) {
      setupImageGallery(imageGallery);
    }
  }, 100);
  
  return container;
}

// 初始化函数
export function initYiyepingsheng(containerId) {
  const container = document.getElementById(containerId);
  if (container) {
    container.appendChild(createYiyepingshengContent());
  }
}
