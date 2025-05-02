// 主要的JavaScript文件，用于加载和初始化组件
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { initYiyepingsheng } from './components/yiyepingsheng.js'; // 导入一叶平生模块
import { initWwqAim } from './components/wwq-aim.js';
import { initGameOfInterest } from './components/game-of-interests.js';
import { initWhyTakeLiquor } from './components/why-take-liquor.js';
import { initWhatDidLiquorGet } from './components/what-did-liquor-get.js'
import { initFigureZhangCuoAndGay } from './components/figure-zhangcuo-and-gay.js';
import { initTangqianAnalysis } from './components/tangqian.js';
// 初始化函数
function init() {
    // 加载Header组件
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        const header = new Header();
        headerContainer.appendChild(header.render());
    }
    
    // 加载Footer组件
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        const footer = new Footer();
        footerContainer.appendChild(footer.render());
    }
    
    // 初始化一叶平生辟谣模块（如果容器存在）
    initYiyepingsheng('yiyepingsheng-container');
    initWwqAim('wwq-aim-container');
    initGameOfInterest('game-of-interests-container')
    initWhyTakeLiquor('why-take-liquor-container')
    initWhatDidLiquorGet('what-did-liquor-get-container')
    initFigureZhangCuoAndGay('figure-zhangcuo-and-gay-container')
    initTangqianAnalysis('tangqian-container')
}

// 当DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', init);
