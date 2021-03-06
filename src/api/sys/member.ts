import { defHttp } from '/@/utils/http/axios';

enum Api {
  UserList = '/user/getList',
  UserInfo = '/user/getInfo',
  UpdateState = '/user/updateState',
  UpdatePrice = '/user/updatePrice',
  OnGrant = '/user/onGrant',
  addBlindSku = '/user/addBlindSku',

  getPrizeList = '/prize/getList',
  setUserPrize = '/prize/setUserPrize',
  setAllRefund = '/prize/setAllRefund'
}

export const getPrizeList = (params: any) => defHttp.get<any>({ url: Api.getPrizeList, params });

export const setUserPrize = (data: any) => defHttp.post<any>({ url: Api.setUserPrize, data});

export const setAllRefund = (data: any) => defHttp.post<any>({ url: Api.setAllRefund, data});

export const getUserList = (params: any) => defHttp.get<any>({ url: Api.UserList, params });

export const getUserInfo = (params: any) => defHttp.get<any>({ url: Api.UserInfo, params });

export const updateState = (id: number, state: number) => defHttp.post<any>({ url: Api.UpdateState, params: { id, state }});

export const updatePrice = (data: any) => defHttp.post<any>({ url: Api.UpdatePrice, data});

export const OnGrant = (data: any) => defHttp.post<any>({ url: Api.OnGrant, data});

export const addBlindSku = (data: any) => defHttp.post<any>({ url: Api.addBlindSku, data});
