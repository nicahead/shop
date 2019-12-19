var apiKey="8le3pbltdgx2a5w5";var userDir="/appserver/4xfpi4a9";var website="https://211.qinziheng.com";var apiDir="/api/diancan";var apiAddressDir="/api/common/address";var apiCommonPath="/api/common";var requestApiPath=website+apiDir;var requestCommonPath=website+apiCommonPath;var requestAddressPath=website+apiAddressDir;function p(k){if(toString){console.log(JSON.stringify(k))}else{console.log(k)}}function getOpenId(callback){wx.login({success:function(res){wx.request({url:requestCommonPath+"/get_open_id.php",data:{apiKey:apiKey,code:res.code},success:function(sRes){callback(sRes)}})}})}function getIndex(openid,callback){wx.request({url:requestApiPath+"/index.php",data:{apiKey:apiKey,openid:openid},method:"POST",header:{"content-Type":"application/x-www-form-urlencoded"},success:function(res){if(200==res.statusCode){callback(res)}}})}function getCategory(openid,callback){wx.request({url:requestApiPath+"/category.php",data:{apiKey:apiKey,openid:openid},method:"POST",header:{"content-Type":"application/x-www-form-urlencoded"},success:function(res){if(200==res.statusCode){callback(res)}}})}function getList(openid,uniqueid,callback){wx.request({url:requestApiPath+"/list.php",data:{apiKey:apiKey,uniqueid:uniqueid,openid:openid},method:"POST",header:{"content-Type":"application/x-www-form-urlencoded"},success:function(res){if(200==res.statusCode){callback(res)}}})}function getPost(openid,uniqueid,callback){wx.request({url:requestApiPath+"/post.php",data:{apiKey:apiKey,uniqueid:uniqueid,openid:openid},method:"POST",header:{"content-Type":"application/x-www-form-urlencoded"},success:function(res){if(200==res.statusCode){callback(res)}}})}function getCompany(openid,callback){wx.request({url:requestApiPath+"/company.php",data:{apiKey:apiKey,openid:openid},method:"POST",header:{"content-Type":"application/x-www-form-urlencoded"},success:function(res){if(200==res.statusCode){callback(res)}}})}function addAddress(openid,userName,provinceName,cityName,countyName,detailInfo,telNumber,postalCode,callback){wx.request({url:requestAddressPath+"/add_address.php",data:{apiKey:apiKey,openid:openid,userName:userName,provinceName:provinceName,cityName:cityName,countyName:countyName,detailInfo:detailInfo,telNumber:telNumber,postalCode:postalCode},method:"POST",header:{"content-Type":"application/x-www-form-urlencoded"},success:function(res){if(200==res.statusCode){callback(res)}}})}function getAddress(openid,uniqueid,callback){wx.request({url:requestAddressPath+"/get_address.php",data:{apiKey:apiKey,openid:openid,uniqueid:uniqueid},method:"POST",header:{"content-Type":"application/x-www-form-urlencoded"},success:function(res){if(200==res.statusCode){callback(res)}}})}function editAddress(openid,uniqueid,userName,provinceName,cityName,countyName,detailInfo,telNumber,postalCode,callback){wx.request({url:requestAddressPath+"/edit_address.php",data:{apiKey:apiKey,openid:openid,uniqueid:uniqueid,userName:userName,provinceName:provinceName,cityName:cityName,countyName:countyName,detailInfo:detailInfo,telNumber:telNumber,postalCode:postalCode},method:"POST",header:{"content-Type":"application/x-www-form-urlencoded"},success:function(res){if(200==res.statusCode){callback(res)}}})}function getDefaultAddress(openid,callback){wx.request({url:requestAddressPath+"/get_default_address.php",data:{apiKey:apiKey,openid:openid},method:"POST",header:{"content-Type":"application/x-www-form-urlencoded"},success:function(res){if(200==res.statusCode){callback(res)}}})}function addressList(openid,callback){wx.request({url:requestAddressPath+"/address_list.php",data:{apiKey:apiKey,openid:openid},method:"POST",header:{"content-Type":"application/x-www-form-urlencoded"},success:function(res){if(200==res.statusCode){callback(res)}}})}function deleteAddress(openid,id,callback){wx.request({url:requestAddressPath+"/address_delete.php",data:{apiKey:apiKey,openid:openid,id:id},method:"POST",header:{"content-Type":"application/x-www-form-urlencoded"},success:function(res){if(200==res.statusCode){callback(res)}}})}function setDefaultAddress(openid,id,callback){wx.request({url:requestAddressPath+"/set_default_address.php",data:{apiKey:apiKey,openid:openid,id:id},method:"POST",header:{"content-Type":"application/x-www-form-urlencoded"},success:function(res){if(200==res.statusCode){callback(res)}}})}function createOrder(openid,goodsList,addressData,meta,callback){wx.request({url:requestApiPath+"/create_order.php",data:{openid:openid,apiKey:apiKey,goodsList:goodsList,addressData:addressData,meta:meta},method:"POST",header:{"content-Type":"application/x-www-form-urlencoded"},success:function(res){if(200==res.statusCode){if(0==res.data.errno){wx.requestPayment({timeStamp:res.data.prepay.timeStamp,nonceStr:res.data.prepay.nonceStr,package:res.data.prepay.package,signType:"MD5",paySign:res.data.prepay.paySign,success:function(res2){var rs={data:{errno:"0",errmsg:"ok"}};callback(rs)},fail:function(res2){if("undefined"==typeof res2.err_code){var rs={data:{errno:400061,errmsg:"取消支付"}}}else{var rs={data:{errno:res2.err_code,errmsg:res2.err_desc}}}callback(rs)},complete:function(res2){if("requestPayment:cancel"==res2.errMsg){var rs={data:{errno:400061,errmsg:"取消支付"}};callback(rs)}}})}else{callback(res)}}}})}function reCreateOrder(openid,orderId,callback){wx.request({url:requestApiPath+"/recreate_order.php",data:{openid:openid,apiKey:apiKey,orderId:orderId},method:"POST",header:{"content-Type":"application/x-www-form-urlencoded"},success:function(res){if(200==res.statusCode){if(0==res.data.errno){wx.requestPayment({timeStamp:res.data.prepay.timeStamp,nonceStr:res.data.prepay.nonceStr,package:res.data.prepay.package,signType:"MD5",paySign:res.data.prepay.paySign,success:function(res2){var rs={data:{errno:"0",errmsg:"ok"}};callback(rs)},fail:function(res2){if("undefined"==typeof res2.err_code){var rs={data:{errno:400061,errmsg:"取消支付"}}}else{var rs={data:{errno:res2.err_code,errmsg:res2.err_desc}}}callback(rs)},complete:function(res2){if("requestPayment:cancel"==res2.errMsg){var rs={data:{errno:400061,errmsg:"取消支付"}};callback(rs)}}})}else{callback(res)}}}})}function orderList(openid,callback){wx.request({url:requestApiPath+"/order_list.php",data:{openid:openid,apiKey:apiKey},method:"POST",header:{"content-Type":"application/x-www-form-urlencoded"},success:function(res){if(200==res.statusCode){callback(res)}}})}function orderDetail(openid,out_trade_no,callback){wx.request({url:requestApiPath+"/order_detail.php",data:{openid:openid,apiKey:apiKey,out_trade_no:out_trade_no},method:"POST",header:{"content-Type":"application/x-www-form-urlencoded"},success:function(res){if(200==res.statusCode){callback(res)}}})}module.exports={getOpenId:getOpenId,getIndex:getIndex,getCategory:getCategory,getList:getList,getPost:getPost,getCompany:getCompany,p:p,addAddress:addAddress,getAddress:getAddress,editAddress:editAddress,getDefaultAddress:getDefaultAddress,addressList:addressList,deleteAddress:deleteAddress,setDefaultAddress:setDefaultAddress,createOrder:createOrder,reCreateOrder:reCreateOrder,orderList:orderList,orderDetail:orderDetail};
