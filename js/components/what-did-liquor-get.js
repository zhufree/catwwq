/**
 * 离人泪换得之物及红尘刀主人分析模块
 * 实现点击标题展开/收起详细内容的功能，并以适当的UI展示内容
 */

// 创建离人泪换得之物内容
export function createWhatDidLiquorGetContent() {
    // 创建主容器
    const container = document.createElement('div');
    container.className = 'bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8';
    
    // 创建标题（可点击）
    const title = document.createElement('h2');
    title.className = 'text-2xl font-bold text-gray-800 dark:text-white mb-4 cursor-pointer flex items-center';
    title.innerHTML = '离人泪到底换到了什么？红尘刀主人是谁？ <svg class="w-6 h-6 ml-2 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';
    
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
      <p class="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">离人泪的意义与红尘刀主人身份分析</p>
      
      <!-- 离人泪换得之物 -->
      <div class="mb-6 bg-blue-50 dark:bg-blue-900 rounded-lg p-5 border-l-4 border-blue-500 dark:border-blue-400">
        <h3 class="text-xl font-bold text-blue-700 dark:text-blue-300 mb-3">离人泪换到了什么？</h3>
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
          <p class="text-gray-700 dark:text-gray-300 mb-2">离人泪为少东家牵线了一条重要人脉，为她寻找寒姨（洛神）提供了方向。</p>
          <p class="text-gray-700 dark:text-gray-300 mb-2">少东家是一个没有背景的十六岁乡野少女，初入开封甚至不知樊楼所在。温无缺否认离人泪仅换了一个消息，而是通过这坛酒为少东家结识了“朋友”，指明了寻找寒姨的路径。</p>
          <p class="text-gray-700 dark:text-gray-300 mb-2">对少东家而言，酒是死物，亲人更重要。她曾在奇遇中以珍贵的侠客红换取江晏的往事，同样接受以离人泪换取寒姨下落。</p>
          <p class="text-gray-700 dark:text-gray-300">只要寒姨还在，离人泪可再酿。少东家本人对这坛酒的价值并无异议，认为其意义在于找到活生生的亲人。</p>
        </div>
      </div>
      
      <!-- 红尘刀主人身份分析 -->
      <div class="mb-6 bg-purple-50 dark:bg-purple-900 rounded-lg p-5 border-l-4 border-purple-500 dark:border-purple-400">
        <h3 class="text-xl font-bold text-purple-700 dark:text-purple-300 mb-3">红尘刀主人是谁？</h3>
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
          <p class="text-gray-700 dark:text-gray-300 mb-2">红尘刀主人的身份尚未明确，开封终章未揭晓答案，存在多种可能性。</p>
          <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 mb-2">
            <li class="mb-2"><span class="font-semibold text-purple-600 dark:text-purple-400">李煜可能性：</span> 许多人认为红尘刀主人是江南国主李煜，因其在生金瓯计划中扮演关键角色，且有动机要求洛神到场以获取利益（如无面人名单）。</li>
            <li class="mb-2"><span class="font-semibold text-purple-600 dark:text-purple-400">周蔷可能性：</span> 醉花阴门主周蔷亦有可能。南唐使者在《繁华谍影》中下榻云华楼，受醉花阴监控，且醉花阴借少东家之手除掉使者，获取阴文册（存疑）。这表明周蔷与李煜立场不完全一致，可能有独立动机要求洛神到场以谋取情报或关系。</li>
          </ul>
          <p class="text-gray-700 dark:text-gray-300 mb-2"><span class="font-semibold text-blue-500 dark:text-blue-300">猜测：</span> 南烛公子身份可能不唯一，类似东阙公子被温无痕冒名，红尘刀主人身份可能更复杂（此为过度解读，仅供参考）。</p>
        </div>
      </div>
      
      <!-- 结论 -->
      <div class="bg-red-50 dark:bg-red-900 p-4 rounded-lg border border-red-200 dark:border-red-700">
        <h4 class="text-red-700 dark:text-red-300 font-bold mb-2">结论</h4>
        <p class="text-gray-700 dark:text-gray-300">离人泪为少东家换取了寻找寒姨的线索，体现了其人情价值，而非单纯物质交换。红尘刀主人可能是李煜或周蔷，具体身份待开封终章揭晓，当前线索指向两者均有动机与能力影响生金瓯计划。</p>
      </div>
      <div class="mt-6">
        <h4 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">相关图片证据</h4>
        <div class="grid grid-cols-2 gap-4">
          <img src="assets/images/debunk/WhatDidTheLiquorGetFor/图片 1.png" alt="离人泪价值证据 1" class="rounded-lg shadow-md w-full cursor-pointer hover:scale-105 transition-transform duration-300" onclick="showImageModal(this.src)">
          <img src="assets/images/debunk/WhatDidTheLiquorGetFor/图片 2.png" alt="离人泪价值证据 2" class="rounded-lg shadow-md w-full cursor-pointer hover:scale-105 transition-transform duration-300" onclick="showImageModal(this.src)">
          <img src="assets/images/debunk/WhatDidTheLiquorGetFor/图片 3.png" alt="离人泪价值证据 3" class="rounded-lg shadow-md w-full cursor-pointer hover:scale-105 transition-transform duration-300" onclick="showImageModal(this.src)">
          <img src="assets/images/debunk/WhatDidTheLiquorGetFor/图片 4.png" alt="离人泪价值证据 4" class="rounded-lg shadow-md w-full cursor-pointer hover:scale-105 transition-transform duration-300" onclick="showImageModal(this.src)">
          <img src="assets/images/debunk/WhatDidTheLiquorGetFor/图片 5.png" alt="离人泪价值证据 5" class="rounded-lg shadow-md w-full cursor-pointer hover:scale-105 transition-transform duration-300" onclick="showImageModal(this.src)">
          <img src="assets/images/debunk/WhatDidTheLiquorGetFor/图片 6.png" alt="离人泪价值证据 6" class="rounded-lg shadow-md w-full cursor-pointer hover:scale-105 transition-transform duration-300" onclick="showImageModal(this.src)">
          <img src="assets/images/debunk/WhatDidTheLiquorGetFor/图片 7.png" alt="离人泪价值证据 7" class="rounded-lg shadow-md w-full cursor-pointer hover:scale-105 transition-transform duration-300" onclick="showImageModal(this.src)">
        </div>
      </div>
    `;
    
    // 组装组件
    container.appendChild(title);
    container.appendChild(content);
    
    return container;
  }
  
  // 初始化函数
  export function initWhatDidLiquorGet(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
      container.appendChild(createWhatDidLiquorGetContent());
    }
  }