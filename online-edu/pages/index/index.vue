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
	</view>
</template>

<script>
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
				couponList : [
					{
						c_num: 300000,
						end_time: "2025-08-22T16:00:00.000Z",
						goods_id: 1636,
						id: 83,
						isgetcoupon: true,
						price: "4.00",
						received_num: 19,
						start_time: "2022-07-14T16:00:00.000Z",
						type: "course",
						value: {id: 1636, title: "中级经济法-知识点精讲课"}
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
						value: {id: 184, title: "VueCli 实战商城后台管理系统"}
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
						value: {id: 6, title: "VueCli 实战在线教育后台系统"}
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
						value: {id: 11, title: "uni-app实战直播app全栈开发"}
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
						value: {id: 12, title: "unicloud商城全栈开发"}
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
	
</style>
