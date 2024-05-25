"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const index_js_1 = require("../../common/index.js");
const helpers_js_1 = require("../../common/lib/helpers.js");
const index_js_2 = require("../../index.js");
const pluralize_js_1 = tslib_1.__importDefault(require("../../common/lib/pluralize.js"));
class StoreInstance {
    storeKey;
    storeName;
    store;
    constructor(key) {
        this.storeKey = key;
        this.storeName = key === 'name' ? "dbStore" : "routrStore";
        this.store = this.storeKey === "name" ? helpers_js_1.dbStore : helpers_js_1.routeStore;
    }
    len() {
        return this.store.length;
    }
    exist(keyValue) {
        return this.get(keyValue) !== null;
    }
    get(keyValue) {
        return this.store.find((c) => c[this.storeKey] === keyValue) ?? null;
    }
    add(obj) {
        let keyValue = obj[this.storeKey];
        if (!this.exist(keyValue)) {
            this.store.push(obj);
            index_js_1.envs.logLine(`just added ( " ${keyValue} " ) to ${this.storeName} :`);
        }
    }
    delete(keyValue) {
        if (this.exist(keyValue)) {
            let index = this.store.findIndex((c) => c[this.storeKey] === keyValue) ?? null;
            if (index !== -1)
                this.store.splice(index, 1);
            ;
            index_js_1.envs.logLine(`just deleted ( " ${this.storeKey} ) from ${this.storeName} :`);
        }
    }
}
class RouteStore extends StoreInstance {
    constructor() {
        super('routeName');
    }
    print() {
        index_js_1.envs.logLine(" ***** All app routes *******: \n", this.getAllRoutesToString());
    }
    deleteAppRoute(routeName) {
        this.routesLoop(routeName, (item, index) => {
            index_js_2.appRouter.stack.splice(index, 1);
            let msg = `route deleted : ${this.getMethod(item.route)} : ${item.route.path} `;
            index_js_1.envs.logLine(msg);
        });
        // delete route object Default.ConfigRoute
        this.delete(routeName);
    }
    deleteRoutePath(routePath) {
        this.routesLoop(routePath, (item, index) => {
            if (item && item.route.path === routePath) {
                index_js_2.appRouter.stack.splice(index, 1);
                let msg = `route path deleted : ${this.getMethod(item.route)} : ${item.route.path} `;
                index_js_1.envs.logLine(msg);
            }
        });
    }
    getRoutesToString(routeName) {
        return routeName ? this.ToString(this.getRoutesPathMethods(routeName)) : "";
    }
    getRoutesToJsonString(routeName) {
        return routeName ? this.ToJson(this.getRoutesPathMethods(routeName)) : "";
    }
    getAllRoutesToString() {
        return this.ToString(this.getRoutesPathMethods());
    }
    getAllRoutesToJsonString() {
        return this.ToJson(this.getRoutesPathMethods());
    }
    getRoutesPathMethods(routeName) {
        return this.getRoutes(routeName)
            .map((route) => {
            return {
                method: this.getMethod(route),
                path: route.path
            };
        });
    }
    getRoutes(routePath) {
        if (routePath)
            return index_js_2.appRouter.stack.filter((r) => r.route && r.route.path.startsWith(routePath)).map((r) => r.route);
        return index_js_2.appRouter.stack.filter((r) => r.route).map((r) => r.route);
    }
    pluralizeRoute(routeName) {
        return (0, pluralize_js_1.default)(routeName);
    }
    //========================================================================================
    ToString(obj) {
        return obj.map((r) => r.method + " => " + r.path).join("\n");
    }
    ToJson(obj) {
        return JSON.stringify(obj, null, 2);
    }
    getMethod(routeObj) {
        return Object.keys(routeObj.methods)[0].toUpperCase();
    }
    routesLoop(routePath, callback) {
        const len = index_js_2.appRouter.stack.length;
        for (let index = 0; index < len; index++) {
            let item = index_js_2.appRouter.stack[index];
            if (item && item.route.path.startsWith(routePath)) {
                callback(item, index);
            }
        }
    }
}
class Store {
    db;
    route;
    constructor() {
        this.db = new StoreInstance('name');
        this.route = new RouteStore();
    }
}
exports.default = new Store();
