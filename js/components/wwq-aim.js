/**
 * 温无缺的目的辟谣模块
 * 实现点击标题展开/收起详细内容的功能
 */

// 创建温无缺的目的辟谣内容
export function createWwqAimContent() {
    // 创建主容器
    const container = document.createElement('div');
    container.className = 'bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8';
    
    // 创建标题（可点击）
    const title = document.createElement('h2');
    title.className = 'text-2xl font-bold text-gray-800 dark:text-white mb-4 cursor-pointer flex items-center';
    title.innerHTML = '温无缺的目的就是为了回未央城，才与李煜合作 <svg class="w-6 h-6 ml-2 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';
    
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
      <!-- 第一个问答 -->
      <div class="mb-6 bg-blue-50 dark:bg-blue-900 rounded-lg p-5 border-l-4 border-blue-500 dark:border-blue-400">
        <div class="flex items-start">
          <div class="flex-shrink-0 bg-blue-100 dark:bg-blue-800 rounded-full p-2 mr-3">
            <svg class="w-6 h-6 text-blue-500 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <div>
            <p class="text-lg font-semibold text-blue-700 dark:text-blue-300">她的最终目的还是为了回未央吗？</p>
            <div class="mt-3 bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm">
              <p class="text-gray-700 dark:text-gray-300">当然不是。在唐钱收缴令之前，温无缺已经适应了"盈盈"的身份，她已经愿意只当龟奶奶的女儿，只当日子过得清贫但也满足的小货娘。</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 第二个问答 -->
      <div class="mb-6 bg-purple-50 dark:bg-purple-900 rounded-lg p-5 border-l-4 border-purple-500 dark:border-purple-400">
        <div class="flex items-start">
          <div class="flex-shrink-0 bg-purple-100 dark:bg-purple-800 rounded-full p-2 mr-3">
            <svg class="w-6 h-6 text-purple-500 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <div>
            <p class="text-lg font-semibold text-purple-700 dark:text-purple-300">那为什么会有东阙与南烛的通信，温无缺为什么要写想回未央城？</p>
            <div class="mt-3 bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm">
              <p class="text-gray-700 dark:text-gray-300 mb-4">因为醉花阴是南唐势力，温无缺想要达成生金瓯计划，必须要醉花阴势力帮忙。南烛公子是谁？李煜。再请问，李煜是谁，江南国主。温无缺要和李煜合作，会告诉他她的真实目的是保开封万民吗？你觉得这样说了李煜还会同意吗？她肯定要给李煜一个符合自己人设的说辞，什么人设，废城主，什么理由找李煜合作，回未央城。很难理解？</p>
              
              <!-- 明潮暗涌对比框 -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div class="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg border border-yellow-200 dark:border-yellow-700">
                  <h4 class="text-yellow-700 dark:text-yellow-300 font-bold mb-2">明潮</h4>
                  <p class="text-gray-700 dark:text-gray-300">回未央城是温无缺给李煜的说辞</p>
                </div>
                <div class="bg-green-50 dark:bg-green-900 p-4 rounded-lg border border-green-200 dark:border-green-700">
                  <h4 class="text-green-700 dark:text-green-300 font-bold mb-2">暗涌</h4>
                  <p class="text-gray-700 dark:text-gray-300">拯救开封万民，是温无缺的真实目的</p>
                </div>
              </div>
              
              <p class="text-gray-700 dark:text-gray-300 mb-4">你甚至可以说，让李煜给予帮助回未央，是温无缺的目的之一，但一定、肯定、确定不是她的主要目的。</p>
              
              <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-gray-500 mb-4">
                <p class="text-gray-700 dark:text-gray-300">这里的各取所需中的"需"，就是顺势回未央，但这里"却"后面的短句，才是她的重心、侧重点、最终目的、"主要矛盾"，是整个事件中起决定性作用、支配性作用的。</p>
                <p class="text-gray-700 dark:text-gray-300">是整个生金瓯计划的起点，是整个开封赌局设立之初的初衷。</p>
              </div>
              
              <p class="text-gray-700 dark:text-gray-300 mb-4">不难理解吧？</p>
              <p class="text-gray-700 dark:text-gray-300 mb-4">是因为唐钱策导致民不聊生，才会有生金瓯计划，才会有温无缺联系李煜。哪怕日后她回到了未央城，重新夺权坐上未央城主之位，她的目的也不是夺权上位，而是利用这个位置达成自己想要的目标——救天下。</p>
              
              <!-- 结论框 -->
              <div class="bg-red-50 dark:bg-red-900 p-4 rounded-lg border border-red-200 dark:border-red-700">
                <h4 class="text-red-700 dark:text-red-300 font-bold mb-2">结论</h4>
                <p class="text-gray-700 dark:text-gray-300">救天下是她的目的，是她的"世界观"，回未央是达成这个目的的手段，是方法论。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    
    // 组装组件
    container.appendChild(title);
    container.appendChild(content);
    
    return container;
  }
  
  // 初始化函数
  export function initWwqAim(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
      container.appendChild(createWwqAimContent());
    }
  }