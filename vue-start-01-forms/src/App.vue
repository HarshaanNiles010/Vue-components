<template>
	<FormPage
	:page-created="PageCreated"></FormPage>
</template>

<script>
import FormPage from './components/FormPage.vue';
export default {
	name: 'App',
	components: {
		FormPage
	},
	methods:{
		PageCreated(pageObj){
			console.log(pageObj);
		}
	}
}
</script>
<!--<style scoped>
	#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	}
</style>
-->
