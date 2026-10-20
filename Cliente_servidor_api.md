TODA COMUNICAO NA WEB TEM DOIS LADOS:

*CLIENTE* = Quem pede algo (sempre o responsavel por iniciar a comunicacao ao enviar uma requisicao(request) para o servidor);

*SERVIDOR* = Quem tem a informacao e responde (ele processa esse pedido e envia de volta uma reposta (response)); 

E para fazer essa conversa entre o cliente e o servidor, ai que entra o conceito de APIs;

API(Application Programming Interface ou Interface de Programação de Aplicações): Ela é o intermediario entre oque o cliente quer e como, e se o servidor tem essa reposta e se tiver, como ela deverá ser respondida/retornada. ou seja, quem usa a api, nao quer saber como é feito os processos dentro do servidor, e sim somente oque a requisao solicita.

Quando tratamos de APIs, existe alguns termos muito utilizados, um deles é os METODOS HTTP;

METODOS HTTP: Qual verbo (FORMA) que eu vou fazer aquela requisao daquela URL.

Dentro dos metodos temos os VERBOS HTTP e os STATUS CODES; 

Status Codes: Basicamente é o codigo de resultado que o servidor devolve junto com a resposta. ou seja, é a partir deles que voce sabe se deu certo ou errado. 

VERBOS HTTP: Esses verbos dizem ao servidor a acao que deve realizar sobre um recurso. como:

    -- GET: Tem acao de LER,ou seja, ele consulta aquela URL.
    -- POST: Tem acao de criar, ou seja, ele altera dados aquela URL, nesse caso ele adiciona algo.(Voce envia o corpo com os dados para criar, normalmente no formato JSON);
    -- PUT: Tem acao de substitutir/atualizar, ou seja, o item já está criado, voce quer editar aquele item. (Voce também envia um corpo com os dados para criar, normalmente no formato JSON).
    -- PATCH: É perecido com o PUT, porém é quando dentro daquele item, voce quer atualizar algo, ou seja, ele é usado para atualizacao parcial.
    -- DELETE: Tem acao de APAGAR, ou seja, um requisao que apaga aquele item. igual o post/put/patch , o delete também alterá dados. 

Alguns STATUS CODES:

    2xx: DEU CERTO 
        200 OK: Pedido foi atentido com sucessso;
        201 Created: Algo foi criado (no caso do POST/PUT/PATCH);
        204 No Content: Deu certo, mas o servidor nao há nada para devolver (no caso do DELETE);
    
    4xx: ERRO DE QUEM PEDIU (o cliente)
        400 Bad Request: Pedido mal formado (se algo na URL estiver incorreto)
        401 Unauthorized: Voce nao se identicou (Acessou algo ou alguma parte que precisa de uma verificacao de credencias);
        403 Forbidden: Voce se identicou porém nao tem permisao (Acessou e se identificou como user normal e tentou entrar na area de admim,porém voce nao tem acesso de admim);
        404 Not Found: O endereco/recurso que foi colocado na URL nao existe ou nao tem no banco de dados naquele servidor;
    5xx: ERRO DE QUEM ATENDE (o servidor)
        500 Internal Server Error: O servidor quenrou por dentro da aplicacao (quando alguma aplicacao caiu e voce tenta fazer a requisao daquela aplicacao)

Resumindo, caso a integracao de certo é dentro da familia 2xx, caso ela de errado do lado do cliente (que solicitou) está na familia 4xx porém se o erro for do servidor (quem foi solicitado) está na familia 5xx;

Quando voce manda ou recebe dados o tempo todo, ele precisa ler e escrever, e normalmente é usando o JSON.

JSON: É um formato de texto para transmitir dados:

        EXEMPLO:
                            {
                                "nome": "Ana",
                                "idade": 30,
                                "ativa": true,
                                "telefone": null,
                                "endereco": {
                                    "cidade": "Rio de Janeiro",
                                    "cep": "25075282"
                                },
                                "interesses": ["música", "viagens"]
                            }

OBJETO {} : É um conjunto de pares ("CHAVE": VALOR). como se fosse um registro, ficha de cadastro.

LISTA (ARRAY) [] : Varios itens em sequencia, separados por Vírgula;

TIPOS DE VALOR: Texto (entre aspas), Número (sem aspas), Boolean (True/False) e Null (vazio ou "Sem valor");

ANINHAMENTO: Um objeto pode conter outros objetos e listas (No caso do exemplo, o endereco está dentro de um objeto sendo um objeto);

REGRAS DO JSON :
    - Chaves e Textos usam aspas duplas;
    - O ultimo item de um objeto ou lista nao usa virgula;
    - Cada chave é seguida de : e cada par é separado por virgula;

Caso no JSON, tenha algum erro, ele será rejeitado pelo servidor , dando erro 400

Para nevegar em um JSON, voce usa os pontos com caminho. Caso eu queira acessar o nome, eu coloco só nome mas se por ventura no endereco eu quiser somente a cidade, eu sim eu coloco o ponto, sendo assim, endereco.cidade, ele me retorna "Rio de janeiro"

DESAFIO 01: 
        { 
            "Name": "Casaco Moletom",
            "Price": 29.99,
            "Estoque": true,
            "Fabricante": {
                "Name": "Nike",
                "Pais": "EUA" 
            },
            "Cores": ["Verde", "Vermelho"]
        }

O XML tem a mesma funcao do JSON, representar dados mas com outra sintaxe. Em vez de usar chaves ou dois pontos, o XML usa TAGS que abrem e fecham. ou seja, o mesmo exemplo do JSON que foi feito em cima, ficaria mais ou menos assim:

<produto>
    <nome> Casaco Moletom </nome>
    <preco> 29.99 </preco>
    <estoque> true </estoque>
    <fabricante>
        <nome>Nike</nome>
        <pais>EUA</pais>
    </fabricante>
    <cores>
        <cor>Verde</cor>
        <cor>Vermelho</cor>
    </cores>
</produto>

REGRAS DO XML:
    - Toda tag que abre, precisa fechar: <nome></nome>
    - Existe uma tag raiz que envolve tudo nela, no caso <produto></produto>
    - Também diferencia maiúsculas de minúsculas, como o JSON.
    - As tags precisam estar bem aninhadas, ou seja, filho dentro de pai e assim por diante;
    - No caso, nao existe numero ou verdadeiro ou falso, tudo é texto (STRING) e quem le decide como intepretar;