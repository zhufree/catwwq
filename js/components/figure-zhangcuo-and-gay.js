/**
 * 樊楼戏局与张错作用分析模块
 * 实现点击标题展开/收起详细内容的功能，并以适当的UI展示内容
 */

// 创建樊楼戏局与张错作用内容
export function createFigureZhangCuoAndGayContent() {
    // 创建主容器
    const container = document.createElement('div');
    container.className = 'bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8';
    
    // 创建标题（可点击）
    const title = document.createElement('h2');
    title.className = 'text-2xl font-bold text-gray-800 dark:text-white mb-4 cursor-pointer flex items-center';
    title.innerHTML = '樊楼戏局与张错的作用 <svg class="w-6 h-6 ml-2 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';
    
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
      <p class="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">樊楼戏局：张错如何助力温无缺坐实东阙身份</p>
      <p class="text-gray-700 dark:text-gray-300 mb-4">樊楼事件是一场精心策划的戏局，旨在通过张错的“捧哏”作用，力压江湖传闻，重新确立温无缺作为东阙公子的身份。</p>
      
      <!-- 张错的作用 -->
      <div class="mb-6 bg-blue-50 dark:bg-blue-900 rounded-lg p-5 border-l-4 border-blue-500 dark:border-blue-400">
        <h3 class="text-xl font-bold text-blue-700 dark:text-blue-300 mb-3">张错的“捧哏”作用</h3>
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
          <p class="text-gray-700 dark:text-gray-300 mb-2">李煜通过江南国商队初步将温无缺与东阙公子身份绑定，但江湖传闻未央城内斗、东阙易名，需进一步坐实温无缺的身份。</p>
          <p class="text-gray-700 dark:text-gray-300 mb-2">张错在樊楼出场，通过夸赞东阙的轻重之术和精妙武学，强调台上之人即东阙公子，逻辑为：只有东阙会如此武功，台上之人施展了此武功，故其必为东阙。</p>
          <p class="text-gray-700 dark:text-gray-300">张错的言论代表江湖及半官方（青蛟帮依附朝廷）立场，增强可信度，压制传闻。</p>
        </div>
      </div>
      
      <!-- 幻术与武功真相 -->
      <div class="mb-6 bg-purple-50 dark:bg-purple-900 rounded-lg p-5 border-l-4 border-purple-500 dark:border-purple-400">
        <h3 class="text-xl font-bold text-purple-700 dark:text-purple-300 mb-3">温无缺武功尽失与幻术运用</h3>
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
          <p class="text-gray-700 dark:text-gray-300 mb-2">温无缺（盈盈）武功尽失，樊楼表现依赖幻术。欢喜伉俪之死由幻术造成，非真实武功。</p>
          <p class="text-gray-700 dark:text-gray-300 mb-2">温无缺使用买命钱，展现有限威力：可杀熔炉大头兵、弹飞欢喜伉俪武器、击退史鸩两步，但第二枚买命钱被欢喜伉俪接住后，其察觉无真正杀伤力，仅触发幻术（伴随声浪与捧头镜头）。</p>
          <p class="text-gray-700 dark:text-gray-300">张错知晓温无缺武功尽失，依然夸赞其武学，表明他参与了戏局策划。</p>
        </div>
      </div>
      
      <!-- 欢喜伉俪的角色 -->
      <div class="mb-6 bg-green-50 dark:bg-green-900 rounded-lg p-5 border-l-4 border-green-500 dark:border-green-400">
        <h3 class="text-xl font-bold text-green-700 dark:text-green-300 mb-3">欢喜伉俪的邀请与杀鸡儆猴</h3>
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
          <p class="text-gray-700 dark:text-gray-300 mb-2">欢喜伉俪并非硬闯樊楼，而是受邀而来，邀请方为张错、温无缺或醉花阴等生金瓯计划相关人。</p>
          <p class="text-gray-700 dark:text-gray-300 mb-2">邀请目的在于“杀鸡儆猴”：醉花阴故意二次查验，诱导欢喜伉俪闹事，为温无缺创造帅气救场机会，借此坐实东阙身份。</p>
          <p class="text-gray-700 dark:text-gray-300">欢喜伉俪非善类，其被除为计划的一部分，强化温无缺的威信。</p>
        </div>
      </div>
      
      <!-- 关键人物知情程度 -->
      <div class="mb-6 bg-yellow-50 dark:bg-yellow-900 rounded-lg p-5 border-l-4 border-yellow-500 dark:border-yellow-400">
        <h3 class="text-xl font-bold text-yellow-700 dark:text-yellow-300 mb-3">关键人物知晓的真相</h3>
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
          <p class="text-gray-700 dark:text-gray-300 mb-2">温无缺向核心人物透露了不同真相，确保戏局顺利进行：</p>
          <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300">
            <li class="mb-2"><span class="font-semibold text-yellow-600 dark:text-yellow-400">容鸢：</span> 知晓东阙为女性（温无缺真实身份）。</li>
            <li class="mb-2"><span class="font-semibold text-yellow-600 dark:text-yellow-400">张错：</span> 知晓东阙武功尽失（真实武功状况），与温无缺及冯如之、冯夷沟通，配合捧哏。</li>
            <li class="mb-2"><span class="font-semibold text-yellow-600 dark:text-yellow-400">郑鄂：</span> 知晓东阙心系开封万民（真实目的）。</li>
          </ul>
        </div>
      </div>
      
      <!-- 结论 -->
      <div class="bg-red-50 dark:bg-red-900 p-4 rounded-lg border border-red-200 dark:border-red-700">
        <h4 class="text-red-700 dark:text-red-300 font-bold mb-2">结论</h4>
        <p class="text-gray-700 dark:text-gray-300">樊楼事件是一场精心设计的戏局，通过张错的捧哏、幻术运用及欢喜伉俪的牺牲，成功坐实温无缺的东阙身份。核心人物知晓不同真相，共同配合生金瓯计划的推进，为开封万民谋福祉。</p>
      </div>

      <!-- 图片证据画廊 -->
      <div class="mt-8">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4 border-b pb-2">相关图片证据</h3>

        <!-- 欢喜伉俪 相关图片 -->
        <div class="mt-6 mb-8">
          <h4 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">欢喜伉俪 相关图片</h4>
          <div class="grid grid-cols-2 gap-4">
            <img src="assets/images/debunk/ZhangcuoAndGay/1_figure_Gay/1.png" alt="欢喜伉俪 证据 1" class="rounded-lg shadow-md w-full cursor-pointer hover:scale-105 transition-transform duration-300" onclick="showImageModal(this.src)">
            <img src="assets/images/debunk/ZhangcuoAndGay/1_figure_Gay/2.png" alt="欢喜伉俪 证据 2" class="rounded-lg shadow-md w-full cursor-pointer hover:scale-105 transition-transform duration-300" onclick="showImageModal(this.src)">
            <img src="assets/images/debunk/ZhangcuoAndGay/1_figure_Gay/3.png" alt="欢喜伉俪 证据 3" class="rounded-lg shadow-md w-full cursor-pointer hover:scale-105 transition-transform duration-300" onclick="showImageModal(this.src)">
            <img src="assets/images/debunk/ZhangcuoAndGay/1_figure_Gay/4.png" alt="欢喜伉俪 证据 4" class="rounded-lg shadow-md w-full cursor-pointer hover:scale-105 transition-transform duration-300" onclick="showImageModal(this.src)">
            <img src="assets/images/debunk/ZhangcuoAndGay/1_figure_Gay/5.png" alt="欢喜伉俪 证据 5" class="rounded-lg shadow-md w-full cursor-pointer hover:scale-105 transition-transform duration-300" onclick="showImageModal(this.src)">
          </div>
        </div>

        <!-- 张错 相关图片 -->
        <div class="mt-6 mb-8">
          <h4 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">张错 相关图片</h4>
          <div class="grid grid-cols-2 gap-4">
            <img src="assets/images/debunk/ZhangcuoAndGay/1_figure_ZhangCuo/图片 1.png" alt="张错 证据 1" class="rounded-lg shadow-md w-full cursor-pointer hover:scale-105 transition-transform duration-300" onclick="showImageModal(this.src)">
            <img src="assets/images/debunk/ZhangcuoAndGay/1_figure_ZhangCuo/图片 2.png" alt="张错 证据 2" class="rounded-lg shadow-md w-full cursor-pointer hover:scale-105 transition-transform duration-300" onclick="showImageModal(this.src)">
            <img src="assets/images/debunk/ZhangcuoAndGay/1_figure_ZhangCuo/图片 3.png" alt="张错 证据 3" class="rounded-lg shadow-md w-full cursor-pointer hover:scale-105 transition-transform duration-300" onclick="showImageModal(this.src)">
            <img src="assets/images/debunk/ZhangcuoAndGay/1_figure_ZhangCuo/图片 4.png" alt="张错 证据 4" class="rounded-lg shadow-md w-full cursor-pointer hover:scale-105 transition-transform duration-300" onclick="showImageModal(this.src)">
            <img src="assets/images/debunk/ZhangcuoAndGay/1_figure_ZhangCuo/图片 5.png" alt="张错 证据 5" class="rounded-lg shadow-md w-full cursor-pointer hover:scale-105 transition-transform duration-300" onclick="showImageModal(this.src)">
          </div>
        </div>

        <!-- 张错与欢喜伉俪 综合图片 -->
        <div class="mt-6">
          <h4 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">张错与欢喜伉俪 综合图片</h4>
          <div class="grid grid-cols-2 gap-4">
            <img src="assets/images/debunk/ZhangcuoAndGay/1_figure_ZhangCuoandGay/图片 1.png" alt="综合证据 1" class="rounded-lg shadow-md w-full cursor-pointer hover:scale-105 transition-transform duration-300" onclick="showImageModal(this.src)">
            <img src="assets/images/debunk/ZhangcuoAndGay/1_figure_ZhangCuoandGay/图片 2.png" alt="综合证据 2" class="rounded-lg shadow-md w-full cursor-pointer hover:scale-105 transition-transform duration-300" onclick="showImageModal(this.src)">
            <img src="assets/images/debunk/ZhangcuoAndGay/1_figure_ZhangCuoandGay/图片 3.png" alt="综合证据 3" class="rounded-lg shadow-md w-full cursor-pointer hover:scale-105 transition-transform duration-300" onclick="showImageModal(this.src)">
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
  export function initFigureZhangCuoAndGay(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
      container.appendChild(createFigureZhangCuoAndGayContent());
    }
  }