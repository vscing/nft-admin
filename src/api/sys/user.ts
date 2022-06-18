import { defHttp } from '/@/utils/http/axios';
import { LoginParams, LoginResultModel, GetUserInfoModel } from './model/userModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  Login = '/login',
  Logout = '/logout',
  GetUserInfo = '/getUserInfo',
  GetPermCode = '/getPermCode',
  getUserBill = '/userBill/getList',
  setOperate = '/userBill/setOperate',
  cancelOperate = '/userBill/cancelOperate',
  walletWithdraw = '/userBill/walletWithdraw',
  getSplitList = '/userBill/getSplitList',
  setSplitOrder = '/userBill/setSplitOrder',
  allOperation = '/userBill/allOperation',
  automaticWithdraw = '/userBill/automaticWithdraw',
  allAutomaticWithdraw = '/userBill/allAutomaticWithdraw',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.post<GetUserInfoModel>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' });
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}

export function doLogout() {
  return defHttp.get({ url: Api.Logout });
}

export const allOperation = (data: any) => defHttp.post<any>({ url: Api.allOperation, data });

export const getUserBill = (params: any) => defHttp.get<any>({ url: Api.getUserBill, params });

export const setOperate = (data: any) => defHttp.post<any>({ url: Api.setOperate, data });

export const cancelOperate = (data: any) => defHttp.post<any>({ url: Api.cancelOperate, data });

export const walletWithdraw = (data: any) => defHttp.post<any>({ url: Api.walletWithdraw, data });

export const getSplitList = (params: any) => defHttp.get<any>({ url: Api.getSplitList, params }); 

export const setSplitOrder = (data: any) => defHttp.post<any>({ url: Api.setSplitOrder, data });

export const automaticWithdraw = (data: any) => defHttp.post<any>({ url: Api.automaticWithdraw, data });

export const allAutomaticWithdraw = (data: any) => defHttp.post<any>({ url: Api.allAutomaticWithdraw, data });

