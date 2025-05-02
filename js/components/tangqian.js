/**
 * 唐钱案深度解析模块
 * 实现点击标题展开/收起详细内容的功能，并以适当的UI展示内容
 */

// 导入通用图片模态框组件
import { setupImageGallery } from '../utils/image-modal.js';

// 创建唐钱案分析内容
export function createTangqianAnalysisContent() {
    // 创建主容器
    const container = document.createElement('div');
    container.className = 'bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8'; // [cite: 1]

    // 创建标题（可点击）
    const title = document.createElement('h2');
    title.className = 'text-2xl font-bold text-gray-800 dark:text-white mb-4 cursor-pointer flex items-center'; // [cite: 1]
    title.innerHTML = '唐钱案深度解析：时间线、影响与辟谣 <svg class="w-6 h-6 ml-2 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>'; // [cite: 1]

    // 创建内容区域（默认隐藏）
    const content = document.createElement('div');
    content.className = 'mb-6 hidden'; // [cite: 1]

    // 添加点击事件
    title.addEventListener('click', () => { // [cite: 1]
      content.classList.toggle('hidden'); // [cite: 1]
      // 旋转箭头
      const arrow = title.querySelector('svg'); // [cite: 1]
      arrow.classList.toggle('rotate-180'); // [cite: 1]
    });

    // 填充内容 - 根据 tangqian.txt 改写
    content.innerHTML = `
      <div class="bg-yellow-50 dark:bg-yellow-900 rounded-lg p-5 border-l-4 border-yellow-500 dark:border-yellow-400 mb-6">
        <h3 class="text-xl font-bold text-yellow-700 dark:text-yellow-300 mb-3">核心结论</h3>
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
          <p class="text-gray-700 dark:text-gray-300">唐钱引进导致的民不聊生与温无缺<strong>无关</strong>。物价动荡主因是李煜即位时的经济战政策。温无缺及道主后续引入的部分唐钱，是在官方收缴、百姓无钱可用后，以“生金瓯”为名，用于在鬼市接济贫民换粮维生的。<strong>顺序是：李煜经济战 → 唐钱收缴令 → 百姓无钱可用 → 温无缺/道主等人运钱入鬼市换粮。</strong></p>
        </div>
      </div>

      <div class="mb-6 bg-blue-50 dark:bg-blue-900 rounded-lg p-5 border-l-4 border-blue-500 dark:border-blue-400">
        <h3 class="text-xl font-bold text-blue-700 dark:text-blue-300 mb-3">一、唐钱传入时间铁证：建隆二年 (公元961年) 李煜即位后</h3>
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
          <p class="text-gray-700 dark:text-gray-300 mb-2"><strong>首次唐钱入京时间点：</strong> 李煜即位时（开封主线两年前）。游戏文案明确指出唐钱从此时“开始”进入开封。（来源：游戏-武林录-明暗故事-暗涌-庙堂-唐钱进京；或与NPC吴价对话）</p>
          <p class="text-gray-700 dark:text-gray-300 mb-2"><strong>首次入京影响：</strong> 直接“导致”开封物价不稳，通货膨胀。这也是赵宋开始收缴唐钱的原因。</p>
          <p class="text-gray-700 dark:text-gray-300 mb-2"><strong>李煜在此事件中的行为：</strong></p>
          <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300">
            <li class="mb-1">大肆锻造唐钱，使其大量入京。</li>
            <li class="mb-1">与绣金楼合作，利用史鸩暴力收缴唐钱，激化官民矛盾，图谋赵宋内乱。（史鸩“功不可没”，来源：赵大哥人物志）</li>
            <li class="mb-1">创作《乞怜歌》，制造舆论，意图迫使赵宋开国库安民，消耗其国力。</li>
          </ul>
           <p class="text-gray-700 dark:text-gray-300 mt-2"><strong>结论：</strong> 两年前李煜即位 → 唐钱入京 → 联合史鸩暴力收缴 → 官民矛盾 → 民不聊生。 (此为“旧唐钱”)</p>
        </div>
      </div>

      <div class="mb-6 bg-purple-50 dark:bg-purple-900 rounded-lg p-5 border-l-4 border-purple-500 dark:border-purple-400">
        <h3 class="text-xl font-bold text-purple-700 dark:text-purple-300 mb-3">二、旧唐钱进京的缘由与影响</h3>
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
          <p class="text-gray-700 dark:text-gray-300 mb-2"><strong>李煜动机：</strong></p>
           <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li class="mb-1"><strong>外忧：</strong> 宋太祖意图统一南北，对江南构成威胁。（来源：博物志-拾遗-博识；武林录-庙堂-雪夜定策；金明池支线顾彝对话）赵宋以平荆湖为名要求江南数次岁贡，使江南“早已倾尽国力”。</li>
              <li class="mb-1"><strong>内患：</strong> 江南饥荒，饿殍遍野。（来源：开封地图临津渡NPC李鼎对话）</li>
           </ul>
           <p class="text-gray-700 dark:text-gray-300 mt-2">为图自保，李煜发动经济战，通过唐钱扰乱开封经济，延缓赵宋南征步伐。同时发动舆论战（《乞怜歌》），迫使赵宋在民心与军饷间抉择。（来源：武林录-暗涌-庙堂-飞花宴；开封新客主线与盈盈对话）</p>
          <p class="text-gray-700 dark:text-gray-300 mt-3"><strong>旧唐钱流入后果：</strong> 导致开封通货膨胀，货币贬值，物价不稳。（来源：武林录-暗涌-庙堂-唐钱进京）</p>
        </div>
      </div>

      <div class="mb-6 bg-red-50 dark:bg-red-900 rounded-lg p-5 border-l-4 border-red-500 dark:border-red-400">
        <h3 class="text-xl font-bold text-red-700 dark:text-red-300 mb-3">三、赵宋对旧唐钱的举措 (“唐钱策”) 及其后果</h3>
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
           <p class="text-gray-700 dark:text-gray-300 mb-2"><strong>应对措施：</strong> 强硬收缴唐钱，只收不还。（来源：武林录-暗涌-庙堂、未知）</p>
          <p class="text-gray-700 dark:text-gray-300 mb-2"><strong>具体收缴手段：</strong></p>
           <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li class="mb-1">官兵大肆收缴。（主线一天内遇三起）</li>
              <li class="mb-1">制定严苛法律，禁止唐钱流通。</li>
              <li class="mb-1">严厉处罚，使百姓不敢带、用唐钱。（主线商贩拒收唐钱）</li>
           </ul>
           <p class="text-gray-700 dark:text-gray-300 mt-3"><strong>唐钱策后果：</strong></p>
           <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li class="mb-1">赵宋避免开国库，保住军饷，但牺牲民生。</li>
              <li class="mb-1">百姓苦不堪言，生存艰难。影响波及平民、中产、行商、实业等各阶层，经济流通受阻。（来源：武林录各区域见闻）</li>
           </ul>
        </div>
      </div>

      <div class="mb-6 bg-green-50 dark:bg-green-900 rounded-lg p-5 border-l-4 border-green-500 dark:border-green-400">
        <h3 class="text-xl font-bold text-green-700 dark:text-green-300 mb-3">四、鬼市粮道的开通 (温无缺的应对)</h3>
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
           <p class="text-gray-700 dark:text-gray-300 mb-2"><strong>背景：</strong> 官府收缴唐钱，百姓赚到的钱既犯法又无法使用，面临生存危机。</p>
           <p class="text-gray-700 dark:text-gray-300 mb-2"><strong>温无缺策划“生金瓯”计划，打通鬼市粮道：</strong></p>
           <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li class="mb-1"><strong>解决粮食来源：</strong> 安排郑愕替代沈义伦（曾上书放粮被拒）任常平使。郑愕因世仇有心反宋而合作。（来源：武林录-暗涌-暗影-李代桃僵/南巡遇刺；众生-平野原-见闻；达安村-见闻；武林录-暗涌-暗影-善恶之思）</li>
              <li class="mb-1"><strong>解决运粮人手/线人：</strong> 联系容鸢（因父仇合作），使金明池官兵替代常平仓士兵，助郑愕掌控常平仓并开挖地下粮道。（来源：相关支线/奇遇）</li>
              <li class="mb-1"><strong>解决粮道修建：</strong> 联系河伯（因妻仇/天上来地位合作）协助开通粮道。（来源：相关支线）</li>
              <li class="mb-1"><strong>解决粮食市场：</strong> 联系道主薛丑（九流门心系百姓）策划鬼市，使唐钱能在鬼市购买粮食。（来源：九流门相关任务/门规）</li>
           </ul>
            <p class="text-gray-700 dark:text-gray-300 mt-3"><strong>辟谣关键：</strong> 多数合作者有个人仇恨动机，而温无缺的动机是解救百姓于水火。（来源：武林录-暗涌-鬼市粮道；书信-东阙公子亲启；主线与道主对话；博物志-别录-两个傻子）质疑者应正视游戏原文证据。</p>
        </div>
      </div>

     <div class="mb-6 bg-orange-50 dark:bg-orange-900 rounded-lg p-5 border-l-4 border-orange-500 dark:border-orange-400">
        <h3 class="text-xl font-bold text-orange-700 dark:text-orange-300 mb-3">五、所谓“第二波唐钱”的相关辟谣 (“新唐钱”)</h3>
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
           <p class="text-gray-700 dark:text-gray-300 mb-2"><strong>谣言来源误区：</strong> 未理清时间线，混淆了李煜旧唐钱与温无缺/道主引入的新唐钱。</p>
           <p class="text-gray-700 dark:text-gray-300 mb-2"><strong>事实：</strong></p>
           <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li class="mb-1"><strong>百姓缺钱：</strong> 唐钱被禁、被收缴，铜钱稀缺，百姓手里无钱可用，连唐钱都留不住。（来源：主线与史大阵/角门里百姓/周寡妇对话）</li>
              <li class="mb-1"><strong>温无缺为何引入“新唐钱”：</strong>
                  <ul class="list-disc pl-5 mt-1">
                    <li>为鬼市交易提供货币，百姓需钱买粮。（来源：主线与道主对话）</li>
                    <li>配合“生金瓯”计划画饼，给绝望的百姓一个盼头和精神支柱。（来源：主线-开封新客选项；鬼市子-见闻；开封南郊-见闻）</li>
                  </ul>
              </li>
              <li class="mb-1"><strong>新唐钱用途：</strong> 仅在鬼市流通换粮，接济贫民。并非引发物价动荡的原因。（来源：主线与小禄/道主对话；鬼市相关见闻）</li>
           </ul>
           <p class="text-gray-700 dark:text-gray-300 mt-3"><strong>逻辑链：</strong> 李煜旧唐钱引发动荡 → 唐钱策导致百姓无钱 → 温无缺等人引入新唐钱于鬼市流通换粮。</p>
           <p class="text-gray-700 dark:text-gray-300 mt-2">将民不聊生归咎于温无缺引入的新唐钱，完全是颠倒因果。</p>
        </div>
      </div>

      <div class="bg-teal-50 dark:bg-teal-900 rounded-lg p-5 border-l-4 border-teal-500 dark:border-teal-400">
        <h3 class="text-xl font-bold text-teal-700 dark:text-teal-300 mb-3">六、新唐钱入京时间线及温无缺立场</h3>
        <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
           <p class="text-gray-700 dark:text-gray-300 mb-2"><strong>新唐钱入京时间：</strong> “近日”、“这几天”、“昨儿”，即开封主线生金瓯失窃案发生期间。（来源：樊楼主线偷听道主；洪肆手卷；主线与赵大哥对话）</p>
           <p class="text-gray-700 dark:text-gray-300 mb-2"><strong>与李煜旧唐钱时间对比：</strong> 旧唐钱是两年前李煜即位时引入，引发经济战；新唐钱是近期配合生金瓯计划引入，用于救济。</p>
          <p class="text-gray-700 dark:text-gray-300 mb-2"><strong>新唐钱用途佐证：</strong></p>
           <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300">
             <li class="mb-1">在鬼市换粮。</li>
             <li class="mb-1">让百姓有钱用，“过活”。（游戏文案明确区分“旧唐钱”致民不聊生，“新唐钱”让百姓过活）</li>
           </ul>
           <p class="text-gray-700 dark:text-gray-300 mt-3"><strong>温无缺立场：</strong></p>
            <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300">
             <li class="mb-1">与李煜目的不同，温无缺仅需《乞怜歌》引君王垂怜，李煜则希望越乱越好。（来源：暗涌“公子与‘公子’”）</li>
             <li class="mb-1">并非站在特定国家立场，而是为了底层百姓 (“他们”)。（来源：游戏内台词）</li>
           </ul>
           <p class="text-gray-700 dark:text-gray-300 mt-3"><strong>完整时间线概要：</strong> 李煜旧唐钱入京 (两年前) → 赵宋收缴 → 史鸩激化矛盾 → 温无缺受影响 → 谋划生金瓯 → 樊楼“生金”表演 (近日) → 监守自盗 → 散发新唐钱 (近日) → 编造鬼市故事 → 史鸩收缴新唐钱 → 周寡妇背刺 → 赵匡胤叫停唐钱策 (近日)。</p>
           <p class="text-gray-700 dark:text-gray-300 mt-2">生金瓯失踪是计划一部分，既为代贡，也为给百姓精神支柱。温无缺是在进行一场赌局，赌赵匡胤是否心系百姓。</p>
        </div>
      </div>
    `; //

    // Add image gallery
    const imageDir = 'assets/images/tangqian/';
    const imageFiles = [
        "唐钱1041.png", "唐钱1085.png", "唐钱1087.png", "唐钱1088.png", "唐钱1157.png",
        "唐钱1262.png", "唐钱1313.png", "唐钱1315.png", "唐钱1364.png", "唐钱1366.png",
        "唐钱1368.png", "唐钱1370.png", "唐钱1573.png", "唐钱1607.png", "唐钱1673.png",
        "唐钱1675.png", "唐钱1677.png", "唐钱1766.png", "唐钱1768.png", "唐钱1770.png",
        "唐钱1848.png", "唐钱1866.png", "唐钱1890.png", "唐钱1929.png", "唐钱1955.png",
        "唐钱2047.png", "唐钱2080.png", "唐钱2113.png", "唐钱2150.png", "唐钱2397.png",
        "唐钱2448.png", "唐钱2469.png", "唐钱2513.png", "唐钱2526.png", "唐钱2652.png",
        "唐钱2776.png", "唐钱2794.png", "唐钱2848.png", "唐钱2850.png", "唐钱2902.png",
        "唐钱2904.png", "唐钱306.png", "唐钱3096.png", "唐钱3098.png", "唐钱3116.png",
        "唐钱3132.png", "唐钱3159.png", "唐钱3186.png", "唐钱3452.png", "唐钱3454.png",
        "唐钱348.png", "唐钱3548.png", "唐钱3602.png", "唐钱3626.png", "唐钱3804.png",
        "唐钱3806.png", "唐钱3914.png", "唐钱3916.png", "唐钱3978.png", "唐钱4011.png",
        "唐钱4305.png", "唐钱4318.png", "唐钱4775.png", "唐钱4876.png", "唐钱5009.png",
        "唐钱5113.png", "唐钱5157.png", "唐钱5361.png", "唐钱5378.png", "唐钱5588.png",
        "唐钱5611.png", "唐钱5879.png", "唐钱5895.png", "唐钱5917.png", "唐钱5948.png",
        "唐钱6004.png", "唐钱6026.png", "唐钱6063.png", "唐钱6065.png", "唐钱6067.png",
        "唐钱6093.png", "唐钱6117.png", "唐钱6145.png", "唐钱6178.png", "唐钱6360.png",
        "唐钱6426.png", "唐钱6428.png", "唐钱652.png", "唐钱654.png", "唐钱656.png",
        "唐钱729.png", "唐钱778.png", "唐钱802.png", "唐钱992.png"
    ];

    const imageGallery = document.createElement('div');
    imageGallery.className = 'mt-8 pt-6 border-t border-gray-300 dark:border-gray-600 grid grid-cols-2 gap-4'; // Added top border and responsive grid
    imageFiles.forEach(file => {
        const img = document.createElement('img');
        img.src = imageDir + file;
        img.alt = '唐钱证据截图 ' + file.replace('.png', '');
        img.className = 'w-full h-auto rounded-lg shadow-md object-contain bg-gray-200 dark:bg-gray-700'; // Added background for better visibility
        img.loading = 'lazy'; // Lazy load images
        imageGallery.appendChild(img);
    });
    content.appendChild(imageGallery); // Append gallery to the content div

    // 组装组件
    container.appendChild(title);
    container.appendChild(content);
    
    // 使用通用图片模态框组件设置图片点击事件
    setTimeout(() => {
        setupImageGallery(imageGallery);
    }, 100);

    return container;
}

// 初始化函数
export function initTangqianAnalysis(containerId) { // [cite: 1]
    const container = document.getElementById(containerId);
    if (container) {
        container.appendChild(createTangqianAnalysisContent());
    }
}
