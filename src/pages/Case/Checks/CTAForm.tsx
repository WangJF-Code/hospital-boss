import { ProFormRadio, ProFormUploadButton, ProFormDateTimePicker } from '@ant-design/pro-form';
import { Space } from 'antd';
import FormList from 'antd/lib/form/FormList';
import type { Rule } from 'rc-field-form/lib/interface';

const result = [
  { label: '左侧', value: 1 },
  { label: '右侧', value: 2 },
  { label: '无异常', value: 3 },
];

const dmResult = [
  { label: '异常', value: 1 },
  { label: '无异常', value: 2 },
];

const params = [
  { label: '颈内动脉颅内段狭窄', value: 0 },
  { label: '大脑前动脉狭窄', value: 1 },
  { label: '大脑后动脉狭窄', value: 2 },
  { label: '大脑中动脉M1段狭窄', value: 3 },
  { label: '大脑中动脉M2段狭窄', value: 4 },
  { label: '血管椎动脉狭窄周围间隙', value: 5 },
  { label: '颈内动脉狭窄', value: 6 },
  { label: '椎动脉狭窄', value: 7 },
  { label: '锁骨下动脉狭窄', value: 8 },
  { label: '动脉瘤', value: 9 },
  { label: '基底动脉狭窄', value: 10 },
];

export default () => {
  const resultRules: Rule[] = [{ required: true }];

  return (
    <>
      <FormList name="list">
        {(fields) =>
          fields.map((field) => (
            <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
              <ProFormRadio.Group
                {...field}
                options={field.key === 10 ? dmResult : result}
                label={params[field.key]?.label}
                rules={resultRules}
              />
            </Space>
          ))
        }
      </FormList>
      <ProFormUploadButton label="上传检查照片" name="images" rules={[{ required: true }]} />
      <ProFormDateTimePicker name="checkTime" label="检查时间" rules={[{ required: true }]} />
    </>
  );
};
