const btn=document.createElement('button');
    btn.id='theme';
    btn.appendChild(document.createTextNode('White'));
    document.body.appendChild(btn);
    const theme=document.getElementById('theme');
    theme.onclick=run;

    function run(){
      if(theme.innerText==='Dark'){
        document.body.style.backgroundColor='black';
        theme.innerHTML='White';
        return;
      }
      theme.innerHTML='Dark';
      document.body.style.backgroundColor='White';
    }