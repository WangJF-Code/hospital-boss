import { checkResultType } from '@/utils/options';
import { ProFormRadio, ProFormUploadButton, ProFormDateTimePicker } from '@ant-design/pro-form';
import type { Rule } from 'rc-field-form/lib/interface';

export default () => {
  const resultRules: Rule[] = [{ required: true }];

  return (
    <>
      <ProFormUploadButton label="上传检查照片" name="images" rules={[{ required: true }]} />
      <ProFormRadio.Group
        name="outcome"
        options={checkResultType}
        label="测定结果"
        rules={resultRules}
      />
      <ProFormDateTimePicker name="checkTime" label="检查时间" rules={[{ required: true }]} />
    </>
  );
};
