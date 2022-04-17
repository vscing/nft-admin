import { defHttp } from '/@/utils/http/axios';

enum Api {
  UserList = '/user/getList',
  UserInfo = '/user/getInfo',
  UpdateState = '/user/updateState',
  OnGrant = '/user/onGrant',
}

export const getUserList = (params: any) => defHttp.get<any>({ url: Api.UserList, params });

export const getUserInfo = (params: any) => defHttp.get<any>({ url: Api.UserInfo, params });

export const updateState = (id: number, state: number) => defHttp.post<any>({ url: Api.UpdateState, params: { id, state }});

export const OnGrant = (data: any) => defHttp.post<any>({ url: Api.OnGrant, data});
