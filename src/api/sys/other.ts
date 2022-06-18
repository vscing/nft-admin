import { defHttp } from '/@/utils/http/axios';

enum Api {
  getRestaurantList = '/restaurant/getList', // 餐厅列表

  getCouponList = '/coupon/getList',
  addCoupon = '/coupon/addCoupon',
  editCoupon = '/coupon/editCoupon',
  delCoupon = '/coupon/delCoupon',
}

export const getRestaurantList = (params: any) => defHttp.get<any>({ url: Api.getRestaurantList, params });

export const getCouponList = (params: any) => defHttp.get<any>({ url: Api.getCouponList, params });

export const addCoupon = (data: any) => defHttp.post<any>({ url: Api.addCoupon, data });

export const editCoupon = (data: any) => defHttp.post<any>({ url: Api.editCoupon, data });

export const delCoupon = (data: any) => defHttp.post<any>({ url: Api.delCoupon, data });
