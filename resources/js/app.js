import Vue from 'vue';
import Spa from './Spa.vue';
import router from './router';
import { Auth } from './api/Auth';
import { StudentsRepository } from './api/StudentsRepository';

require('./bootstrap');

const app = new Vue({
    el: '#app',
    template: '<spa/>',
    components: {
        Spa
    },
    router,
    data: {
        eventBus: new Vue()
    },
    provide() {
        return {
            eventBus: this.eventBus,
            auth: new Auth(this.eventBus, router),
            studentRepository: new StudentsRepository(this.eventBus)
        }
    }      
});

