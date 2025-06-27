document.addEventListener('DOMContentLoaded', function() {
    // =============================
    // 轮播图相关代码
    // =============================
    const carousel = document.querySelector('.carousel'); // 获取轮播图容器

    if (carousel) { // 只有存在轮播图时才执行以下代码
        const items = carousel.querySelectorAll('.carousel-item'); // 获取所有轮播项
        const prevButton = document.querySelector('.carousel-prev'); // 获取上一张按钮
        const nextButton = document.querySelector('.carousel-next'); // 获取下一张按钮
        let currentIndex = 0; // 当前显示的轮播项索引

        // 隐藏除第一项外的所有轮播项
        items.forEach((item, index) => {
            if (index !== 0) {
                item.style.display = 'none';
            }
        });

        // 显示指定索引的轮播项
        function showItem(index) {
            items.forEach(item => item.style.display = 'none'); // 隐藏所有项
            items[index].style.display = 'block'; // 显示当前项
            items[index].style.animation = 'fadeIn 0.5s ease-in-out'; // 添加淡入动画
        }

        // 上一张按钮点击事件
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            showItem(currentIndex);
        });

        // 下一张按钮点击事件
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % items.length;
            showItem(currentIndex);
        });

        // 每5秒自动切换到下一张
        setInterval(() => {
            currentIndex = (currentIndex + 1) % items.length;
            showItem(currentIndex);
        }, 5000);
    }

    // =============================
    // 导航锚点平滑滚动
    // =============================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // =============================
    // 以下为折叠/展开导航栏功能的代码
    // =============================
    const toggleBtn = document.getElementById("menu-toggle"); // 获取汉堡按钮
    const navLinks = document.getElementById("nav-links");    // 获取导航菜单

    // 监听汉堡按钮点击事件
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active"); // 切换菜单显示/隐藏
    });

    // 当窗口大小变化时，自动关闭菜单（防止横竖屏切换时菜单状态异常）
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        navLinks.classList.remove("active"); // 桌面端强制收起菜单
      }
    });
}); 