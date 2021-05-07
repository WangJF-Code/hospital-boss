import {
  ProFormText,
  ProFormRadio,
  ProFormUploadButton,
  ProFormDateTimePicker,
} from '@ant-design/pro-form';
import type { Rule } from 'rc-field-form/lib/interface';

const result = [
  { label: '快代谢', value: 1 },
  { label: '中间代谢', value: 2 },
  { label: '慢代谢', value: 3 },
];

const result2 = [
  { label: '低剂量', value: 1 },
  { label: '中剂量', value: 2 },
  { label: '大剂量', value: 3 },
];

export default () => {
  const resultRules: Rule[] = [{ required: true }];

  return (
    <>
      <ProFormUploadButton
        label="上传阿司匹林基因检测照片"
        name="aspirinImages"
        rules={[{ required: true }]}
      />
      <ProFormRadio.Group
        name="aspirinOutcome"
        options={result}
        label="测定结果"
        rules={resultRules}
      />
      <ProFormUploadButton
        label="上传氯吡格雷基因检测照片"
        name="clopidogrelImages"
        rules={[{ required: true }]}
      />
      <ProFormRadio.Group
        name="clopidogrelOutcome"
        options={result}
        label="测定结果"
        rules={resultRules}
      />
      <ProFormUploadButton
        label="他汀药物基因检测照片"
        name="statinsImages"
        rules={[{ required: true }]}
      />
      <ProFormRadio.Group
        name="statinsOutcome"
        options={result2}
        label="测定结果"
        rules={resultRules}
      />
      <ProFormDateTimePicker name="checkTime" label="检查时间" rules={[{ required: true }]} />
    </>
  );
};
