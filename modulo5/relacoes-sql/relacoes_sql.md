### Exercício 1
a)
Chave estrangeira se refere ao tipo de relacionamento entre tabelas distintas. Uma chave estrangeira é chamada quando há relacionamento entre duas tabelas. Se refere a chave primária
b) 
```
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating(id, comment, rate, movie_id)
VALUES(
"004",
"Comentário4",
10,
"004"
);
```

c)
ErrorCode: 1452
Não foi possível adicionar ou atualizar uma linha, provavelmente por não ter encontrado o id que foi passado e assim a foreign key falhou

d)
```
ALTER TABLE Movie DROP COLUMN rating;
``` 

### Exercício 2
a) 
A tabela possui id do filme e do ator,e suas respectivas foreign key
b)
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"004",
"004"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"004",
"005"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"004",
"006"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"003",
"004"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"003",
"002"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"003",
"006"
);
```

c)
O resultado é igual ao 1c, não encontra a primary key e impedindo a relação entre as tabelas

d)
Não é possível apagar o ator até que a relação seja apagada (no caso a tabela que estabelece a relação)

### Exercício 3
a)
Ela busca as informaçoes da tabela movie e as da tabela Rating, juntando tudo de acordo com a relação nelas estabelecidas
ON significa uma condicional, sendo retornadas somentes combinações entre as duas tabelas (no caso, mesmos ids de movie)
b)
```
SELECT Movie.id, title, rate FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```

