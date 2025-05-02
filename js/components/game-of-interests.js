/**
 * 离人泪背后利益博弈辟谣模块
 * 实现点击标题展开/收起详细内容的功能，并以适当的UI展示内容
 */

// 导入通用图片模态框组件
import { setupImageGallery } from '../utils/image-modal.js';

// 创建离人泪利益博弈内容
export function createGameOfInterestContent() {
  // 创建主容器
  const container = document.createElement('div');
  container.className = 'bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8';
  
  // 创建标题（可点击）
  const title = document.createElement('h2');
  title.className = 'text-2xl font-bold text-gray-800 dark:text-white mb-4 cursor-pointer flex items-center';
  title.innerHTML = '离人泪背后的利益博弈 <svg class="w-6 h-6 ml-2 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';
  
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
    <p class="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">离人泪与生金瓯计划的高强度关联</p>
    <p class="text-gray-700 dark:text-gray-300 mb-4">离人泪和生金瓯计划之间存在紧密联系，其中涉及多方势力的利益博弈。二商（洛神寒香寻、东阙温无缺）与二主（江南国主李煜、醉花阴门主周蔷）在计划中扮演关键角色。</p>
    
    <!-- 二商与二主 -->
    <div class="mb-6 bg-blue-50 dark:bg-blue-900 rounded-lg p-5 border-l-4 border-blue-500 dark:border-blue-400">
      <h3 class="text-xl font-bold text-blue-700 dark:text-blue-300 mb-3">核心人物</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
          <p class="text-gray-700 dark:text-gray-300 font-semibold">二商</p>
          <p class="text-gray-700 dark:text-gray-300">洛神寒香寻、东阙温无缺</p>
        </div>
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
          <p class="text-gray-700 dark:text-gray-300 font-semibold">二主</p>
          <p class="text-gray-700 dark:text-gray-300">江南国主李煜、醉花阴门主周蔷</p>
        </div>
      </div>
      <p class="text-gray-700 dark:text-gray-300 mt-4">红尘刀的主人（二主之一）要求洛神必须到场，否则不配合生金瓯计划。因此，温无缺需引洛神现身或将离人泪（洛神代表物）交予红尘刀主人。</p>
    </div>
    
    <!-- 洛神寒香寻与东阙交易 -->
    <div class="mb-6 bg-purple-50 dark:bg-purple-900 rounded-lg p-5 border-l-4 border-purple-500 dark:border-purple-400">
      <h3 class="text-xl font-bold text-purple-700 dark:text-purple-300 mb-3">洛神寒香寻与东阙的两次交易</h3>
      
      <!-- 第一次交易 -->
      <div class="mb-4">
        <p class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">第一次交易：神仙渡劫前</p>
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
          <p class="text-gray-700 dark:text-gray-300 mb-2"><span class="font-semibold text-blue-600 dark:text-blue-400">缘由：</span> 寒香寻预感不羡仙遭劫，需退路以避绣金楼追杀（可能因得罪唐哀帝李祚，涉及风沙酒肆“替身”秘密，<span class="text-blue-500 dark:text-blue-300">此为猜测</span>）。</p>
          <p class="text-gray-700 dark:text-gray-300 mb-2"><span class="font-semibold text-blue-600 dark:text-blue-400">寒香寻的贡献：</span> 替郑愕易容，助其李代桃僵成为常平使。</p>
          <p class="text-gray-700 dark:text-gray-300"><span class="font-semibold text-blue-600 dark:text-blue-400">报酬：</span> 温无缺通过红尘刀主人提供“谁也找不到、进不来”的退路。</p>
        </div>
      </div>
      
      <!-- 第二次交易 -->
      <div class="mb-4">
        <p class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">第二次交易：神仙渡劫后</p>
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
          <p class="text-gray-700 dark:text-gray-300 mb-2"><span class="font-semibold text-purple-600 dark:text-purple-400">寒香寻的要求：</span> 保下少东家。</p>
          <p class="text-gray-700 dark:text-gray-300 mb-2"><span class="font-semibold text-purple-600 dark:text-purple-400">温无缺的要求：</span> 寒香寻以洛神身份现身樊楼群英会。</p>
          <p class="text-gray-700 dark:text-gray-300">寒香寻此前可能拒绝现身，此次主动答应（信中“如约”），但因未知原因失踪，导致失约。</p>
        </div>
      </div>
    </div>
    
    <!-- 李煜的角色 -->
    <div class="mb-6 bg-green-50 dark:bg-green-900 rounded-lg p-5 border-l-4 border-green-500 dark:border-green-400">
      <h3 class="text-xl font-bold text-green-700 dark:text-green-300 mb-3">江南国主李煜的角色</h3>
      <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
        <p class="text-gray-700 dark:text-gray-300 mb-2"><span class="font-semibold text-green-600 dark:text-green-400">造势：</span> 为温无缺重新坐实东阙公子之位，助其对抗温无痕的“鸠占鹊巢”。</p>
        <p class="text-gray-700 dark:text-gray-300 mb-2"><span class="font-semibold text-green-600 dark:text-green-400">动机：</span> 江南国内忧外患，赵宋要求岁贡加剧经济压力，生金瓯计划为代贡手段，延缓危机。</p>
        <p class="text-gray-700 dark:text-gray-300 mb-2"><span class="font-semibold text-green-600 dark:text-green-400">洛神到场的重要性：</span> 可能为李煜的附加条件，确保计划成功或通过洛神搭上无面人名单，与契丹修好，降低计划失败的风险。</p>
      </div>
    </div>
    
    <!-- 周蔷的角色 -->
    <div class="mb-6 bg-yellow-50 dark:bg-yellow-900 rounded-lg p-5 border-l-4 border-yellow-500 dark:border-yellow-400">
      <h3 class="text-xl font-bold text-yellow-700 dark:text-yellow-300 mb-3">醉花阴门主周蔷的角色</h3>
      <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
        <p class="text-gray-700 dark:text-gray-300 mb-2"><span class="font-semibold text-yellow-600 dark:text-yellow-400">贡献：</span> 亲自献舞造势、提供撒钱人力资源、提供樊楼场地。</p>
        <p class="text-gray-700 dark:text-gray-300 mb-2"><span class="font-semibold text-yellow-600 dark:text-yellow-400">动机：</span> 家门惨变（可能与南唐有关，<span class="text-blue-500 dark:text-blue-300">此为猜测</span>），使周蔷不信财富感情，立志成为大女主，醉花阴斡旋各方势力谋利。</p>
        <p class="text-gray-700 dark:text-gray-300 mb-2"><span class="font-semibold text-yellow-600 dark:text-yellow-400">醉花阴的立场：</span> 不完全依附南唐，掌握情报（如无面人名单、常平仓军粮等），通过情报交易获利。</p>
        <p class="text-gray-700 dark:text-gray-300"><span class="font-semibold text-yellow-600 dark:text-yellow-400">洛神到场动机：</span> 周蔷可能通过洛神获取新情报或关系，增强醉花阴的斡旋能力。</p>
      </div>
    </div>
    
    <!-- 结论 -->
    <div class="bg-red-50 dark:bg-red-900 p-4 rounded-lg border border-red-200 dark:border-red-700">
      <h4 class="text-red-700 dark:text-red-300 font-bold mb-2">结论</h4>
      <p class="text-gray-700 dark:text-gray-300">生金瓯计划是一个多方博弈的赌局，温无缺为民、李煜为国、周蔷为利，洛神到场成为关键条件，牵涉离人泪与各方势力的复杂交易与动机。</p>
    </div>
    
    <!-- 图片证据画廊 -->
    <div class="mt-8" id="game-of-interests-image-gallery">
      <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4 border-b pb-2">相关图片证据</h3>
      <div class="grid grid-cols-2 gap-4">
        <img src="assets/images/debunk/GameOfInterests/图片 1.png" alt="利益博弈证据 1" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
        <img src="assets/images/debunk/GameOfInterests/图片 2.png" alt="利益博弈证据 2" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
        <img src="assets/images/debunk/GameOfInterests/图片 3.png" alt="利益博弈证据 3" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
        <img src="assets/images/debunk/GameOfInterests/图片 4.png" alt="利益博弈证据 4" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
        <img src="assets/images/debunk/GameOfInterests/图片 5.png" alt="利益博弈证据 5" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
        <img src="assets/images/debunk/GameOfInterests/图片 6.png" alt="利益博弈证据 6" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
        <img src="assets/images/debunk/GameOfInterests/图片 7.png" alt="利益博弈证据 7" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
        <img src="assets/images/debunk/GameOfInterests/图片 8.png" alt="利益博弈证据 8" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
        <img src="assets/images/debunk/GameOfInterests/图片 9.png" alt="利益博弈证据 9" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
        <img src="assets/images/debunk/GameOfInterests/图片 10.png" alt="利益博弈证据 10" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
        <img src="assets/images/debunk/GameOfInterests/图片 11.png" alt="利益博弈证据 11" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
        <img src="assets/images/debunk/GameOfInterests/图片 12.png" alt="利益博弈证据 12" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
        <img src="assets/images/debunk/GameOfInterests/图片 13.png" alt="利益博弈证据 13" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
        <img src="assets/images/debunk/GameOfInterests/图片 14.png" alt="利益博弈证据 14" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
        <img src="assets/images/debunk/GameOfInterests/图片 15.png" alt="利益博弈证据 15" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
        <img src="assets/images/debunk/GameOfInterests/图片 16.png" alt="利益博弈证据 16" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
        <img src="assets/images/debunk/GameOfInterests/图片 17.png" alt="利益博弈证据 17" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
        <img src="assets/images/debunk/GameOfInterests/图片 18.png" alt="利益博弈证据 18" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
        <img src="assets/images/debunk/GameOfInterests/图片 19.png" alt="利益博弈证据 19" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
      </div>
    </div>
    
    <!-- 图片证据画廊 -->
  `;
  
  // 组装组件
  container.appendChild(title);
  container.appendChild(content);
  
  // 使用通用图片模态框组件设置图片点击事件
  setTimeout(() => {
    const imageGallery = content.querySelector('#game-of-interests-image-gallery');
    if (imageGallery) {
      setupImageGallery(imageGallery);
    }
  }, 100);
  
  return container;
}

// 初始化函数
export function initGameOfInterest(containerId) {
  const container = document.getElementById(containerId);
  if (container) {
    container.appendChild(createGameOfInterestContent());
  }
}