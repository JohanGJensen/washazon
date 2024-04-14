import { Response } from "express";
import { StatusEnum } from "../../types/status";

export const queryError = (response: Response, error: Error) => {
  const { BAD_REQUEST } = StatusEnum;

  console.error("Error executing query", error);
  response
    .status(BAD_REQUEST)
    .json({ message: "Error getting data from database!" });
};
