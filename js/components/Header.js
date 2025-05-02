// Header组件
import { toggleDarkMode, initDarkMode } from '../darkMode.js';

export default class Header {
    constructor() {
        this.isDarkMode = initDarkMode();
    }

    // 渲染Header组件
    render() {
        const headerEl = document.createElement('div');
        headerEl.className = 'bg-white dark:bg-gray-800 shadow-md transition-colors duration-300';
        
        const container = document.createElement('div');
        container.className = 'container mx-auto px-4 py-3 flex items-center justify-between';
        
        // 左侧放置yingying图片
        const leftImgContainer = document.createElement('div');
        leftImgContainer.className = 'flex items-center';
        
        const yingyingImg = document.createElement('img');
        yingyingImg.src = './assets/images/yingying.png';
        yingyingImg.alt = 'Yingying';
        yingyingImg.className = 'h-12 w-12 object-cover rounded-full';
        leftImgContainer.appendChild(yingyingImg);
        
        // 中间导航链接
        const nav = document.createElement('nav');
        nav.className = 'flex space-x-8';
        
        // 首页入口
        const homeLink = document.createElement('a');
        homeLink.href = './index.html';
        homeLink.className = 'nav-link text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors duration-300';
        homeLink.textContent = '首页';
        
        // 谣言入口
        const rumorsLink = document.createElement('a');
        rumorsLink.href = './rumors.html';
        rumorsLink.className = 'nav-link text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors duration-300';
        rumorsLink.textContent = '谣言';
        
        // 辟谣入口
        const factCheckLink = document.createElement('a');
        factCheckLink.href = './debunk.html';
        factCheckLink.className = 'nav-link text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors duration-300';
        factCheckLink.textContent = '辟谣';
        
        // 添加导航链接到导航栏
        nav.appendChild(homeLink);
        nav.appendChild(rumorsLink);
        nav.appendChild(factCheckLink);
        
        // 右侧容器，包含暗黑模式按钮和wuque图片
        const rightContainer = document.createElement('div');
        rightContainer.className = 'flex items-center space-x-4';
        
        // 暗黑模式切换按钮
        const darkModeBtn = document.createElement('button');
        darkModeBtn.className = 'p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600';
        darkModeBtn.innerHTML = this.isDarkMode 
            ? '<svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>'
            : '<svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>';
        
        // 添加暗黑模式切换事件
        darkModeBtn.addEventListener('click', () => {
            this.isDarkMode = toggleDarkMode();
            darkModeBtn.innerHTML = this.isDarkMode 
                ? '<svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>'
                : '<svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>';
        });
        
        // 右侧放置wuque图片
        const wuqueImg = document.createElement('img');
        wuqueImg.src = './assets/images/wuque.png';
        wuqueImg.alt = 'Wuque';
        wuqueImg.className = 'h-12 w-12 object-cover rounded-full';
        
        // 添加元素到右侧容器
        rightContainer.appendChild(darkModeBtn);
        rightContainer.appendChild(wuqueImg);
        
        // 组装Header
        container.appendChild(leftImgContainer);
        container.appendChild(nav);
        container.appendChild(rightContainer);
        headerEl.appendChild(container);
        
        return headerEl;
    }
}
