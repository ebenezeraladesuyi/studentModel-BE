import { Router }  from "express";
import { getStudent, postStudent } from "../controller/studentController";



const router = Router();

router.route("/newStudent").post(postStudent)
router.route("/getStudent").get(getStudent)



export default router;