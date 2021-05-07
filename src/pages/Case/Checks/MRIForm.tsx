import { ProFormRadio, ProFormUploadButton, ProFormDateTimePicker } from '@ant-design/pro-form';
import type { Rule } from 'rc-field-form/lib/interface';

const result = [
  { label: '多发腔隙性脑梗死', value: 1 },
  { label: '白质病变1级', value: 2 },
  { label: '白质病变2级', value: 3 },
  { label: '白质病变3级', value: 4 },
  { label: '白质病变4级', value: 5 },
  { label: '脑萎缩', value: 6 },
  { label: '无异常', value: 7 },
];
export default () => {
  const resultRules: Rule[] = [{ required: true }];

  return (
    <>
      <ProFormRadio.Group name="outcome" options={result} label="检查结果" rules={resultRules} />
      <ProFormUploadButton label="上传检查照片" name="images" rules={[{ required: true }]} />
      <ProFormDateTimePicker name="checkTime" label="检查时间" rules={[{ required: true }]} />
    </>
  );
};
