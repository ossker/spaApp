import { HttpRequest } from "./HttpRequest";

export class Repository {

    constructor(bus) {
        if (new.target === Repository) {
            throw new TypeError("Abstract Repository class can't be instantiated!");
        }
            
        this.httpRequest = new HttpRequest(bus);
        this.resource = new.target.name.replace('Repository', '').toLowerCase();
    }

    async getAll() {
        return await this.httpRequest.send("GET", `/api/${this.resource}`);
    }

    async getById(id) {
        return await this.httpRequest.send("GET", `/api/${this.resource}/${id}`);
    }

    async add(form) {
        return await this.httpRequest.send("POST", `/api/${this.resource}`, form);
    }

    async update(id, form) {
        return await this.httpRequest.send("PUT", `/api/${this.resource}/${id}`, form);
    }

    async delete(id) {
        return await this.httpRequest.send("DELETE", `/api/${this.resource}/${id}`);
    }
}
