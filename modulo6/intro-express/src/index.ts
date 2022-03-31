import express, { Request, Response } from "express";
import cors from "cors";
import { dwarfs } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express");
  console.log("OK!");
});

app.get("/dwarfs", (req: Request, res: Response) => {
  const returnDwarfs = dwarfs.map((dwarf) => dwarf);

  res.send(returnDwarfs)
});

app.get("/posts", (req: Request, res: Response) => {
  const returnDwarfPosts = dwarfs.map((dwarf) => dwarf.post).flat(1)
  res.send(returnDwarfPosts)
})

app.get("/postsPorId", (req: Request, res: Response) => {
  const idDwarfs = Number(req.query.id);

  let dwarfPosts

  dwarfs.forEach(post => {
    if (post.id === idDwarfs) {
      dwarfPosts = post.post
    }
  })

  res.send(dwarfPosts)

})



app.listen(3003, () => {
  console.log("Server running...");
});
