// --- START OF FILE new-tangqian-analysis-exact.js ---

/**
 * 新唐钱入京分析模块 (原文呈现)
 * 将关于新唐钱入京前因后果、时间线、涉及人物的分析文本，按照标准UI模块格式进行展示。
 * 实现点击标题展开/收起详细内容的功能。
 */

// 导入通用图片模态框组件
import { setupImageGallery } from '../utils/image-modal.js';

// 创建新唐钱分析内容 (原文)
export function createNewTangqianAnalysisExactContent() {
    // 创建主容器
    const container = document.createElement('div');
    container.className = 'bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8';

    // 创建标题（可点击）- 使用原文标题
    const title = document.createElement('h2');
    title.className = 'text-2xl font-bold text-gray-800 dark:text-white mb-4 cursor-pointer flex items-center';
    title.innerHTML = '五、新唐钱入京的前因后果、时间线、涉及人物。 <svg class="w-6 h-6 ml-2 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';

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
      <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-5 border-l-4 border-gray-500 dark:border-gray-400 mb-6">
        <h3 class="text-xl font-bold text-gray-700 dark:text-gray-200 mb-3">初步结论</h3>
        <div class="bg-white dark:bg-gray-600 p-4 rounded-lg shadow-sm space-y-2">
           <p class="text-gray-700 dark:text-gray-300">先说结论：新唐钱入京是为了配合生金瓯失窃，让百姓有钱可用，时间线为最近。这些我都会一条一条进行分析证明。</p>
        </div>
      </div>

      <div class="bg-blue-50 dark:bg-blue-900 rounded-lg p-5 border-l-4 border-blue-500 dark:border-blue-400 mb-6">
        <h3 class="text-xl font-bold text-blue-700 dark:text-blue-300 mb-3">时间线佐证</h3>
         <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
           <p class="text-gray-700 dark:text-gray-300">时间线佐证。</p>

           <h4 class="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-1 mt-3">道主谈话（樊楼）</h4>
           <p class="text-gray-700 dark:text-gray-300">樊楼主线，偷听道主谈话可得：</p>
           <p class="text-gray-700 dark:text-gray-300">本条对话可以说明，九流门最近在攒钱，并且送到了某个地方。</p>

           <h4 class="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-1 mt-3">② 洪肆手卷（少东家）</h4>
           <p class="text-gray-700 dark:text-gray-300">②主线少东偷的洪肆手卷。</p>
           <p class="text-gray-700 dark:text-gray-300">我将此条暗涌分为两个颜色勾画了重点。红色部分，“上头”二字可以继续佐证上面的无忧帮与朝堂某些人有所勾结。“昨儿”二字可以证明新一批唐钱入京，是开封主线主角查生金瓯失窃的“昨天”。</p>
           <p class="text-gray-700 dark:text-gray-300">即：此条已经完全佐证，新一批唐钱入京，是这两天的事情。</p>
           <p class="text-gray-700 dark:text-gray-300">蓝色勾画部分，是解释了为什么道主等人要运唐钱入京，因为没有铜钱，只能用唐钱，人人都要活命糊口。</p>
           <p class="text-gray-700 dark:text-gray-300">货物的流通，必须要货币，有货币，才能有市场。此条主线小禄对话亦可为证。</p>

           <h4 class="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-1 mt-3">③ 少东家与赵大哥对话</h4>
           <p class="text-gray-700 dark:text-gray-300">③主线少东家与赵大哥的对话。</p>
           <p class="text-gray-700 dark:text-gray-300">这条对话也可以佐证，多出来的这批唐钱，是生金瓯丢失以后，“这几天”、“突然”出现的。</p>
         </div>
      </div>

      <div class="bg-green-50 dark:bg-green-900 rounded-lg p-5 border-l-4 border-green-500 dark:border-green-400 mb-6">
         <h3 class="text-xl font-bold text-green-700 dark:text-green-300 mb-3">时间线总结：两波唐钱区分</h3>
          <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
            <p class="text-gray-700 dark:text-gray-300">因此，上述所有文案已经足可以证明，唐钱入京一共两波，第一波李煜引导的，是这批唐钱导致物价暴涨民不聊生；</p>
            <p class="text-gray-700 dark:text-gray-300">第二波道主温无缺引导的，是这批唐钱让贫民有钱能用，这波的唐钱入京，与经济战毫无关系，经济战是两年前发起的，而这一波，是“最近”、“这几天”、“昨儿”，才被偷运进来的唐钱！</p>
          </div>
      </div>

       <div class="bg-purple-50 dark:bg-purple-900 rounded-lg p-5 border-l-4 border-purple-500 dark:border-purple-400 mb-6">
         <h3 class="text-xl font-bold text-purple-700 dark:text-purple-300 mb-3">新唐钱用处佐证</h3>
         <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
            <p class="text-gray-700 dark:text-gray-300">由温无缺道主等人走私的唐钱用处佐证。</p>

            <h4 class="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-1 mt-3">鬼市换粮</h4>
            <p class="text-gray-700 dark:text-gray-300">在鬼市换粮。</p>

            <h4 class="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-1 mt-3">② 提供生计（新旧区分）</h4>
            <p class="text-gray-700 dark:text-gray-300">②有了这批新的钱，不少人有了活命的机会。</p>
            <p class="text-gray-700 dark:text-gray-300">这里剧情文案已经用了非常明显的“新旧”概念与李煜的唐钱作出了区分，是“旧的唐钱”被暴力收缴导致民不聊生；是“新的唐钱”让百姓有钱用能“过活”了。</p>
         </div>
       </div>

       <div class="bg-red-50 dark:bg-red-900 rounded-lg p-5 border-l-4 border-red-500 dark:border-red-400">
          <h3 class="text-xl font-bold text-red-700 dark:text-red-300 mb-3">最终结论：驳斥经济战谬论</h3>
           <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
             <p class="text-gray-700 dark:text-gray-300">结论：温无缺有参与经济战吗？她本来就是南唐派来打乱赵宋阵脚的？</p>
             <p class="text-gray-700 dark:text-gray-300">答：完全错误！这是混淆了时间线才会有的误解！将唐钱导致的民不聊生扣在温无缺的头上，根本是无稽之谈，她与九流门走私的唐钱，是为了解决百姓手里没钱可用的局面——先暴力收了唐钱，百姓才没钱，九流门和温无缺才运钱，这已经是很明显很清晰的时间线和先后关系了。</p>
           </div>
       </div>

        <!-- Placeholder for Image Gallery -->
       <div id="new-tangqian-gallery-placeholder" class="mt-8 pt-6 border-t border-gray-300 dark:border-gray-600">
            <p class="text-center text-gray-500 dark:text-gray-400">（相关证据截图，如游戏主线对话、暗涌、文案等，可在此处展示）</p>
            <!-- Image elements would be added here dynamically if available -->
       </div>
    `;

    // Add image gallery logic (placeholder for now, can be activated)
    // Replace '[截图]' placeholders with actual <img> tags if implemented
    // Note: The text uses "[截图]" placeholders. These are kept as text for now.
    /*
    const imageGalleryContainer = content.querySelector('#new-tangqian-gallery-placeholder');
    const imageDir = 'assets/images/debunk/NewTangqianAnalysis/'; // Example directory
    const imageFiles = [ // Example filenames based on text references
        "DaozhuFanlouDialogue.png", // 樊楼道主对话
        "HongsiScrollProof.png", // 洪肆手卷截图 (with highlights if possible)
        "XiaoLuDialogueProof.png", // 小禄对话截图
        "ShaodongZhaoDialogue.png", // 少东家与赵大哥对话
        "GhostMarketTradeProof.png", // 鬼市换粮截图
        "NewTangqianEffectProof.png" // “新的唐钱”作用截图
    ];

    if (imageGalleryContainer && imageFiles.length > 0) {
        imageGalleryContainer.innerHTML = ''; // Clear placeholder
        imageGalleryContainer.className += ' grid grid-cols-2 md:grid-cols-3 gap-4'; // Add grid layout

        imageFiles.forEach(file => {
            const img = document.createElement('img');
            img.src = imageDir + file;
            img.alt = '新唐钱分析证据截图 ' + file.replace('.png', '');
            img.className = 'w-full h-auto rounded-lg shadow-md object-contain bg-gray-200 dark:bg-gray-700';
            img.loading = 'lazy';
            img.onerror = () => { img.alt = `无法加载图片: ${file}`; img.src=''; };
            imageGalleryContainer.appendChild(img);
        });

        setTimeout(() => {
            setupImageGallery(imageGalleryContainer);
        }, 100);
    } else if (imageGalleryContainer) {
        // Keep or modify the placeholder text if no images are added
        imageGalleryContainer.innerHTML = '<p class="text-center text-gray-500 dark:text-gray-400">相关图片暂缺</p>';
    }
    */

    // 组装组件
    container.appendChild(title);
    container.appendChild(content);

    return container;
}

// 初始化函数
export function initNewTangqianAnalysisExact(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.appendChild(createNewTangqianAnalysisExactContent());
    } else {
        console.error(`Container with id "${containerId}" not found for New Tangqian analysis exact content.`);
    }
}

// --- END OF FILE new-tangqian-analysis-exact.js ---