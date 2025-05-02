// --- START OF FILE old-tangqian-analysis-exact.js ---

/**
 * 旧唐钱进京缘由与影响分析模块 (原文呈现)
 * 将关于旧唐钱进京缘由与影响的分析文本，按照标准UI模块格式进行展示。
 * 实现点击标题展开/收起详细内容的功能。
 */

// 导入通用图片模态框组件
import { setupImageGallery } from '../utils/image-modal.js';

// 创建旧唐钱分析内容 (原文)
export function createOldTangqianAnalysisExactContent() {
    // 创建主容器
    const container = document.createElement('div');
    container.className = 'bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8';

    // 创建标题（可点击）- 使用原文标题
    const title = document.createElement('h2');
    title.className = 'text-2xl font-bold text-gray-800 dark:text-white mb-4 cursor-pointer flex items-center';
    title.innerHTML = '旧唐钱进京的缘由、影响 <svg class="w-6 h-6 ml-2 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';

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
      <div class="mb-6 bg-yellow-50 dark:bg-yellow-900 rounded-lg p-5 border-l-4 border-yellow-500 dark:border-yellow-400">
        <h4 class="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-3">外忧分析</h4>
         <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
           <p class="text-gray-700 dark:text-gray-300">外忧：宋太祖赵匡雄韬武略，有意一统南北。</p>
           <p class="text-gray-700 dark:text-gray-300">游戏内文案铁证：（来源游戏-博物志-拾遗-博识）</p>
           <p class="text-gray-700 dark:text-gray-300">游戏内文案铁证其二：（来源游戏-武林录-庙堂-雪夜定策），完成游戏内奇遇可以解锁本条暗涌。</p>
           <p class="text-gray-700 dark:text-gray-300">江南鲥鱼隐喻江南国，燕北羯羊隐喻契丹。</p>
           <p class="text-gray-700 dark:text-gray-300">赵宋以平荆湖内乱为由，要求江南数次岁贡。</p>
           <p class="text-gray-700 dark:text-gray-300">截图来源：游戏-金明池支线，顾彝为江南使臣。防止有人看不懂，我额外补充一句，他没说完的话是什么？是“实在是没钱了，实在是贡不起了。”</p>
           <p class="text-gray-700 dark:text-gray-300">江南为何会危在旦夕？其一，为进贡一事“早已倾尽国力”。其二，荆湖毗邻江南，一旦赵宋以平乱之机深入长江以南，江南自难安枕——卧榻之侧，岂容他人酣睡？</p>
           <p class="text-gray-700 dark:text-gray-300">游戏内动机铁证：（来源游戏-武林录-暗涌-庙堂-飞花宴）</p>
           <p class="text-gray-700 dark:text-gray-300">防止有人看不懂，特地标注：南征不是指平乱荆湖，而是征江南。</p>
           <p class="text-gray-700 dark:text-gray-300">荆湖之战的历史评价：（来源百度百科）</p>
         </div>
      </div>

       <div class="mb-6 bg-amber-50 dark:bg-amber-900 rounded-lg p-5 border-l-4 border-amber-500 dark:border-amber-400">
        <h4 class="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-3">② 内患分析</h4>
         <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
           <p class="text-gray-700 dark:text-gray-300">②内患：江南饥荒，饿殍遍野。（来源游戏-开封地图-临津渡-游戏时间白天内，与NPC李鼎对话）</p>
         </div>
       </div>

       <div class="mb-6 bg-lime-50 dark:bg-lime-900 rounded-lg p-5 border-l-4 border-lime-500 dark:border-lime-400">
         <h4 class="text-lg font-semibold text-lime-800 dark:text-lime-200 mb-3">缘由总结与策略</h4>
         <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
            <p class="text-gray-700 dark:text-gray-300">内忧外患之下，李煜为图自保，被迫开展经济战，大铸唐钱使其流入开封，使开封陷入通货膨胀，直接影响开封经济发展，延缓赵宋南下步伐。</p>
            <p class="text-gray-700 dark:text-gray-300">此外，李煜还采用了舆论战，想使赵宋先开库安民，开国库来应对经济战。这是一个阳谋，你赵宋不顾民生、执意南下，那就失了民心。你要民心，那就要失去军饷。无论赵宋怎么选择，江南总是受益的，失去民心，赵宋就可能内乱；失去军饷，江南就能得一时喘息。</p>
            <p class="text-gray-700 dark:text-gray-300">《乞怜歌》便是他写来创造舆论的。</p>
            <p class="text-gray-700 dark:text-gray-300">李煜即位大铸唐钱铁证：（来源游戏-开封新客主线-与盈盈对话）</p>
         </div>
       </div>

       <div class="bg-red-50 dark:bg-red-900 rounded-lg p-5 border-l-4 border-red-500 dark:border-red-400">
         <h3 class="text-xl font-bold text-red-700 dark:text-red-300 mb-3">2. 唐钱流入的后果</h3>
          <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
            <p class="text-gray-700 dark:text-gray-300">2、李煜使唐钱大肆流入开封后的后果。</p>
            <p class="text-gray-700 dark:text-gray-300">导致通货膨胀、货币不保值、物价不稳定。</p>
            <p class="text-gray-700 dark:text-gray-300">游戏文案描述铁证：（武林录-暗涌-庙堂-唐钱进京）</p>
          </div>
       </div>

       <!-- 图片库 -->
       <div id="old-tangqian-gallery-placeholder" class="mt-8 pt-6 border-t border-gray-300 dark:border-gray-600"></div>
    `;

    // 添加图片库逻辑
    const imageGalleryContainer = content.querySelector('#old-tangqian-gallery-placeholder');
    const imageDir = 'assets/images/debunk/Evidence of the first introduction/'; // 使用指定目录
    const imageFiles = [ // 图片文件名列表
        "图片1.png", "图片2.png", "图片3.png", "图片4.png", 
        "图片5.png", "图片6.png", "图片7.png", "图片8.png"
    ];

    if (imageGalleryContainer && imageFiles.length > 0) {
        imageGalleryContainer.innerHTML = ''; // 清空占位符
        imageGalleryContainer.className = 'mt-8 pt-6 border-t border-gray-300 dark:border-gray-600 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'; // 应用网格布局

        imageFiles.forEach(file => {
            const imgContainer = document.createElement('div');
            imgContainer.className = 'aspect-w-1 aspect-h-1'; // 保持宽高比

            const img = document.createElement('img');
            img.src = imageDir + file;
            img.alt = '旧唐钱缘由影响证据 ' + file.replace('.png', ''); // 更新alt文本
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
        // 如果没有图片，可以保留或修改占位符文本
        imageGalleryContainer.innerHTML = '<p class="text-center text-gray-500 dark:text-gray-400">相关证据截图暂缺</p>';
    }

    // 组装组件
    container.appendChild(title);
    container.appendChild(content);

    return container;
}

// 初始化函数
export function initOldTangqianAnalysisExact(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.appendChild(createOldTangqianAnalysisExactContent());
    } else {
        console.error(`Container with id "${containerId}" not found for Old Tangqian analysis exact content.`);
    }
}

// --- END OF FILE old-tangqian-analysis-exact.js ---