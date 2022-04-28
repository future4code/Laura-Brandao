import app from "./app";
import connection from "./connection";
import { Response, Request } from "express";
import { v4 as generateId } from "uuid";
import moment from 'moment';


// Criar usuário 
app.post("/user", async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    const id = generateId()
    const { name, nickname, email } = req.body

    try {

        if (!name && !nickname && !email) {
            errorCode = 422
            throw new Error("One or more fields are empty")
        }
        await connection("Users")
            .insert({
                id,
                name,
                nickname,
                email
            });

        res.status(201).send({ message: "User created" });
    } catch (err: any) {

        res.status(errorCode).send(err.sqlMessage || err.message);
    }
});

// Pegar usuário pelo id
app.get("/user/:id", async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    const id = req.params.id

    try {
        if (!id) {
            errorCode = 401
            throw new Error("Requested parameter id not received")
        }

        const result = await connection("Users")
            .where({ id });

        if (result.length === 0) {
            throw new Error("Id not found")
        }
        res.status(201).send(result[0]);
    } catch (err: any) {

        res.status(errorCode).send(err.sqlMessage || err.message);
    }
});

// Editar usuário
app.put("/user/edit/:id", async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    const { name, nickname } = req.body;
    const id = req.params.id

    try {
        if (!name && !nickname) {
            errorCode = 401
            throw new Error("Requested parameter id not received")
        };

        await connection("Users")
            .update(
                {
                    name,
                    nickname
                }
            )
            .where({ id: id });

        res.status(201).send({ message: "User has been edited" })
    } catch (err: any) {
        res.status(errorCode).send(err.sqlMessage || err.message);
    }
});

// Criar tarefa

app.post("/task", async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    const taskId = generateId()
    const { title, description, limitDate, creatorUserId } = req.body
    const convertDate = limitDate.split("/").reverse().join("-");


    try {
        if (!title && !description && !limitDate) {
            errorCode = 401
            throw new Error("Requested parameter id not received")
        };

        const result = await connection("Tasks")
            .insert(
                {
                    task_id: taskId,
                    title: title,
                    description: description,
                    limit_date: convertDate,
                    status: "to_do",
                    creator_user_id: creatorUserId
                }
            )
        res.status(201).send({ message: "Task created" })
    } catch (err: any) {
        res.status(errorCode).send(err.sqlMessage || err.message);
    }

});

//  Pegar tarefa pelo id
app.get("/task/:id", async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    const taskId = req.params.id
    try {
        if (!taskId) {
            errorCode = 401
            throw new Error("Requested parameter id not received")
        }

        let result = await connection("Tasks")
            .innerJoin(
                "Users",
                "Tasks.creator_user_id",
                "Users.id"
            )
            .select("Tasks.*", "Users.nickname")
            .where({ "Tasks.task_id": taskId })

        if (result.length === 0) {
            throw new Error("Id not found")
        }
        let formattedDate = (moment(result[0].limit_date)).format('DD/MM/YYYY')
        result[0].limit_date = formattedDate

        res.status(200).send(result)

    } catch (err: any) {
        res.status(errorCode).send(err.sqlMessage || err.message);
    }

})