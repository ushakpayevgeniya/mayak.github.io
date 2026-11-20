document.addEventListener("DOMContentLoaded", function() {
    let currentPath = window.location.pathname;
    let currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1);

    // Список файлов, где ДОЛЖНО быть меню
    const allowedPages = ["1.html", "4.html", "24_5.html"];

    // Если текущей страницы нет в списке разрешенных — выходим, ничего не делаем
    if (!allowedPages.includes(currentPage)) return;

    // Создаем меню
    const menuHTML = `
    <div style="background: #eef2f5; padding: 10px 15px; margin-bottom: 20px; border-bottom: 1px solid #ccc; font-family: Arial, sans-serif; font-size: 16px;">
        <a href="1.html" style="color: #800080; text-decoration: underline; margin-right: 5px;">Задание 1</a> | 
        <a href="4.html" style="color: #800080; text-decoration: underline; margin: 0 5px;">Задание 2</a> | 
        <a href="24_5.html" style="color: #800080; text-decoration: underline; margin: 0 5px;">Задание 3</a>
    </div>
    <div style="padding: 0 15px;">
        <a href="index.html" style="color: #800080; text-decoration: underline; font-family: Arial, sans-serif; font-size: 18px;">Назад</a>
    </div>`;

    document.body.insertAdjacentHTML('afterbegin', menuHTML);
});
