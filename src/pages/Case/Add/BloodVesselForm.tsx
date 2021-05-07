import type { FormValuesType } from '@/pages/Record/Add';
import {
  get_hospitalVascularEvent_$id$,
  post_hospitalVascularEvent,
  put_hospitalVascularEvent,
} from '@/services/api';
import { submitAndGoback } from '@/utils/utils';
import useRequest from '@ahooksjs/use-request';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import ProCard from '@ant-design/pro-card';
import ProForm, { ProFormCheckbox, ProFormTextArea, ProFormDatePicker } from '@ant-design/pro-form';
import type { FormInstance } from 'antd';
import { Button, DatePicker, Space } from 'antd';
import { Form } from 'antd';
import { useRef, useState } from 'react';
import {
  formatFormValuesToHospitalVascularDTO,
  formatHospitalVascularDTOToFormValues,
} from './utils';

export const eventType = [
  { label: '进展性脑梗死', value: 1 },
  { label: '再发脑梗死', value: 2 },
  { label: '脑出血', value: 3 },
  { label: '蛛网膜下腔出血', value: 4 },
  { label: '梗死后出血转化', value: 5 },
  { label: '心绞痛', value: 6 },
  { label: '心肌梗死', value: 7 },
  { label: '周围动脉事件', value: 8 },
  { label: '下肢深静脉事件', value: 9 },
  { label: '肺部感染', value: 10 },
  { label: '泌尿系感染', value: 11 },
  { label: '应激性溃疡', value: 12 },
  { label: '压疮', value: 13 },
];

const BloodVesselForm = (props) => {
  const { params } = props.match;
  const { id, patientId, hospitalRecordsId } = params;
  const form = useRef<FormInstance>();
  const [info, setInfo] = useState<API.HospitalVascularDTO>({});

  useRequest(() => get_hospitalVascularEvent_$id$({ id }), {
    ready: !!id,
    formatResult: formatHospitalVascularDTOToFormValues,
    onSuccess: (d) => {
      setInfo(d);
      form.current?.setFieldsValue(d);
    },
  });

  const submit = async (values: FormValuesType) => {
    try {
      const formParams = formatFormValuesToHospitalVascularDTO(values);
      formParams.patientId = patientId || info?.patientId;
      formParams.hospitalRecordsId = hospitalRecordsId || info.hospitalRecordsId;

      let res: API.ApiResult;
      if (id) {
        res = await put_hospitalVascularEvent({ ...formParams, id });
      } else {
        res = await post_hospitalVascularEvent(formParams);
      }

      submitAndGoback(res);
    } catch (error) {
      return false;
    }

    return true;
  };
  const formItamLayout = { labelCol: { span: 8 } };
  const formItemLayoutWithOutLabel = { wrapperCol: { offset: 8 } };
  return (
    <ProCard>
      <ProForm
        layout="horizontal"
        onFinish={submit}
        formRef={form}
        initialValues={{
          eventList: Array(13).fill({
            checked: undefined,
            onsetTimes: null,
            allTimes: [null],
          }),
        }}
      >
        <Form.Item noStyle label="血管事件及并发症类型">
          <Form.List name="eventList">
            {(fields) =>
              fields.map(({ key, name, fieldKey }, k) => (
                <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                  <ProFormCheckbox
                    name={[name, 'checked']}
                    fieldKey={[fieldKey, 'checked']}
                    width="md"
                  >
                    {eventType[key]?.label}
                  </ProFormCheckbox>

                  <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, curValues) =>
                      prevValues.eventList !== curValues.eventList
                    }
                  >
                    {({ getFieldValue }: FormInstance) => {
                      return (
                        getFieldValue('eventList')[key]?.checked &&
                        (k === 3 ? (
                          <Form.Item noStyle fieldKey={[fieldKey, 'allTimes']}>
                            <Form.List name={[name, 'allTimes']} initialValue={[{ time: null }]}>
                              {(times, { add, remove }) => (
                                <>
                                  {times.map((time, y) => (
                                    <Form.Item
                                      {...time}
                                      label={y === 0 ? '发病时间' : ''}
                                      key={time.key}
                                      // noStyle
                                    >
                                      <Form.Item
                                        {...time}
                                        // label={y === 0 ? '发病时间' : ''}
                                        {...(y === 0 ? formItamLayout : formItemLayoutWithOutLabel)}
                                        noStyle
                                      >
                                        <DatePicker style={{ width: 328 }} />
                                      </Form.Item>

                                      {times.length > 1 && (
                                        <MinusCircleOutlined
                                          onClick={() => remove(time.name)}
                                          style={{ marginLeft: 10 }}
                                        />
                                      )}
                                    </Form.Item>
                                  ))}
                                  <Form.Item>
                                    <Button
                                      type="dashed"
                                      onClick={() => add()}
                                      icon={<PlusOutlined />}
                                    ></Button>
                                  </Form.Item>
                                </>
                              )}
                            </Form.List>
                          </Form.Item>
                        ) : (
                          <ProFormDatePicker
                            label="发病时间"
                            name={[name, 'onsetTimes']}
                            fieldKey={[fieldKey, 'onsetTimes']}
                            rules={[{ required: true }]}
                            width="md"
                          />
                        ))
                      );
                    }}
                  </Form.Item>
                </Space>
              ))
            }
          </Form.List>
        </Form.Item>
        <ProFormTextArea label="备注" name="description" />
      </ProForm>
    </ProCard>
  );
};

export default BloodVesselForm;
