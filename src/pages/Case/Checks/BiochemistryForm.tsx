import ProForm, {
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
      <ProForm.Group>
        <ProFormText
          name="aspartateAminotransferase"
          label="天冬氨酸氨基转移酶测定值"
          fieldProps={{ addonAfter: 'U/L' }}
          rules={digitRules}
        />
        <ProFormRadio.Group
          name="aspartateAminotransferaseOutcome"
          options={result}
          label="测定结果"
          rules={resultRules}
        />
      </ProForm.Group>

      <ProForm.Group>
        <ProFormText
          name="alanineAminotransferase"
          label="丙氨酸氨基转移酶测定值"
          fieldProps={{ addonAfter: 'U/L' }}
          rules={digitRules}
        />
        <ProFormRadio.Group
          name="alanineAminotransferaseOutcome"
          options={result}
          label="测定结果"
          rules={resultRules}
        />
      </ProForm.Group>

      <ProForm.Group>
        <ProFormText
          name="lowDensityLipoproteins"
          label="低密度脂蛋白测定值"
          fieldProps={{ addonAfter: 'mmol/L' }}
          rules={digitRules}
        />
        <ProFormRadio.Group
          name="lowDensityLipoproteinsOutcome"
          options={result}
          label="测定结果"
          rules={resultRules}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          name="highDensityLipoprotein"
          label="高密度脂蛋白测定值"
          fieldProps={{ addonAfter: 'mmol/L' }}
          rules={digitRules}
        />
        <ProFormRadio.Group
          name="highDensityLipoproteinOutcome"
          options={result}
          label="测定结果"
          rules={resultRules}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          name="totalCholesterol"
          label="总胆固醇测定值"
          fieldProps={{ addonAfter: 'mmol/L' }}
          rules={digitRules}
        />
        <ProFormRadio.Group
          name="totalCholesterolOutcome"
          options={result}
          label="测定结果"
          rules={resultRules}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          name="triglycerides"
          label="甘油三酯测定值"
          fieldProps={{ addonAfter: 'mmol/L' }}
          rules={digitRules}
        />
        <ProFormRadio.Group
          name="triglyceridesOutcome"
          options={result}
          label="测定结果"
          rules={resultRules}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          name="uricAcid"
          label="尿酸测定值"
          fieldProps={{ addonAfter: 'umol/L' }}
          rules={digitRules}
        />
        <ProFormRadio.Group
          name="uricAcidOutcome"
          options={result}
          label="测定结果"
          rules={resultRules}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          name="creatinine"
          label=" 肌酐（酶法）测定值"
          fieldProps={{ addonAfter: 'μmol/L' }}
          rules={digitRules}
        />
        <ProFormRadio.Group
          name="creatinineOutcome"
          options={result}
          label="测定结果"
          rules={resultRules}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          name="ureaNitrogen"
          label=" 尿素氮测定值"
          fieldProps={{ addonAfter: 'mmol/L' }}
          rules={digitRules}
        />
        <ProFormRadio.Group
          name="ureaNitrogenOutcome"
          options={result}
          label="测定结果"
          rules={resultRules}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          name="fastingBloodSugar"
          label=" 空腹血糖测定值"
          fieldProps={{ addonAfter: 'mmol/L' }}
          rules={digitRules}
        />
        <ProFormRadio.Group
          name="fastingBloodSugarOutcome"
          options={result}
          label="测定结果"
          rules={resultRules}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          name="homocysteine"
          label=" 同型半胱氨酸测定值"
          fieldProps={{ addonAfter: 'mmol/L' }}
          rules={digitRules}
        />
        <ProFormRadio.Group
          name="homocysteineOutcome"
          options={result}
          label="测定结果"
          rules={resultRules}
        />
      </ProForm.Group>

      <ProForm.Group>
        <ProFormText
          name="creatineKinase"
          label="肌酸激酶测定值"
          fieldProps={{ addonAfter: 'U/L' }}
          rules={digitRules}
        />
        <ProFormRadio.Group
          name="creatineKinaseOutcome"
          options={result}
          label="测定结果"
          rules={resultRules}
        />
      </ProForm.Group>

      <ProForm.Group>
        <ProFormText
          name="ckmb"
          label=" CK-MB测定值"
          fieldProps={{ addonAfter: 'U/L' }}
          rules={digitRules}
        />
        <ProFormRadio.Group
          name="ckmboutcome"
          options={result}
          label="测定结果"
          rules={resultRules}
        />
      </ProForm.Group>

      <ProFormUploadButton label="上传检查照片" name="images" rules={[{ required: true }]} />
      <ProFormDateTimePicker name="checkTime" label="检查时间" rules={[{ required: true }]} />
    </>
  );
};
