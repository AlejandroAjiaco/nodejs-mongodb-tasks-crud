import { Router } from "express";

import {
  renderTasks,
  createTask,
  renderTaskEdit,
  editTask,
  deleteTask,
  taskToggleDoone,
} from "../controllers/tasks.controller";

const router = Router();

router.get("/", renderTasks);

router.post("/tasks/add", createTask);

router.get("/edit/:id", renderTaskEdit);

router.post("/edit/:id", editTask);

router.get("/delete/:id", deleteTask);

router.get("/toggleDone/:id", taskToggleDoone);

export default router;
