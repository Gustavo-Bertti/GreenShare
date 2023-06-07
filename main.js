    mini_menu = document.getElementById('mini-menu');
    corpo_mini_menu = document.getElementById('corpo-mini-menu');

    function abreMenu(){
        corpo_mini_menu.style.display = 'block';
        mini_menu_aberto = document.getElementById('mini-menu-aberto');
        mini_menu.style.display = 'none';
        mini_menu_aberto.style.display = 'block'
    }
    function fechaMenu(){
        corpo_mini_menu.style.display = 'none';
        mini_menu_aberto = document.getElementById('mini-menu-aberto');
        mini_menu.style.display = 'block';
        mini_menu_aberto.style.display = 'none';
        window.location.reload(true);
    }

    const titulo = document.getElementById('titulo-conteudo');
    function typeWriter(elemento){
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        textoArray.forEach((letra, i) =>{
            setTimeout(function(){
                elemento.innerHTML += letra;
            },75 * i)
        });
    }
    typeWriter(titulo);