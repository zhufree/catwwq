// 暗黑模式切换功能
export function initDarkMode() {
    // 检查本地存储中的暗黑模式设置
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    // 根据设置应用暗黑模式
    if (isDarkMode) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    
    // 返回当前暗黑模式状态
    return isDarkMode;
}

// 切换暗黑模式
export function toggleDarkMode() {
    const isDarkMode = document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', isDarkMode);
    return isDarkMode;
}

// 检查系统偏好
export function checkSystemPreference() {
    // 如果用户未设置偏好，则检查系统偏好
    if (localStorage.getItem('darkMode') === null) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('darkMode', 'true');
        }
    }
}

// 初始化
checkSystemPreference();
initDarkMode();
