(function () {
const $16b5ad875ae907e2f7f79e7b8fe116cc$var$$siteList = $('.siteList');
const $16b5ad875ae907e2f7f79e7b8fe116cc$var$$lastLi = $16b5ad875ae907e2f7f79e7b8fe116cc$var$$siteList.find('li.last');
const $16b5ad875ae907e2f7f79e7b8fe116cc$var$x = localStorage.getItem('x');
const $16b5ad875ae907e2f7f79e7b8fe116cc$var$xObject = JSON.parse($16b5ad875ae907e2f7f79e7b8fe116cc$var$x);
const $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap = $16b5ad875ae907e2f7f79e7b8fe116cc$var$xObject || [
    {
        logo: '<img src="https://juejin.cn/favicon.ico" alt="">',
        url: 'https://juejin.cn/',
        title: '掘金'
    },
    {
        logo: '<img src="https://github.com/favicon.ico" alt="">',
        url: 'https://github.com/',
        title: 'GitHub'
    }, 
];
const $16b5ad875ae907e2f7f79e7b8fe116cc$var$simplifyUrl = (url)=>{
    return url.replace('https://', '').replace('http://', '').replace('www.', '').replace(/\/.*/, '');
};
const $16b5ad875ae907e2f7f79e7b8fe116cc$var$render = ()=>{
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$$siteList.find('li:not(.last)').remove();
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap.forEach((node, index)=>{
        const $li = $(`<li>\n            <div class="site">\n              <div class="logo">${node.logo}</div>\n                <div class="title">${node.title}</div>\n                <div class="close" title="移除">\n                  <svg class="icon"">\n                    <use xlink:href="#icon-remove"></use>\n                  </svg>\n                </div>\n            </div>\n          </li>`).insertBefore($16b5ad875ae907e2f7f79e7b8fe116cc$var$$lastLi);
        $li.on('click', ()=>{
            window.open(node.url);
        });
        $li.on('click', '.close', (e)=>{
            e.stopPropagation();
            $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap.splice(index, 1);
            $16b5ad875ae907e2f7f79e7b8fe116cc$var$render();
        });
    });
};
$16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap.forEach((node)=>{
    const $li = $(`<li>\n          <a href="${node.url}">\n            <div class="site">\n              <div class="logo">\n                ${node.logo}\n              </div>\n                <div class="title">${node.title}</div>\n            </div>\n          </a>\n    </li>`).insertBefore($16b5ad875ae907e2f7f79e7b8fe116cc$var$$lastLi);
});
$16b5ad875ae907e2f7f79e7b8fe116cc$var$render();
$('.addButton').on('click', ()=>{
    let name = window.prompt('名称');
    let url = window.prompt('网址');
    url = $16b5ad875ae907e2f7f79e7b8fe116cc$var$simplifyUrl(url);
    if (url.indexOf('http') !== 0) url = 'https://' + url;
    let img = '<img src="https://' + $16b5ad875ae907e2f7f79e7b8fe116cc$var$simplifyUrl(url) + '/favicon.ico" alt="">';
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap.push({
        logo: img,
        url: url,
        title: name
    });
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$render();
});
window.onbeforeunload = ()=>{
    const string = JSON.stringify($16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap);
    localStorage.setItem('x', string);
};

})();
//# sourceMappingURL=index.ffbb3777.js.map
