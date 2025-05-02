// Footer组件
export default class Footer {
    // 渲染Footer组件
    render() {
        const footerEl = document.createElement('div');
        footerEl.className = 'bg-gray-100 dark:bg-gray-800 transition-colors duration-300';
        
        const container = document.createElement('div');
        container.className = 'container mx-auto px-4 py-6';
        
        // 页脚内容 - 简单居中显示
        const content = document.createElement('div');
        content.className = 'flex items-center justify-center text-gray-600 dark:text-gray-400';
        
        // 添加cat图片
        const catImg = document.createElement('img');
        catImg.src = './assets/images/cat.png';
        catImg.alt = 'Cat';
        catImg.className = 'h-8 w-8 object-cover rounded-full mr-2';
        content.appendChild(catImg);
        
        // 添加文字
        const text = document.createElement('span');
        text.textContent = 'Powered By 未央城打工人';
        content.appendChild(text);
        
        // 组装页脚
        container.appendChild(content);
        footerEl.appendChild(container);
        
        return footerEl;
    }
}
