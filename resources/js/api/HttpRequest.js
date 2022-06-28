export class HttpRequest {
    constructor(bus) {
        this.eventBus = bus;
    }
    async send(httpMethod, url, data) {
        try {
            return await axios.request({
                method: httpMethod,
                url: url,
                data: data
            });
        } 
        catch (err) 
        {
            this.eventBus?.$emit("error", err);
            throw err;
        }
    }
}
    