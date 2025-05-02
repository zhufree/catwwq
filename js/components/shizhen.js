// --- START OF FILE shi-zhen-analysis.js ---

/**
 * 史鸩黑化与温无缺关系辨析模块
 * 分析史鸩的经历与转变，澄清与温无缺相关的争议点。
 * 实现点击标题展开/收起详细内容的功能。
 */

// 导入通用图片模态框组件 (保留以备将来使用，虽然此模块当前未使用)
import { setupImageGallery } from '../utils/image-modal.js';

// 创建史鸩分析内容
export function createShiZhenAnalysisContent() {
    // 创建主容器
    const container = document.createElement('div');
    container.className = 'bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8';

    // 创建标题（可点击）
    const title = document.createElement('h2');
    title.className = 'text-2xl font-bold text-gray-800 dark:text-white mb-4 cursor-pointer flex items-center';
    // Title reflects the core question from the text
    title.innerHTML = '黑财神史鸩的黑化全是温无缺的锅？是温无缺直接性导致史鸩的黑化？ <svg class="w-6 h-6 ml-2 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';

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

    content.innerHTML = `
    <div class="bg-amber-50 dark:bg-amber-900 rounded-lg p-5 border-l-4 border-amber-500 dark:border-amber-400 mb-6">
      <h3 class="text-xl font-bold text-amber-700 dark:text-amber-300 mb-3">疑问一：生意归属：史鸩前身小商人史真的生意，是温无缺抢走的吗？</h3>
      <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
        <p class="text-gray-700 dark:text-gray-300">剧情里并没有实锤是温无缺抢走了他的生意。抢走他生意的是未央城。未央城是什么地方？吃人的地方，这里面不止有【当时的温无缺】一个为利吃人的利益至上的商人，未央城光是公子都有N个，抢去他生意的，不一定是温无缺，是温家，是未央城。这里文案也写得很清楚，是“温家”仇人，温家是仇人的定语，是用来修饰“仇人”照这个中心语的。是表明所有“温家人”，都被史鸩认为是他的仇人。这里的温家人是一个统称，而不是具体的某个人，不是特指温无缺。如果确定是温无缺抢走的他的生意，这里完全不需要使用这个定语，直接写仇人就可以了。</p>
        <p class="text-gray-700 dark:text-gray-300">史鸩人物志里也数次强调，是未央城看上了史鸩的生意，这里的未央城是一个利益集合体，是所有温家人，是整个未央城。而不是某个实实在在的具体的人。</p>
        <p class="text-gray-700 dark:text-gray-300">造谣者，不会连什么是定语，什么是中心语都不知道就出来造谣式阅读理解了吧？</p>
      </div>
    </div>

    <div class="mb-6 bg-teal-50 dark:bg-teal-900 rounded-lg p-5 border-l-4 border-teal-500 dark:border-teal-400">
      <h3 class="text-xl font-bold text-teal-700 dark:text-teal-300 mb-3">疑问二：黑化责任：史真黑化为史鸩，全是温无缺的锅吗？</h3>
      <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
        <p class="text-gray-700 dark:text-gray-300">史鸩被未央城吞并生意以后，开始黑化投靠温无痕，直接导致温无缺失势，他以为自己可以得到报酬，却没想到狡兔死走狗烹，被温无痕嘲笑讥讽，因此彻底黑化。</p>
        <p class="text-gray-700 dark:text-gray-300">史鸩的黑化是分为两步的，就跟他的前尘旧物标题写的一样。失去谋生生意，是其一；为温无痕当走狗令温无缺失势，本以为是大功臣却被温无痕一脚踢开，是其二。</p>
        <p class="text-gray-700 dark:text-gray-300">文案中用了一个短句“想到这里”，已经解释得很清晰。</p>
      </div>
    </div>

     <div class="bg-indigo-50 dark:bg-indigo-900 rounded-lg p-5 border-l-4 border-indigo-500 dark:border-indigo-400">
       <h3 class="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-3">剧情联系与解读</h3>
       <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
         <p class="text-gray-700 dark:text-gray-300">温无缺与史鸩的直接性联系，可以实锤的只有那块玉珏，其实这是编剧的巧思，曾经被看作是恶狗的人现在成为了上位者，曾经讥讽别人是恶狗的人，现在失去一切成了走街串巷的那个小贩。</p>
         <p class="text-gray-700 dark:text-gray-300">曾经的温无缺有没有在敛财途中害过人？有。</p>
         <p class="text-gray-700 dark:text-gray-300">一定是史鸩吗？未必。</p>
         <p class="text-gray-700 dark:text-gray-300">未央城时期的温无缺的确是一个没有同理心的商人，因此她闯出死局成为了未央城主。但她得到的所有其实都已经得到了相应的报应：唯一的软肋是母亲，失去了母亲。得到了未央城主之位，被人用极其残忍的手段踹了下来。看不起底层人民笑他们是恶犬，被曾经看作是恶犬的人狠狠咬下了位。她和史鸩的剧情安排，是对比，是反转，是交换。曾经的可怜底层人成了真的走狗恶犬，曾经的恶人商人现在学会了反思，明确了自己曾经“实在罪大恶极”。</p>
         <p class="text-gray-700 dark:text-gray-300">史鸩因着未央城的收购活不下去，也因着抢到了温无缺丢的玉珏得以东山再起。这明明是很有宿命感的剧情安排，居然被没看懂的人当成了造谣黑的手段。</p>
         <p class="text-gray-700 dark:text-gray-300">↑这里的仇家上述我已经解释清楚，所有“温家人”，都被史鸩认为是他的仇人。</p>
         <p class="text-gray-700 dark:text-gray-300">这里文案再次佐证：“你们温家”。</p>
       </div>
    </div>
  `;
    // 相关图片证据
    const imageGalleryHTML = `
      <div class="mt-8 pt-6 border-t border-gray-300 dark:border-gray-600" id="shizhen-image-gallery">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">相关图片证据</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="assets/images/debunk/shizhen/1.png" alt="史鸩分析证据 1" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/shizhen/2.png" alt="史鸩分析证据 2" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/shizhen/3.png" alt="史鸩分析证据 3" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/shizhen/4.png" alt="史鸩分析证据 4" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/shizhen/5.png" alt="史鸩分析证据 5" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/shizhen/6.png" alt="史鸩分析证据 6" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/shizhen/7.png" alt="史鸩分析证据 7" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
          <img src="assets/images/debunk/shizhen/8.png" alt="史鸩分析证据 8" class="rounded-lg shadow-md w-full hover:opacity-90 transition-opacity">
        </div>
      </div>
    `;

    // 将图片库HTML添加到内容末尾
    content.insertAdjacentHTML('beforeend', imageGalleryHTML);

    // 组装组件
    container.appendChild(title);
    container.appendChild(content);

    // 使用通用图片模态框组件设置图片点击事件
    setTimeout(() => {
      const imageGallery = content.querySelector('#shizhen-image-gallery');
      if (imageGallery) {
        setupImageGallery(imageGallery);
      }
    }, 100);

    return container;
}

// 初始化函数
export function initShiZhenAnalysis(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.appendChild(createShiZhenAnalysisContent());
    } else {
        console.error(`Container with id "${containerId}" not found for Shi Zhen analysis.`);
    }
}

// --- END OF FILE shi-zhen-analysis.js ---