const { createApp } = Vue;

createApp({
    data() {
        return {
            newTodo: '',
            todos: [      // Lista di todo con oggetti
                { text: 'Imparare Vue.js', done: false },
                { text: 'Studiare Javascript', done: false },
                { text: 'Posare corda e sgabello', done: true }
            ]
        };
    },
    methods: {
        addTodo() {
            // Verifica se il campo di input non è vuoto
            if (this.newTodo.trim() !== '') {
                // Aggiunge un nuovo todo all'array todos
                this.todos.push({ text: this.newTodo.trim(), done: false });
                // Resetta il campo di input
                this.newTodo = '';
            }
        },
        removeTodo(index) {
            // Rimuove il todo all'indice specificato
            this.todos.splice(index, 1);
        },
        toggleDone(todo) {
            // Inverte lo stato di completamento del todo
            todo.done = !todo.done;
        }
    }
}).mount('#app');