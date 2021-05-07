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

/** 保存信息 PUT  */
export async function put_followupOnsetRecord(
  body?
  : API.FollowupOnsetRecordSaveDTO,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResult>(`/api/followupOnsetRecord`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',},
    data: body,
    ...(options || {}),
  });
}

/** 详细信息 GET  */
export async function get_followupOnsetRecord_$followupRecordsId$(
  params: {
    // path
    /** followupRecordsId */
    'followupRecordsId': string;
    }
  ,
  options ?: {[key: string]: any}
) {
  const { followupRecordsId, 
  } = params;
  return request<API.ApiResult_FollowupOnsetRecordDTO_>(`/api/followupOnsetRecord/${followupRecordsId}`, {
    method: 'GET',
    params: {...params,},
    ...(options || {}),
  });
}

