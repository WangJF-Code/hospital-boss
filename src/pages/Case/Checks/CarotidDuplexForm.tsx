import { ProFormRadio, ProFormUploadButton, ProFormDateTimePicker } from '@ant-design/pro-form';
import { Space } from 'antd';
import FormList from 'antd/lib/form/FormList';
import type { Rule } from 'rc-field-form/lib/interface';

const result = [
  { label: '<50%', value: 1 },
  { label: '50%-75%', value: 2 },
  { label: '>75%', value: 3 },
  { label: '>75%', value: 4 },
];

const params = [
  { label: '左侧颈内动脉狭窄', value: 0 },
  { label: '右侧颈内动脉狭窄', value: 1 },
  { label: '左侧椎动脉狭窄', value: 2 },
  { label: '右侧椎动脉狭窄', value: 3 },
];

export default () => {
  const resultRules: Rule[] = [{ required: true }];

  return (
    <>
      <FormList name="list">
        {(fields) =>
          fields.map((field, k) => (
            <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
              <ProFormRadio.Group
                {...field}
                options={result}
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
