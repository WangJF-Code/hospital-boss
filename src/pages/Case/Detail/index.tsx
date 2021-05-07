import ProCard from '@ant-design/pro-card';
import { useRef, useState } from 'react';
import useRequest from '@ahooksjs/use-request';

import type { FormInstance } from 'antd';
import { Button, Card } from 'antd';
import ProForm from '@ant-design/pro-form';
import CaseInfoForm from '../Add/CaseInfoForm';
import { defaultFormatResult } from '@/utils/utils';
import { formatDiagnosInfo, formatHospitalCheckBodyInfo, formatCheckInfo } from '../Add/utils';
import { Link } from 'umi';
import { isEmpty } from 'lodash';
import {
  get_hospitalRecords_$id$,
  post_hospitalCheckBody_list_$hospitalRecordsId$,
  post_hospitalDiagnostic_list_$hospitalRecordsId$,
  post_hospitalTreatment_list_$hospitalRecordsId$,
  post_hospitalVascularEvent_list_$hospitalRecordsId$,
  post_medicationRecord_list,
} from '@/services/api';

const Detail = (props) => {
  const [tab, setTab] = useState('1');
  const { params } = props.match;
  const { hospitalRecordsId, patientId, id } = params;
  const caseInfoForm = useRef<FormInstance>();
  const [hospitalInfo, setHospitalInfo] = useState<API.HospitalCheckBodyDTO>({});
  const [dischargeCheck, setDischargeCheck] = useState<API.HospitalCheckBodyDTO>({});
  const [admitDiagnoseInfo, setAdmitDiagnoseInfo] = useState<API.HospitalDiagnosticRecordsDTO>({});
  const [
    dischargeDiagnoseInfo,
    setDischargeDiagnoseInfo,
  ] = useState<API.HospitalDiagnosticRecordsDTO>({});
  const [bloodInfo, setBloodInfo] = useState<API.HospitalVascularDTO>({});
  const [treatInfo, setTreatInfo] = useState<API.HospitalTreatmentRecordsDTO>({});
  const [medicineInfo, setMedicineInfo] = useState<API.MedicationDrugRecordDTO>({});

  // 获取病历信息
  useRequest(() => get_hospitalRecords_$id$({ id: hospitalRecordsId }), {
    formatResult: defaultFormatResult,
    ready: !!hospitalRecordsId,
    onSuccess: (d) => {
      caseInfoForm.current?.setFieldsValue(d);
    },
  });

  // 获取入院查体记录
  useRequest(() => post_hospitalCheckBody_list_$hospitalRecordsId$({ hospitalRecordsId }), {
    formatResult: formatCheckInfo,
    ready: !!hospitalRecordsId && (tab === '1' || tab === '8'),
    onSuccess: (d) => {
      setHospitalInfo(d.admitCheck);
      setDischargeCheck(d.dischargeCheck);
    },
  });

  // 获取诊断记录
  useRequest(() => post_hospitalDiagnostic_list_$hospitalRecordsId$({ hospitalRecordsId }), {
    formatResult: formatDiagnosInfo,
    ready: !!hospitalRecordsId && (tab === '2' || tab === '7'),
    onSuccess: (d) => {
      setAdmitDiagnoseInfo(d.admitDiagnose);
      setDischargeDiagnoseInfo(d.dischargeDiagnose);
    },
  });

  // 获取血管事件记录
  useRequest(() => post_hospitalVascularEvent_list_$hospitalRecordsId$({ hospitalRecordsId }), {
    formatResult: formatHospitalCheckBodyInfo,
    ready: !!hospitalRecordsId && tab === '4',
    onSuccess: (d) => {
      setBloodInfo(d);
    },
  });

  // 获取药物记录
  useRequest(() => post_medicationRecord_list({ dataId: hospitalRecordsId, type: 1 }), {
    formatResult: formatHospitalCheckBodyInfo,
    ready: !!hospitalRecordsId && tab === '6',
    onSuccess: (d) => {
      setMedicineInfo(d);
    },
  });

  // 获取治疗记录
  useRequest(() => post_hospitalTreatment_list_$hospitalRecordsId$({ hospitalRecordsId }), {
    formatResult: formatHospitalCheckBodyInfo,
    ready: !!hospitalRecordsId && tab === '5',
    onSuccess: (d) => {
      setTreatInfo(d);
    },
  });

  return (
    <div>
      <Card title={`患者ID:${patientId}`}>
        <ProForm formRef={caseInfoForm} submitter={{ render: false }}>
          <CaseInfoForm disabled />
        </ProForm>
      </Card>

      <ProCard
        tabs={{
          type: 'card',
          activeKey: tab,
          onChange: setTab,
        }}
      >
        <ProCard.TabPane key="1" tab="入院查体">
          {isEmpty(hospitalInfo) ? (
            <Link to={`/case/case/addCheck/${patientId}/${hospitalRecordsId}/${id}`}>
              <Button type="primary">创建入院查体</Button>
            </Link>
          ) : (
            <div>
              <Link to={`/case/case/addCheck/${patientId}/${hospitalRecordsId}/${hospitalInfo.id}`}>
                <Button type="primary">编辑入院查体</Button>
              </Link>
            </div>
          )}
        </ProCard.TabPane>
        <ProCard.TabPane key="2" tab="入院诊断">
          {isEmpty(admitDiagnoseInfo) ? (
            <Link to={`/case/case/addDiagnose/${patientId}/${hospitalRecordsId}/1`}>
              <Button type="primary">创建入院诊断</Button>
            </Link>
          ) : (
            <div>
              <Link
                to={`/case/case/diagnose/${patientId}/${hospitalRecordsId}/${admitDiagnoseInfo?.id}/1`}
              >
                <Button type="primary">编辑入院诊断</Button>
              </Link>
            </div>
          )}
        </ProCard.TabPane>
        <ProCard.TabPane key="3" tab="辅助检查">
          <Link to={`/case/case/checks/${patientId}/${hospitalRecordsId}`}>
            <Button type="primary">查看辅助检查</Button>
          </Link>
        </ProCard.TabPane>
        <ProCard.TabPane key="4" tab="血管事件及并发症">
          {isEmpty(bloodInfo) ? (
            <Link to={`/case/case/addEvent/${patientId}/${hospitalRecordsId}`}>
              <Button type="primary">创建血管事件及并发症信息</Button>
            </Link>
          ) : (
            <div>
              <Link to={`/case/case/blood/${bloodInfo?.id}`}>
                <Button type="primary">编辑血管事件及并发症信息</Button>
              </Link>
            </div>
          )}
        </ProCard.TabPane>
        <ProCard.TabPane key="5" tab="治疗记录">
          {isEmpty(treatInfo) ? (
            <Link to={`/case/case/addTreat/${patientId}/${hospitalRecordsId}`}>
              <Button type="primary">创建治疗记录</Button>
            </Link>
          ) : (
            <div>
              <Link to={`/case/case/treat/${patientId}/${hospitalRecordsId}/${treatInfo?.id}`}>
                <Button type="primary">编辑治疗记录</Button>
              </Link>
            </div>
          )}
        </ProCard.TabPane>
        <ProCard.TabPane key="6" tab="药物记录">
          {isEmpty(medicineInfo) ? (
            <Link to={`/case/case/addMedicine/${patientId}/${hospitalRecordsId}`}>
              <Button type="primary">创建药物记录</Button>
            </Link>
          ) : (
            <div>
              <Link
                to={`/case/case/medicine/${patientId}/${hospitalRecordsId}/${medicineInfo?.id}`}
              >
                <Button type="primary">编辑药物记录</Button>
              </Link>
            </div>
          )}
        </ProCard.TabPane>
        <ProCard.TabPane key="7" tab="最终诊断">
          {isEmpty(dischargeDiagnoseInfo) ? (
            <Link to={`/case/case/addDischargeDiagnose/${patientId}/${hospitalRecordsId}/2`}>
              <Button type="primary">创建最终诊断</Button>
            </Link>
          ) : (
            <div>
              <Link
                to={`/case/case/dischargeDiagnose/${patientId}/${hospitalRecordsId}/${dischargeDiagnoseInfo?.id}/2`}
              >
                <Button type="primary">编辑最终诊断</Button>
              </Link>
            </div>
          )}
        </ProCard.TabPane>
        <ProCard.TabPane key="8" tab="出院评估">
          {isEmpty(dischargeCheck) ? (
            <Link to={`/case/case/addDischarge/${patientId}/${hospitalRecordsId}`}>
              <Button type="primary">创建出院评估</Button>
            </Link>
          ) : (
            <div>
              <Link
                to={`/case/case/discharge/${patientId}/${hospitalRecordsId}/${dischargeCheck?.id}`}
              >
                <Button type="primary">编辑出院评估</Button>
              </Link>
            </div>
          )}
        </ProCard.TabPane>
      </ProCard>
    </div>
  );
};

export default Detail;
