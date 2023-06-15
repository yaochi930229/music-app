<template>
	<view class="home">
		<!-- 轮播 -->
		<view class="banner">
			<swiper
				:indicator-dots="true"
				indicator-color="rgba(255, 255, 255, .5)"
				indicator-active-color="#ff372b"
				:autoplay="true" 
				:interval="3000" 
				:duration="1000">
				<swiper-item v-for="item in swiper" :key="item.id">
					<view class="swiper-item">
						<image :src="imgUrl+item.imgUrl" class="img"></image>
						<view class="tag">{{item.name}}</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 主入口 -->
		<view class="type-music">
			<view class="type-item" v-for="(item, index) in contentBar" :key="index">
				<view class="img-box">
					<image :src="`/static/${item.imgName}.png`" class="img"></image>
				</view>
				<view class="title">
					{{item.name}}
				</view>
			</view>
		</view>
		<!-- 推荐歌单 -->
		<view class="song-list">
			<view class="song-title">
				推荐歌单
				<view class="more">
					歌单广场
				</view>
			</view>
		</view>
		<view class="recomment-banner">
			<scroll-view scroll-x="true" class="recomment-song-list">
				<view class="song-item" v-for="item in songReco" :key="item.id">
					<view class="song-img">
						<image :src="imgUrl + item.imgUrl" class="img"></image>
					</view>
					<view class="song-detail">{{item.name}}</view>
				</view>
			</scroll-view>
		</view>
		<!-- 新碟/新歌 -->
		<view class="song-list tab-song-list">
			<view class="song-title">
				<view class="tab-name">
					<view class="tab" @click="tabChange(1)" :class="{'deactive': tabType === 2}">
						新碟
					</view>
					<view class="line"></view>
					<view class="tab" @click="tabChange(2)" :class="{'deactive': tabType === 1}">
						新歌
					</view>
				</view>
				<view class="more">
					更多
					<template v-if="tabType===1">新碟</template>
					<template v-if="tabType===2">新歌</template>
				</view>
			</view>
		</view>
		<view class="recomment-banner">
			<scroll-view scroll-x="true" class="recomment-song-list">
				<view class="song-item" v-for="item in tabList" :key="item.id">
					<view class="song-img">
						<image :src="imgUrl + item.imgUrl" class="img"></image>
					</view>
					<view class="song-detail">{{item.name}}</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>
<script>
import { getBanner, getRecommentSong } from '@/request/api.js'
export default {
	data() {
		return {
			swiper: [],
			contentBar: [
				{name: '每日推荐', imgName: 'tj'},
				{name: '歌单', imgName: 'gd'},
				{name: '排行榜', imgName: 'phb'},
				{name: '电台', imgName: 'td'},
				{name: '直播', imgName: 'zb'}
			],
			songReco: [],
			tabType: 1,
			tabList: [],
		}
	},
	computed: {
		imgUrl() {
			return this.$store.state.$baseUrl;
		},
	},
	watch: {
		tabType: {
			handler(val) {
				this.tabList = val === 1 ? this.songReco.slice(this.songReco.length - 3) : this.songReco.slice(0, 3);
			},
			immediate: true
		},
		songReco: {
			handler(val) {
				this.tabList = val.slice(val.length - 3)
			}
		}
	},
	onLoad() {
		this.getBanner();
		this.getRecomSong();
	},
	onShow() {
		
	},
	onHide() {
		
	},
	onUnload() {
		
	},
	methods: {
		getBanner() {
			getBanner().then(res => {
				this.swiper = res.data || [];
			})
		},
		getRecomSong() {
			getRecommentSong().then(res => {
				this.songReco = res.data || [];
			})
		},
		tabChange(index) {
			this.tabType = index;
		}
	}
}
</script>

<style lang="scss" scoped>
.banner {
	margin: 30rpx;
}
swiper {
	height: 300rpx;
	border-radius: 20rpx;
	overflow: hidden;
}
.swiper-item {
	width: 100%;
	height: 100%;
	position: relative;
	.img {
		width: 100%;
	}
	.tag {
		position: absolute;
		right: 0;
		bottom: 0;
		z-index: 1;
		font-size: 20rpx;
		color: white;
		background-color: lightblue;
		padding: 6rpx;
		border-radius: 6rpx 0 0 6rpx;
	}
}
.type-music {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 15px;
	position: relative;
	&::after {
		content: "";
		position: absolute;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 1px;
		transform: scaleY(.5);
		background-color: #d1d1d1;
	}
	.type-item {
		font-size: 14px;
		text-align: center;
		flex: 1;
	}
	.img-box {
		margin: 0 auto 10rpx;
		width: 100rpx;
		height: 100rpx;	
		background-color: red;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		.img {
			width: 50%;
			height: 50%;
		}
	}
}
.song-list {
	.song-title {
		padding: 30rpx;
		font-size: 16px;
		font-weight: bolder;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.more {
			font-size: 12px;
			border: 1px solid #ccc;
			padding: 5rpx 10rpx;
			border-radius: 30rpx;
		}
	}
}
.tab-song-list {
	.song-title {
		font-size: 14px;
	}
	.tab-name {
		display: flex;
		align-items: center;
	}
	.line {
		background-color: #ccc;
		width: 6rpx;
		margin: 0 15rpx;
		height: 25rpx;
	}
	.deactive {
		color: #ccc;
		font-size: 12px;
	}
}
.recomment-banner {
	padding: 0 30rpx;
	max-width: 100%;
}
.recomment-song-list {
	white-space: nowrap;
	width: 100%;
	.song-item {
		display: inline-block;
		width: 220rpx;
		text-align: center;
		margin-right: 15rpx;
		&:last-child {
			margin-right: 0;
		}
	}
	.song-img {
		width: 100%;
		border-radius: 20rpx;
		overflow: hidden;
		.img {
			width: 100%;
			height: 280rpx;
		}
	}
	.song-detail {
		font-size: 14px;
		padding: 0 5rpx;
		white-space: nowrap;
		overflow: hidden;
		height: 60rpx;
		line-height: 60rpx;
		text-overflow: ellipsis;
	}
}
</style>