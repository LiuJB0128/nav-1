const $siteList = $('.siteList');
const $lastLi = $siteList.find('li.last');
const x = localStorage.getItem('x')
const xObject = JSON.parse(x)
const hashMap = xObject || [
    {logo: '<img src="https://juejin.cn/favicon.ico" alt="">', url: 'https://juejin.cn/', title: '掘金'},
    {logo: '<img src="https://github.com/favicon.ico" alt="">', url: 'https://github.com/', title: 'GitHub'},
];

const simplifyUrl = (url) => {
  return url.replace('https://', '')
    .replace('http://', '')
    .replace('www.', '')
    .replace(/\/.*/, '')
}

const render = ()=>{
    $siteList.find('li:not(.last)').remove()
    hashMap.forEach((node, index) => {
        const $li = $(`<li>
            <div class="site">
              <div class="logo">${node.logo}</div>
                <div class="title">${node.title}</div>
                <div class="close" title="移除">
                  <svg class="icon"">
                    <use xlink:href="#icon-remove"></use>
                  </svg>
                </div>
            </div>
          </li>`).insertBefore($lastLi)
          $li.on('click', () => {
            window.open(node.url)
          })
          $li.on('click','.close', (e) => {
            e.stopPropagation()
            hashMap.splice(index, 1)
            render()
          })
    }) 
}

hashMap.forEach(node=>{
    const $li = $(`<li>
          <a href="${node.url}">
            <div class="site">
              <div class="logo">
                ${node.logo}
              </div>
                <div class="title">${node.title}</div>
            </div>
          </a>
    </li>`).insertBefore($lastLi)
})

render()

$('.addButton')
  .on('click', ()=>{
      let name = window.prompt('名称')
      let url = window.prompt('网址')
      url = simplifyUrl(url) 
      if(url.indexOf('http')!==0){
          url = 'https://' + url
      }
      let img = '<img src="https://' + simplifyUrl(url) + '/favicon.ico" alt="">'
      hashMap.push({
          logo: img,
          url: url,
          title: name
      });
      render()
  });

window.onbeforeunload = ()=>{
    const string = JSON.stringify(hashMap)
    localStorage.setItem('x', string)
}