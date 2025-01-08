import { Request, Response } from "express";
import { Controller } from "./interfaces/controller";
import { HttpRequest, HttpResponse } from "./interfaces/http";

export const expressRouteAdapter = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
    };

    const httpResponse: HttpResponse = await controller.handle(httpRequest);

    if (httpResponse.statusCode === 201 || httpResponse.statusCode === 200) {
      res.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.message,
      });
    }
  };
};
