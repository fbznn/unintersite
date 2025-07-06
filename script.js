function mostrarConteudo(secao) {
    const conteudo = document.getElementById("conteudo");

    if (secao === "sobre") {
        conteudo.innerHTML = `
            <h2>Sobre Mim</h2>
            <p>Olá! Meu nome é Felippe Bruno Pedroza Fiorentino, sou estudante de Análise e Desenvolvimento de Sistemas. Gosto de tecnologia, games e música.</p>

            <div class="cards">
                <div class="card">
                    <h3>🔥 Time do Coração</h3>
                    <p>Torcedor do <strong>Flamengo</strong>, sempre acompanhando todos os jogos!</p>
                </div>
                <div class="card">
                    <h3>🎮 Jogos Favoritos</h3>
                    <p>Adoro jogar <strong>Counter-Strike 2</strong>, <strong>Ragnarok Online</strong> e <strong>Tibia</strong>.</p>
                </div>
                <div class="card">
                    <h3>🎵 Estilo Musical</h3>
                    <p>Sou bem <strong>eclético</strong>, mas gosto principalmente de <strong>música Pop</strong>.</p>
                </div>
                <div class="card">
                    <h3>📚 Hobbies</h3>
                    <p>Nas horas vagas, gosto de <strong>assistir animes</strong> e <strong>ler livros sobre tecnologia</strong>.</p>
                </div>
            </div>
        `;
    } else if (secao === "formacao") {
        conteudo.innerHTML = `
            <h2>Formação Acadêmica</h2>
            <p>Finalizei meu ensino médio no <strong>Instituto Pinheiro Guimarães</strong>, e iniciei a faculdade de <strong>Administração</strong> na <strong>Estácio</strong>.</p>
            <p>Depois de um certo tempo, tranquei a matrícula para fazer <strong>Publicidade e Propaganda</strong> na <strong>FACHA</strong> e como ficou muito caro, não tive outra escolha e decidi trancar também.</p>
            <p>Atualmente estou cursando <strong>Análise e Desenvolvimento de Sistemas</strong>.</p>
            <p>Idiomas: Português (nativo) e inglês intermediário.</p>
        `;
    } else if (secao === "portfolio") {
        conteudo.innerHTML = `
            <h2>Portfólio</h2>
            <p>Como ainda não tenho nenhum portfólio, estes são projetos que pretendo desenvolver no futuro, conforme avanço nos estudos da área de desenvolvimento.</p>
            <div class="cards">
                <div class="card">
                    <h3>Projeto 1</h3>
                    <p>Calculadora simples usando JavaScript.</p>
                    <p><em>HTML • CSS • JS</em></p>
                </div>
                <div class="card">
                    <h3>Projeto 2</h3>
                    <p>Landing page para cafeteria fictícia.</p>
                    <p><em>HTML • CSS</em></p>
                </div>
                <div class="card">
                    <h3>Projeto 3</h3>
                    <p>Clone da tela de login do Instagram.</p>
                    <p><em>HTML • CSS</em></p>
                </div>
            </div>
        `;
    } else if (secao === "contato") {
        conteudo.innerHTML = `
            <h2>Contato</h2>
            <form>
                <label>Nome:<br><input type="text" name="nome" required></label><br><br>
                <label>Email:<br><input type="email" name="email" required></label><br><br>
                <label>Mensagem:<br><textarea name="mensagem" rows="5" required></textarea></label><br><br>
                <button type="submit">Enviar</button>
            </form>
        `;
    }
}
