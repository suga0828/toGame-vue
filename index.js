const app = new Vue ({
	el: '#app',
	template: [
		'<div class="view">',
			'<game-header></game-header>',
			'<game-add @new="addNewGame"></game-add>',
			'<game-list v-bind:game="games"></game-list>',
		'</div>'
	].join(''),
	data: {
		games: [
			{ title: 'ME: Andromeda' },
			{ title: 'Fifa 2019' },
			{ title: 'League of Legends' }
		]
	},
	methods: {
		addNewGame: function (game) {
			this.games.push(game)
		}
	} 
});
