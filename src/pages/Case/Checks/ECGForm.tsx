import { checkResultType } from '@/utils/options';
import {
  ProFormText,
  ProFormRadio,
  ProFormUploadButton,
  ProFormCheckbox,
  ProFormDateTimePicker,
} from '@ant-design/pro-form';
import type { FormInstance } from 'antd/es/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import { includes } from 'lodash';
import type { Rule } from 'rc-field-form/lib/interface';

const exceptionType = [
  { value: 0, label: '心房颤动' },
  { value: 1, label: '心房扑动' },
  { value: 2, label: '其他心率异常' },
  { value: 3, label: '其他' },
];

export default () => {
  const resultRules: Rule[] = [{ required: true }];

  return (
    <>
      <ProFormRadio.Group
        name="outcome"
        options={checkResultType}
        label="测定结果"
        rules={resultRules}
      />
      <ProFormCheckbox.Group name="errorType" label="异常类型" options={exceptionType} />

      <FormItem
        noStyle
        shouldUpdate={(prevValues, curValues) => prevValues.errorType !== curValues.errorType}
      >
        {({ getFieldValue }: FormInstance) => {
          return includes(getFieldValue('errorType'), 3) ? <ProFormText name="errorText" /> : null;
        }}
      </FormItem>

      <ProFormUploadButton label="上传检查照片" name="images" rules={[{ required: true }]} />
      <ProFormDateTimePicker name="checkTime" label="检查时间" rules={[{ required: true }]} />
    </>
  );
};
