import { checkResultType } from '@/utils/options';
import { ProFormRadio, ProFormUploadButton, ProFormDateTimePicker } from '@ant-design/pro-form';
import type { Rule } from 'rc-field-form/lib/interface';

const result = [
  { label: '<50ml', value: 1 },
  { label: '50ml-100ml', value: 2 },
  { label: '>100', value: 3 },
];

export default () => {
  const resultRules: Rule[] = [{ required: true }];

  return (
    <>
      <ProFormRadio.Group name="single" label="残余尿量" options={result} rules={resultRules} />
      <ProFormRadio.Group
        name="outcome"
        options={checkResultType}
        label="测定结果"
        rules={resultRules}
      />
      <ProFormUploadButton label="上传检查照片" name="images" rules={[{ required: true }]} />
      <ProFormDateTimePicker name="checkTime" label="检查时间" rules={[{ required: true }]} />
    </>
  );
};
