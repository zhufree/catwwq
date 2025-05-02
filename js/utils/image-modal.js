/**
 * 通用图片模态框工具函数
 * 提供创建和管理图片模态框的功能，可在多个组件中复用
 */

// 创建模态框DOM元素
export function createImageModal() {
  // 检查是否已存在模态框
  if (document.getElementById('global-image-modal')) {
    return document.getElementById('global-image-modal');
  }
  
  // 创建模态框容器
  const modal = document.createElement('div');
  modal.id = 'global-image-modal';
  modal.className = 'fixed inset-0 bg-black bg-opacity-80 hidden flex items-center justify-center z-50 cursor-pointer';
  
  // 创建图片容器
  const imageContainer = document.createElement('div');
  imageContainer.className = 'relative max-w-4xl mx-auto';
  
  // 创建图片元素
  const image = document.createElement('img');
  image.id = 'global-modal-image';
  image.className = 'max-w-full max-h-[90vh] object-contain';
  image.alt = '大图';
  
  // 组装模态框
  imageContainer.appendChild(image);
  modal.appendChild(imageContainer);
  
  // 添加点击事件 - 点击空白处关闭
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeImageModal();
    }
  });
  
  // 添加到body
  document.body.appendChild(modal);
  
  return modal;
}

// 打开模态框显示图片
export function openImageModal(imageSrc, imageAlt = '大图') {
  // 确保模态框存在
  const modal = createImageModal();
  const modalImage = document.getElementById('global-modal-image');
  
  // 设置图片
  modalImage.src = imageSrc;
  modalImage.alt = imageAlt;
  
  // 显示模态框
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // 防止背景滚动
}

// 关闭模态框
export function closeImageModal() {
  const modal = document.getElementById('global-image-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = ''; // 恢复背景滚动
  }
}

// 为图片集合添加点击事件，打开模态框
export function setupImageGallery(container) {
  // 确保模态框存在
  createImageModal();
  
  // 获取所有图片
  const images = container.querySelectorAll('img');
  
  // 为每个图片添加点击事件
  images.forEach(img => {
    // 添加鼠标样式和悬停效果
    img.classList.add('cursor-pointer', 'hover:opacity-90', 'transition-opacity');
    
    // 添加点击事件
    img.addEventListener('click', () => {
      openImageModal(img.src, img.alt);
    });
  });
}
