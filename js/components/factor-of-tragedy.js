/**
 * 朱鱼悲剧深度解析模块：人祸因素与幕后推手分析
 * 实现点击标题展开/收起详细内容的功能，并以适当的UI展示内容
 */

// 导入通用图片模态框组件
import { setupImageGallery } from '../utils/image-modal.js';

// 创建朱鱼悲剧分析内容
export function createTragedyAnalysisContent() {
    // 创建主容器
    const container = document.createElement('div');
    container.className = 'bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8';

    // 创建标题（可点击）
    const title = document.createElement('h2');
    title.className = 'text-2xl font-bold text-gray-800 dark:text-white mb-4 cursor-pointer flex items-center';
    title.innerHTML = '朱鱼悲剧深度解析：人祸因素与幕后推手 <svg class="w-6 h-6 ml-2 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';

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

    // 填充内容 - 根据 2_Involved factor of tragedy.txt 改写
    content.innerHTML = `
      <div class="bg-red-50 dark:bg-red-900 rounded-lg p-5 border-l-4 border-red-500 dark:border-red-400 mb-6">
        <h3 class="text-xl font-bold text-red-700 dark:text-red-300 mb-3">核心论点：朱鱼之死非天灾，实为人祸</h3>
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
          <p class="text-gray-700 dark:text-gray-300 mb-2">石守信未能救援，仅仅是“恰逢”巨变吗？游戏文案多次暗示朱鱼之死存在“幕后黑手”，并指向朝堂与所谓的“天”。</p>
          <p class="text-gray-700 dark:text-gray-300 font-semibold mb-2">若仅是天灾，何来凶手？朱鱼的悲剧，根源在于人祸。</p>
          <blockquote class="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic text-gray-600 dark:text-gray-400">
             少东家评语：“老天……不怎么公道。”
          </blockquote>
        </div>
      </div>

      <div class="space-y-4 mt-6">
        <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm">
          <p class="text-gray-700 dark:text-gray-300"><strong class="text-blue-600 dark:text-blue-400">960年：</strong> 朱鱼牺牲。现任河伯冯夷失踪，开始秘密驯养新的龙王 <span class="text-sm text-gray-500 dark:text-gray-400">【注：非侠迹中的“阿鱼”】</span>。</p>
        </div>

        <div class="flex justify-center">
          <svg class="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>

         <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm">
          <p class="text-gray-700 dark:text-gray-300">龙蛟帮分裂：冯如之任赤龙堂堂主，张错任青蛟帮帮主。张错带领青蛟帮降宋，实则暗中调查朱鱼死因。</p>
        </div>

        <div class="flex justify-center">
          <svg class="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>

        <div class="p-4 bg-purple-50 dark:bg-purple-900 rounded-lg shadow-sm border-l-4 border-purple-400">
          <h4 class="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-2">推论：幕后黑手指向赵家朝廷</h4>
           <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300">
             <li class="mb-1">天上来渡作为当时第一渡口，独立自治，不服官府管辖。</li>
             <li class="mb-1">帮主朱鱼声望极高，被奉为“泥菩萨”，威胁到天子权威。</li>
           </ul>
           <p class="text-gray-700 dark:text-gray-300 mt-2">两年后，冯夷和张错查明真相，故冯夷言及“报仇”。</p>
        </div>

         <div class="flex justify-center">
          <svg class="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>

        <div class="p-4 bg-orange-50 dark:bg-orange-900 rounded-lg shadow-sm border-l-4 border-orange-400">
          <p class="text-gray-700 dark:text-gray-300">石守信当年未能救援，推测是受“上天”<span class="text-sm text-gray-500 dark:text-gray-400">（皇亲国戚）</span>授意。</p>
        </div>

        <div class="flex justify-center">
          <svg class="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>

         <div class="p-4 bg-yellow-50 dark:bg-yellow-900 rounded-lg shadow-sm border-l-4 border-yellow-400">
          <h4 class="text-lg font-semibold text-yellow-700 dark:text-yellow-300 mb-2">天上来渡的衰败</h4>
           <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300">
             <li class="mb-1">冯夷失踪后，出现“河伯投敌”传闻（散播者意图明显）。</li>
             <li class="mb-1">黄河漕运地位被汴河取代（朝廷有意为之）。</li>
             <li class="mb-1">话事人失踪、声誉受损、政策打压等多重因素导致天上来渡衰落。</li>
           </ul>
        </div>

         <div class="flex justify-center">
          <svg class="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>

        <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm">
          <p class="text-gray-700 dark:text-gray-300"><strong class="text-blue-600 dark:text-blue-400">建隆三年：</strong> 张错联系少东家，散布“河伯欲水淹开封”的假消息，目的是引出幕后黑手。</p>
        </div>

        <div class="flex justify-center">
          <svg class="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>

        <div class="p-4 bg-teal-50 dark:bg-teal-900 rounded-lg shadow-sm border-l-4 border-teal-400">
          <h4 class="text-lg font-semibold text-teal-700 dark:text-teal-300 mb-2">幕后黑手显现与动机</h4>
          <p class="text-gray-700 dark:text-gray-300 mb-1">晋中原最终出现。其在战斗后对冯夷下杀手（飞刀镜头暗示），意图趁冯夷力竭之际将其除去，彻底消灭河伯的存在。</p>
          <p class="text-gray-700 dark:text-gray-300"><strong>根本原因：</strong> 新朝初立，百姓信奉河伯甚于朝廷，威胁统治。因此，晋中原认为“河伯必须死”。</p>
        </div>
      </div>

      <!-- 相关图片证据 -->
      <div class="mt-8" id="factor-of-tragedy-image-gallery">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4 border-b pb-2">相关图片证据</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="assets/images/debunk/FactorOfTragedy/图片1.png" alt="朱鱼悲剧证据 1" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/FactorOfTragedy/图片2.png" alt="朱鱼悲剧证据 2" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/FactorOfTragedy/图片3.png" alt="朱鱼悲剧证据 3" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/FactorOfTragedy/图片4.png" alt="朱鱼悲剧证据 4" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/FactorOfTragedy/图片5.png" alt="朱鱼悲剧证据 5" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/FactorOfTragedy/图片6.png" alt="朱鱼悲剧证据 6" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/FactorOfTragedy/图片7.png" alt="朱鱼悲剧证据 7" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/FactorOfTragedy/图片8.png" alt="朱鱼悲剧证据 8" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/FactorOfTragedy/图片9.png" alt="朱鱼悲剧证据 9" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/FactorOfTragedy/图片10.png" alt="朱鱼悲剧证据 10" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/FactorOfTragedy/图片11.png" alt="朱鱼悲剧证据 11" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/FactorOfTragedy/图片12.png" alt="朱鱼悲剧证据 12" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/FactorOfTragedy/图片13.png" alt="朱鱼悲剧证据 13" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/FactorOfTragedy/图片14.png" alt="朱鱼悲剧证据 14" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/FactorOfTragedy/图片15.png" alt="朱鱼悲剧证据 15" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/FactorOfTragedy/图片16.png" alt="朱鱼悲剧证据 16" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/FactorOfTragedy/图片17.png" alt="朱鱼悲剧证据 17" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/FactorOfTragedy/图片18.png" alt="朱鱼悲剧证据 18" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/FactorOfTragedy/图片19.png" alt="朱鱼悲剧证据 19" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
        </div>
      </div>
    `;

    // 组装组件
    container.appendChild(title);
    container.appendChild(content);

    // 使用通用图片模态框组件设置图片点击事件
    setTimeout(() => {
      const imageGallery = content.querySelector('#factor-of-tragedy-image-gallery');
      if (imageGallery) {
        setupImageGallery(imageGallery);
      }
    }, 100);

    return container;
}

// 初始化函数
export function initTragedyAnalysis(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.appendChild(createTragedyAnalysisContent());
    }
}