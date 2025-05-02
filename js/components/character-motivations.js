/**
 * 生金瓯计划参与者动机分析模块
 * 实现点击标题展开/收起详细内容的功能，并以适当的UI展示内容
 */

// 导入通用图片模态框组件
import { setupImageGallery } from '../utils/image-modal.js';

// 创建生金瓯计划参与者动机分析内容
export function createCharacterMotivationsContent() {
    // 创建主容器
    const container = document.createElement('div');
    container.className = 'bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8';

    // 创建标题（可点击）
    const title = document.createElement('h2');
    title.className = 'text-2xl font-bold text-gray-800 dark:text-white mb-4 cursor-pointer flex items-center';
    title.innerHTML = '生金瓯计划参与者动机深度分析 <svg class="w-6 h-6 ml-2 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';

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

    // 填充内容 - 根据 relationship between this group of people.doc 改写
    content.innerHTML = `
      <div class="bg-indigo-50 dark:bg-indigo-900 rounded-lg p-5 border-l-4 border-indigo-500 dark:border-indigo-400 mb-6">
        <h3 class="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-3">核心论点：合作基石是真心与共同理想</h3>
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
          <p class="text-gray-700 dark:text-gray-300 mb-2">容鸢、郑鄂、冯夷等人在“心里的开封”CG中已知晓东阙即盈盈。这表明温无缺与他们的合作<strong>并非基于单纯利益，而是“用了真心”</strong>。她告知了他们自己的底细和真正目的——<strong>救开封</strong>。</p>
          <p class="text-gray-700 dark:text-gray-300">他们因这一共同目标和理想而共同策划“生金瓯”计划。所谓的“诛九族小分队”并非反派，他们与赵宋有仇是合作的起点（因），而非终点（果）。</p>
        </div>
      </div>

      <div class="mb-6 bg-cyan-50 dark:bg-cyan-900 rounded-lg p-5 border-l-4 border-cyan-500 dark:border-cyan-400">
        <h3 class="text-xl font-bold text-cyan-700 dark:text-cyan-300 mb-3">参与者动机分析：侠义与善良底色</h3>
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
          <p class="text-gray-700 dark:text-gray-300 mb-3">温无缺联系的人，大多具有侠义之道或善良的底色。</p>

          <div class="mb-4 p-3 bg-gray-50 dark:bg-gray-600 rounded">
             <p class="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-1">容鸢：</p>
             <p class="text-gray-700 dark:text-gray-300 mb-1">她亲眼目睹五牙大舰如“饕餮”般吞噬人力财力，认为必须烧毁，因为百姓等不到它建成之日，且工匠也拿不到工钱。她给弟弟的信中提到“了结歉疚”、“有颜面”，表明其行为超越了单纯的父仇私欲。</p>
           </div>

           <div class="mb-4 p-3 bg-gray-50 dark:bg-gray-600 rounded">
             <p class="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-1">郑鄂：</p>
             <p class="text-gray-700 dark:text-gray-300 mb-1">虽然身负血海深仇，但其底色善良，年少时曾接济沈义伦。</p>
          </div>

           <div class="mb-4 p-3 bg-gray-50 dark:bg-gray-600 rounded">
             <p class="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-1">冯夷 (河伯)：</p>
             <p class="text-gray-700 dark:text-gray-300 mb-1">看似吊儿郎当，但在其妻朱鱼（一位善良的人）的影响下，也受到侠义之道的影响。</p>
          </div>

           <div class="p-3 bg-gray-50 dark:bg-gray-600 rounded">
             <p class="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-1">道主：</p>
             <p class="text-gray-700 dark:text-gray-300 mb-1">九流门本就是心系百姓的门派。</p>
          </div>

        </div>
      </div>

      <div class="bg-lime-50 dark:bg-lime-900 rounded-lg p-5 border-l-4 border-lime-500 dark:border-lime-400">
         <h3 class="text-xl font-bold text-lime-700 dark:text-lime-300 mb-3">共情与计划动机</h3>
         <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
           <p class="text-gray-700 dark:text-gray-300 mb-2">善良之人的共通点在于能够<strong>共情</strong>。他们能看到并共情百姓的苦难，这也是他们加入“生金瓯”计划的原因之一。</p>
           <p class="text-gray-700 dark:text-gray-300">如果仅仅是为了报复赵宋，他们无需选择风险如此之高的“生金瓯”计划，大可与其他反宋势力合作，或坐等唐钱策引发民怨沸腾、官逼民反即可。</p>
           <p class="text-gray-700 dark:text-gray-300 mt-2">因此，该计划的核心驱动力是为了<strong>为民之心</strong>，而非单纯的复仇或利益。</p>
         </div>
      </div>
    `;

    // Add image gallery
    const imageDir = 'assets/images/debunk/CharacterMotivation/';
    const imageFiles = [
        "图片 1.png", "图片 2.png", "图片 3.png", "图片 4.png",
        "图片 5.png", "图片 6.png", "图片 7.png", "图片 8.png"
    ];

    const imageGallery = document.createElement('div');
    imageGallery.className = 'mt-8 pt-6 border-t border-gray-300 dark:border-gray-600 grid grid-cols-2 gap-4'; 
    imageFiles.forEach(file => {
        const img = document.createElement('img');
        img.src = imageDir + file;
        img.alt = '角色动机证据截图 ' + file.replace('.png', '');
        img.className = 'w-full h-auto rounded-lg shadow-md object-contain bg-gray-200 dark:bg-gray-700'; 
        img.loading = 'lazy'; 
        imageGallery.appendChild(img);
    });
    content.appendChild(imageGallery);
    
    // 使用通用图片模态框组件设置图片点击事件
    setTimeout(() => {
      setupImageGallery(imageGallery);
    }, 100); 

    // 组装组件
    container.appendChild(title);
    container.appendChild(content);

    return container;
}

// 初始化函数
export function initCharacterMotivations(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.appendChild(createCharacterMotivationsContent());
    }
}