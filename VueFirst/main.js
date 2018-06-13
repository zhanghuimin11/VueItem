/**
 * Created by zhanghuimin on 2018-06-12.
 */
var app1 = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue.js!'
	}
});
var app2 = new Vue({
	el: '#app-2',
	data: {
		message: '加载中' + new Date().toLocaleString(),
		content:""
	}
});
var app3 = new Vue({
	el: '#app-3',
	data: {
		seen: true
	}
})
var app4 = new Vue({
	el: "#app-4",
	data: {
		todos: [
			{text: "js"},
			{text: "vs"},
			{text: "ws"}
		]
	}
});
app4.todos.push({text: '新项目2'});
var app5 = new Vue({
	el: '#app-5',
	data: {
		message: 'hello Vue.js!'
	},
	methods: {
		reverseMessage: function () {
			this.message = this.message.split('').reverse().join('')
		}
	}
});
var app6 = new Vue({
	el: '#app-6',
	data: {
		message: 'Hello Vue!'
	}
});

Vue.component('todo-item', {
	// todo-item 组件现在接受一个
	// "prop"，类似于一个自定义特性。
	// 这个 prop 名为 todo。
	props: ['todo'],
	template: '<li>{{ todo.text }}</li>'
});
var app7 = new Vue({
	el: '#app-7',
	data: {
		groceryList: [
			{ id: 0, text: '蔬菜' },
			{ id: 1, text: '奶酪' },
			{ id: 2, text: '随便其它什么人吃的东西' }
		]
	}
})