<template>
	<div id="app">
		<UserListView />
	</div>
</template>

<script>
	import UserListView from './views/UserListView.vue';

	export default {
	  name: 'App',
	  components: {
	    UserListView
	  }
	};
</script>

<style>
	#app {
	  text-align: center;
	}
</style>
