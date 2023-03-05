const btn = document.createElement('button');
btn.innerText = 'click me';
btn.addEventListener('click' ,function(){
    window.open('http://127.0.0.1:5500/Chamber/homepage/index.html');
});
document.body.appendChild(btn);
