import { setCookie } from '@/utils/cookie';
import { request } from 'umi';
// import { LoginParamsType } from '@/common/types/login';

/**
 * 获取分类管理列表数据
 * @param data
 */
export async function fetchSort(data?: object) {
  setCookie('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS55c3hxYmp6LmNvbS9zeXMvbG9naW4iLCJpYXQiOjE2NDk3NjY4MjAsImV4cCI6MTY0OTc3NDAyMCwibmJmIjoxNjQ5NzY2ODIwLCJqdGkiOiJuTkNZVVpSdnk4c2dSZXZkIiwic3ViIjoiMSIsInBydiI6ImFlZDU5MmUyYWJlMjNkYTY3MTdlN2M5ZjcxODJlMzIxZGVlNzBlMjkiLCJ2c2MiOiJzeXMifQ.wkj6C1VGolJi8lylTlLjPsMwxCSY0QP4ntsgm5TvUYI');
  return request('/sys/category/getList', {
    method: 'GET',
    data: data ? data : {}
  });
}

/**
 * 分类管理查询
 * @param data
 */
 export async function searchSort(data: object) {
  setCookie('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS55c3hxYmp6LmNvbS9zeXMvbG9naW4iLCJpYXQiOjE2NDk3NjY4MjAsImV4cCI6MTY0OTc3NDAyMCwibmJmIjoxNjQ5NzY2ODIwLCJqdGkiOiJuTkNZVVpSdnk4c2dSZXZkIiwic3ViIjoiMSIsInBydiI6ImFlZDU5MmUyYWJlMjNkYTY3MTdlN2M5ZjcxODJlMzIxZGVlNzBlMjkiLCJ2c2MiOiJzeXMifQ.wkj6C1VGolJi8lylTlLjPsMwxCSY0QP4ntsgm5TvUYI');
  return request('/sys/category/getInfo', {
    method: 'GET',
    data
  });
}

/**
 * 添加分类管理
 * @param data
 */
 export async function addSort(data: object) {
  setCookie('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS55c3hxYmp6LmNvbS9zeXMvbG9naW4iLCJpYXQiOjE2NDk3NjY4MjAsImV4cCI6MTY0OTc3NDAyMCwibmJmIjoxNjQ5NzY2ODIwLCJqdGkiOiJuTkNZVVpSdnk4c2dSZXZkIiwic3ViIjoiMSIsInBydiI6ImFlZDU5MmUyYWJlMjNkYTY3MTdlN2M5ZjcxODJlMzIxZGVlNzBlMjkiLCJ2c2MiOiJzeXMifQ.wkj6C1VGolJi8lylTlLjPsMwxCSY0QP4ntsgm5TvUYI');
  return request('/sys/category/addInfo', {
    method: 'POST',
    data
  });
}