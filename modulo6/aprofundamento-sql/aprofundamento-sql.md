### Exercício 1
a)
Irá remover a coluna "salary"

b) 
Altera a propriedade gender para gender sex como string com até 6 caracteres

c)
Altera a propriedade gender para gender como string com até 255 caracteres

d)
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
``` 

### Exercício 2
a) 
```
UPDATE Actor
SET name = "FERNANDA MONTENEGRO",
birth_date = "1929-10-18"
WHERE id = "003";
```
b)
```
UPDATE Actor
SET name = "JULIANA PAES"
WHERE id = "005";
```
```
UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "005";
``` 

c)
```
UPDATE Actor
SET name = "Flávio", 
salary = "500004",
birth_date = "1990-01-31", 
gender = "male"
WHERE id = "005";
```

d)
```
UPDATE Actor
SET name = "Laura"
WHERE id = "045";
```
Ele atualiza, porém o dado não é guardado na tabela Actor.

### Exercício 3
a)
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

b)
```
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
```

### Exercício 4
a)
```
SELECT MAX(salary) FROM Actor;
```

b)
```
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

c)
```
SELECT COUNT(*) FROM Actor WHERE gender = "female"
```
d)
```
SELECT SUM(salary) FROM Actor;
```

### Exercício 5
a)
A query cria uma coluna gender (male e female), e separa a quantidade de cada um deles em outra coluna.

b)
```
SELECT id, name FROM Actor ORDER BY name DESC;
```

c)
```
SELECT * FROM Actor ORDER BY salary ASC;
```

d)
```
SELECT name FROM Actor 
ORDER BY salary DESC 
LIMIT 3;
```

e)
```
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;
```

### Exercício 6
a)
```
ALTER TABLE Movie ADD playing_limit_date DATE;
```
b)
```
ALTER TABLE Movie CHANGE rating rating FLOAT;
```

c)
```
UPDATE Movie
SET playing_limit_date = "2000-12-30"
WHERE id = "004";
UPDATE Movie
SET playing_limit_date = "2022-06-11"
WHERE id = "003";
```

d)
```
DELETE FROM Movie WHERE id = "002";
UPDATE Movie
SET synopsis = "atualizado"
WHERE id = "002";
```
A ação é feita porém não é guardada

### Exercício 7

