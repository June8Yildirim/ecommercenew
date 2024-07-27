import { app } from "../server.js";

app.listen(process.env.MONGO_URI, () => {
  console.log("Server start listening on ", process.env.PORT);
});
