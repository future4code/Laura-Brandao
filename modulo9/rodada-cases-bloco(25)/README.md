## Case 04 Bloco 25- Backend - DogHero

API criada para  ajudar os usuários a pedir o serviço de dog walking da Dog Hero, que se baseia em passeios de pets, consultar próximos passeios agendados, com horário de início, horário de fim, o preço, e quantidade de pets.

### Endpoints

POST

Create walk
http://localhost:3000/walking

{
    "appointment_date": "2022-09-07",
    "duration":"00:30:00",
    "latitude":"-19.912998",
    "longitude":"-43.940933",
    "pets":"1",
    "start_time":"8:00:00",
    "end_time":"8:50:00"
}

GET

Get show by id
http://localhost:3000/show/001

GET

Get start walk by id
http://localhost:3000/start_walk/001

GET

Get finish walk by id
http://localhost:3000/finish_walk/001

### O que não funciona

endpoint de get index


## Possíveis mensagens de erro

A API pode retornar as seguintes mensagens de erro de acordo com as falhas na requisição:

400: Bad Request
404: Not Found
500: Internal Server Error
