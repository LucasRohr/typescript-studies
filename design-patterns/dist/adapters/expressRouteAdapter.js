"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressRouteAdapter = void 0;
const expressRouteAdapter = (controller) => {
    return async (req, res) => {
        const httpRequest = {
            body: req.body,
        };
        const httpResponse = await controller.handle(httpRequest);
        if (httpResponse.statusCode === 201) {
            res.status(httpResponse.statusCode).json(httpResponse.body);
        }
        else {
            res.status(httpResponse.statusCode).json({
                error: httpResponse.body.message,
            });
        }
    };
};
exports.expressRouteAdapter = expressRouteAdapter;
