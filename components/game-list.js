Vue.component('game-list', {
	props: ['games'],
	template: [
		'<ol>',
			'<game-item v-for="item in games" :game="item" :key="item.id"></game-item>',
		'</ol>'
	].join('')
});

Vue.component('game-item', {
	props: ['game'],
	template: '<li>{{ game.title }}</list>'
});
