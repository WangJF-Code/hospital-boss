/* eslint-disable */

/**
 * Api Documentation
 *
 * Api Documentation
 *
 * 接口版本：1.0
 * OpenApi 3.0.3
 * 代码生成时间：
 *
 * ⚠️: 本文件是由工具自动生成，不要手动修改
 * - https://www.npmjs.com/package/swagger-codegen-ts
 * - http://172.26.1.194/dtfe/swagger-codegen-ts
 */

import { request } from 'umi';

/** 修改信息 PUT  */
export async function put_user(
  body?
  : API.SysUserUpdateDTO,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResult>(`/api/user`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',},
    data: body,
    ...(options || {}),
  });
}

/** 创建信息 POST  */
export async function post_user(
  body?
  : API.SysUserCreateDTO,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResult>(`/api/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',},
    data: body,
    ...(options || {}),
  });
}

/** 列表信息 POST  */
export async function post_user_list(
  body?
  : API.SysUserConditionDTO,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResult_List_SysUserDTO__>(`/api/user/list`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',},
    data: body,
    ...(options || {}),
  });
}

/** 登陆 POST  */
export async function post_user_login(
  params: {
    // query
    /** 账号 */
    'account': string;
    /** 密码 */
    'password': string;
    /** 验证码 */
    'authCode': string;
    }
  ,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResult_SysUserDTO_>(`/api/user/login`, {
    method: 'POST',
    params: {
        
        
        ...params,},
    ...(options || {}),
  });
}

/** 分页列表信息 POST  */
export async function post_user_page(
  params: {
    // query
    /** 当前页号 */
    'pageCurrent'?: number;
    /** 每页显示条数 */
    'pageSize'?: number;
    }
  ,
  body?
  : API.SysUserConditionDTO,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResult_Page_SysUserDTO__>(`/api/user/page`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',},
    params: {
        
        ...params,},
    data: body,
    ...(options || {}),
  });
}

/** 重置密码 POST  */
export async function post_user_reset(
  params: {
    // query
    /** 账号 */
    'account': string;
    /** 验证码 */
    'authCode': string;
    }
  ,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResult>(`/api/user/reset`, {
    method: 'POST',
    params: {
        
        ...params,},
    ...(options || {}),
  });
}

/** 重置密码 POST  */
export async function post_user_updatePassword(
  params: {
    // query
    /** 密码 */
    'oldPassword': string;
    /** 密码 */
    'newPassword': string;
    }
  ,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResult>(`/api/user/updatePassword`, {
    method: 'POST',
    params: {
        
        ...params,},
    ...(options || {}),
  });
}

/** 详细信息 GET  */
export async function get_user_$id$(
  params: {
    // path
    /** id */
    'id': number;
    }
  ,
  options ?: {[key: string]: any}
) {
  const { id, 
  } = params;
  return request<API.ApiResult_SysUserDTO_>(`/api/user/${id}`, {
    method: 'GET',
    params: {...params,},
    ...(options || {}),
  });
}

