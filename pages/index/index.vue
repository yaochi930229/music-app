<template>
	<view class="home">
		<view class="header">
			头部
		</view>
		<view class="main">
			<scroll-view scroll-y="true" class="main-wrap">
				<view class="main-content">
					<view class="main-item" v-for="item in list" :key="item.id">
						<view class="img-box">
							<image :src="baseUrl+item.imgUrl" mode="widthFix"></image>
						</view>
						<view class="course-name">
							{{item.name}}
						</view>
						<view class="course-fee">
							免费
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="tools">
			<view class="tools-item">
				<image src="@/static/logo.png"></image>
				<view>
					首页
				</view>
			</view>
			<view class="tools-item">
				<image src="@/static/logo.png"></image>
				<view>
					分类
				</view>
			</view>
			<view class="tools-item">
				<image src="@/static/logo.png"></image>
				<view>
					课程
				</view>
			</view>
			<view class="tools-item">
				<image src="@/static/logo.png"></image>
				<view>
					我的
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getHome } from '@/request/api.js';
	export default {
		data() {
			return {
				title: 'Hello',
				list: [],
			}
		},
		computed: {
			baseUrl() {
				return this.$store.state.$baseUrl;
			}
		},
		onLoad() {
			this.loadList();
		},
		methods: {
			loadList() {
				getHome().then(res => {
					console.log(res)
					this.list = res.data;
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.home {
	height: 100vh;
	/* #ifdef H5 */
	height: calc(100vh - (calc(var(--top-window-height) + calc(44px + env(safe-area-inset-top)))));
	/* #endif */
	display: flex;
	flex-direction: column;
}
.header {
	text-align: center;
	background-color: #ccc;
}
.main {
	flex-grow: 1;
	margin: 30rpx 0;
	position: relative;
}
.main-wrap {
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
}
.main-content {
	padding: 0 30rpx;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.main-item {
	width: 330rpx;
	margin-bottom: 30rpx;
	font-size: 16px;
}
.img-box {
	width: 100%;
	border-radius: 10rpx;
	max-height: 178rpx;
	overflow: hidden;
	image {
		width: 100%;
	}
}
.course-fee {
	font-size: 14px;
	color: lightskyblue;
}
.tools {
	padding-top: 10px;
	padding-bottom: constant(safe-area-inset-bottom);
	padding-bottom: env(safe-area-inset-bottom);
	position: relative;
	background-color: #ffffff;
	display: flex;
	text-align: center;
	font-size: 14px;
	.tools-item {
		flex: 1;
	}
	image {
		width: 39px;
		height: 39px;
	}
}
</style>
