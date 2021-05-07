import { ProFormRadio, ProFormUploadButton, ProFormDateTimePicker } from '@ant-design/pro-form';
import { Space } from 'antd';
import FormList from 'antd/lib/form/FormList';
import { includes } from 'lodash';
import type { Rule } from 'rc-field-form/lib/interface';

const result = [
  { label: '正常', value: 1 },
  { label: '升高', value: 2 },
  { label: '下降', value: 3 },
];

const time = [
  { label: '正常', value: 1 },
  { label: '延长', value: 2 },
  { label: '缩短', value: 3 },
];

const params = [
  { label: '脑血容量', value: 0 },
  { label: '脑血流量', value: 1 },
  { label: '平均通过时间', value: 2 },
  { label: '达峰时间', value: 3 },
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
                options={includes([2, 3], field.key) ? time : result}
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
