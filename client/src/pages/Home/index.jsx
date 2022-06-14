//import CSS
import "./home.css"

//react-router
import { Link } from 'react-router-dom'

function Main() {

    return (

        <div>

            <div class="container-principal"></div>

            <div id="banner">
                <img src="imagem/Recicla.jpg" alt="banner-topo" />
            </div>

            <section id="container-Sobre"></section>
            <div id="txt-Sobre">
                <p>A missão da empresa <strong>Recicla Electron</strong>, é fornecer soluções para empresas de e-commerce e Internet. O nosso principal cliente é a Fundação Bradesco. Fundada em 2016 pelo Senhor Gesiel Gomes Cardoso, na cidade de Bebedouro-SP, atualmente contamos com 120 funcionários.</p>
                <br />
                <br />
                <strong>Nosso foco é:</strong>
                <br></br>

            </div>

            <dl><br></br>
                <li>Organização</li>
                <li>Acessibilidade</li>
                <li>Inovação</li>
                <li>Criatividade</li>
                <li>Planejamento</li>
            </dl>
            <br />

            <div id="img-conteudo-sobre">
            </div>

            <div id="openModal" class="modalDialog">
                <div>
                    <body id="parent">

                        <a href="#close" title="Close" class="close">X</a>
                        <h1><strong> O que é Recicla Electron?</strong></h1>
                        <br></br>
                        <p><strong>RECICLA ELECTRON</strong>    é um site que tem como objetivo, ajudar pessoas que precisam descartar resíduos eletrônicos, (celulares, notebooks, televisores, tablets, pilhas, baterias, etc.) A encontrarem locais mais próximos de suas residencias para coletar estes tipos de resíduos.</p>
                        <img src="imagem/PCRecicla.jpg" alt="logo html5" />
                    </body>
                </div>
            </div>

            <div id="openModal1" class="modalDialog">
                <div>
                    <div id="parent">
                        <h1>Here is a title!</h1>

                        <a href="#close" title="Close" class="close">X</a>
                        <h1>Tecnologia - Realidade Aumentada</h1>
                        <br></br>
                        <p>De uma forma simples, <b>Realidade Aumentada</b> é uma tecnologia que permite que o mundo virtual seja misturado ao real, possibilitando maior interação e abrindo uma nova dimensão na maneira como nós executamos tarefas, ou mesmo as que nósvincubimos nàs maquinas. Assim, se voçê pensava que objetos pulando para fora da tela eram elementos de filmes de ficção científica, está na hora de mudar seus conceitos. Aliás, o que acontece com a <b>Realidade Aumentada</b> é o contrário: voçê pulará para dentro do mundo virtual para interagir com objetos que só estão limitados à sua imaginação. - <i>tecmundo.com.br/realidade-aumentada - acesso 09/2016</i></p>
                        <img src="imagem/R.jpg" alt="logo tecnologia" />
                    </div>
                </div>
            </div>

            <div id="openModal2" class="modalDialog">
                <div>
                    <body id="parent">
                        <h1>Here is a title!</h1>

                        <a href="#close" title="Close" class="close">X</a>
                        <h1>Acessibilidade</h1>
                        <br></br>
                        <p><b>Acessibilidade</b> na web significa que pessoas com deficiência podem usar a web. Mais especificamente, a acessibilidade na web significa que pessoas com deficiência podem perceber, entender, navegar, interagir e construir para a web. E mais. Ela também beneficia outras pessoas, incluindo pessoas idosas com capacidades em mudanças devido ao envelhecimento - <i>w3c.br/ - acesso 09/2016</i></p>
                        <img src="imagem\Acessibilidade.jpg" alt="logo acessibilidade" />
                    </body>
                </div>
            </div>


            <footer>
                <div class="footer-text">
                    <h3><b>O que é Recicla Electron?</b></h3>
                    <p>  - <a href="#openModal">clique aqui</a>.</p>
                </div>

                <div class="footer-text">
                    <h3><b>Tecnologia</b></h3>
                    <p> Você sabe o que é realidade aumentada? Entenda como essa nova tecnologia funciona. - <a href="#openModal1">clique aqui</a>.</p>
                </div>

                <div class="footer-text">
                    <h3><b>Acessibilidade</b></h3>
                    <p>Tornar um Site acessível para todos. - <a href="#openModal2">clique aqui</a>.</p>

                </div><br>
                </br>
                <p><strong><em>O Recicla Electron é parceira da Ecocentro.</em></strong></p>
            </footer>


        </div>

    )
}


export default Main;