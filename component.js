class MyTag extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.innerHTML = '<div class="content"><figure><img src="https://picsum.photos/id/287/250/300"alt="Mountains"><p>Imagem de Teste</p></div>';

    }
}

customElements.define("ricardo-tag",MyTag);