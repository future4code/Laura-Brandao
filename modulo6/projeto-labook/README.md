# LABOOK

O LaBook é uma rede social com o objetivo de promover a conexão e interação entre seus mais diversos usuários.

## Descrição do projeto:

Através dos endpoints do projeto é possível realizar as seguintes ações no banco de dados, que são as funcionalidades básicas propostas:

→ Cadastrar usuário
→ Criar post
→ Buscar um post por id
→ Fazer amizade
→ Desfazer Amizade
→ Ver todo o Feed


POST

Create user
http://localhost:3003/user/create

{
    "name": "Teobaldo", 
    "email": "teobaldo@email.com", 
    "password": "314574a#"
}

POST

Create post
http://localhost:3003/post/create

{
	"photo":"https://i.picsum.photos/id/1020/4288/2848.jpg?hmac=Jo3ofatg0fee3HGOliAIIkcg4KGXC8UOTO1dm5qIIPc",
	"description":"Koda and Kenai with their mother!",
	"type":"normal",
	"created_at":"2022-06-01",
	"author_id":"cb36c2df-dc1f-48e8-ba2a-cde1ab9e037f"
}

GET

Get post by id
http://localhost:3003/post/posts/:id
PATH VARIABLES
id
32c966cd-e82d-48ce-8aed-4e897ccfaed4

POST

Create friendship
http://localhost:3003/user/create/friend

{
    "user_id": "cb36c2df-dc1f-48e8-ba2a-cde1ab9e037f", 
    "friend_id": "b09cb5a6-87e3-4679-8f81-5dc64cb7d100"
}

DEL

Delete friendship
http://localhost:3003/user/friend/delete/:friend_id

PATH VARIABLES
friend_id
b09cb5a6-87e3-4679-8f81-5dc64cb7d100


GET

Get friends posts
http://localhost:3003/user/friends/posts/:user_id

PATH VARIABLES
user_id
a64cd19d-e0b9-454d-9c67-befbee9e419d

## Possíveis mensagens de erro

A API pode retornar as seguintes mensagens de erro de acordo com as falhas na requisição:

400: Bad Request
404: Not Found
500: Internal Server Error
