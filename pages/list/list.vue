<template>
	<view>
		List:{{name}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: ''
			}
		},
		onLoad() {
			console.log('进来了')
			// console.log(options)
			// const _item = JSON.parse(decodeURIComponent(options.item))
			// console.log(_item)
			// const obj = JSON.parse(uni.getStorageSync('obj'))
			// console.log(obj.name)
			// console.log(typeof obj)
			console.log(this.$store.state.homeToList)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
