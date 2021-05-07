import { leftAndRight, urinaryIncontinence } from '@/utils/options';
import ProForm, { ProFormDigit, ProFormRadio } from '@ant-design/pro-form';
import FormItem from 'antd/lib/form/FormItem';

const HospitalCheckBodyForm = () => {
  return (
    <ProForm.Group title="查体指标" collapsible>
      <ProFormDigit name="height" label="身高（cm）" width="xl" />
      <ProFormDigit name="weight" label="体重（kg）" width="xl" />
      <ProFormDigit name="abdominalCircumference" label="腹围（cm）" width="xl" />

      <FormItem noStyle dependencies={['height', 'weight']}>
        {({ getFieldsValue, setFieldsValue }) => {
          const { height, weight } = getFieldsValue(['height', 'weight']);

          if (height && weight) {
            const h = height / 100;
            const num = (height / h ** 2).toFixed(2);
            setFieldsValue({ bmi: num });
          } else {
            setFieldsValue({ bmi: undefined });
          }

          return <ProFormDigit name="bmi" label="体重指数（BMI）" width="xl" disabled />;
        }}
      </FormItem>

      <ProFormDigit name="heartRate" label="首次心率（次/分）" width="xl" />
      <ProForm.Group>
        <ProFormDigit
          name="horizontalLeftSystolic"
          label="平卧位左上肢收缩压（mmHg）"
          fieldProps={{ precision: 0 }}
          width="xl"
        />
        <ProFormDigit
          name="horizontalLeftDiastolic"
          label="平卧位左上肢舒张压（mmHg）"
          width="xl"
          fieldProps={{ precision: 0 }}
        />
        <ProFormDigit
          name="horizontalRightSystolic"
          label="平卧位右上肢收缩压（mmHg）"
          width="xl"
          fieldProps={{ precision: 0 }}
        />
        <ProFormDigit
          name="horizontalRightDiastolic"
          label="平卧位右上肢舒张压（mmHg）"
          width="xl"
          fieldProps={{ precision: 0 }}
        />
        <ProFormDigit
          name="verticalLeftSystolic"
          label="立位左上肢收缩压（mmHg)"
          width="xl"
          fieldProps={{ precision: 0 }}
        />
        <ProFormDigit
          name="verticalLeftDiastolic"
          label="立位左上肢舒张压（mmHg）"
          width="xl"
          fieldProps={{ precision: 0 }}
        />
        <ProFormDigit
          name="verticalRightSystolic"
          label="立位右上肢收缩压（mmHg）"
          width="xl"
          fieldProps={{ precision: 0 }}
        />
        <ProFormDigit
          name="verticalRightDiastolic"
          label="立位右上肢舒张压（mmHg）"
          width="xl"
          fieldProps={{ precision: 0 }}
        />
        <ProFormRadio.Group
          label="左右利手"
          name="leftAndRight"
          options={leftAndRight}
          width="xl"
        ></ProFormRadio.Group>
        <ProFormRadio.Group
          label="是否有尿失禁"
          name="urinaryIncontinence"
          options={urinaryIncontinence}
          width="xl"
        ></ProFormRadio.Group>
      </ProForm.Group>
    </ProForm.Group>
  );
};

export default HospitalCheckBodyForm;
