
document.querySelector('#clique-aqui').onclick = () => {
    const nome = document.querySelector('#campo-nome').value;
    if(nome){
        alert(`hello world, ${nome}!`);
    }
};
document.querySelector('#limpar').onclick = () => {
    document.querySelector('#campo-nome').value ='';
};
  