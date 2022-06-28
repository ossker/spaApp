import { HttpRequest } from "./HttpRequest";

export class Auth {
    constructor(bus, router) {
        this.eventBus = bus;
        this.router = router;
        this.httpRequest = new HttpRequest(this.eventBus);
    }

    async login(form) {
        await this.httpRequest.send("GET", "/sanctum/csrf-cookie");
        await this.httpRequest.send("POST", "/api/login", {
            email: form.email,
            password: form.password
        });
        localStorage.setItem("isLogged", "true");
        this.eventBus.$emit("isLogged", true);
        this.router.push({ name: "dashboard" });
    }
        
    async logout() {
        localStorage.removeItem("isLogged");
        this.eventBus.$emit("isLogged", false);
        await this.httpRequest.send("POST", "/api/logout");
        if (this.router.currentRoute.name != "home") 
        {
            this.router.push({ name: "home" });
        }
    }
        
    async getAuthUser() {
        return await this.httpRequest.send("GET", "/api/user");
    }

    static isLogged() { 
        return localStorage.getItem("isLogged");
    }
        
    reset() {
        localStorage.removeItem("isLogged");
        this.eventBus.$emit("isLogged", false);
        if (this.router.currentRoute.name != "login") 
        {
            this.router.push({ name: "login" });
        }
    }
}
