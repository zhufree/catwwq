// 主要的JavaScript文件，用于加载和初始化组件
import Header from './components/Header.js';
import Footer from './components/Footer.js';

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
}

// 当DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', init);
