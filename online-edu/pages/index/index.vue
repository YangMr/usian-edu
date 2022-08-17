<template>
	<view class="container">
	
		<block v-for="(item,index) in template" :key="index">
			<!-- 搜索框 -->
			<i-search-bar v-if="item.type === 'search'" :placeholder="item.placeholder"></i-search-bar>
			
			<!-- 轮播图 -->
			<i-swiper v-else-if="item.type === 'swiper'" :data="item.data" @click="handleToDetail"></i-swiper>
			
			<!-- 导航栏 -->
			<i-nav v-else-if="item.type === 'icons'" :data="item.data"></i-nav>
			
			<!-- 优惠卷 -->
			<i-coupon  v-else-if="item.type === 'coupon'" :data="couponList"></i-coupon>
			
			<view v-if="item.type === 'coupon'" class="divider"></view>
			
			<!-- 拼团 -->
			<view class="px-2"  v-if="item.type === 'promotion'">
				<i-list-title><template v-slot:title>{{ item.listType == 'group' ? '拼团' : '秒杀' }}</template></i-list-title>
				<i-course-list :data="groupList" type="column"></i-course-list>
			</view>
			
			<view  v-if="item.type === 'promotion'" class="divider"></view>
			
			<!-- 最新列表 -->
			<view class="px-2" v-if="item.type === 'list'">
				<i-list-title>
					<template v-slot:title>{{item.title}}</template>
					<template v-slot:sub-title>查看全部</template>
				</i-list-title>
				<i-course-list :data="item.data" type="row"></i-course-list>
			</view>
			
			<view v-if="item.type === 'list'" class="divider"></view>
				
			<view class="advert" v-if="item.type === 'imageAd'">
				<image :src="item.data" mode="aspectFill"></image>
			</view>
			
		</block>
		
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
	import IndexModel from "@/model/indexModel"
	export default {
		data() {
			return {
				template : [],
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
			this.getIndexData()
		},
		methods: {
			/** 点击轮播图跳转到详情页
			 * @param {Object} item
			 */
			handleToDetail(item) {
				// TODO 点击跳转到对应的详情页面, 并且还需要将id传过去
				console.log(item)
			},
			async getIndexData(){
				const response = await IndexModel.getMobileIndex()
				console.log(response)
				this.template = response
			}
		}
	}
</script>

<style>
.advert{
	width: 750rpx;
	height: 340rpx;
}	
</style>
