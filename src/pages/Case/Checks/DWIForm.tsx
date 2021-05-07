import { ProFormRadio, ProFormUploadButton, ProFormDateTimePicker } from '@ant-design/pro-form';
import { Space } from 'antd';
import FormList from 'antd/lib/form/FormList';
import type { Rule } from 'rc-field-form/lib/interface';

const result = [
  { label: '左侧', value: 1 },
  { label: '右侧', value: 2 },
  { label: '无异常', value: 3 },
];

const params = [
  { label: '分水岭梗死', value: 0 },
  { label: '脑叶基底节梗死', value: 1 },
  { label: '脑干梗死', value: 2 },
  { label: '小脑梗死', value: 3 },
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
