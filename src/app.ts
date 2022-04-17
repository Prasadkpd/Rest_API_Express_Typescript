import express, {NextFunction, Request, Response} from 'express';

const app = express();
app.use(express.json());

const middleware = (req: Request, res: Response, next: NextFunction) => {
    //@ts-ignore
    req.name = "Prasad"
    next();
}

app.get("/api/books/:bookId/:authorId",
    middleware,
    (req: Request, res: Response, next: NextFunction) => {
        //@ts-ignore
        console.log(req.name);
        //@ts-ignore
        res.send(req.name);
    }
);

app.listen(3000, () => {
    console.log("Application listen at http://localhost:3000");
});