/**
 * 一叶平生故事辟谣模块
 * 实现点击标题展开/收起详细内容的功能
 */

// 创建一叶平生辟谣内容
export function createYiyepingshengContent() {
  // 创建主容器
  const container = document.createElement('div');
  container.className = 'bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8';
  
  // 创建标题（可点击）
  const title = document.createElement('h2');
  title.className = 'text-2xl font-bold text-gray-800 dark:text-white mb-4 cursor-pointer flex items-center';
  title.innerHTML = '一叶平生故事中百姓之苦的根本原因 <svg class="w-6 h-6 ml-2 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';
  
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
    <p class="text-lg font-semibold text-red-600 dark:text-red-400 mb-2">谣言一：一叶平生支线，那些百姓的惨全是温无缺导致的。</p>
    <p class="text-gray-700 dark:text-gray-300 mb-4">当然不是啊。</p>
    <p class="text-gray-700 dark:text-gray-300 mb-4">一叶平生支线讲的是契丹屠城时期的故事，历史契丹屠城是耶律德光灭后晋入开封的时间点，是公元946年。</p>
    <p class="text-gray-700 dark:text-gray-300 mb-4">而温无缺散发的屠城传言是什么时候？赵匡胤入主开封之前，赵匡胤于960年建宋，与契丹屠城隔了十几年的时间。造谣者把两件事情混为一谈，非蠢即坏。</p>
    <p class="text-gray-700 dark:text-gray-300 mb-4">契丹屠城是真实发生过的事情，一叶平生支线里，有多次提及过时间线。</p>
    <p class="text-gray-700 dark:text-gray-300 mb-6">中间隔了十几年的时间，一叶平生中百姓的苦难大部分都是缘于契丹屠城那一日失去了亲人朋友爱人，造谣者居然把十几年前的锅甩给才来开封两三年的温无缺，是何道理？造谣者，你看懂一叶平生支线了吗？</p>
    
    <p class="text-gray-700 dark:text-gray-300 mb-4">游戏中提到的屠城一共有三个时间节点。</p>
    
    <!-- 时间线UI -->
    <div class="relative py-4">
        <!-- 时间线轴 -->
        <div class="absolute left-0 w-1 h-full bg-blue-500 dark:bg-blue-400"></div>
        
        <!-- 时间点1 -->
        <div class="relative pl-8 mb-8">
            <div class="absolute left-0 w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-400 flex items-center justify-center text-white font-bold">1</div>
            <div class="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
                <p class="text-gray-800 dark:text-gray-200">契丹人屠城【事实】，是一叶平生支线大部分百姓苦难的开始，也是龟奶奶失去相公的时候。时间点为公元946年。</p>
            </div>
        </div>
        
        <!-- 时间点2 -->
        <div class="relative pl-8 mb-8">
            <div class="absolute left-0 w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-400 flex items-center justify-center text-white font-bold">2</div>
            <div class="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
                <p class="text-gray-800 dark:text-gray-200">周太祖郭威入主开封灭汉立后周屠城，是真盈盈死时的时间线。时间点为公元951年。</p>
            </div>
        </div>
        
        <!-- 时间点3 -->
        <div class="relative pl-8">
            <div class="absolute left-0 w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-400 flex items-center justify-center text-white font-bold">3</div>
            <div class="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
                <p class="text-gray-800 dark:text-gray-200">赵匡胤入主开封，温无缺散发屠城【传闻】。时间点为公元960年。</p>
            </div>
        </div>
    </div>
    <p class="text-gray-700 dark:text-gray-300 mb-6">有的人这时候就要说了，哦~你看~温无缺不就是为了赚钱回未央城吗~</p>
    <p class="text-gray-700 dark:text-gray-300 mb-6">请注意，温无缺这个人物是有一个很明显的成长曲线的，简单来讲，你可以理解为她有三个阶段：未央城主东阙-冷血没有同理心，盈盈-小货娘，温无缺完全版-为民发声。</p>
    <p class="text-gray-700 dark:text-gray-300 mb-6">在散发屠城传言之前，她虽然被龟奶奶救了，但她实际上是没有醒悟的，这时候她还是未央城的东阙，是为达成目标不择手段的前任未央城主。</p>
    <p class="text-gray-700 dark:text-gray-300 mb-6">这个时候她其实就是在"还小恩，舍大义"，她只会考虑还恩，不会考虑其他轻信了屠城传言的人会有什么下场。</p>
    <p class="text-gray-700 dark:text-gray-300 mb-6">一叶平生里唯一与她有关的不平事就是这里，她是在谋划了屠城传言以后，看见了那些因她流离失所的难民，才开始醒悟的。</p>
    <p class="text-gray-700 dark:text-gray-300 mb-6">屠城传闻这件事，是温无缺整个人生的分界线。在此之间，她是想回未央城的人，是商人，是东阙。在此之前她做过许许多多的恶事，直接或者间接死在她手里的人也有很多。我从来不会否认这些事情。</p>
    <p class="text-gray-700 dark:text-gray-300 mb-6">可是在她目睹财库真相以后、承认自己曾经罪大恶极以后，她的"良心"又慢慢长了出来。</p>
    <p class="text-gray-700 dark:text-gray-300 mb-6">自960年以后的所有时间线里，温无缺无论主观客观，再也没有做过一件与民众利益相左的事情。</p>
    
    <!-- 一叶平生支线相关图片 -->
    <div class="mt-6 mb-8">
        <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-4">相关游戏截图：</h3>
        <div class="grid grid-cols-2 gap-4">
            <div class="overflow-hidden rounded-lg shadow-md">
                <img src="assets/images/debunk/yiyepingsheng/1.png" alt="一叶平生截图1" class="w-full h-auto">
            </div>
            <div class="overflow-hidden rounded-lg shadow-md">
                <img src="assets/images/debunk/yiyepingsheng/2.png" alt="一叶平生截图2" class="w-full h-auto">
            </div>
            <div class="overflow-hidden rounded-lg shadow-md">
                <img src="assets/images/debunk/yiyepingsheng/3.png" alt="一叶平生截图3" class="w-full h-auto">
            </div>
            <div class="overflow-hidden rounded-lg shadow-md">
                <img src="assets/images/debunk/yiyepingsheng/4.png" alt="一叶平生截图4" class="w-full h-auto">
            </div>
            <div class="overflow-hidden rounded-lg shadow-md">
                <img src="assets/images/debunk/yiyepingsheng/5.png" alt="一叶平生截图5" class="w-full h-auto">
            </div>
            <div class="overflow-hidden rounded-lg shadow-md">
                <img src="assets/images/debunk/yiyepingsheng/6.png" alt="一叶平生截图6" class="w-full h-auto">
            </div>
            <div class="overflow-hidden rounded-lg shadow-md">
                <img src="assets/images/debunk/yiyepingsheng/7.png" alt="一叶平生截图7" class="w-full h-auto">
            </div>
            <div class="overflow-hidden rounded-lg shadow-md">
                <img src="assets/images/debunk/yiyepingsheng/8.png" alt="一叶平生截图8" class="w-full h-auto">
            </div>
            <div class="overflow-hidden rounded-lg shadow-md">
                <img src="assets/images/debunk/yiyepingsheng/9.png" alt="一叶平生截图9" class="w-full h-auto">
            </div>
            <div class="overflow-hidden rounded-lg shadow-md">
                <img src="assets/images/debunk/yiyepingsheng/10.png" alt="一叶平生截图10" class="w-full h-auto">
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
export function initYiyepingsheng(containerId) {
  const container = document.getElementById(containerId);
  if (container) {
    container.appendChild(createYiyepingshengContent());
  }
}
