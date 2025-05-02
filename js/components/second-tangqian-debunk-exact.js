// --- START OF FILE second-tangqian-debunk-exact.js ---

/**
 * “第二波唐钱”辟谣分析模块 (原文呈现)
 * 将关于“第二波唐钱”谣言的辟谣分析文本，按照标准UI模块格式进行展示。
 * 实现点击标题展开/收起详细内容的功能。
 */

// 导入通用图片模态框组件
import { setupImageGallery } from '../utils/image-modal.js';

// 创建“第二波唐钱”辟谣分析内容 (原文)
export function createSecondTangqianDebunkExactContent() {
    // 创建主容器
    const container = document.createElement('div');
    container.className = 'bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8';

    // 创建标题（可点击）- 使用原文标题
    const title = document.createElement('h2');
    title.className = 'text-2xl font-bold text-gray-800 dark:text-white mb-4 cursor-pointer flex items-center';
    title.innerHTML = '所谓“第二波唐钱”的相关辟谣。 <svg class="w-6 h-6 ml-2 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';

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
        <h3 class="text-xl font-bold text-gray-700 dark:text-gray-200 mb-3">谣言来源探寻</h3>
        <div class="bg-white dark:bg-gray-600 p-4 rounded-lg shadow-sm space-y-2">
           <p class="text-gray-700 dark:text-gray-300">我前前后后翻了无数次主线、支线、见闻、别录，似乎终于找到了那些关于温无缺和唐钱的谣言来源。</p>
        </div>
      </div>

      <div class="bg-orange-50 dark:bg-orange-900 rounded-lg p-5 border-l-4 border-orange-500 dark:border-orange-400 mb-6">
        <h3 class="text-xl font-bold text-orange-700 dark:text-orange-300 mb-3">百姓无钱状况</h3>
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
            <h4 class="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-1">1.唐钱难用，铜钱难得</h4>
            <p class="text-gray-700 dark:text-gray-300">唐钱不准用、不准带，可开封钱荒，人人皆知，百姓手里还是只能挣到唐钱。</p>
            <p class="text-gray-700 dark:text-gray-300">何不食肉糜？有人吃不起肉，可有人总在吃肉。谁有铜钱用，谣姐，你觉得会是这些百姓吗，甚至连中产阶级都因唐钱策没落了，百姓会有铜钱用吗？</p>
            <p class="text-gray-700 dark:text-gray-300">来源：游戏主线-平地风波-主角与史大阵对话获得。</p>
            <p class="text-gray-700 dark:text-gray-300">来源：游戏主线-平地风波-与角门里百姓对话获得。</p>

            <h4 class="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-1 mt-3">2. 唐钱渐少</h4>
            <p class="text-gray-700 dark:text-gray-300">甚至在唐钱收缴令下，百姓手里的唐钱也越来越少。</p>
            <p class="text-gray-700 dark:text-gray-300">这下不仅是没有铜钱用，甚至连唐钱也留不下。</p>
            <p class="text-gray-700 dark:text-gray-300">来源：游戏主线-平地风波-周寡妇唐钱被收缴以后的台词。</p>
            <p class="text-gray-700 dark:text-gray-300">挣不到铜钱，留不住铜钱，导致百姓手里彻底无钱可用。</p>
            <p class="text-gray-700 dark:text-gray-300">温无缺引进唐钱，导致物价浮动民不聊生的谣言就是在这里传开的。</p>
            <p class="text-gray-700 dark:text-gray-300">有这种谣言，是因为谣姐根本没有看懂主线故事、没有滤清时间线。</p>
        </div>
      </div>

      <div class="bg-yellow-50 dark:bg-yellow-900 rounded-lg p-5 border-l-4 border-yellow-500 dark:border-yellow-400 mb-6">
         <h3 class="text-xl font-bold text-yellow-700 dark:text-yellow-300 mb-3">温无缺运钱动机</h3>
         <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
            <p class="text-gray-700 dark:text-gray-300">温无缺有没有可能运唐钱来京过，有。</p>
            <p class="text-gray-700 dark:text-gray-300">谣姐先别高兴。我来告诉你她为什么会这样做。</p>

            <h4 class="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-1 mt-3">① 交易媒介需求</h4>
            <p class="text-gray-700 dark:text-gray-300">百姓手里没钱，但是交易需要货币。</p>
            <p class="text-gray-700 dark:text-gray-300">截图来源：主线-平地风波-在鬼市与道主重逢时对话获得。</p>
            <p class="text-gray-700 dark:text-gray-300">这，就是谣姐口中的“第二波”唐钱，可这些唐钱用来做什么了？是这些唐钱使的物价泛滥、民不聊生？</p>
            <p class="text-gray-700 dark:text-gray-300">大错特错！</p>

            <h4 class="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-1 mt-3">② “画饼”的伏笔与揭示</h4>
            <p class="text-gray-700 dark:text-gray-300">其实在开封主线最开始，温无缺就告诉过你了。</p>
            <p class="text-gray-700 dark:text-gray-300">截图来源：主线-开封新客-跟随盈盈时选择。</p>
            <p class="text-gray-700 dark:text-gray-300">这里是个可选择项，上面是玩家选了否的回答，下面是玩家选择相信生金瓯的回答。</p>
            <p class="text-gray-700 dark:text-gray-300">这是一个巨大的伏笔，在后续玩家在鬼市子遇到道主时揭露了真相。</p>
         </div>
      </div>

       <div class="bg-lime-50 dark:bg-lime-900 rounded-lg p-5 border-l-4 border-lime-500 dark:border-lime-400 mb-6">
         <h3 class="text-xl font-bold text-lime-700 dark:text-lime-300 mb-3">画饼流程详解</h3>
         <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
            <p class="text-gray-700 dark:text-gray-300">因为她要画饼。</p>
            <p class="text-gray-700 dark:text-gray-300">为什么要画饼？</p>
            <p class="text-gray-700 dark:text-gray-300">因为百姓已经活不下去了，没钱用，没粮吃，孩子只能靠母亲咬破手指来哺育，百姓需要盼头，百姓需要这个饼来充饥。</p>
            <p class="text-gray-700 dark:text-gray-300">于是温无缺画了生金瓯这样一张饼，给了百姓一个精神支柱。</p>
            <p class="text-gray-700 dark:text-gray-300">缕清时间线以后，你会发现拨开云雾见青天。</p>
            <p class="text-gray-700 dark:text-gray-300">编造生金瓯的故事→给百姓一个盼头→在樊楼让许多人亲眼见证生金瓯生金一事→让百姓心里的盼头落实（原来真的有这样的宝物，那我们是不是可以有钱用了）→将唐钱运来角门里（为什么是角门里，因为这里最破最穷）→散唐钱给角门里贫民（这就是为什么角门里的唐钱最多）→编造鬼市传闻，让百姓知道有鬼市这个地方、鬼市可以换粮→彻底达成在鬼市用唐钱换粮、接济开封百姓。</p>
            <p class="text-gray-700 dark:text-gray-300">来源：鬼市子-见闻。</p>
            <p class="text-gray-700 dark:text-gray-300">来源：开封南郊-见闻。</p>
         </div>
       </div>

       <div class="bg-cyan-50 dark:bg-cyan-900 rounded-lg p-5 border-l-4 border-cyan-500 dark:border-cyan-400 mb-6">
         <h3 class="text-xl font-bold text-cyan-700 dark:text-cyan-300 mb-3">“赌局”本质</h3>
         <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
            <p class="text-gray-700 dark:text-gray-300">可是画饼只是画饼，常平仓的粮食也终有尽时，要彻底解决问题，只能上达天听——君王就是这个天。可是天子听不听，这个没人敢定论，因此游戏里文案，才会描述生金瓯计划是个“赌局”，而不是“骗局”。</p>
            <p class="text-gray-700 dark:text-gray-300">温无缺赌的就是这个，赌赵匡胤是不是明君、是不是心系百姓。</p>
         </div>
       </div>

       <div class="bg-indigo-50 dark:bg-indigo-900 rounded-lg p-5 border-l-4 border-indigo-500 dark:border-indigo-400 mb-6">
         <h3 class="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-3">总结：关键问题解答</h3>
         <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
            <p class="text-gray-700 dark:text-gray-300">写个总结。</p>
            <p class="text-gray-700 dark:text-gray-300">为什么要用唐钱换粮？</p>
            <p class="text-gray-700 dark:text-gray-300">因为百姓只能赚到唐钱，温无缺等人也只能搞到唐钱，他们在正常的市场用不出去。</p>
            <p class="text-gray-700 dark:text-gray-300">为什么能用唐钱换粮？</p>
            <p class="text-gray-700 dark:text-gray-300">因为温无缺联合众人打通了鬼市粮道。</p>
            <p class="text-gray-700 dark:text-gray-300">为什么要在鬼市用唐钱换粮？</p>
            <p class="text-gray-700 dark:text-gray-300">因为鬼市是一个三不管地带，官府管不到。</p>
            <p class="text-gray-700 dark:text-gray-300">为什么要“走私”唐钱？</p>
            <p class="text-gray-700 dark:text-gray-300">因为百姓手里无钱可用，需要有钱；因为配合生金瓯计划，给百姓盼头。</p>
            <p class="text-gray-700 dark:text-gray-300">综上所述，是温无缺的“唐钱”让民不聊生的吗？根本不是！！！！！！</p>
            <p class="text-gray-700 dark:text-gray-300">她只是让百姓有钱了、可以流通了、能换到粮食了、不必被饿死了。</p>
            <p class="text-gray-700 dark:text-gray-300">这是一个很明显的前后逻辑关系：</p>
            <p class="text-gray-700 dark:text-gray-300">先有李煜的唐钱引发物价动荡，才会有唐钱策，因为有了唐钱策，才会有百姓手里没钱可用，因为百姓手里无钱可用，才会有鬼市粮道、唐钱在鬼市并且只在鬼市流通。</p>
         </div>
       </div>

       <div class="bg-pink-50 dark:bg-pink-900 rounded-lg p-5 border-l-4 border-pink-500 dark:border-pink-400">
          <h3 class="text-xl font-bold text-pink-700 dark:text-pink-300 mb-3">最终驳斥与佐证</h3>
           <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
             <p class="text-gray-700 dark:text-gray-300">小福等人运来的唐钱，是只能在鬼市用的，外面收着呢姐，外面你揣着唐钱都是犯法要去当苦役的姐。</p>
             <p class="text-gray-700 dark:text-gray-300">把几个事情、几番因果混为一谈，谣姐，你真的看懂开封主线了吗？还是单纯当谣棍习惯了，想吃纸血馒头啊？</p>
             <p class="text-gray-700 dark:text-gray-300">来源：游戏主线-故人重逢，主角与龟奶奶对话获得。</p>
             <p class="text-gray-700 dark:text-gray-300">粮道打通了，怎么让百姓知道这里可以换粮？编一个故事，让百姓知道、相信鬼市，发现有鬼市这个地方，并且在百姓知道鬼市可以用唐钱换粮。</p>
             <p class="text-gray-700 dark:text-gray-300">龟奶奶的鬼故事就是源于此，一共一分钟不到的cg短片，谣姐也不肯沉下心来看一看吗？</p>
           </div>
       </div>

        <!-- 图片库 -->
       <div id="second-tangqian-gallery-placeholder" class="mt-8 pt-6 border-t border-gray-300 dark:border-gray-600">
            <p class="text-center text-gray-500 dark:text-gray-400">相关证据截图</p>
       </div>
    `;

    // 添加图片库逻辑
    const imageGalleryContainer = content.querySelector('#second-tangqian-gallery-placeholder');
    const imageDir = 'assets/images/debunk/Truth of the second/';
    const imageFiles = [
        "图片1.png", "图片2.png", "图片3.png", "图片4.png", "图片5.png", "图片6.png",
        "图片7.png", "图片8.png", "图片9.png", "图片10.png", "图片11.png", "图片12.png",
        "图片13.png", "图片14.png", "图片15.png", "图片16.png"
    ];

    if (imageGalleryContainer && imageFiles.length > 0) {
        imageGalleryContainer.innerHTML = ''; // 清空占位符
        imageGalleryContainer.className = 'mt-8 pt-6 border-t border-gray-300 dark:border-gray-600 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'; // 应用网格布局

        imageFiles.forEach(file => {
            const imgContainer = document.createElement('div');
            imgContainer.className = 'aspect-w-1 aspect-h-1'; // 保持宽高比

            const img = document.createElement('img');
            img.src = imageDir + file;
            img.alt = '第二波唐钱辟谣证据 ' + file.replace('.png', '');
            img.className = 'w-full h-full object-cover rounded-lg shadow-md cursor-pointer transition-transform duration-200 hover:scale-105';
            img.loading = 'lazy';
            img.onerror = () => { 
                img.alt = `无法加载图片: ${file}`; 
                img.src=''; 
                imgContainer.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-lg text-xs text-gray-500 dark:text-gray-400">无法加载 ${file}</div>`;
            }; 
            imgContainer.appendChild(img);
            imageGalleryContainer.appendChild(imgContainer);
        });

        // 图片加载后设置模态框
        setTimeout(() => {
            setupImageGallery(imageGalleryContainer);
        }, 100);
    } else if (imageGalleryContainer) {
        imageGalleryContainer.innerHTML = '<p class="text-center text-gray-500 dark:text-gray-400">相关证据截图暂缺</p>';
    }

    // 组装组件
    container.appendChild(title);
    container.appendChild(content);

    return container;
}

// 初始化函数
export function initSecondTangqianDebunkExact(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.appendChild(createSecondTangqianDebunkExactContent());
    } else {
        console.error(`Container with id "${containerId}" not found for Second Tangqian debunk exact analysis.`);
    }
}

// --- END OF FILE second-tangqian-debunk-exact.js ---