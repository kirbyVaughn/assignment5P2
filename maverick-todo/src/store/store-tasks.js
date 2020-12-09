  
import Vue from 'vue'
import { uid } from 'quasar'
import { firebaseDb, firebaseAuth } from 'boot/firebase'


const state = {
	tasks: {}
}

const mutations = {
	updateTask(state, payload) {
		Object.assign(state.tasks[payload.id], payload.updates)
	},
	deleteTask(state, id) {
		Vue.delete(state.tasks, id)
	},
	addTask(state, payload) {
		Vue.set(state.tasks, payload.id, payload.task)
	}
}

const actions = {
	updateTask({ dispatch }, payload) {
		dispatch('fbUpdateTask', payload)
	},
	deleteTask({ dispatch }, id) {
		dispatch('fbDeleteTask', id)
	},
	addTask({ dispatch }, task) {
		let taskId = uid()
		let payload = {
			id: taskId,
			task: task
		}
		dispatch('fbAddTask', payload)
	},

	fbReadData({ commit }) {
		let userId = firebaseAuth.currentUser.uid
		let userTasks = firebaseDb.ref('tasks/' + userId)

		// child added
		userTasks.on('child_added', snapshot => {
			let task = snapshot.val()
			let payload = {
				id: snapshot.key,
				task: task
			}
			commit('addTask', payload)
		})

		// child changed
		userTasks.on('child_changed', snapshot => {
			let task = snapshot.val()
			let payload = {
				id: snapshot.key,
				updates: task
			}
			commit('updateTask', payload)
		})

		// child removed
		userTasks.on('child_removed', snapshot => {
			let taskId = snapshot.key
			commit('deleteTask', taskId)
		})
	},
	fbAddTask({}, payload) {
		let userId = firebaseAuth.currentUser.uid
		let taskRef = firebaseDb.ref('tasks/' + userId + '/' + payload.id)
		taskRef.set(payload.task)
	},
	fbUpdateTask({}, payload) {
		let userId = firebaseAuth.currentUser.uid
		let taskRef = firebaseDb.ref('tasks/' + userId + '/' + payload.id)
		taskRef.update(payload.updates)
	},
	fbDeleteTask({}, taskId) {
		let userId = firebaseAuth.currentUser.uid
		let taskRef = firebaseDb.ref('tasks/' + userId + '/' + taskId)
		taskRef.remove()
	}	
}

const getters = {
	tasks: (state) => {
		return state.tasks
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}
