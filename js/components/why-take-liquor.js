/**
 * 温无缺取离人泪原因分析模块
 * 实现点击标题展开/收起详细内容的功能，并以适当的UI展示内容
 */

// 导入通用图片模态框组件
import { setupImageGallery } from '../utils/image-modal.js';

// 创建温无缺取离人泪内容
export function createWhyTakeLiquorContent() {
    // 创建主容器
    const container = document.createElement('div');
    container.className = 'bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8';
    
    // 创建标题（可点击）
    const title = document.createElement('h2');
    title.className = 'text-2xl font-bold text-gray-800 dark:text-white mb-4 cursor-pointer flex items-center';
    title.innerHTML = '温无缺为什么要取离人泪？ <svg class="w-6 h-6 ml-2 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';
    
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
      <p class="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">温无缺取离人泪的重要性与急迫性分析</p>
      
      <!-- 重要性分析 -->
      <div class="mb-6 bg-blue-50 dark:bg-blue-900 rounded-lg p-5 border-l-4 border-blue-500 dark:border-blue-400">
        <h3 class="text-xl font-bold text-blue-700 dark:text-blue-300 mb-3">重要性分析</h3>
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
          <p class="text-gray-700 dark:text-gray-300 mb-2">洛神到场是生金瓯计划的关键条件，基于以下两点：</p>
          <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300">
            <li class="mb-2">洛神寒香寻亲口承诺到场。</li>
            <li class="mb-2">甲方（红尘刀主人）明确要求洛神到场，否则有权终止合作。</li>
          </ul>
          <p class="text-gray-700 dark:text-gray-300 mt-2">由于洛神失踪无法现身，温无缺只能以离人泪作为替代，交予甲方以维持合作。</p>
        </div>
      </div>
      
      <!-- 急迫性分析 -->
      <div class="mb-6 bg-purple-50 dark:bg-purple-900 rounded-lg p-5 border-l-4 border-purple-500 dark:border-purple-400">
        <h3 class="text-xl font-bold text-purple-700 dark:text-purple-300 mb-3">急迫性分析</h3>
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
          <p class="text-gray-700 dark:text-gray-300 mb-2">群英会当天是关键时间节点，洛神却下落不明，导致计划面临中断风险。</p>
          <p class="text-gray-700 dark:text-gray-300 mb-2">生金瓯计划涉及黎民百姓的福祉，牵扯众多人和事，温无缺无法向少东家（一个十六岁的乡野少女）解释全部真相，也无时间拖延。</p>
          <p class="text-gray-700 dark:text-gray-300">因此，温无缺必须迅速采取行动，以离人泪作为补救措施，确保群英会顺利进行。</p>
        </div>
      </div>
      
      <!-- 取酒动机分析 -->
      <div class="mb-6 bg-green-50 dark:bg-green-900 rounded-lg p-5 border-l-4 border-green-500 dark:border-green-400">
        <h3 class="text-xl font-bold text-green-700 dark:text-green-300 mb-3">温无缺何时开始打离人泪主意？</h3>
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
          <p class="text-gray-700 dark:text-gray-300 mb-2">温无缺最初并不确定少东家的身份，因此在开封一路试探，通过套话确认信息：</p>
          
          <!-- 试探阶段1 -->
          <div class="mb-4">
            <p class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">阶段1：确认少东家目的</p>
            <p class="text-gray-700 dark:text-gray-300 mb-2">温无缺通过对话确认少东家此行目的是寻找东阙（即她本人）。</p>
          </div>
          
          <!-- 试探阶段2 -->
          <div class="mb-4">
            <p class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">阶段2：验证离人泪真伪与少东家身份</p>
            <p class="text-gray-700 dark:text-gray-300 mb-2">温无缺继续试探，确认离人泪为洛神所酿，少东家为洛神家人。此时她仍未计划取酒，仅为验证信息。</p>
            <p class="text-gray-700 dark:text-gray-300">在少东家提及离人泪后，温无缺表情沉思，显示她开始意识到问题的严重性。</p>
          </div>
          
          <!-- 确定洛神无法到场 -->
          <div class="mb-4">
            <p class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">阶段3：确认洛神无法到场</p>
            <p class="text-gray-700 dark:text-gray-300 mb-2">当少东家明确表示洛神下落不明时，温无缺立即打断，表情严肃、语气急迫，显示她意识到甲方可能因洛神缺席而终止合作。</p>
            <p class="text-gray-700 dark:text-gray-300">此时，温无缺决定以离人泪作为洛神的代表物，补救洛神失约的局面，确保群英会和生金瓯计划顺利推进。</p>
          </div>
        </div>
      </div>
      
      <!-- 结论 -->
      <div class="bg-red-50 dark:bg-red-900 p-4 rounded-lg border border-red-200 dark:border-red-700">
        <h4 class="text-red-700 dark:text-red-300 font-bold mb-2">结论</h4>
        <p class="text-gray-700 dark:text-gray-300">温无缺确实“骗”取了离人泪，但此举出于急迫性和重要性。她因洛神失约、群英会迫在眉睫，不得不以离人泪作为补救措施，确保生金瓯计划的顺利实施，为黎民百姓谋福祉。</p>
      </div>

      <!-- 相关图片证据 -->
      <div class="mt-8" id="why-take-liquor-image-gallery">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4 border-b pb-2">相关图片证据</h3>
        <div class="grid grid-cols-2 gap-4">
          <img src="assets/images/debunk/WhyTakeTheLiquor/图片 1.png" alt="取酒原因证据 1" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/WhyTakeTheLiquor/图片 2.png" alt="取酒原因证据 2" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/WhyTakeTheLiquor/图片 3.png" alt="取酒原因证据 3" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/WhyTakeTheLiquor/图片 4.png" alt="取酒原因证据 4" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/WhyTakeTheLiquor/图片 5.png" alt="取酒原因证据 5" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/WhyTakeTheLiquor/图片 6.png" alt="取酒原因证据 6" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/WhyTakeTheLiquor/图片 7.png" alt="取酒原因证据 7" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/WhyTakeTheLiquor/图片 8.png" alt="取酒原因证据 8" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/WhyTakeTheLiquor/图片 9.png" alt="取酒原因证据 9" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/WhyTakeTheLiquor/图片 10.png" alt="取酒原因证据 10" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/WhyTakeTheLiquor/图片 11.png" alt="取酒原因证据 11" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
        </div>
      </div>
    `;
    
    // 组装组件
    container.appendChild(title);
    container.appendChild(content);
    
    // 使用通用图片模态框组件设置图片点击事件
    setTimeout(() => {
      const imageGallery = content.querySelector('#why-take-liquor-image-gallery');
      if (imageGallery) {
        setupImageGallery(imageGallery);
      }
    }, 100);
    
    return container;
  }
  
  // 初始化函数
  export function initWhyTakeLiquor(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
      container.appendChild(createWhyTakeLiquorContent());
    }
  }