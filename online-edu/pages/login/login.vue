<template>
	<view>
		<view class="login-back" @click="handleBackPage">
			<uni-icons color="#fff" type="back"></uni-icons>
		</view>

		<view class="login-bg"></view>

		<view class="login">
			<view class="flex">
				<text class="title">{{type === 'login' ? '登 录' : '注 册'}}</text>
			</view>

			<view class="login-form">
				<uni-icons type="person"></uni-icons>
				<input type="text" v-model="form.username" class="rounded font-md" placeholder="请输入用户名" />
			</view>

			<view class="login-form">
				<uni-icons type="locked"></uni-icons>
				<input type="text" v-model="form.password" class="rounded font-md" placeholder="请输入密码" />
			</view>
			<view class="login-form" v-if="type === 'reg'">
				<uni-icons type="locked"></uni-icons>
				<input type="text" v-model="form.repassword" class="rounded font-md" placeholder="请输入确认密码" />
			</view>

			<view class="login-button bg-main" hover-class="bg-main-hover" @click="handleSubmitForm">
				{{type === 'login' ? '登 录' : '注册'}}
			</view>

			<view class="flex justify-between my-3 font align-center">
				<text class="text-main py-3" @click="handleToggleType">
					{{type === 'login' ? '注册账号' : '去登录'}}
				</text>
				<text class="text-light-muted py-3">忘记密码?</text>
			</view>

			<view class="flex align-center justify-center ">
				<view class="wechat-login">
					<uni-icons type="weixin" size="25" color="#5ccc84"></uni-icons>
				</view>
			</view>

			<view v-if="type === 'login'" class="flex align-center justify-center py-4">
				<checkbox-group @change="handleCheckboxStatus" >
					<label class="text-light-muted">
						<checkbox  :checked="check" color="#7fd49e" style="transform: scale(0.7);" /><text class="font">已阅读并同意用户协议&隐私声明</text>
					</label>
				</checkbox-group>
			</view>
		</view>
	</view>
</template>

<script>
	import UserModel from "@/model/userModel"
	export default {
		data() {
			return {
				type: 'login',
				form: {
					username: '',
					password: '',
					repassword: ''
				},
				check : false
			}
		},
		methods: {
			/**
			 * 返回上一页
			 */
			handleBackPage() {
				uni.navigateBack({
					delta: 1
				})
			},
			/**
			 * 切换到登录注册类型
			 */
			handleToggleType() {
				this.type = this.type === 'login' ? 'reg' : 'login'
			},
			/**
			 * 提交表单数据
			 */
			handleSubmitForm() {
				uni.showLoading({title: '提交中...',mask: false})
				this.type === 'reg' ? this.handleRegisterAccont() : this.handleLoginAccont()
			},
			/**
			 * 注册
			 */
			async handleRegisterAccont() {
				try{
					const data = this.loadsh.cloneDeep(this.form)
					const response = await UserModel.userRegister(data)
					uni.showToast({title : '注册成功', icon : 'none'})
					this.type = 'login'
					this.resetForm()
				}catch(err){
					console.log(err)
				}finally{
					uni.hideLoading()
				}
			},
			/**
			 * 登录
			 */
			async handleLoginAccont() {
				if(!this.check){
					return uni.showToast({
						title : '请先阅读并同意用户协议&隐私声明',
						icon : "none"
					})
				}
				try{
					const data = this.loadsh.cloneDeep(this.form)
					delete data.repassword
					const response = await UserModel.userLogin(data)
					this.resetForm()
					this.$store.dispatch("setUser", response)
					console.log("Response",response)
				}catch(err){
					console.log(err)
				}finally{
					uni.hideLoading()
				}	
			},
			/**
			 * 清空表单方法
			 */
			resetForm(){
				this.form = {
					username : '',
					password : '',
					repassword : ''
				}
			},
			/**
			 * 获取checkbox状态
			 */
			handleCheckboxStatus(event){
				this.check = Boolean(event.detail.value.length)
				console.log(this.check)
			}
		}
	}
</script>

<style>
	.login-bg {
		height: 220rpx;
		background: linear-gradient(120deg, #3BFDAF 0%, #70D6F2 100%);
	}

	.login-back {
		position: absolute;
		width: 100rpx;
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		left: 0;
		top: 0;
	}

	.login {
		position: absolute;
		left: 0;
		right: 0;
		top: 200rpx;
		height: 300rpx;
		background-color: #fff;
		border-top-left-radius: 30rpx;
		border-top-right-radius: 30rpx;
		padding: 60rpx 70rpx 0 70rpx;
	}

	.title {
		font-size: 22px;
		margin-bottom: 50rpx;
		color: #35404b;
	}

	.login-form {
		position: relative;
		margin-bottom: 50rpx;
	}

	.login-form .uni-icons {
		position: absolute;
		width: 100rpx;
		height: 100rpx;
		color: #272727;
		left: 0;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.login-form input {
		background-color: #f5f5f5;
		height: 100rpx;
		padding: 0 20rpx 0 100rpx;
	}

	.login-button {
		color: #fff;
		height: 100rpx;
		border-radius: 10rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.wechat-login {
		width: 47px;
		height: 47px;
		border-radius: 50%;
		border: 1px solid #5ccc84;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
