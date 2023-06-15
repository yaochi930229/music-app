<template>
	<view>
		{{ price }}元{{title}}
		<button @click="setMsg">点击我传递参数给父组件</button>
	</view>
</template>

<script>
	export default {
		props: {
			price: {
				type: Number,
				default: 0,
			},
			title: {
				type: String,
				default: ''
			}
		},
		name:"comp",
		data() {
			return {
				
			};
		},
		methods: {
			setMsg() {
				this.$emit('setMsg', '我是子组件传递的数据')
			}
		}
		
	}
</script>

<style>

</style>