import Http from "@/utils/http.js"

class IndexModel extends Http {
	/**
	 * 获取首页数据接口
	 */
	static getMobileIndex(){
		return Http.request({
			url : '/mobile/index',
		})
	}
	/**
	 * 获取优惠卷数据接口
	 */
	static getMobileICoupon(){
		return Http.request({
			url : '/mobile/coupon',
			method : 'GET',
			data : {
				a : '1'
			},
			header : {
				appid : 'bd9d01ecc75dbbaaefce'
			}
		})
	}
	
	/**
	 * 获取可用拼团列表接口
	 */
	
	
	
	/**
	 * 获取可用秒杀列表
	 */
}

export default IndexModel