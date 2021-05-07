import {
  ProFormText,
  ProFormRadio,
  ProFormUploadButton,
  ProFormDateTimePicker,
} from '@ant-design/pro-form';
import type { Rule } from 'rc-field-form/lib/interface';

const result = [
  { label: '正常', value: 1 },
  { label: '异常，无临床意义', value: 2 },
  { label: '异常，有临床意义', value: 3 },
];

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
        name="leukocyte"
        label="白细胞计数测定值"
        fieldProps={{ addonAfter: '10^9/L' }}
        rules={digitRules}
      />
      <ProFormRadio.Group
        name="leukocyteOutcome"
        options={result}
        label="测定结果"
        rules={resultRules}
      ></ProFormRadio.Group>
      <ProFormText
        name="haemoglobin"
        label="血红蛋白测定值"
        fieldProps={{ addonAfter: '9/L' }}
        rules={digitRules}
      />
      <ProFormRadio.Group
        name="haemoglobinOutcome"
        options={result}
        label="测定结果"
        rules={resultRules}
      ></ProFormRadio.Group>
      <ProFormText
        name="platelet"
        label="血小板计数测定值"
        fieldProps={{ addonAfter: '10^9/L' }}
        rules={digitRules}
      />
      <ProFormRadio.Group
        name="plateletOutcome"
        options={result}
        label="测定结果"
        rules={resultRules}
      ></ProFormRadio.Group>
      <ProFormText
        name="creactiveProtein"
        label="C反应蛋白测定值"
        fieldProps={{ addonAfter: '10^9/L' }}
        rules={digitRules}
      />
      <ProFormRadio.Group
        name="creactiveProteinOutcome"
        options={result}
        label="测定结果"
        rules={resultRules}
      ></ProFormRadio.Group>
      <ProFormUploadButton label="上传检查照片" name="images" rules={[{ required: true }]} />
      <ProFormDateTimePicker name="checkTime" label="检查时间" rules={[{ required: true }]} />
    </>
  );
};
