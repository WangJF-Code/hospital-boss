import type { FormValuesType } from '@/pages/Record/Add';
import {
  get_hospitalDiagnostic_$id$,
  post_hospitalDiagnostic,
  put_hospitalDiagnostic,
} from '@/services/api/病例-诊断记录相关接口';
import { submitAndGoback } from '@/utils/utils';
import useRequest from '@ahooksjs/use-request';
import ProCard from '@ant-design/pro-card';
import ProForm, { ProFormCheckbox, ProFormRadio, ProFormTextArea } from '@ant-design/pro-form';
import type { FormInstance } from 'antd';
import { Form } from 'antd';
import { includes } from 'lodash';
import { useRef } from 'react';
import { formatDiagnoseRecordToFormValues, formatFormValuesToDiagnoseRecord } from './utils';

const ngsType = [
  { value: 1, label: '大动脉粥样硬化型' },
  { value: 2, label: '小动脉病变型' },
  { value: 3, label: '心源性' },
  { value: 4, label: '其他原因' },
  { value: 5, label: '原因不明' },
];

const toast = [
  { value: 1, label: '无法确定病因' },
  { value: 2, label: '隐源性脑栓塞' },
  { value: 3, label: '其他隐源性' },
  { value: 4, label: '难分类病因' },
];

const reliability = [
  { value: 1, label: '肯定' },
  { value: 2, label: '可能' },
];

export default (props) => {
  const { params } = props.match;
  const { hospitalRecordsId, patientId, id, type } = params;
  const form = useRef<FormInstance>();

  useRequest(() => get_hospitalDiagnostic_$id$({ id }), {
    ready: !!id,
    formatResult: formatDiagnoseRecordToFormValues,
    onSuccess: (d) => {
      form.current?.setFieldsValue(d);
    },
  });

  const submit = async (values: FormValuesType) => {
    try {
      const formParams = formatFormValuesToDiagnoseRecord(values);
      formParams.hospitalRecordsId = hospitalRecordsId;
      formParams.patientId = patientId;
      formParams.type = type;

      let res: API.ApiResult;
      if (id) {
        res = await put_hospitalDiagnostic({ ...formParams, id });
      } else {
        res = await post_hospitalDiagnostic(formParams);
      }
      submitAndGoback(res);
    } catch (error) {
      return false;
    }

    return true;
  };

  return (
    <ProCard>
      <ProForm title="脑梗死" layout="horizontal" formRef={form} onFinish={submit}>
        <ProForm.Group>
          <ProFormCheckbox name="ngs" label="脑梗死" />
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, curValues) => prevValues.ngs !== curValues.ngs}
          >
            {({ getFieldValue }) =>
              getFieldValue('ngs') && (
                <ProFormRadio.Group
                  label="诊断可靠性"
                  rules={[{ required: true }]}
                  name="cerebralInfarction"
                  options={reliability}
                />
              )
            }
          </Form.Item>
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, curValues) => prevValues.ngs !== curValues.ngs}
          >
            {({ getFieldValue }) =>
              getFieldValue('ngs') && (
                <ProFormCheckbox.Group
                  name="cerebralInfarctionTOAST"
                  label="Toast分型"
                  options={ngsType}
                  required
                />
              )
            }
          </Form.Item>

          <Form.Item
            noStyle
            shouldUpdate={(prevValues, curValues) =>
              prevValues.cerebralInfarctionTOAST !== curValues.cerebralInfarctionTOAST
            }
          >
            {({ getFieldValue }) =>
              includes(getFieldValue('cerebralInfarctionTOAST'), 5) && (
                <ProFormCheckbox.Group
                  name="cerebralInfarctionPossibility"
                  label="可能性"
                  options={toast}
                  required
                />
              )
            }
          </Form.Item>
        </ProForm.Group>
        <ProForm.Group>
          <ProFormCheckbox name="ncx" label="脑出血" />
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, curValues) => prevValues.ncx !== curValues.ncx}
          >
            {({ getFieldValue }) =>
              getFieldValue('ncx') && (
                <ProFormRadio.Group
                  label="诊断可靠性"
                  rules={[{ required: true }]}
                  name="cerebralCerebrovascularDisease"
                  options={reliability}
                />
              )
            }
          </Form.Item>
        </ProForm.Group>

        <ProForm.Group>
          <ProFormCheckbox name="xgxrzza" label="血管性认知障碍" />
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, curValues) => prevValues.xgxrzza !== curValues.xgxrzza}
          >
            {({ getFieldValue }) =>
              getFieldValue('xgxrzza') && (
                <ProFormRadio.Group
                  label="诊断可靠性"
                  rules={[{ required: true }]}
                  name="vascularCognitiveImpairment"
                  options={reliability}
                />
              )
            }
          </Form.Item>
        </ProForm.Group>
        <ProForm.Group>
          <ProFormCheckbox name="nxxgb" label="脑小血管病" />
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, curValues) => prevValues.nxxgb !== curValues.nxxgb}
          >
            {({ getFieldValue }) =>
              getFieldValue('nxxgb') && (
                <ProFormRadio.Group
                  label="诊断可靠性"
                  rules={[{ required: true }]}
                  name="atrialFibrillation"
                  options={reliability}
                />
              )
            }
          </Form.Item>
        </ProForm.Group>
        <ProForm.Group>
          <ProFormCheckbox name="lndmxz" label="颅内动脉狭窄" />
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, curValues) => prevValues.lndmxz !== curValues.lndmxz}
          >
            {({ getFieldValue }) =>
              getFieldValue('lndmxz') && (
                <ProFormRadio.Group
                  label="诊断可靠性"
                  rules={[{ required: true }]}
                  name="hyperuricAcidemia"
                  options={reliability}
                />
              )
            }
          </Form.Item>
        </ProForm.Group>
        <ProForm.Group>
          <ProFormCheckbox name="jdmxz" label="颈动脉狭窄" />
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, curValues) => prevValues.jdmxz !== curValues.jdmxz}
          >
            {({ getFieldValue }) =>
              getFieldValue('jdmxz') && (
                <ProFormRadio.Group
                  label="诊断可靠性"
                  rules={[{ required: true }]}
                  name="cervicalArteryStenosis"
                  options={reliability}
                />
              )
            }
          </Form.Item>
        </ProForm.Group>
        <ProForm.Group>
          <ProFormCheckbox name="zdmxz" label="椎动脉狭窄" />
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, curValues) => prevValues.zdmxz !== curValues.zdmxz}
          >
            {({ getFieldValue }) =>
              getFieldValue('zdmxz') && (
                <ProFormRadio.Group
                  label="诊断可靠性"
                  rules={[{ required: true }]}
                  name="vascularCognitiveImpairment"
                  options={reliability}
                />
              )
            }
          </Form.Item>
        </ProForm.Group>
        <ProForm.Group>
          <ProFormCheckbox name="gxb" label="冠心病" />
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, curValues) => prevValues.gxb !== curValues.gxb}
          >
            {({ getFieldValue }) =>
              getFieldValue('gxb') && (
                <ProFormRadio.Group
                  label="诊断可靠性"
                  rules={[{ required: true }]}
                  name="coronaryHeartDisease"
                  options={reliability}
                />
              )
            }
          </Form.Item>
        </ProForm.Group>
        <ProForm.Group>
          <ProFormCheckbox name="fc" label="房颤" />
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, curValues) => prevValues.fc !== curValues.fc}
          >
            {({ getFieldValue }) =>
              getFieldValue('fc') && (
                <ProFormRadio.Group
                  label="诊断可靠性"
                  rules={[{ required: true }]}
                  name="angina"
                  options={reliability}
                />
              )
            }
          </Form.Item>
        </ProForm.Group>
        <ProForm.Group>
          <ProFormCheckbox name="gxy" label="高血压" />
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, curValues) => prevValues.gxy !== curValues.gxy}
          >
            {({ getFieldValue }) =>
              getFieldValue('gxy') && (
                <ProFormRadio.Group
                  label="诊断可靠性"
                  rules={[{ required: true }]}
                  name="hypertension"
                  options={reliability}
                />
              )
            }
          </Form.Item>
        </ProForm.Group>
        <ProForm.Group>
          <ProFormCheckbox name="tnb" label="糖尿病" />
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, curValues) => prevValues.tnb !== curValues.tnb}
          >
            {({ getFieldValue }) =>
              getFieldValue('tnb') && (
                <ProFormRadio.Group
                  label="诊断可靠性"
                  rules={[{ required: true }]}
                  name="diabetes"
                  options={reliability}
                />
              )
            }
          </Form.Item>
        </ProForm.Group>
        <ProForm.Group>
          <ProFormCheckbox name="gzx" label="高脂血症" />
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, curValues) => prevValues.gzx !== curValues.gzx}
          >
            {({ getFieldValue }) =>
              getFieldValue('gzx') && (
                <ProFormRadio.Group
                  label="诊断可靠性"
                  rules={[{ required: true }]}
                  name="hyperlipidemia"
                  options={reliability}
                />
              )
            }
          </Form.Item>
        </ProForm.Group>
        <ProForm.Group>
          <ProFormCheckbox name="txbgasxz" label="同型半胱氨酸血症" />
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, curValues) => prevValues.txbgasxz !== curValues.txbgasxz}
          >
            {({ getFieldValue }) =>
              getFieldValue('txbgasxz') && (
                <ProFormRadio.Group
                  label="诊断可靠性"
                  rules={[{ required: true }]}
                  name="homocysteineemia"
                  options={reliability}
                />
              )
            }
          </Form.Item>
        </ProForm.Group>
        <ProForm.Group>
          <ProFormCheckbox name="gnsxz" label="高尿酸血症" />
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, curValues) => prevValues.gnsxz !== curValues.gnsxz}
          >
            {({ getFieldValue }) =>
              getFieldValue('gnsxz') && (
                <ProFormRadio.Group
                  label="诊断可靠性"
                  rules={[{ required: true }]}
                  name="hyperuricAcidemia"
                  options={reliability}
                />
              )
            }
          </Form.Item>
        </ProForm.Group>
        <ProForm.Group>
          <ProFormCheckbox name="mxzsxfjb" label="慢性阻塞性肺疾病" />
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, curValues) => prevValues.mxzsxfjb !== curValues.mxzsxfjb}
          >
            {({ getFieldValue }) =>
              getFieldValue('mxzsxfjb') && (
                <ProFormRadio.Group
                  label="诊断可靠性"
                  rules={[{ required: true }]}
                  name="chronicObstructivePulmonaryDisease"
                  options={reliability}
                />
              )
            }
          </Form.Item>
        </ProForm.Group>
        <ProFormTextArea label="备注" name="description" />
      </ProForm>
    </ProCard>
  );
};
