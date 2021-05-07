import { checkResultType } from '@/utils/options';
import {
  ProFormText,
  ProFormRadio,
  ProFormUploadButton,
  ProFormDateTimePicker,
} from '@ant-design/pro-form';
import type { Rule } from 'rc-field-form/lib/interface';

export default () => {
  const digitRules: Rule[] = [
    { required: true },
    { type: 'number', message: '只能输入数字', transform: (value) => +value },
    { type: 'number', min: 0.001, max: 10000, transform: (value) => +value },
  ];

  const resultRules: Rule[] = [{ required: true }];

  return (
    <>
      <ProFormText
        name="value"
        label="糖化血红蛋白测定值"
        fieldProps={{ addonAfter: '%' }}
        rules={digitRules}
      />
      <ProFormRadio.Group
        name="outcome"
        options={checkResultType}
        label="测定结果"
        rules={resultRules}
      ></ProFormRadio.Group>
      <ProFormUploadButton label="上传检查照片" name="images" rules={[{ required: true }]} />
      <ProFormDateTimePicker name="checkTime" label="检查时间" rules={[{ required: true }]} />
    </>
  );
};
