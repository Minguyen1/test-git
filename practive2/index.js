function changeImg(id){
    let igmPath = document.getElementById(id).getAttribute('src');
    
    document.getElementById('main').setAttribute('src', igmPath);
}