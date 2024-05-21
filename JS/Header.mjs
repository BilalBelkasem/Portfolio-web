const header_CSS = '<link rel="stylesheet" href="../CSS/Header.allpages.css">';

    function loadheaderCSS(code){
        const headLink = document.getElementsByTagName('head');

        for(let i = 0; i < headLink.length; i++){
            headLink[i].innerHTML += code;
        }
    }

    loadheaderCSS(header_CSS);


    const headerHTML = document.getElementById('Header');

    headerHTML.innerHTML = 
    `   
    <nav class="nav">
    <ul class="nav__header">
        <li><a href="../README.md" class="header-list">README</a></li>
        <li><a href="../HTML/Relic-Guide.page.HTML" class="header-list">Relic Weapons</a></li>
        <li><a href="../HTML/Cooking.recipes.html" class="header-list">Cooking Recipes</a></li>
        <li><a href="../HTML/Main.page.html" class="header-list">Home</a></li>
    </ul>
    <img src="../IMG/a724b9124acc7b5058ed75a31a9c2919.ico" alt="logo" class="headerimg">
</nav>
    `;