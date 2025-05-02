// --- START OF FILE tangqian-pusher-debunk.js ---

/**
 * 驳斥“温无缺是唐钱推手/南唐奸细”论调模块 (原文呈现)
 * 将 3.tuishou.txt 的原文内容，按照标准UI模块格式进行展示，驳斥相关谣言。
 * 实现点击标题展开/收起详细内容的功能。
 */

// 导入通用图片模态框组件
import { setupImageGallery } from '../utils/image-modal.js';

// 创建驳斥唐钱推手论调的内容 (原文)
export function createTangqianPusherDebunkContent() {
    // 创建主容器
    const container = document.createElement('div');
    container.className = 'bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8';

    // 创建标题（可点击）- 使用原文首个问题作为标题
    const title = document.createElement('h2');
    title.className = 'text-2xl font-bold text-gray-800 dark:text-white mb-4 cursor-pointer flex items-center';
    // Use the exact first question from the text as the title
    title.innerHTML = '温无缺本来就是唐钱推手之一？是南唐派来搅混水的？ <svg class="w-6 h-6 ml-2 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';

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

    // 填充内容 - 直接使用 3.tuishou.txt 的原文
    content.innerHTML = `
      <div class="bg-red-50 dark:bg-red-900 rounded-lg p-5 border-l-4 border-red-500 dark:border-red-400 mb-6">
        <h3 class="text-xl font-bold text-red-700 dark:text-red-300 mb-3">引言与立场</h3>
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
          <p class="text-gray-700 dark:text-gray-300">首先：我对赵光义大义小义的说辞，其实挺感兴趣的，我认为他和温无缺的争论，是开封主线文戏的巅峰，在宏观上，我无论他说的对错，我可以理解他的选择。因此这里我不拉踩任何纸片人，只针对这个造谣者的发言进行反驳。</p>
        </div>
      </div>


      <div class="bg-orange-50 dark:bg-orange-900 rounded-lg p-5 border-l-4 border-orange-500 dark:border-orange-400 mb-6">
        <h3 class="text-xl font-bold text-orange-700 dark:text-orange-300 mb-3">1、唐钱收缴令辨析</h3>
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
           <p class="text-gray-700 dark:text-gray-300">唐钱收缴令是一边收缴唐钱一边还铜钱吗？</p>
           <p class="text-gray-700 dark:text-gray-300">放nmdp。这姐真的一点主线都没看懂，一点暗涌都不理解。断章取义就跑出来造谣式科普，你是真又蠢又菜又贩剑。唐钱收缴令，是指收唐钱的同时不还钱，只收，不给，是为收缴令。</p>
           <p class="text-gray-700 dark:text-gray-300">哪怕你自己看不懂暗涌，看不懂剧情，自己说的话理一理行吗？两段话之间逻辑狗屁不通前后矛盾，如果唐钱收缴令是还了钱，百姓还会“苦”吗，赵光义还会有“骂名”吗？如果一开始唐钱就是收了又还，那还有这么多矛盾这么多苦难这么多民不聊生吗？还会有最后赵匡胤说“这样不行”，还会有主线最后的换钱吗？</p>
           <p class="text-gray-700 dark:text-gray-300">还会有百姓手里没有铜钱用吗？</p>
        </div>
      </div>

       <div class="mb-6 bg-yellow-50 dark:bg-yellow-900 rounded-lg p-5 border-l-4 border-yellow-500 dark:border-yellow-400">
        <h3 class="text-xl font-bold text-yellow-700 dark:text-yellow-300 mb-3">军费是否充足？</h3>
         <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
           <p class="text-gray-700 dark:text-gray-300">Q:赵宋南征的军费早就够了？</p>
           <p class="text-gray-700 dark:text-gray-300">A：那你猜猜为什么会有金明池飞花宴，你猜猜为什么赵二要宴请各方使臣？</p>
           <p class="text-gray-700 dark:text-gray-300">如果已经够了，还需要筹备吗？如果随时可以南下，赵大赵二何许人也，还需要相信“生金瓯”这种虚无缥缈的东西来解决开荒钱荒吗？</p>
         </div>
       </div>

       <div class="mb-6 bg-lime-50 dark:bg-lime-900 rounded-lg p-5 border-l-4 border-lime-500 dark:border-lime-400">
         <h3 class="text-xl font-bold text-lime-700 dark:text-lime-300 mb-3">唐钱（老钱）流通真相</h3>
         <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
            <p class="text-gray-700 dark:text-gray-300">那你猜猜，老钱怎么用，为什么还能用？</p>
            <p class="text-gray-700 dark:text-gray-300">老钱，你是指唐钱对吧。整个开封剧情，包括主线支线，只提到过几次唐钱还能用的事情。一次是周寡妇说：唐钱也有唐钱的用法。</p>
            <p class="text-gray-700 dark:text-gray-300">那么唐钱怎么用？</p>
            <p class="text-gray-700 dark:text-gray-300">去鬼市里换粮食。</p>
            <p class="text-gray-700 dark:text-gray-300">为什么要用唐钱换粮食？</p>
            <p class="text-gray-700 dark:text-gray-300">因为百姓手里只有唐钱。</p>
            <p class="text-gray-700 dark:text-gray-300">为什么能用唐钱换粮食？</p>
            <p class="text-gray-700 dark:text-gray-300">因为温无缺联合道主河伯容鸢郑愕，将粮食运来了鬼市，将不允许流通的唐钱，作为了在鬼市流通的货币。</p>
            <p class="text-gray-700 dark:text-gray-300">怎么样啊，忽然发现，老钱能用居然还是温无缺做的事情，是不是很崩溃啊~~~</p>
            <p class="text-gray-700 dark:text-gray-300">赵宋禁止唐钱流通的佐证（我真的服了，我没想到这么明显的事情居然还要去找证据）：</p>
            <p class="text-gray-700 dark:text-gray-300">看到了吗，带唐钱就是犯罪，就要去没收仗责甚至被拉去熔炉当苦役哦。</p>
            <p class="text-gray-700 dark:text-gray-300">赵宋睁一只眼闭一只眼的观点，姐，你哪来的？</p>
         </div>
       </div>

       <div class="mb-6 bg-cyan-50 dark:bg-cyan-900 rounded-lg p-5 border-l-4 border-cyan-500 dark:border-cyan-400">
         <h3 class="text-xl font-bold text-cyan-700 dark:text-cyan-300 mb-3">时间线铁证</h3>
         <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
           <p class="text-gray-700 dark:text-gray-300">唐钱进入开封有两波，是东阙和南烛合作搞的鬼。</p>
           <p class="text-gray-700 dark:text-gray-300">时间线的铁证：</p>
           <p class="text-gray-700 dark:text-gray-300">首先，唐钱搞崩赵宋经济，让开封通货膨胀陷入钱荒，是李煜即位后做的事情。</p>
           <p class="text-gray-700 dark:text-gray-300">李煜什么时候即位的？建隆二年，也就是游戏现在的时间线前一年。</p>
           <p class="text-gray-700 dark:text-gray-300">而温无缺什么时候来开封的？</p>
           <p class="text-gray-700 dark:text-gray-300">人物志里很明确表明了，温无缺是在“赵匡胤入主开封”之前就已经流落到了开封。</p>
           <p class="text-gray-700 dark:text-gray-300">她是李唐派来搅局的吗？人来的时候李煜都还不是江南国主好吗？</p>
           <p class="text-gray-700 dark:text-gray-300">其次，她是什么时候才开始谋划生金瓯计划的？不好意思哦，人物志里也写得很清楚了。</p>
           <p class="text-gray-700 dark:text-gray-300">“唐钱收缴之策兴”，“这世道不该如此”，“她要离家一趟”。</p>
           <p class="text-gray-700 dark:text-gray-300">是因为目睹了唐钱令之后百姓的生存状况，她才决定重新成为东阙的好吗？把唐钱的锅扣在她的头上，是何道理啊？</p>
           <p class="text-gray-700 dark:text-gray-300">搞得清先后吗？是先有唐钱入京，才有唐钱收缴令，最后才有温无缺的生金瓯计划。</p>
           <p class="text-gray-700 dark:text-gray-300">这一点在她的人物传记里已经写得很清晰了——</p>
           <p class="text-gray-700 dark:text-gray-300">“此生若能如此，倒也足矣。”</p>
           <p class="text-gray-700 dark:text-gray-300">“这世道不该这样。”</p>
           <p class="text-gray-700 dark:text-gray-300">你看，无脑黑的成本多简单，连人物传记都不用看，张口一喷，仿佛事实就既定了。</p>
           <p class="text-gray-700 dark:text-gray-300">温无缺是东阙，但温无缺不一定非得是东阙。甚至新的活动里，似乎东阙公子这个名头，也被温无痕鸠占鹊巢、李代桃僵。</p>
           <p class="text-gray-700 dark:text-gray-300">她是为了天下万民，选择、决定，再次成为东阙——在此之前，她明明可以只当盈盈了，不是吗？</p>
           <p class="text-gray-700 dark:text-gray-300">其实捋清楚事情的时间线所有答案都有了。</p>
           <p class="text-gray-700 dark:text-gray-300">温无缺失势流落开封→赵匡胤建宋→李煜即位让唐钱流入开封→赵宋施行唐钱策→目睹百姓苦难温无缺决定出手→温无缺联系李煜郑愕容鸢道主洛神河伯等人→主角进开封。</p>
           <p class="text-gray-700 dark:text-gray-300">所以温无缺到底怎么就成为唐钱的推手了啊。</p>
           <p class="text-gray-700 dark:text-gray-300">所以温无缺到底怎么就成为唐钱的推手了啊。</p>
           <p class="text-gray-700 dark:text-gray-300">所以温无缺到底怎么就成为唐钱的推手了啊。</p>
         </div>
       </div>

       <div class="mb-6 bg-blue-50 dark:bg-blue-900 rounded-lg p-5 border-l-4 border-blue-500 dark:border-blue-400">
         <h3 class="text-xl font-bold text-blue-700 dark:text-blue-300 mb-3">驳斥“多波唐钱”论</h3>
         <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
            <p class="text-gray-700 dark:text-gray-300">大姐你说的什么第一波第二波唐钱，麻烦你给我找出具体的证据出来哦，游戏里从头到尾就没有提到过第二波唐钱，空口无凭就造个谣出来抹黑纸片人，这种事你也做得出来啊？</p>
         </div>
       </div>

       <div class="bg-violet-50 dark:bg-violet-900 rounded-lg p-5 border-l-4 border-violet-500 dark:border-violet-400 mb-6">
          <h3 class="text-xl font-bold text-violet-700 dark:text-violet-300 mb-3">关于“洗白”与角色评价</h3>
          <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-2">
            <p class="text-gray-700 dark:text-gray-300">什么是洗白，是否认角色做过的所有事情，叫洗白。</p>
            <p class="text-gray-700 dark:text-gray-300">我从来没有做过这种事情，我坦然承认温无缺曾经是一个利益至上主义者，是商人，是在吃人的未央城也吃过人的人。</p>
            <p class="text-gray-700 dark:text-gray-300">但她现在不是。</p>
            <p class="text-gray-700 dark:text-gray-300">她醒悟以后，她没有任何一件事情对不起天下万民，她所谋划的所有计划，做出的所有选择，都是为了开封万民。</p>
            <p class="text-gray-700 dark:text-gray-300">没有任何“下场”、“局面”，是因为现在的她导致的。</p>
            <p class="text-gray-700 dark:text-gray-300">你自己写造谣黑帖也就罢了，看到有人辟谣立刻删除拉黑，这才叫捂嘴。</p>
            <p class="text-gray-700 dark:text-gray-300">如果你知晓了所有的事情，还是喜欢不上这个角色，这是没有任何问题的。因为这个游戏的大多数角色都不是非黑即白的，哪怕是不顾底层人民的赵二，哪怕是恶贯满盈的孙不弃，甚至哪怕是绣金楼主唐哀帝，他们都有自己的初衷，都有自己的见解。你可以理解并且接受，可以喜欢，固然是好事，但如果实在理解不了喜欢不上，那也无妨。</p>
            <p class="text-gray-700 dark:text-gray-300">但请不要造谣抹黑歪曲事实断章取义。</p>
            <p class="text-gray-700 dark:text-gray-300">我承认温无缺的曾经，也请你不要否认温无缺的现在。她凭什么不配说苍生无言侠为其声，她凭什么不配说微末小民死亦无声？</p>
            <p class="text-gray-700 dark:text-gray-300">她配说得很。</p>
            <p class="text-gray-700 dark:text-gray-300">你才是不配评价她的那个人。</p>
          </div>
       </div>

       <!-- 图片库容器 -->
       <div id="tangqian-pusher-gallery" class="mt-8 pt-6 border-t border-gray-300 dark:border-gray-600"></div>
    `;

    // 填充图片库
    const imageDir = 'assets/images/debunk/tuishou/'; // 图片目录
    const imageFiles = [ // 图片文件名列表
        "图片1.png", "图片2.png", "图片3.png", "图片4.png", "图片5.png",
        "图片6.png", "图片7.png", "图片8.png", "图片9.png", "图片10.png",
        "图片11.png", "图片12.png", "图片13.png", "图片14.png", "图片15.png",
        "图片16.png", "图片17.png", "图片18.png", "图片19.png", "图片20.png",
        "图片21.png", "图片22.png", "图片23.png", "图片24.png"
    ];

    // 获取图片库容器
    const imageGalleryContainer = content.querySelector('#tangqian-pusher-gallery');

    if (imageGalleryContainer && imageFiles.length > 0) {
        imageGalleryContainer.innerHTML = ''; // 清空可能存在的占位符
        imageGalleryContainer.className += ' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'; // 应用网格布局

        imageFiles.forEach(file => {
            const imgContainer = document.createElement('div');
            imgContainer.className = 'aspect-w-1 aspect-h-1'; // 保持宽高比

            const img = document.createElement('img');
            img.src = imageDir + file;
            img.alt = '唐钱推手论调驳斥证据 ' + file.replace('.png', '');
            img.className = 'w-full h-full object-cover rounded-lg shadow-md cursor-pointer transition-transform duration-200 hover:scale-105';
            img.loading = 'lazy';
            img.onerror = () => { 
                img.alt = `无法加载图片: ${file}`; 
                img.src=''; // 避免显示损坏的图片图标
                imgContainer.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-lg text-xs text-gray-500 dark:text-gray-400">无法加载 ${file}</div>`;
            }; // 基础错误处理
            imgContainer.appendChild(img);
            imageGalleryContainer.appendChild(imgContainer);
        });

        // 图片加载后设置模态框
        // 使用 setTimeout 确保图片元素已添加到 DOM
        setTimeout(() => {
          setupImageGallery(imageGalleryContainer);
        }, 100);
    } else if (imageGalleryContainer) {
         imageGalleryContainer.innerHTML = '<p class="text-center text-gray-500 dark:text-gray-400">相关图片暂缺</p>';
    }

    // 组装组件
    container.appendChild(title);
    container.appendChild(content);

    return container;
}

// 初始化函数
export function initTangqianPusherDebunk(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.appendChild(createTangqianPusherDebunkContent());
    } else {
        console.error(`Container with id "${containerId}" not found for Tangqian Pusher debunk analysis.`);
    }
}

// --- END OF FILE tangqian-pusher-debunk.js ---