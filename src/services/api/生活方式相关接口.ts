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

/** 修改生活方式信息 PUT  */
export async function put_lifestyle(
  body?
  : API.PatientLifestyle,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResult>(`/api/lifestyle`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',},
    data: body,
    ...(options || {}),
  });
}

/** 创建生活方式信息 POST  */
export async function post_lifestyle(
  body?
  : API.PatientLifestyle,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResult_int_>(`/api/lifestyle`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',},
    data: body,
    ...(options || {}),
  });
}

/** 生活方式列表信息 POST  */
export async function post_lifestyle_list(
  body?
  : API.PatientLifestyle,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResult_List_PatientLifestyle__>(`/api/lifestyle/list`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',},
    data: body,
    ...(options || {}),
  });
}

/** 生活方式列表信息 GET  */
export async function get_lifestyle_list_$patientId$(
  params: {
    // path
    /** patientId */
    'patientId': string;
    }
  ,
  options ?: {[key: string]: any}
) {
  const { patientId, 
  } = params;
  return request<API.ApiResult_List_PatientLifestyle__>(`/api/lifestyle/list/${patientId}`, {
    method: 'GET',
    params: {...params,},
    ...(options || {}),
  });
}

/** 生活方式信息 GET  */
export async function get_lifestyle_$id$(
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
  return request<API.ApiResult_PatientLifestyle_>(`/api/lifestyle/${id}`, {
    method: 'GET',
    params: {...params,},
    ...(options || {}),
  });
}

