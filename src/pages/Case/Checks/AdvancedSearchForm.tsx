import { FormValuesType } from '@/pages/Record/Add';
import {
  diagnoseType,
  sexOptions,
  toastType,
  bloodEventType,
  drugType,
  checkType,
} from '@/utils/options';
import ProForm, {
  ModalForm,
  ProFormSelect,
  ProFormRadio,
  ProFormCheckbox,
} from '@ant-design/pro-form';
import FormItem from 'antd/lib/form/FormItem';
import { includes } from 'lodash';
import TreatmentFields from '../Add/TreatmentFields';
import { formatFormValuesToAdvancedSearchHospitalDTO } from './utils';

export const recordRange = [
  { value: 0, label: '入院诊断' },
  { value: 1, label: '辅助检查' },
  { value: 2, label: '血管事件及并发症' },
  { value: 3, label: '住院期间治疗记录' },
  { value: 4, label: '药物记录' },
  { value: 5, label: '最终诊断' },
];

const AdvancedSearchForm = () => {
  const submit = async (values: FormValuesType) => {
    try {
      const formParams = formatFormValuesToAdvancedSearchHospitalDTO(values);
    } catch (error) {
      return false;
    }

    return true;
  };

  return (
    <ProForm
      layout="horizontal"
      title="设置高级筛选条件"
      // visible
      initialValues={{ recordRange: 1 }}
    >
      <ProFormSelect name="sex" label="性别" valueEnum={sexOptions} />
      <ProFormRadio.Group
        name="nation"
        label="民族"
        options={[
          { label: '汉族', value: 0 },
          { label: '少数民族', value: 1 },
        ]}
        width="md"
        initialValue={0}
      />
      <ProFormSelect name="recordRange" label="记录范围" options={recordRange} />
      <FormItem
        noStyle
        shouldUpdate={(prevValues, curValues) => prevValues.recordRange !== curValues.recordRange}
      >
        {({ getFieldValue }) =>
          getFieldValue('recordRange') === 0 && (
            <ProFormCheckbox.Group
              name="diagnoseType"
              label="入院诊断结果"
              options={diagnoseType}
            />
          )
        }
      </FormItem>
      <FormItem
        noStyle
        shouldUpdate={(prevValues, curValues) => prevValues.recordRange !== curValues.recordRange}
      >
        {({ getFieldValue }) =>
          getFieldValue('recordRange') === 1 && (
            <ProFormSelect name="detectType" label="检查项目" options={checkType} />
          )
        }
      </FormItem>
      <FormItem
        noStyle
        shouldUpdate={(prevValues, curValues) => prevValues.diagnoseType !== curValues.diagnoseType}
      >
        {({ getFieldValue }) =>
          includes(getFieldValue('diagnoseType'), 1) && (
            <ProFormCheckbox.Group
              name="cerebralInfarctionTOAST"
              label="Toast分型"
              options={toastType}
            />
          )
        }
      </FormItem>

      <FormItem
        noStyle
        shouldUpdate={(prevValues, curValues) => prevValues.recordRange !== curValues.recordRange}
      >
        {({ getFieldValue }) =>
          getFieldValue('recordRange') === 2 && (
            <ProFormCheckbox.Group
              name="vascularEventList"
              label="血管事件及并发症"
              options={bloodEventType}
            />
          )
        }
      </FormItem>

      <FormItem
        noStyle
        shouldUpdate={(prevValues, curValues) => prevValues.recordRange !== curValues.recordRange}
      >
        {({ getFieldValue }) => getFieldValue('recordRange') === 3 && <TreatmentFields />}
      </FormItem>

      <FormItem
        noStyle
        shouldUpdate={(prevValues, curValues) => prevValues.recordRange !== curValues.recordRange}
      >
        {({ getFieldValue }) =>
          getFieldValue('recordRange') === 4 && (
            <ProFormCheckbox.Group name="drugType" label="药物类型" options={drugType} />
          )
        }
      </FormItem>
      <FormItem
        noStyle
        shouldUpdate={(prevValues, curValues) => prevValues.recordRange !== curValues.recordRange}
      >
        {({ getFieldValue }) =>
          getFieldValue('recordRange') === 5 && (
            <ProFormCheckbox.Group name="drugType" label="药物类型" options={drugType} />
          )
        }
      </FormItem>
    </ProForm>
  );
};

export default AdvancedSearchForm;
