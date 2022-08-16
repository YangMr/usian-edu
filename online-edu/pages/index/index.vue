<template>
	<view class="container">
		<!-- 搜索框 -->
		<i-search-bar></i-search-bar>

		<!-- 轮播图 -->
		<i-swiper :data="bannerData" @click="handleToDetail"></i-swiper>

		<!-- 导航栏 -->
		<i-nav :data="navList"></i-nav>

		<!-- 优惠卷 -->
		<i-coupon :data="couponList"></i-coupon>

		<view class="divider"></view>

		<!-- 拼团 -->
		<view class="px-2">
			<i-list-title><template v-slot:title>拼团</template></i-list-title>
			<i-course-list :data="groupList" type="column"></i-course-list>
		</view>

		<view class="divider"></view>

		<!-- 最新列表 -->
		<view class="px-2">
			<i-list-title>
				<template v-slot:title>最新列表</template>
				<template v-slot:sub-title>查看全部</template>
			</i-list-title>
			<i-course-list :data="groupList" type="row"></i-course-list>
		</view>

		<view class="divider"></view>

		<!-- 热门推荐 -->
		<!-- <view class="px-2">
			<i-list-title>
				<template v-slot:title>热门推荐</template>
				<template v-slot:sub-title>查看更多</template>
			</i-list-title>
			<view>
				<i-course-item :item="item"  v-for="(item,index) in groupList" :key="index"></i-course-item>
			</view>
		</view> -->
	
		<view class="divider"></view>	
			
		<view class="advert">
			<image src="../../static/demo/cover/1.png" mode="aspectFill"></image>
		</view>
		
	</view>
</template>

<script>
	/**
	 * 1. http请求封装
	 * 	  http请求
	 *    请求拦截器
	 *    响应拦截器
	 *    错误信息提示
	 * 2. api接口进行封装	
	 * 3. 调用api接口,进行数据渲染
	 */
	export default {
		data() {
			return {
				bannerData: [{
						course_id: 538,
						course_title: "VueCli 实战商城后台管理系统",
						src: "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/dishaweb/08C9150BC2B163AEC012D6E544C75DD2.png",
						type: "webview",
						url: "http://www.dishaxy.com"
					},
					{
						course_id: 538,
						course_title: "VueCli 实战商城后台管理系统",
						src: "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/dishaweb/96bd39ce1d334b8493bac12bb1aa4223.png",
						type: "course",
						url: ""
					}
				],
				navList: [{
					src: "/static/demo/icon/hd.png",
					name: "活动",
				}, {
					src: "/static/demo/icon/test.png",
					name: "考试",
				}, {
					src: "/static/demo/icon/ms.png",
					name: "秒杀",
				}, {
					src: "/static/demo/icon/pt.png",
					name: "拼团",
				}, {
					src: "/static/demo/icon/course.png",
					name: "直播",
				}, {
					src: "/static/demo/icon/column.png",
					name: "专栏",
				}, {
					src: "/static/demo/icon/book.png",
					name: "电子书",
				}, {
					src: "/static/demo/icon/ask.png",
					name: "社区",
				}],
				couponList: [{
						c_num: 300000,
						end_time: "2025-08-22T16:00:00.000Z",
						goods_id: 1636,
						id: 83,
						isgetcoupon: true,
						price: "4.00",
						received_num: 19,
						start_time: "2022-07-14T16:00:00.000Z",
						type: "course",
						value: {
							id: 1636,
							title: "中级经济法-知识点精讲课"
						}
					},
					{
						c_num: 10000,
						end_time: "2034-10-16T16:00:00.000Z",
						goods_id: 184,
						id: 39,
						isgetcoupon: false,
						price: "8.90",
						received_num: 141,
						start_time: "2021-09-09T16:00:00.000Z",
						type: "column",
						value: {
							id: 184,
							title: "VueCli 实战商城后台管理系统"
						}
					},
					{
						c_num: 100000,
						end_time: "2035-07-28T16:00:00.000Z",
						goods_id: 6,
						id: 33,
						isgetcoupon: false,
						price: "5.00",
						received_num: 121,
						start_time: "2021-06-28T17:58:01.000Z",
						type: "course",
						value: {
							id: 6,
							title: "VueCli 实战在线教育后台系统"
						}
					},
					{
						c_num: 100000,
						end_time: "2032-06-29T16:00:00.000Z",
						goods_id: 11,
						id: 19,
						isgetcoupon: false,
						price: "50.00",
						received_num: 88,
						start_time: "2021-05-15T17:03:00.000Z",
						type: "course",
						value: {
							id: 11,
							title: "uni-app实战直播app全栈开发"
						}
					},
					{
						c_num: 10000,
						end_time: "2032-06-29T16:00:00.000Z",
						goods_id: 12,
						id: 18,
						isgetcoupon: false,
						price: "5.00",
						received_num: 82,
						start_time: "2021-05-15T17:02:00.000Z",
						type: "course",
						value: {
							id: 12,
							title: "unicloud商城全栈开发"
						}
					}
				],
				groupList: [{
						"id": 19,
						"goods_id": 12,
						"title": "unicloud商城全栈开发",
						"cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/79023e0596c23aff09e6.png",
						"price": "4.00",
						"t_price": "10.00",
						"type": "media",
						"start_time": "2021-04-15T16:00:00.000Z",
						"end_time": "2022-05-16T16:00:00.000Z"
					}, {
						"id": 19,
						"goods_id": 12,
						"title": "unicloud商城全栈开发",
						"cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/79023e0596c23aff09e6.png",
						"price": "4.00",
						"t_price": "10.00",
						"type": "media",
						"start_time": "2021-04-15T16:00:00.000Z",
						"end_time": "2022-05-16T16:00:00.000Z"
					},
					{
						"id": 19,
						"goods_id": 12,
						"title": "unicloud商城全栈开发",
						"cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/79023e0596c23aff09e6.png",
						"price": "4.00",
						"t_price": "10.00",
						"type": "column",
						"start_time": "2021-04-15T16:00:00.000Z",
						"end_time": "2022-05-16T16:00:00.000Z"
					}, {
						"id": 19,
						"goods_id": 12,
						"title": "unicloud商城全栈开发",
						"cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/79023e0596c23aff09e6.png",
						"price": "4.00",
						"t_price": "10.00",
						"type": "media",
						"start_time": "2021-04-15T16:00:00.000Z",
						"end_time": "2022-05-16T16:00:00.000Z"
					}
				]

			}
		},
		onLoad() {

		},
		methods: {
			/** 点击轮播图跳转到详情页
			 * @param {Object} item
			 */
			handleToDetail(item) {
				// TODO 点击跳转到对应的详情页面, 并且还需要将id传过去
				console.log(item)
			}
		}
	}
</script>

<style>
.advert{
	width: 750rpx;
	height: 360rpx;
}	
</style>
