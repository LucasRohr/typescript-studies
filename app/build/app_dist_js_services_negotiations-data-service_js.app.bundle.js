/*! For license information please see app_dist_js_services_negotiations-data-service_js.app.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkalurabank=self.webpackChunkalurabank||[]).push([["app_dist_js_services_negotiations-data-service_js"],{"./app/dist/js/services/negotiations-data-service.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  NegotiationsDataService: () => (/* binding */ NegotiationsDataService)\n});\n\n// EXTERNAL MODULE: ./app/dist/js/models/negotiation.js\nvar models_negotiation = __webpack_require__(\"./app/dist/js/models/negotiation.js\");\n;// CONCATENATED MODULE: ./app/dist/js/models/index.js\n\n//# sourceMappingURL=index.js.map\n;// CONCATENATED MODULE: ./app/dist/js/services/negotiations-data-service.js\n\nconst BASE_URL = 'http://localhost:8080';\nclass NegotiationsDataService {\n    path;\n    constructor(path) {\n        this.path = `${BASE_URL}${path}`;\n    }\n    async getNegotiationsData() {\n        const response = await fetch(this.path);\n        if (response.ok) {\n            const negotiationsData = await response.json();\n            if (negotiationsData) {\n                const mappedNegotiations = negotiationsData.map((negotiation) => new models_negotiation.NegotiationModel(negotiation.montante, new Date(), negotiation.vezes));\n                return mappedNegotiations;\n            }\n            else {\n                throw Error('Retrieved negotiations data is null');\n            }\n        }\n        else {\n            throw Error('Error retrieving negotiations data');\n        }\n    }\n}\n//# sourceMappingURL=negotiations-data-service.js.map\n\n//# sourceURL=webpack://alurabank/./app/dist/js/services/negotiations-data-service.js_+_1_modules?")}}]);