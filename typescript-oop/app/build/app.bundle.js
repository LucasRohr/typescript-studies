/*! For license information please see app.bundle.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./app/dist/js/app.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n;// CONCATENATED MODULE: ./app/dist/js/decorators/performance-log.js\nfunction performanceLog(isSeconds = false) {\n    return function (target, propertyKey, descriptor) {\n        const originalFunction = descriptor.value;\n        descriptor.value = function (...args) {\n            const temp1 = performance.now();\n            const originalReturn = originalFunction.apply(this, args);\n            const temp2 = performance.now();\n            const divider = isSeconds ? 1000 : 1;\n            const timeLabel = isSeconds ? \'seconds\' : \'ms\';\n            const message = `${propertyKey} | execution time: ${(temp1 - temp2) / divider} ${timeLabel}`;\n            console.log(message);\n            return originalReturn;\n        };\n        return descriptor;\n    };\n}\n//# sourceMappingURL=performance-log.js.map\n;// CONCATENATED MODULE: ./app/dist/js/decorators/inspect.js\nfunction inspect() {\n    return function (target, propertyKey, descriptor) {\n        const originalFunction = descriptor.value;\n        descriptor.value = function (...args) {\n            console.log(`=== Function: ${propertyKey} ===`);\n            console.log(`-> Params: ${JSON.stringify(args)}`);\n            const originalReturn = originalFunction.apply(this, args);\n            console.log(`-> Return: ${JSON.stringify(originalReturn)}`);\n            return originalReturn;\n        };\n        return descriptor;\n    };\n}\n//# sourceMappingURL=inspect.js.map\n;// CONCATENATED MODULE: ./app/dist/js/decorators/sanitize.js\nfunction sanitize() {\n    return function (target, propertyKey, descriptor) {\n        const originalFunction = descriptor.value;\n        descriptor.value = function (...args) {\n            const originalReturn = originalFunction.apply(this, args);\n            if (typeof originalReturn === \'string\') {\n                return originalReturn.replace(/<script>[\\s\\S]*?<\\/script>/, \'\');\n            }\n            return originalReturn;\n        };\n        return descriptor;\n    };\n}\n//# sourceMappingURL=sanitize.js.map\n;// CONCATENATED MODULE: ./app/dist/js/decorators/dom-injector.js\nfunction domInjector(selector) {\n    return function (target, propertyKey) {\n        let element = null;\n        const getter = function () {\n            if (!element) {\n                console.log(`getting ${selector}`);\n                element = document.querySelector(selector);\n            }\n            return element;\n        };\n        Object.defineProperty(target, propertyKey, {\n            get: getter,\n        });\n    };\n}\n//# sourceMappingURL=dom-injector.js.map\n;// CONCATENATED MODULE: ./app/dist/js/decorators/index.js\n\n\n\n\n//# sourceMappingURL=index.js.map\n// EXTERNAL MODULE: ./app/dist/js/models/negotiation.js\nvar models_negotiation = __webpack_require__("./app/dist/js/models/negotiation.js");\n;// CONCATENATED MODULE: ./app/dist/js/models/negotiations-handler.js\nclass NegotiationsHandler {\n    negotiations = [];\n    constructor(negotiations) {\n        this.negotiations = negotiations ?? [];\n    }\n    add(negotiation) {\n        this.negotiations.push(negotiation);\n    }\n    getNegotiations() {\n        return this.negotiations;\n    }\n    toString() {\n        return JSON.stringify(this.negotiations, null, 2);\n    }\n    compare(negotiations) {\n        return this.negotiations.every((negotiation) => negotiations.negotiations.includes(negotiation));\n    }\n}\n//# sourceMappingURL=negotiations-handler.js.map\n;// CONCATENATED MODULE: ./app/dist/js/enums/week-days.js\nvar WeekDays;\n(function (WeekDays) {\n    WeekDays[WeekDays["SUNDAY"] = 0] = "SUNDAY";\n    WeekDays[WeekDays["MONDAY"] = 1] = "MONDAY";\n    WeekDays[WeekDays["TUESDAY"] = 2] = "TUESDAY";\n    WeekDays[WeekDays["WEDNESDAY"] = 3] = "WEDNESDAY";\n    WeekDays[WeekDays["THURSDAY"] = 4] = "THURSDAY";\n    WeekDays[WeekDays["FRIDAY"] = 5] = "FRIDAY";\n    WeekDays[WeekDays["SATURDAY"] = 6] = "SATURDAY";\n})(WeekDays || (WeekDays = {}));\n//# sourceMappingURL=week-days.js.map\n;// CONCATENATED MODULE: ./app/dist/js/enums/index.js\n\n//# sourceMappingURL=index.js.map\n;// CONCATENATED MODULE: ./app/dist/js/utils/date-utils.js\n\nclass DateUtils {\n    static isWorkDay(date) {\n        const weekDay = date.getDay();\n        return weekDay > WeekDays.SUNDAY && weekDay < WeekDays.SATURDAY;\n    }\n}\n//# sourceMappingURL=date-utils.js.map\n;// CONCATENATED MODULE: ./app/dist/js/utils/print-utils.js\nclass PrintUtils {\n    static print(...args) {\n        args.forEach((object) => {\n            object.toString();\n        });\n    }\n}\n//# sourceMappingURL=print-utils.js.map\n;// CONCATENATED MODULE: ./app/dist/js/utils/index.js\n\n\n//# sourceMappingURL=index.js.map\n;// CONCATENATED MODULE: ./app/dist/js/views/view.js\nclass View {\n    element;\n    constructor(selector) {\n        const selectorElement = document.querySelector(selector);\n        if (selectorElement) {\n            this.element = selectorElement;\n        }\n        else {\n            const errorMessage = `Selector ${selector} is invalid, please verify the element`;\n            throw new Error(errorMessage);\n        }\n    }\n    get getElement() {\n        return this.element;\n    }\n    update(model) {\n        const template = this.returnTemplate(model);\n        this.element.innerHTML = template;\n    }\n}\n//# sourceMappingURL=view.js.map\n;// CONCATENATED MODULE: ./app/dist/js/views/negotiations-view.js\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\n\n\nclass NegotiationsView extends View {\n    mapTableBodyList(negotiationsHandler) {\n        return negotiationsHandler\n            .getNegotiations()\n            .map((negotiation) => `<tr>\n                <th>${negotiation.date.toLocaleDateString()}</th>\n                <th>${negotiation.quantity}</th>\n                <th>${negotiation.value}</th>\n            </tr>`)\n            .join(\'\');\n    }\n    returnTemplate(negotiationsHandler) {\n        return `\n            <table class="table table-hover table-bordered">\n                <thead>\n                    <tr>\n                        <th>DATA</th>\n                        <th>QUANTIDADE</th>\n                        <th>VALOR</th>\n                    </tr>\n                </thead>\n\n                <tbody>\n                    ${this.mapTableBodyList(negotiationsHandler)}\n                </tbody>\n            </table>\n        `;\n    }\n}\n__decorate([\n    sanitize()\n], NegotiationsView.prototype, "returnTemplate", null);\n//# sourceMappingURL=negotiations-view.js.map\n;// CONCATENATED MODULE: ./app/dist/js/views/toast-message-view.js\n\nclass ToastMessageView extends View {\n    returnTemplate(message) {\n        return `<p class="alert alert-info"> ${message} </p>`;\n    }\n}\n//# sourceMappingURL=toast-message-view.js.map\n;// CONCATENATED MODULE: ./app/dist/js/views/index.js\n\n\n//# sourceMappingURL=index.js.map\n;// CONCATENATED MODULE: ./app/dist/js/controllers/negotiation-controller.js\nvar negotiation_controller_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\n\n\n\n\n\nconst NEGOTIATION_INPUT_IDS = Object.freeze({\n    DATE: \'#data\',\n    QUANTITY: \'#quantidade\',\n    VALUE: \'#valor\',\n});\nconst NEGOTIATIONS_VIEW_ID = \'#negotiationsView\';\nconst TOAST_MESSAGE_VIEW_ID = \'#toastMessageView\';\nconst TOAST_MESSAGE_TEXT = \'Negociação criada e incluida com sucesso!\';\nconst TOAST_WEEK_DAY_ERROR_TEXT = \'A data informada deve ser um dia útil!\';\nconst GET_NEGOTIATIONS_DATA_PATH = \'/dados\';\nclass NegotiationController {\n    dateInput;\n    quantityInput;\n    valueInput;\n    negotiationsHandler = new NegotiationsHandler();\n    negotiationView = new NegotiationsView(NEGOTIATIONS_VIEW_ID);\n    toastMessageView = new ToastMessageView(TOAST_MESSAGE_VIEW_ID);\n    constructor() {\n        this.negotiationView.update(this.negotiationsHandler);\n    }\n    add() {\n        const negotiation = models_negotiation.NegotiationModel.createNegotiation(this.dateInput.value, this.valueInput.value, this.quantityInput.value);\n        const isValidDay = DateUtils.isWorkDay(negotiation.date);\n        if (isValidDay) {\n            this.negotiationsHandler.add(negotiation);\n            this.updateViews();\n            this.cleanForm();\n        }\n        else {\n            this.toastMessageView.update(TOAST_WEEK_DAY_ERROR_TEXT);\n        }\n    }\n    async importNegotiationsData() {\n        const dataServiceModule = await __webpack_require__.e(/*! import() */ "app_dist_js_services_negotiations-data-service_js").then(__webpack_require__.bind(__webpack_require__, /*! ../services/negotiations-data-service.js */ "./app/dist/js/services/negotiations-data-service.js"));\n        const dataService = new dataServiceModule.NegotiationsDataService(GET_NEGOTIATIONS_DATA_PATH);\n        const negotiationsDataList = await dataService.getNegotiationsData();\n        const filteredNegotiations = negotiationsDataList.filter((dayNegotiation) => !this.negotiationsHandler\n            .getNegotiations()\n            .some((negotiation) => negotiation.compare(dayNegotiation)));\n        filteredNegotiations.forEach((negotiation) => {\n            this.negotiationsHandler.add(negotiation);\n        });\n        this.updateViews();\n    }\n    cleanForm() {\n        this.dateInput.value = \'\';\n        this.valueInput.value = \'\';\n        this.quantityInput.value = \'\';\n        this.dateInput.focus();\n    }\n    updateViews() {\n        this.negotiationView.update(this.negotiationsHandler);\n        this.toastMessageView.update(TOAST_MESSAGE_TEXT);\n    }\n}\nnegotiation_controller_decorate([\n    domInjector(NEGOTIATION_INPUT_IDS.DATE)\n], NegotiationController.prototype, "dateInput", void 0);\nnegotiation_controller_decorate([\n    domInjector(NEGOTIATION_INPUT_IDS.QUANTITY)\n], NegotiationController.prototype, "quantityInput", void 0);\nnegotiation_controller_decorate([\n    domInjector(NEGOTIATION_INPUT_IDS.VALUE)\n], NegotiationController.prototype, "valueInput", void 0);\nnegotiation_controller_decorate([\n    inspect(),\n    performanceLog()\n], NegotiationController.prototype, "add", null);\n//# sourceMappingURL=negotiation-controller.js.map\n;// CONCATENATED MODULE: ./app/dist/js/controllers/index.js\n\n//# sourceMappingURL=index.js.map\n;// CONCATENATED MODULE: ./node_modules/bootstrap/dist/css/bootstrap.css\n// extracted by mini-css-extract-plugin\n\n;// CONCATENATED MODULE: ./app/dist/js/app.js\n\n\nconst controller = new NegotiationController();\nconst app_form = document.querySelector(\'.form\');\nconst importButton = document.querySelector(\'#import-button\');\napp_form?.addEventListener(\'submit\', (event) => {\n    event.preventDefault();\n    controller.add();\n});\nimportButton?.addEventListener(\'click\', (event) => {\n    event.preventDefault();\n    controller.importNegotiationsData();\n});\n//# sourceMappingURL=app.js.map\n\n//# sourceURL=webpack://alurabank/./app/dist/js/app.js_+_18_modules?')},"./app/dist/js/models/negotiation.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NegotiationModel: () => (/* binding */ NegotiationModel)\n/* harmony export */ });\nclass NegotiationModel {\n    _value;\n    _date;\n    _quantity;\n    constructor(_value, _date, _quantity) {\n        this._value = _value;\n        this._date = _date;\n        this._quantity = _quantity;\n    }\n    static createNegotiation(dateText, valueText, quantityText) {\n        const regExp = /-/g;\n        const date = new Date(dateText.replace(regExp, ','));\n        const value = parseFloat(valueText);\n        const quantity = parseInt(quantityText);\n        return new NegotiationModel(value, date, quantity);\n    }\n    toString() {\n        return `\n      Date: ${this.date}\n      Value: ${this.value}\n      Quantity: ${this.quantity}\n    `;\n    }\n    compare(negotiation) {\n        return (this.date.getDate() === negotiation.date.getDate() &&\n            this.date.getMonth() === negotiation.date.getMonth() &&\n            this.date.getFullYear() === negotiation.date.getFullYear());\n    }\n    get value() {\n        return this._value;\n    }\n    get date() {\n        const parsedDate = new Date(this._date.getTime());\n        return parsedDate;\n    }\n    get quantity() {\n        return this._quantity;\n    }\n    get volume() {\n        return this._quantity * this._value;\n    }\n}\n//# sourceMappingURL=negotiation.js.map\n\n//# sourceURL=webpack://alurabank/./app/dist/js/models/negotiation.js?")}},__webpack_module_cache__={},inProgress,dataWebpackPrefix;function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.d=(e,n)=>{for(var t in n)__webpack_require__.o(n,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},__webpack_require__.f={},__webpack_require__.e=e=>Promise.all(Object.keys(__webpack_require__.f).reduce(((n,t)=>(__webpack_require__.f[t](e,n),n)),[])),__webpack_require__.u=e=>e+".app.bundle.js",__webpack_require__.miniCssF=e=>{},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),inProgress={},dataWebpackPrefix="alurabank:",__webpack_require__.l=(e,n,t,a)=>{if(inProgress[e])inProgress[e].push(n);else{var r,o;if(void 0!==t)for(var i=document.getElementsByTagName("script"),s=0;s<i.length;s++){var c=i[s];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==dataWebpackPrefix+t){r=c;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,__webpack_require__.nc&&r.setAttribute("nonce",__webpack_require__.nc),r.setAttribute("data-webpack",dataWebpackPrefix+t),r.src=e),inProgress[e]=[n];var p=(n,t)=>{r.onerror=r.onload=null,clearTimeout(_);var a=inProgress[e];if(delete inProgress[e],r.parentNode&&r.parentNode.removeChild(r),a&&a.forEach((e=>e(t))),n)return n(t)},_=setTimeout(p.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=p.bind(null,r.onerror),r.onload=p.bind(null,r.onload),o&&document.head.appendChild(r)}},__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var n=__webpack_require__.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");if(t.length)for(var a=t.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=t[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e})(),(()=>{var e={main:0};__webpack_require__.f.j=(n,t)=>{var a=__webpack_require__.o(e,n)?e[n]:void 0;if(0!==a)if(a)t.push(a[2]);else{var r=new Promise(((t,r)=>a=e[n]=[t,r]));t.push(a[2]=r);var o=__webpack_require__.p+__webpack_require__.u(n),i=new Error;__webpack_require__.l(o,(t=>{if(__webpack_require__.o(e,n)&&(0!==(a=e[n])&&(e[n]=void 0),a)){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+n+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,a[1](i)}}),"chunk-"+n,n)}};var n=(n,t)=>{var a,r,[o,i,s]=t,c=0;if(o.some((n=>0!==e[n]))){for(a in i)__webpack_require__.o(i,a)&&(__webpack_require__.m[a]=i[a]);s&&s(__webpack_require__)}for(n&&n(t);c<o.length;c++)r=o[c],__webpack_require__.o(e,r)&&e[r]&&e[r][0](),e[r]=0},t=self.webpackChunkalurabank=self.webpackChunkalurabank||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var __webpack_exports__=__webpack_require__("./app/dist/js/app.js")})();