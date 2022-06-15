CREATE TABLE Architecture_User (
	id VARCHAR(255) PRIMARY KEY, 
    name VARCHAR(255) NULL, 
    nickname VARCHAR(255) UNIQUE NOT NULL, 
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE Architecture_Task (
	id VARCHAR(255) PRIMARY KEY, 
    title VARCHAR(255) NOT NULL, 
    description TEXT NOT NULL, 
    status VARCHAR(255) NOT NULL DEFAULT "to_do",
    deadline VARCHAR(255)  NOT NULL,
    author_id varchar(255) NOT NULL,
    FOREIGN KEY (author_id) REFERENCES Architecture_User(id)
);
CREATE TABLE Architecture_UserTask_relation (
	task_id VARCHAR(255),
    author_id VARCHAR(255),
    FOREIGN KEY (task_id) REFERENCES Architecture_Task(id),
    FOREIGN KEY (author_id) REFERENCES Architecture_User(id)
);

SELECT * FROM Architecture_User;
SELECT * FROM Architecture_Task;

DROP TABLE Architecture_UserTask_relation;
DROP TABLE Architecture_Task;
