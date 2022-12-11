import { Request, Response } from "express";
import studentModel from "../model/studentModel";

const postStudent = async (req:Request, res: Response): Promise<Response> => {
    try {
        const { name, admissionNo, session, Class } = req.body;

        const newStudent = await studentModel.create({
            name, 
            admissionNo: (await studentModel.find()).length + 1, 
            session: 2022, 
            Class,
        })
        return res.status(200).json({
            message: "data created successfully",
            data: newStudent,
        })
    } catch (error) {
        return res.status(400).json({
            message: "an error occured",
            error: error
        })
    }
}


const getStudent = async (req:Request, res:Response): Promise<Response> => {
    try {
        const newestStudent =  await studentModel.find()

        return res.status(201).json({
            message: "data gotten successfully",
            data: newestStudent,
        })
    } catch (error) {
        return res.status(400).json({
            message: "error don happen",
            error: error
        })
    }
}


export { postStudent, getStudent }
