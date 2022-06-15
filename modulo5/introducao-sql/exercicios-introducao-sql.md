### Exercício 1
a)
PRIMARY KEY = para identificadores únicos (id)
VARCHAR = strings com uma quantidade máxima de caracteres que ficam entre ()
NOT NULL = o campo não pode ser nulo
DATE = para declarar datas

b) 
SHOW DATABASES = mostra em qual database o mysql está rodando
SHOW TABLES = mostra quais tabelas possui

c)
DESCRIBE Actor = mostra uma tabela com os campos, os tipos, se são null, se possuem chave

### Exercício 2
a) 
```
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
```
b)
ErroCode = 1062. Entrada duplicada para chave PRIMARY 002 (id)
O erro ocorreu por já possuir um item com essa chave

c)
ErroCode = 1136. Contagem da coluna não corresponde ao valor contado na linha 1

d)
ErroCode = 1364. Campo "name" não tem um valor definido

e)
ErroCode = 1292. Valor da data incorreto

f)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Isis Nable Valverde",
  1000000,
  "1987-02-17", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Selton Mello",
  800000,
  "1972-12-30", 
  "male"
);
```

### Exercício 3
a)
```
SELECT * FROM Actor WHERE gender = "female";
```

b)
```
SELECT salary from Actor WHERE name = "Tony Ramos";
```

c)
```
SELECT * FROM Actor WHERE gender = "invalid";
```

d)
```
SELECT id, name, salary FROM Actor WHERE salary < 500000;
```
e)
Valor "nome" não existe na lista de campos

### Exercício 4
a)
Selecionar todos os campos da lista Actor onde nome tenha A pu J e o salário maior que 300000;

b)
```
SELECT * FROM Actor WHERE salary > 350000 AND (name NOT LIKE "A%");
```

c)
```
SELECT * FROM Actor WHERE name LIKE "G%" OR name LIKE "g%";
```
d)
```
SELECT * FROM Actor WHERE (name LIKE "a%" OR name LIKE "A%" OR name LIKE "a%" OR name LIKE "G%") AND salary BETWEEN 350000 AND 900000;
```

### Exercício 5
a)
```CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR (255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL
);
```

b)
```INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06",
  7
);
```

c)
```INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27",
  10
);
```

d)
```INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02",
  8
);
```

e)
```INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "004", 
  "O Auto da Compadecida",
  "As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.",
  "2000-09-15",
  10
);
```

### Exercício 6
a)
```
SELECT id, title, rating FROM Movie WHERE id = "004";
```
b)
```
SELECT * FROM Movie WHERE title = "Dona Flor e Seus Dois Maridos";
```

c)
```
SELECT id, title, synopsis FROM Movie WHERE rating > 7;
```

### Exercício 7
a)
```
SELECT * FROM Movie WHERE title LIKE "%vida%";
```
b)
```
SELECT * FROM Movie WHERE title OR synopsis LIKE "%vida%";
```

c)
```
SELECT * FROM Movie WHERE release_date < CURDATE();
```

d)
```
SELECT * FROM Movie WHERE release_date < CURDATE() AND rating > 7 AND title LIKE "%dois%" OR synopsis LIKE "%dois%";
```



