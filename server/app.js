import express from "express";
import cors from "cors";
import router from "./routes/router.js"

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.use('/', router);

app.listen(PORT, () => {
    console.log(`run: http://localhost:${PORT}`);
});