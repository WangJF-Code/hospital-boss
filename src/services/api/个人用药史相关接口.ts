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

/** 修改个人用药史信息 PUT  */
export async function put_drugHistory(
  body?
  : API.PatientDrugHistory,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResult>(`/api/drugHistory`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',},
    data: body,
    ...(options || {}),
  });
}

/** 创建个人用药史信息 POST  */
export async function post_drugHistory(
  body?
  : API.PatientDrugHistory,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResult_int_>(`/api/drugHistory`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',},
    data: body,
    ...(options || {}),
  });
}

/** 个人用药史列表信息 POST  */
export async function post_drugHistory_list(
  body?
  : API.PatientDrugHistory,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResult_List_PatientDrugHistory__>(`/api/drugHistory/list`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',},
    data: body,
    ...(options || {}),
  });
}

/** 个人用药史列表信息 GET  */
export async function get_drugHistory_list_$patientId$(
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
  return request<API.ApiResult_List_PatientDrugHistory__>(`/api/drugHistory/list/${patientId}`, {
    method: 'GET',
    params: {...params,},
    ...(options || {}),
  });
}

/** 个人用药史信息 GET  */
export async function get_drugHistory_$id$(
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
  return request<API.ApiResult_PatientDrugHistory_>(`/api/drugHistory/${id}`, {
    method: 'GET',
    params: {...params,},
    ...(options || {}),
  });
}

