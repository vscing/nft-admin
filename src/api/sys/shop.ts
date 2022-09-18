import { defHttp } from '/@/utils/http/axios';

enum Api {
  getShopList = '/shop/getList',
  addInfo = '/shop/addInfo',
  setStatus = '/shop/setStatus',
  setState = '/shop/setState',
  getInfo = '/shop/getInfo',
  updateInfo = '/shop/updateInfo',

  getFootList = '/shop/getFootList',
  addFoot = '/shop/addFoot',
  getFoot = '/shop/getFoot',
  editFoot = '/shop/editFoot',
  delFoot = '/shop/delFoot',

  getCouponList = '/shop/getCouponList',

  getShopCouponList = '/shop/getShopCouponList',
  editShopCoupon = '/shop/editShopCoupon',
  delShopCoupon = '/shop/delShopCoupon',
  getShopCoupon = '/shop/getShopCoupon',
}

export const getShopList = (params: any) => defHttp.get<any>({ url: Api.getShopList, params });
export const addInfo = (params: any) => defHttp.post<any>({ url: Api.addInfo, params });
export const setStatus = (params: any) => defHttp.post<any>({ url: Api.setStatus, params });
export const setState = (params: any) => defHttp.post<any>({ url: Api.setState, params });
export const getInfo = (params: any) => defHttp.get<any>({ url: Api.getInfo, params });
export const updateInfo = (params: any) => defHttp.post<any>({ url: Api.updateInfo, params });

export const getFootList = (params: any) => defHttp.get<any>({ url: Api.getFootList, params });
export const addFoot = (params: any) => defHttp.post<any>({ url: Api.addFoot, params });
export const getFoot = (params: any) => defHttp.get<any>({ url: Api.getFoot, params });
export const editFoot = (params: any) => defHttp.post<any>({ url: Api.editFoot, params });
export const delFoot = (params: any) => defHttp.post<any>({ url: Api.delFoot, params });

export const getCouponList = (params: any) => defHttp.get<any>({ url: Api.getCouponList, params });
export const getShopCouponList = (params: any) => defHttp.get<any>({ url: Api.getShopCouponList, params });
export const getShopCoupon = (params: any) => defHttp.get<any>({ url: Api.getShopCoupon, params });
export const editShopCoupon = (params: any) => defHttp.post<any>({ url: Api.editShopCoupon, params });
export const delShopCoupon = (params: any) => defHttp.post<any>({ url: Api.delShopCoupon, params });
