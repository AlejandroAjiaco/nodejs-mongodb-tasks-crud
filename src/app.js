import express from "express";
import indexRoutes from "./routes/index.routes";
import path from "path";
const exphbs = require("express-handlebars");
import morgan from "morgan";

const app = express();

app.set("views", path.join(__dirname, "views"));

app.engine(
  ".hbs",
  exphbs.engine({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

//routes
app.use(indexRoutes);

app.use(express.static(path.join(__dirname, "public")));

export default app;
