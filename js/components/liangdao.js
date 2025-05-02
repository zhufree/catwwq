// --- START OF FILE liangdao.js ---

/**
 * 鬼市粮道开通分析模块 (原文呈现)
 * 将关于鬼市粮道开通的分析文本，按照标准UI模块格式进行展示。
 * 实现点击标题展开/收起详细内容的功能。
 */

// 导入通用图片模态框组件
import { setupImageGallery } from '../utils/image-modal.js';

// 创建鬼市粮道分析内容 (原文)
export function createLiangDaoContent() {
    // 创建主容器
    const container = document.createElement('div');
    container.className = 'bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8';

    // 创建标题（可点击）- 使用原文标题
    const title = document.createElement('h2');
    title.className = 'text-2xl font-bold text-gray-800 dark:text-white mb-4 cursor-pointer flex items-center';
    title.innerHTML = '鬼市粮道的开通 <svg class="w-6 h-6 ml-2 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';

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
        <h3 class="text-xl font-bold text-gray-700 dark:text-gray-200 mb-3">背景：百姓困境</h3>
        <div class="bg-white dark:bg-gray-600 p-4 rounded-lg shadow-sm space-y-2">
          <p class="text-gray-700 dark:text-gray-300">官服收唐钱，百姓只能赚到唐钱，赚到的唐钱还是犯法的、不能带不能用的，会被官府当街收缴的，怎么办？</p>
          <p class="text-gray-700 dark:text-gray-300">没铜钱买粮，甚至连唐钱也要被收缴，岂不是只能饿死吗？</p>
          <p class="text-gray-700 dark:text-gray-300">温无缺是在这时候站出来策划生金瓯的。</p>
          <p class="text-gray-700 dark:text-gray-300">她做了几件事。</p>
        </div>
      </div>

      <div class="bg-teal-50 dark:bg-teal-900 rounded-lg p-5 border-l-4 border-teal-500 dark:border-teal-400 mb-6">
        <h3 class="text-xl font-bold text-teal-700 dark:text-teal-300 mb-3">1. 解决粮食来源：郑愕取代沈义伦</h3>
         <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
           <p class="text-gray-700 dark:text-gray-300">1、使郑愕替沈义伦之位。</p>
           <p class="text-gray-700 dark:text-gray-300">截图来源：武林录-暗涌-暗影-李代桃僵。</p>
           <p class="text-gray-700 dark:text-gray-300">原因其一：正牌沈义伦曾上书让朝廷开仓放粮，被朝廷拒绝。</p>
           <p class="text-gray-700 dark:text-gray-300">来源：武林录-暗涌-暗影-南巡遇刺。</p>
           <p class="text-gray-700 dark:text-gray-300">来源：众生-平野原-见闻。</p>
           <p class="text-gray-700 dark:text-gray-300">总结：正规途径OA被拒。</p>
           <p class="text-gray-700 dark:text-gray-300">原因其二：郑愕与承恩镇世仇。</p>
           <p class="text-gray-700 dark:text-gray-300">来源：达安村-见闻。</p>
           <p class="text-gray-700 dark:text-gray-300">来源：武林录-暗涌-暗影-善恶之思。</p>
           <p class="text-gray-700 dark:text-gray-300">总结：郑愕因郑氏世仇，有心反宋，因此答应加入生金瓯计划。这里还有温无缺联系洛神换脸的事情，我在离人泪分析中有说过，不再赘述。</p>
           <p class="text-gray-700 dark:text-gray-300">至此，温无缺解决了粮食来源的问题。</p>
         </div>
      </div>

       <div class="bg-cyan-50 dark:bg-cyan-900 rounded-lg p-5 border-l-4 border-cyan-500 dark:border-cyan-400 mb-6">
        <h3 class="text-xl font-bold text-cyan-700 dark:text-cyan-300 mb-3">2. 解决运粮人手：联系容鸢</h3>
         <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
           <p class="text-gray-700 dark:text-gray-300">2、联系容鸢，使金明池官兵，逐渐替代常平仓士兵。</p>
           <p class="text-gray-700 dark:text-gray-300">目的：使郑愕得以稳坐常平使之位。使郑愕有实权将常平仓地下挖空，开始运粮。</p>
           <p class="text-gray-700 dark:text-gray-300">至此，温无缺解决了运粮的人手、线人问题。</p>
           <p class="text-gray-700 dark:text-gray-300">容鸢答应生金瓯计划缘由：父仇。（这里金明池支线、容鸢奇遇有详细解释，因为我已经写得很长，此处不再赘述，有兴趣的可以自行了解。）</p>
         </div>
       </div>

       <div class="bg-blue-50 dark:bg-blue-900 rounded-lg p-5 border-l-4 border-blue-500 dark:border-blue-400 mb-6">
         <h3 class="text-xl font-bold text-blue-700 dark:text-blue-300 mb-3">3. 解决粮道修建：联系河伯</h3>
          <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
            <p class="text-gray-700 dark:text-gray-300">3、联系河伯，协助开通粮道。</p>
            <p class="text-gray-700 dark:text-gray-300">河伯答应生金瓯计划缘由：妻仇、天上来渡地位。（这里天上来支线、万古一人殿支线有详细解释，我不再赘述。）</p>
            <p class="text-gray-700 dark:text-gray-300">至此，温无缺解决了粮道的修建问题。</p>
          </div>
       </div>

        <div class="bg-purple-50 dark:bg-purple-900 rounded-lg p-5 border-l-4 border-purple-500 dark:border-purple-400 mb-6">
         <h3 class="text-xl font-bold text-purple-700 dark:text-purple-300 mb-3">4. 解决粮食市场：联系道主</h3>
          <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
            <p class="text-gray-700 dark:text-gray-300">4、联系道主（薛丑），策划鬼市，使粮食在鬼市得以用唐钱购买。</p>
            <p class="text-gray-700 dark:text-gray-300">道主（薛丑）答应缘由：九流门本来就是一个心系百姓的门派，这里九流门相关任务、 门规有详细阐述，我不再赘述。</p>
            <p class="text-gray-700 dark:text-gray-300">至此，温无缺解决了粮食的市场问题。</p>
          </div>
       </div>

       <div class="bg-pink-50 dark:bg-pink-900 rounded-lg p-5 border-l-4 border-pink-500 dark:border-pink-400">
          <h3 class="text-xl font-bold text-pink-700 dark:text-pink-300 mb-3">结论与反思</h3>
           <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
             <p class="text-gray-700 dark:text-gray-300">鬼市粮道由此彻底打通。</p>
             <p class="text-gray-700 dark:text-gray-300">根据上诉1、2、3、4，谣姐，你是不是发现了一个问题，大部分的人【我没有说全部】，都有各自的原因：世仇、父仇、妻恨，而温无缺呢？</p>
             <p class="text-gray-700 dark:text-gray-300">李煜和温无缺的通信我在上一个辟谣贴已经详细解释，此处不再赘述。我只贴游原文。</p>
             <p class="text-gray-700 dark:text-gray-300">这些游戏里写得清清楚楚、明明白白、板上钉钉的事情，造谣者是看不懂，还是不愿意信？！为什么不能正视事实，为什么要活在自己的臆想里，为什么要对一个纸片人造谣、抹黑、猎巫？！</p>
             <p class="text-gray-700 dark:text-gray-300">造谣者难不成认为你比和温无缺筹划了整个开封赌局的郑愕、道主更了解温无缺吗？</p>
           </div>
       </div>

        <!-- 图片库 -->
       <div id="liangdao-gallery-container" class="mt-8 pt-6 border-t border-gray-300 dark:border-gray-600"></div>
    `;

    // 添加图片库逻辑
    const imageGalleryContainer = content.querySelector('#liangdao-gallery-container');
    const imageDir = 'assets/images/debunk/LiangDao/';
    const imageFiles = [
        "图片1.png", "图片2.png", "图片3.png", "图片4.png", "图片5.png", "图片6.png",
        "图片7.png", "图片8.png", "图片9.png", "图片10.png", "图片11.png", "图片12.png",
        "图片13.png", "图片14.png", "图片15.png", "图片16.png", "图片17.png", "图片18.png"
    ];

    if (imageGalleryContainer && imageFiles.length > 0) {
        imageGalleryContainer.innerHTML = ''; // 清空占位符
        imageGalleryContainer.className = 'mt-8 pt-6 border-t border-gray-300 dark:border-gray-600 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'; // 应用网格布局

        imageFiles.forEach(file => {
            const imgContainer = document.createElement('div');
            imgContainer.className = 'aspect-w-1 aspect-h-1'; // 保持宽高比

            const img = document.createElement('img');
            img.src = imageDir + file;
            img.alt = '鬼市粮道证据 ' + file.replace('.png', '');
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
export function initLiangDao(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.appendChild(createLiangDaoContent());
    } else {
        console.error(`Container with id "${containerId}" not found for Liang Dao analysis.`);
    }
}

// --- END OF FILE liangdao.js ---