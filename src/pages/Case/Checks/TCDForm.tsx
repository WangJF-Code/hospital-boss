import { checkResultType } from '@/utils/options';
import { ProFormRadio, ProFormUploadButton, ProFormDateTimePicker } from '@ant-design/pro-form';
import type { Rule } from 'rc-field-form/lib/interface';

const result = [
  { label: '<10', value: 1 },
  { label: '10-20', value: 2 },
  { label: '>20', value: 3 },
  { label: '无', value: 4 },
];

export default () => {
  const resultRules: Rule[] = [{ required: true }];

  return (
    <>
      <ProFormRadio.Group name="single" label="微栓子检测" options={result} rules={resultRules} />
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
