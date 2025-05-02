// --- START OF FILE zhao-wen-debate-exact.js ---

/**
 * 温无缺与赵氏辩论分析模块 (原文呈现)
 * 将 2.bianlun.txt 的原文内容，按照标准UI模块格式进行展示。
 * 实现点击标题展开/收起详细内容的功能。
 */

// 导入通用图片模态框组件
import { setupImageGallery } from '../utils/image-modal.js';

// 创建温无缺与赵氏辩论分析内容 (原文)
export function createZhaoWenDebateExactContent() {
    // 创建主容器
    const container = document.createElement('div');
    container.className = 'bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8';

    // 创建标题（可点击）- 使用原文首行
    const title = document.createElement('h2');
    title.className = 'text-2xl font-bold text-gray-800 dark:text-white mb-4 cursor-pointer flex items-center';
    title.innerHTML = '七、温无缺与赵光义的辩论。 <svg class="w-6 h-6 ml-2 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';

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

    // 填充内容 - 直接使用 2.bianlun.txt 的原文
    content.innerHTML = `
      <div class="bg-purple-50 dark:bg-purple-900 rounded-lg p-5 border-l-4 border-purple-500 dark:border-purple-400 mb-6">
        <h3 class="text-xl font-bold text-purple-700 dark:text-purple-300 mb-3">核心观点：立场碰撞</h3>
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
          <p class="text-gray-700 dark:text-gray-300">她们二人之间，本来就没有绝对的对错，她们之间的辩论，是统治阶级和被统治阶级的辩论，是英雄史观和人民史观的碰撞。我不评价对错，我只表述我的立场。我甚至从来没有批判过赵二，一直都在说我非常喜欢这段文戏。站在赵二的角度上来说，唐钱令是罪在当代利在千秋。但没有谁能千秋万代，没有哪个朝代会永世流传。</p>
        </div>
      </div>

      <div class="mb-6 bg-sky-50 dark:bg-sky-900 rounded-lg p-5 border-l-4 border-sky-500 dark:border-sky-400">
        <h3 class="text-xl font-bold text-sky-700 dark:text-sky-300 mb-3">人民立场：历史创造者</h3>
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
          <p class="text-gray-700 dark:text-gray-300">我们有唐宋元明清，我们的上下五千年经历了数十次的改朝换代。</p>
          <p class="text-gray-700 dark:text-gray-300">千秋万代的只有人民。是人民创造了历史、决定了历史，从来不是哪个君、哪个王、哪个皇亲国戚。</p>
          <p class="text-gray-700 dark:text-gray-300">想要统御天下，必须、首先，要顺应民心。得民心者才能得天下。那些人们、那些具体的人们，是只有眼前这短暂的一生的。倘若没有这些百姓黎民，哪来的什么千秋万代？没有人民，谁能千秋万代？那么凭什么牺牲的就应该是他们，来成就这所谓千秋万代？</p>
          <p class="text-gray-700 dark:text-gray-300">倘若被牺牲的是你，你是会继续这么恨温无缺，还是会希望有这么一个人来告诉那个罔顾民意、高高在上的统治者：</p>
          <p class="text-gray-700 dark:text-gray-300 pl-4">生而微末者，当真无声吗？</p>
        </div>
      </div>

      <div class="mb-6 bg-green-50 dark:bg-green-900 rounded-lg p-5 border-l-4 border-green-500 dark:border-green-400">
        <h3 class="text-xl font-bold text-green-700 dark:text-green-300 mb-3">赵匡胤的抉择</h3>
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
          <p class="text-gray-700 dark:text-gray-300">赵匡胤是英雄、是明君，但他也有很多不能决断之事，所以对唐钱策，他是睁一只眼闭一只眼的，但他同时也很犹豫，所以才会微服私访想要知道这样到底行不行。</p>
          <p class="text-gray-700 dark:text-gray-300">是温无缺和少东家把答案呈现在他眼前了。</p>
        </div>
      </div>

      <div class="mb-6 bg-orange-50 dark:bg-orange-900 rounded-lg p-5 border-l-4 border-orange-500 dark:border-orange-400">
         <h3 class="text-xl font-bold text-orange-700 dark:text-orange-300 mb-3">南征争议</h3>
         <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
           <p class="text-gray-700 dark:text-gray-300">还有那些喷因为温无缺导致赵宋不能南征的人，你真的看懂了吗，你真的知道为什么赵大会</p>
           <p class="text-gray-700 dark:text-gray-300">明确告诉赵二、告诉你：“这样不行。”吗？</p>
           <p class="text-gray-700 dark:text-gray-300">此时不南征，只要国富民足、民心安定，总有一日可以再南征。</p>
           <p class="text-gray-700 dark:text-gray-300">但倘若不顾民怨强行南征，又真的就能顺利平定、一统南北吗？</p>
           <p class="text-gray-700 dark:text-gray-300">恐怕王侯将相宁有种乎、“天下云集响应”的可能性会更大一点吧？</p>
           <p class="text-gray-700 dark:text-gray-300">都说舍一时，可这一时要多久，谁能断言？谁敢断言？</p>
           <p class="text-gray-700 dark:text-gray-300">那些朝朝代代在龙椅上被人高呼万岁的人，没有哪一个能真的万岁，唯有人民万岁。</p>
         </div>
      </div>

       <div class="mb-6 bg-yellow-50 dark:bg-yellow-900 rounded-lg p-5 border-l-4 border-yellow-500 dark:border-yellow-400">
         <h3 class="text-xl font-bold text-yellow-700 dark:text-yellow-300 mb-3">补充：唐钱收缴后果</h3>
         <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
            <p class="text-gray-700 dark:text-gray-300">补充一些朝廷暴力收缴唐钱下，民怨四起，百姓失望。</p>
            <p class="text-gray-700 dark:text-gray-300">在唐钱暴力收缴之下，百姓困苦，对新朝（即赵宋）失望，而赵大是个明君，他就是亲眼看到了唐钱收缴的错误，认识到生金瓯只是个虚无的饼，而国家信用才是真正的聚宝盆。因此叫停唐钱策，接受东阙公子温无缺的谏言、开国库安民。</p>
            <p class="text-gray-700 dark:text-gray-300">（东阙公子献上了真正的聚宝盆）</p>
            <p class="text-gray-700 dark:text-gray-300">（官家接收东阙谏言）</p>
         </div>
       </div>

       <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-5 border-l-4 border-gray-500 dark:border-gray-400">
         <h3 class="text-xl font-bold text-gray-700 dark:text-gray-200 mb-3">结论：民本思想与历史回响</h3>
         <div class="bg-white dark:bg-gray-600 p-4 rounded-lg shadow-sm space-y-2">
           <p class="text-gray-700 dark:text-gray-300">现在回顾开封主线将画面对准天地熔炉时的那首西江月，“古来功业入青书，谁向寻常回顾。”史书几行笔墨，寻常多少无名，黎庶无名，黎庶亦有名。功业以民为骨，寻常事才是天下事。</p>
           <p class="text-gray-700 dark:text-gray-300">自古以来，无数次历史教训已经证明。民为邦本，本固则邦宁。得民心者才能得天下，若失民心，则天下危矣。</p>
         </div>
      </div>

       <!-- Placeholder for Image Gallery -->
       <div id="zhao-wen-image-gallery-placeholder" class="mt-8 pt-6 border-t border-gray-300 dark:border-gray-600">
            <p class="text-center text-gray-500 dark:text-gray-400">（相关图片暂缺）</p>
            <!-- Image elements would be added here dynamically if available -->
       </div>
    `;

    // Note: This text doesn't explicitly mention "[图片]", but we retain the gallery structure.
    // Example setup if images were relevant:
    /*
    const imageGalleryContainer = content.querySelector('#zhao-wen-image-gallery-placeholder');
    const imageDir = 'assets/images/debunk/ZhaoWenDebate/'; // Example directory
    const imageFiles = [ // Example filenames
        "TangQianSuffering1.png", "ZhaoKuangyinHesitation.png",
        "WenWuqueAdvice.png", "TreasuryOpen.png"
    ];

    if (imageGalleryContainer && imageFiles.length > 0) {
        imageGalleryContainer.innerHTML = ''; // Clear placeholder
        imageGalleryContainer.className += ' grid grid-cols-2 gap-4'; // Add grid layout

        imageFiles.forEach(file => {
            const img = document.createElement('img');
            img.src = imageDir + file;
            img.alt = '辩论相关证据截图 ' + file.replace('.png', '');
            img.className = 'w-full h-auto rounded-lg shadow-md object-contain bg-gray-200 dark:bg-gray-700';
            img.loading = 'lazy';
            img.onerror = () => { img.alt = `无法加载图片: ${file}`; img.src=''; };
            imageGalleryContainer.appendChild(img);
        });

        setTimeout(() => {
            setupImageGallery(imageGalleryContainer);
        }, 100);
    } else if (imageGalleryContainer) {
        imageGalleryContainer.innerHTML = '<p class="text-center text-gray-500 dark:text-gray-400">相关图片暂缺</p>';
    }
    */

    // 组装组件
    container.appendChild(title);
    container.appendChild(content);

    return container;
}

// 初始化函数
export function initZhaoWenDebateExact(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.appendChild(createZhaoWenDebateExactContent());
    } else {
        console.error(`Container with id "${containerId}" not found for Zhao-Wen debate exact analysis.`);
    }
}

// --- END OF FILE zhao-wen-debate-exact.js ---