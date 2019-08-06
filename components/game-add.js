Vue.component('game-add', {
	template: [
		'<div>',
			'<input type="text" v-model="titleGame" />',
			'<button @click="emitNewGame">Añadir</button>',
		'</div>'
	].join(''),
	data: function() {
		return {
			titleGame: null
		}
	},
	methods: {
		emitNewGame: function() {
			if (this.titleGame) {
				this.$emit('new', { title: this.titleGame });
				this.titleGame = null;
			}
		}
	}
});
