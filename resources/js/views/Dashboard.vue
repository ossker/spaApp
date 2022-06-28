<template>
    <div>
        <div class="zalogowany" v-if="user">Zalogowany użytkownik: {{user}}</div>
        <div class="radio--buttons">
            <label class="radio--label" id="radio--label">
                <input class="radio--input" type="radio" v-model="component" value="list" />
                <span class="radio--span">Lista</span>
            </label>
            
            <label>
                <input class="radio--input" type="radio" v-model="component" value="editor" />
                <span class="radio--span">Edycja</span>
            </label>
        </div>

        <component
            :is="selectedComponent"
            :student="student"
            :students="students"
            @create="createStudent"
            @edit="editStudent"
            @delete="deleteStudent"
            @submit="submitForm">
        </component>
    </div>
</template>
<script>
    import StudentForm from "../components/StudentForm";
    import StudentsList from "../components/StudentsList";
    export default {
        inject: ["auth", "studentRepository"],
        components: {StudentForm, StudentsList},
        async created() {
            this.students = (await this.studentRepository.getAll()).data.data;
            this.user = (await this.auth.getAuthUser()).data.name;
        },
        async getUser() {
            let user = await this.auth.getUser();
            this.user = user.data.name;
        },
        data() {
            return {
                user: null,
                component: "list",
                student: null,
                students: []
            };
        },
        methods: {
            createStudent() {
                this.student = null;
                this.component = "editor";
            },
            editStudent(st) {
                this.student = st;
                this.component = "editor";
            },
            async deleteStudent(st) {
                await this.studentRepository.delete(st.id);
                let index = this.students.findIndex(s => s.id == st.id);
                this.student = null;
                this.students.splice(index, 1);
            },
            async submitForm(st) {
                if (this.student?.id) {
                    await this.studentRepository.update(this.student.id, st);
                    let index = this.students.findIndex(s => s.id == this.student.id);
                    this.students[index]=Object.assign(st, { id: this.student.id });
                } else {
                    let createdStudent = (await this.studentRepository.add(st)).data.data;
                    this.students.push(createdStudent);
                    this.student = createdStudent;
                }
                this.component = "list";
            }

        },
        computed: {
            selectedComponent() {
                return this.component == "list" ? StudentsList : StudentForm;
            }
        }
    };
</script>
<style>
.radio--buttons{
    justify-content: center;
    display: flex;
    margin-top: 10px;
}
.radio--span{
    font-weight: 500;
    color: #fff;
    font-size: 1.3rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}

#radio--label{
    margin-right: 20px;
}

.zalogowany{
    font-weight: 500;
    color: #fff;
    opacity: 1;
    font-size: 1.4rem;
    margin-top: 0;
    margin-bottom: 60px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    margin-top: 20px;
    
}
</style>
