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
export async function put_familyHistory(
  body?
  : API.PatientFamilyHistory,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResult>(`/api/familyHistory`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',},
    data: body,
    ...(options || {}),
  });
}

/** 创建信息 POST  */
export async function post_familyHistory(
  body?
  : API.PatientFamilyHistory,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResult_int_>(`/api/familyHistory`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',},
    data: body,
    ...(options || {}),
  });
}

/** 列表信息 POST  */
export async function post_familyHistory_list(
  body?
  : API.PatientFamilyHistory,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResult_List_PatientFamilyHistory__>(`/api/familyHistory/list`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',},
    data: body,
    ...(options || {}),
  });
}

/** 列表信息 GET  */
export async function get_familyHistory_list_$patientId$(
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
  return request<API.ApiResult_List_PatientFamilyHistory__>(`/api/familyHistory/list/${patientId}`, {
    method: 'GET',
    params: {...params,},
    ...(options || {}),
  });
}

/** 详细信息 GET  */
export async function get_familyHistory_$id$(
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
  return request<API.ApiResult_PatientFamilyHistory_>(`/api/familyHistory/${id}`, {
    method: 'GET',
    params: {...params,},
    ...(options || {}),
  });
}

