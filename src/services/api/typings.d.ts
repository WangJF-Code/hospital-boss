/* eslint-disable */

/**
 * Api Documentation
 *
 * Api Documentation
 *
 * 接口版本：1.0
 * OpenApi 3.0.3
 * 代码生成时间：
 *
 * ⚠️: 本文件是由工具自动生成，不要手动修改
 * - https://www.npmjs.com/package/swagger-codegen-ts
 * - http://172.26.1.194/dtfe/swagger-codegen-ts
 */

declare namespace API {
  
  type AdvancedSearchFollowupDTO = {
    /** 是否死亡 */
    'dead'?: number;
    /** 辅助检查-多单选类检查项 */
    'detectItemMultipleSingle'?: DetectItemMultipleSingleConditionDTO;
    /** 服药药物类型集合 */
    'drugRecordList'?: number[];
    /** 住院记录ID */
    'hospitalRecordsId'?: string;
    /** 坚持服药药物类型集合 */
    'medicationDrugRecordList'?: number[];
    /** 发病记录类型集合 */
    'onsetRecordList'?: number[];
    /** 患者ID */
    'patientId'?: string;
    /** 性别 */
    'sex'?: number;
    'toastlist'?: string[];
    /** 姓名 */
    'userName'?: string;
  }

  type AdvancedSearchHospitalDTO = {
    /** 辅助检查-多单选类检查项 */
    'detectItemMultipleSingle'?: DetectItemMultipleSingleConditionDTO;
    /** 诊断记录 */
    'diagnosticRecords'?: HospitalDiagnosticRecordsConditionDTO;
    /** 出院时间 */
    'endDischargeTime'?: number;
    /** 住院时间 */
    'endHospitalizationTime'?: number;
    /** 电子病历ID */
    'id'?: string;
    /** 药物治疗类型集合 */
    'medicationDrugRecordList'?: number[];
    /** 民族 */
    'nation'?: string;
    /** 患者ID */
    'patientId'?: string;
    /** 性别 */
    'sex'?: number;
    /** 出院时间 */
    'startDischargeTime'?: number;
    /** 住院时间 */
    'startHospitalizationTime'?: number;
    /** 状态：1-住院中，2-已出院 */
    'status'?: number;
    /** 治疗记录 */
    'treatmentRecords'?: HospitalTreatmentRecordsConditionDTO;
    /** 姓名 */
    'userName'?: string;
    /** 血管事件类型集合 */
    'vascularEventList'?: number[];
  }

  type ApiResult = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<any>;
    /** 结果提示信息 */
    message: string;
  }

  type AuxiliaryCheckDTO = {
    /** 抗血小板药物基因检测 */
    'antiplateletDrugGenesList'?: DetectAntiplateletDrugGenesDTO[];
    /** 生化全项 */
    'biochemicalFullItemList'?: DetectBiochemicalFullItemDTO[];
    /** 血常规 */
    'bloodRoutineList'?: DetectBloodRoutineDTO[];
    /** 凝血常规 */
    'clottingRoutineList'?: DetectClottingRoutineDTO[];
    /** 心电图 */
    'ekgList'?: DetectEkgDTO[];
    /** 炎症介质 */
    'inflammatoryMediaList'?: DetectInflammatoryMediaDTO[];
    /** 颅脑核磁共振(MRI) */
    'multiple301List'?: DetectItemMultipleDTO[];
    /** 颈部血管彩超检查 */
    'multipleSingle401List'?: DetectItemMultipleSingleDTO[];
    /** 锁骨下动脉彩超检查 */
    'multipleSingle402List'?: DetectItemMultipleSingleDTO[];
    /** 磁共振血管成像(MRA) */
    'multipleSingle403List'?: DetectItemMultipleSingleDTO[];
    /** 磁共振弥散成像(DWI) */
    'multipleSingle404List'?: DetectItemMultipleSingleDTO[];
    /** CT 血管造影(CTA) */
    'multipleSingle405List'?: DetectItemMultipleSingleDTO[];
    /** CT灌注成像(CTP) */
    'multipleSingle406List'?: DetectItemMultipleSingleDTO[];
    /** 24小时心电监测(Holter) */
    'outcome501List'?: DetectItemOutcomeDTO[];
    /** 心脏超声 */
    'outcome502List'?: DetectItemOutcomeDTO[];
    /** 颅脑计算机 X 线体层摄影(CT) */
    'outcome503List'?: DetectItemOutcomeDTO[];
    /** 磁共振灌注成像(ASL) */
    'outcome504List'?: DetectItemOutcomeDTO[];
    /** 磁共振(DTI) */
    'outcome505List'?: DetectItemOutcomeDTO[];
    /** 眼底OCTA */
    'outcome506List'?: DetectItemOutcomeDTO[];
    /** 眼底照相 */
    'outcome507List'?: DetectItemOutcomeDTO[];
    /** 经颅多普勒检查 */
    'single201List'?: DetectItemSingleDTO[];
    /** 颅内血管高分辨磁共振成像(HMR) */
    'single202List'?: DetectItemSingleDTO[];
    /** 尿流动力学检查 */
    'single203List'?: DetectItemSingleDTO[];
    /** 下肢静脉血管超声 */
    'single204List'?: DetectItemSingleDTO[];
    /** 磁共振磁敏感成像(SWI) */
    'swiList'?: DetectSwiDTO[];
    /** 血脂十三项 */
    'thirteenBloodLipidsList'?: DetectThirteenBloodLipidsDTO[];
    /** 甲状腺功能 */
    'thyroidFunctionList'?: DetectThyroidFunctionDTO[];
    /** 血沉 */
    'value101List'?: DetectItemValueDTO[];
    /** 糖化血红蛋白 */
    'value102List'?: DetectItemValueDTO[];
  }

  type CheckBodyIndexDTO = {
    /** 腹围（cm） */
    'abdominalCircumference'?: number;
    /** 体重指数（BMI）＝体重（kg）/身高(m)的平方 */
    'bmi'?: number;
    /** 检查时间 */
    'checkTime'?: number;
    /** 首次心率（次/分） */
    'heartRate'?: number;
    /** 身高（cm） */
    'height'?: number;
    /** 平卧位左上肢舒张压（mmHg） */
    'horizontalLeftDiastolic'?: number;
    /** 平卧位左上肢收缩压（mmHg） */
    'horizontalLeftSystolic'?: number;
    /** 平卧位右上肢舒张压（mmHg） */
    'horizontalRightDiastolic'?: number;
    /** 平卧位右上肢收缩压（mmHg） */
    'horizontalRightSystolic'?: number;
    /** 查体指标ID */
    'id'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    /** 左右利手:1-右手，2-左手，3-双手 */
    'leftAndRight'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 是否有尿失禁：1-否，2-是，3-不详 */
    'urinaryIncontinence'?: number;
    /** 卧立位左上肢舒张压（mmHg） */
    'verticalLeftDiastolic'?: number;
    /** 卧立位左上肢收缩压（mmHg） */
    'verticalLeftSystolic'?: number;
    /** 卧立位右上肢舒张压（mmHg） */
    'verticalRightDiastolic'?: number;
    /** 卧立位右上肢收缩压（mmHg） */
    'verticalRightSystolic'?: number;
    /** 体重（Kg） */
    'weight'?: number;
  }

  type CheckBodyIndexSaveDTO = {
    /** 腹围（cm） */
    'abdominalCircumference'?: number;
    /** 体重指数（BMI）＝体重（kg）/身高(m)的平方 */
    'bmi'?: number;
    /** 检查时间 */
    'checkTime'?: number;
    /** 首次心率（次/分） */
    'heartRate'?: number;
    /** 身高（cm） */
    'height'?: number;
    /** 平卧位左上肢舒张压（mmHg） */
    'horizontalLeftDiastolic'?: number;
    /** 平卧位左上肢收缩压（mmHg） */
    'horizontalLeftSystolic'?: number;
    /** 平卧位右上肢舒张压（mmHg） */
    'horizontalRightDiastolic'?: number;
    /** 平卧位右上肢收缩压（mmHg） */
    'horizontalRightSystolic'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    /** 左右利手:1-右手，2-左手，3-双手 */
    'leftAndRight'?: number;
    /** 是否有尿失禁：1-否，2-是，3-不详 */
    'urinaryIncontinence'?: number;
    /** 卧立位左上肢舒张压（mmHg） */
    'verticalLeftDiastolic'?: number;
    /** 卧立位左上肢收缩压（mmHg） */
    'verticalLeftSystolic'?: number;
    /** 卧立位右上肢舒张压（mmHg） */
    'verticalRightDiastolic'?: number;
    /** 卧立位右上肢收缩压（mmHg） */
    'verticalRightSystolic'?: number;
    /** 体重（Kg） */
    'weight'?: number;
  }

  type CheckEvaluationIndexDTO = {
    'abcd2'?: string;
    'adl'?: string;
    'avlt'?: string;
    /** 平衡测试评分 */
    'balance'?: string;
    /** 膀胱过度活动症症状评分 */
    'bladderHyperactivityDisorder'?: string;
    'bnt'?: string;
    'cdr'?: string;
    /** 检查时间 */
    'checkTime'?: number;
    /** 便秘临床评分 */
    'constipation'?: string;
    'ctt'?: string;
    /** 蛙田饮水实验评分 */
    'drinkingWater'?: string;
    'ds'?: string;
    'eq5D'?: string;
    /** 对指评分 */
    'fingers'?: string;
    'hamdanxiety'?: string;
    'hamddepression'?: string;
    /** 测评指标ID */
    'id'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    'mmse'?: string;
    /** MoCA评分 */
    'moCA'?: string;
    'mrs'?: string;
    'nihss'?: string;
    /** 营养筛查评分 */
    'nutritionScreening'?: string;
    /** 一字步实验评分 */
    'oneStepExperiment'?: string;
    /** 患者ID */
    'patientId'?: string;
    /** 国际前列腺症状评分 */
    'prostate'?: string;
    /** 快速起坐测试评分 */
    'quickSitUp'?: string;
    /** 复杂图形（Rey）评分 */
    'rey'?: string;
    /** 6米步行测试评分 */
    'sixMeterWalking'?: string;
    /** Stroop 色词评分 */
    'stroop'?: string;
    'vft'?: string;
  }

  type CheckEvaluationIndexSaveDTO = {
    'abcd2'?: string;
    'adl'?: string;
    'avlt'?: string;
    /** 平衡测试评分 */
    'balance'?: string;
    /** 膀胱过度活动症症状评分 */
    'bladderHyperactivityDisorder'?: string;
    'bnt'?: string;
    'cdr'?: string;
    /** 检查时间 */
    'checkTime'?: number;
    /** 便秘临床评分 */
    'constipation'?: string;
    'ctt'?: string;
    /** 蛙田饮水实验评分 */
    'drinkingWater'?: string;
    'ds'?: string;
    'eq5D'?: string;
    /** 对指评分 */
    'fingers'?: string;
    'hamdanxiety'?: string;
    'hamddepression'?: string;
    /** 检测图片（以，分割） */
    'images'?: string;
    'mmse'?: string;
    /** MoCA评分 */
    'moCA'?: string;
    'mrs'?: string;
    'nihss'?: string;
    /** 营养筛查评分 */
    'nutritionScreening'?: string;
    /** 一字步实验评分 */
    'oneStepExperiment'?: string;
    /** 国际前列腺症状评分 */
    'prostate'?: string;
    /** 快速起坐测试评分 */
    'quickSitUp'?: string;
    /** 复杂图形（Rey）评分 */
    'rey'?: string;
    /** 6米步行测试评分 */
    'sixMeterWalking'?: string;
    /** Stroop 色词评分 */
    'stroop'?: string;
    'vft'?: string;
  }

  type DetectAntiplateletDrugGenesCreateDTO = {
    /** 阿司匹林基因检测照片 */
    'aspirinImages'?: string;
    /** 测定结果 */
    'aspirinOutcome'?: number;
    /** 检查时间 */
    'checkTime'?: string;
    /** 氯吡格雷基因检测照片 */
    'clopidogrelImages'?: string;
    /** 测定结果 */
    'clopidogrelOutcome'?: number;
    /** 所属类型ID */
    'dataId': string;
    /** 患者ID */
    'patientId': string;
    /** 他汀药物基因检测照片 */
    'statinsImages'?: string;
    /** 测定结果 */
    'statinsOutcome'?: number;
    /** 类型：1-住院，2随访 */
    'type': string;
  }

  type DetectAntiplateletDrugGenesDTO = {
    /** 阿司匹林基因检测照片 */
    'aspirinImages'?: string;
    /** 测定结果 */
    'aspirinOutcome'?: number;
    /** 检查时间 */
    'checkTime'?: string;
    /** 氯吡格雷基因检测照片 */
    'clopidogrelImages'?: string;
    /** 测定结果 */
    'clopidogrelOutcome'?: number;
    /** 创建时间 */
    'createTime'?: number;
    /** 所属类型ID */
    'dataId'?: string;
    /** 抗血小板药物基因ID */
    'id'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 他汀药物基因检测照片 */
    'statinsImages'?: string;
    /** 测定结果 */
    'statinsOutcome'?: number;
    /** 类型：1-住院，2随访 */
    'type'?: string;
  }

  type DetectAntiplateletDrugGenesUpdateDTO = {
    /** 阿司匹林基因检测照片 */
    'aspirinImages'?: string;
    /** 测定结果 */
    'aspirinOutcome'?: number;
    /** 检查时间 */
    'checkTime'?: string;
    /** 氯吡格雷基因检测照片 */
    'clopidogrelImages'?: string;
    /** 测定结果 */
    'clopidogrelOutcome'?: number;
    /** 所属类型ID */
    'dataId': string;
    /** 抗血小板药物基因ID */
    'id': number;
    /** 患者ID */
    'patientId': string;
    /** 他汀药物基因检测照片 */
    'statinsImages'?: string;
    /** 测定结果 */
    'statinsOutcome'?: number;
    /** 类型：1-住院，2随访 */
    'type': string;
  }

  type DetectBiochemicalFullItemCreateDTO = {
    /** 丙氨酸氨基转移酶 */
    'alanineAminotransferase'?: number;
    /** 测定结果 */
    'alanineAminotransferaseOutcome'?: number;
    /** 天冬氨酸氨基转移酶测定值 */
    'aspartateAminotransferase'?: number;
    /** 测定结果 */
    'aspartateAminotransferaseOutcome'?: number;
    /** 检查时间 */
    'checkTime'?: string;
    'ckmb'?: number;
    'ckmboutcome'?: number;
    /** 肌酸激酶测定值 */
    'creatineKinase'?: number;
    /** 测定结果 */
    'creatineKinaseOutcome'?: number;
    /** 肌酐（酶法）测定值 */
    'creatinine'?: number;
    /** 测定结果 */
    'creatinineOutcome'?: number;
    /** 所属类型ID */
    'dataId': string;
    /** 空腹血糖测定值 */
    'fastingBloodSugar'?: number;
    /** 测定结果 */
    'fastingBloodSugarOutcome'?: number;
    /** 高密度脂蛋白测定值 */
    'highDensityLipoprotein'?: number;
    /** 测定结果 */
    'highDensityLipoproteinOutcome'?: number;
    /** 同型半胱氨酸测定值 */
    'homocysteine'?: number;
    /** 测定结果 */
    'homocysteineOutcome'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    /** 低密度脂蛋白测定值 */
    'lowDensityLipoproteins'?: number;
    /** 测定结果 */
    'lowDensityLipoproteinsOutcome'?: number;
    /** 患者ID */
    'patientId': string;
    /** 总胆固醇测定值 */
    'totalCholesterol'?: number;
    /** 测定结果 */
    'totalCholesterolOutcome'?: number;
    /** 甘油三酯测定值 */
    'triglycerides'?: number;
    /** 测定结果 */
    'triglyceridesOutcome'?: number;
    /** 类型：1-住院，2随访 */
    'type': string;
    /** 尿素氮测定值 */
    'ureaNitrogen'?: number;
    /** 测定结果 */
    'ureaNitrogenOutcome'?: number;
    /** 尿酸测定值 */
    'uricAcid'?: number;
    /** 测定结果 */
    'uricAcidOutcome'?: number;
  }

  type DetectBiochemicalFullItemDTO = {
    /** 丙氨酸氨基转移酶 */
    'alanineAminotransferase'?: number;
    /** 测定结果 */
    'alanineAminotransferaseOutcome'?: number;
    /** 天冬氨酸氨基转移酶测定值 */
    'aspartateAminotransferase'?: number;
    /** 测定结果 */
    'aspartateAminotransferaseOutcome'?: number;
    /** 检查时间 */
    'checkTime'?: string;
    'ckmb'?: number;
    'ckmboutcome'?: number;
    /** 创建时间 */
    'createTime'?: number;
    /** 肌酸激酶测定值 */
    'creatineKinase'?: number;
    /** 测定结果 */
    'creatineKinaseOutcome'?: number;
    /** 肌酐（酶法）测定值 */
    'creatinine'?: number;
    /** 测定结果 */
    'creatinineOutcome'?: number;
    /** 所属类型ID */
    'dataId'?: string;
    /** 空腹血糖测定值 */
    'fastingBloodSugar'?: number;
    /** 测定结果 */
    'fastingBloodSugarOutcome'?: number;
    /** 高密度脂蛋白测定值 */
    'highDensityLipoprotein'?: number;
    /** 测定结果 */
    'highDensityLipoproteinOutcome'?: number;
    /** 同型半胱氨酸测定值 */
    'homocysteine'?: number;
    /** 测定结果 */
    'homocysteineOutcome'?: number;
    /** 生化全项ID */
    'id'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    /** 低密度脂蛋白测定值 */
    'lowDensityLipoproteins'?: number;
    /** 测定结果 */
    'lowDensityLipoproteinsOutcome'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 总胆固醇测定值 */
    'totalCholesterol'?: number;
    /** 测定结果 */
    'totalCholesterolOutcome'?: number;
    /** 甘油三酯测定值 */
    'triglycerides'?: number;
    /** 测定结果 */
    'triglyceridesOutcome'?: number;
    /** 类型：1-住院，2随访 */
    'type'?: string;
    /** 尿素氮测定值 */
    'ureaNitrogen'?: number;
    /** 测定结果 */
    'ureaNitrogenOutcome'?: number;
    /** 尿酸测定值 */
    'uricAcid'?: number;
    /** 测定结果 */
    'uricAcidOutcome'?: number;
  }

  type DetectBiochemicalFullItemUpdateDTO = {
    /** 丙氨酸氨基转移酶 */
    'alanineAminotransferase'?: number;
    /** 测定结果 */
    'alanineAminotransferaseOutcome'?: number;
    /** 天冬氨酸氨基转移酶测定值 */
    'aspartateAminotransferase'?: number;
    /** 测定结果 */
    'aspartateAminotransferaseOutcome'?: number;
    /** 检查时间 */
    'checkTime'?: string;
    'ckmb'?: number;
    'ckmboutcome'?: number;
    /** 肌酸激酶测定值 */
    'creatineKinase'?: number;
    /** 测定结果 */
    'creatineKinaseOutcome'?: number;
    /** 肌酐（酶法）测定值 */
    'creatinine'?: number;
    /** 测定结果 */
    'creatinineOutcome'?: number;
    /** 所属类型ID */
    'dataId': string;
    /** 空腹血糖测定值 */
    'fastingBloodSugar'?: number;
    /** 测定结果 */
    'fastingBloodSugarOutcome'?: number;
    /** 高密度脂蛋白测定值 */
    'highDensityLipoprotein'?: number;
    /** 测定结果 */
    'highDensityLipoproteinOutcome'?: number;
    /** 同型半胱氨酸测定值 */
    'homocysteine'?: number;
    /** 测定结果 */
    'homocysteineOutcome'?: number;
    /** 生化全项ID */
    'id': number;
    /** 检测图片（以，分割） */
    'images'?: string;
    /** 低密度脂蛋白测定值 */
    'lowDensityLipoproteins'?: number;
    /** 测定结果 */
    'lowDensityLipoproteinsOutcome'?: number;
    /** 患者ID */
    'patientId': string;
    /** 总胆固醇测定值 */
    'totalCholesterol'?: number;
    /** 测定结果 */
    'totalCholesterolOutcome'?: number;
    /** 甘油三酯测定值 */
    'triglycerides'?: number;
    /** 测定结果 */
    'triglyceridesOutcome'?: number;
    /** 类型：1-住院，2随访 */
    'type': string;
    /** 尿素氮测定值 */
    'ureaNitrogen'?: number;
    /** 测定结果 */
    'ureaNitrogenOutcome'?: number;
    /** 尿酸测定值 */
    'uricAcid'?: number;
    /** 测定结果 */
    'uricAcidOutcome'?: number;
  }

  type DetectBloodRoutineCreateDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    'creactiveProtein'?: number;
    'creactiveProteinOutcome'?: number;
    /** 所属类型ID */
    'dataId'?: string;
    /** 血红蛋白测定值 */
    'haemoglobin'?: number;
    /** 血红蛋白测定结果 */
    'haemoglobinOutcome'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    /** 白细胞计数测定值 */
    'leukocyte'?: number;
    /** 白细胞测定结果 */
    'leukocyteOutcome'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 血小板计数测定值 */
    'platelet'?: number;
    /** 血小板计数测定结果 */
    'plateletOutcome'?: number;
    /** 类型：1-住院，2随访 */
    'type'?: string;
  }

  type DetectBloodRoutineDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    'creactiveProtein'?: number;
    'creactiveProteinOutcome'?: number;
    /** 创建时间 */
    'createTime'?: number;
    /** 所属类型ID */
    'dataId'?: string;
    /** 血红蛋白测定值 */
    'haemoglobin'?: number;
    /** 血红蛋白测定结果 */
    'haemoglobinOutcome'?: number;
    /** 血常规ID */
    'id'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    /** 白细胞计数测定值 */
    'leukocyte'?: number;
    /** 白细胞测定结果 */
    'leukocyteOutcome'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 血小板计数测定值 */
    'platelet'?: number;
    /** 血小板计数测定结果 */
    'plateletOutcome'?: number;
    /** 类型：1-住院，2随访 */
    'type'?: string;
  }

  type DetectBloodRoutineUpdateDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    'creactiveProtein'?: number;
    'creactiveProteinOutcome'?: number;
    /** 所属类型ID */
    'dataId'?: string;
    /** 血红蛋白测定值 */
    'haemoglobin'?: number;
    /** 血红蛋白测定结果 */
    'haemoglobinOutcome'?: number;
    /** 血常规ID */
    'id'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    /** 白细胞计数测定值 */
    'leukocyte'?: number;
    /** 白细胞测定结果 */
    'leukocyteOutcome'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 血小板计数测定值 */
    'platelet'?: number;
    /** 血小板计数测定结果 */
    'plateletOutcome'?: number;
    /** 类型：1-住院，2随访 */
    'type'?: string;
  }

  type DetectClottingRoutineCreateDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    /** 所属类型ID */
    'dataId'?: string;
    'ddimerQuantification'?: number;
    'ddimerQuantificationOutcome'?: number;
    /** 纤维蛋白原含量测定值 */
    'fibrinogen'?: number;
    /** 纤维蛋白原含量测定结果 */
    'fibrinogenOutcome'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    'inr'?: number;
    'inroutcome'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 类型：1-住院，2随访 */
    'type'?: string;
  }

  type DetectClottingRoutineDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    /** 创建时间 */
    'createTime'?: number;
    /** 所属类型ID */
    'dataId'?: string;
    'ddimerQuantification'?: number;
    'ddimerQuantificationOutcome'?: number;
    /** 纤维蛋白原含量测定值 */
    'fibrinogen'?: number;
    /** 纤维蛋白原含量测定结果 */
    'fibrinogenOutcome'?: number;
    /** 凝血常规ID */
    'id'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    'inr'?: number;
    'inroutcome'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 类型：1-住院，2随访 */
    'type'?: string;
  }

  type DetectClottingRoutineUpdateDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    /** 所属类型ID */
    'dataId'?: string;
    'ddimerQuantification'?: number;
    'ddimerQuantificationOutcome'?: number;
    /** 纤维蛋白原含量测定值 */
    'fibrinogen'?: number;
    /** 纤维蛋白原含量测定结果 */
    'fibrinogenOutcome'?: number;
    /** 凝血常规ID */
    'id'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    'inr'?: number;
    'inroutcome'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 类型：1-住院，2随访 */
    'type'?: string;
  }

  type DetectEkgCreateDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    /** 所属类型ID */
    'dataId'?: string;
    /** 心电图异常类型其他描述 */
    'errorText'?: string;
    /** 心电图异常类型（以，分割） */
    'errorType'?: string;
    /** 检测图片（以，分割） */
    'images'?: string;
    /** 测定结果 */
    'outcome'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 类型：1-住院，2随访 */
    'type'?: string;
  }

  type DetectEkgDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    /** 创建时间 */
    'createTime'?: number;
    /** 所属类型ID */
    'dataId'?: string;
    /** 心电图异常类型其他描述 */
    'errorText'?: string;
    /** 心电图异常类型（以，分割） */
    'errorType'?: string;
    /** 心电图ID */
    'id'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    /** 测定结果 */
    'outcome'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 类型：1-住院，2随访 */
    'type'?: string;
  }

  type DetectEkgUpdateDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    /** 所属类型ID */
    'dataId'?: string;
    /** 心电图异常类型其他描述 */
    'errorText'?: string;
    /** 心电图异常类型（以，分割） */
    'errorType'?: string;
    /** 心电图ID */
    'id'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    /** 测定结果 */
    'outcome'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 类型：1-住院，2随访 */
    'type'?: string;
  }

  type DetectInflammatoryMediaCreateDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    /** 所属类型ID */
    'dataId'?: string;
    'il10'?: number;
    'il10Outcome'?: number;
    'il17'?: number;
    'il17Outcome'?: number;
    'il2'?: number;
    'il2Outcome'?: number;
    'il4'?: number;
    'il4Outcome'?: number;
    'il6'?: number;
    'il6Outcome'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    /** 患者ID */
    'patientId'?: string;
    'tnfa'?: number;
    'tnfaoutcome'?: number;
    'tnfc'?: number;
    'tnfcoutcome'?: number;
    /** 类型：1-住院，2随访 */
    'type'?: string;
  }

  type DetectInflammatoryMediaDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    /** 创建时间 */
    'createTime'?: number;
    /** 所属类型ID */
    'dataId'?: string;
    /** 炎症介质ID */
    'id'?: number;
    'il10'?: number;
    'il10Outcome'?: number;
    'il17'?: number;
    'il17Outcome'?: number;
    'il2'?: number;
    'il2Outcome'?: number;
    'il4'?: number;
    'il4Outcome'?: number;
    'il6'?: number;
    'il6Outcome'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    /** 患者ID */
    'patientId'?: string;
    'tnfa'?: number;
    'tnfaoutcome'?: number;
    'tnfc'?: number;
    'tnfcoutcome'?: number;
    /** 类型：1-住院，2随访 */
    'type'?: string;
  }

  type DetectInflammatoryMediaUpdateDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    /** 所属类型ID */
    'dataId'?: string;
    /** 炎症介质ID */
    'id'?: number;
    'il10'?: number;
    'il10Outcome'?: number;
    'il17'?: number;
    'il17Outcome'?: number;
    'il2'?: number;
    'il2Outcome'?: number;
    'il4'?: number;
    'il4Outcome'?: number;
    'il6'?: number;
    'il6Outcome'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    /** 患者ID */
    'patientId'?: string;
    'tnfa'?: number;
    'tnfaoutcome'?: number;
    'tnfc'?: number;
    'tnfcoutcome'?: number;
    /** 类型：1-住院，2随访 */
    'type'?: string;
  }

  type DetectItemMultipleCreateDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    /** 所属类型ID */
    'dataId'?: string;
    /** 检测类型: 301-颅脑核磁共振(MRI) */
    'detectType'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    /** 多选结果:（以，分割） */
    'multiple'?: string;
    /** 测定结果 */
    'outcome'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 类型：1-住院，2随访 */
    'type'?: string;
  }

  type DetectItemMultipleDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    /** 创建时间 */
    'createTime'?: number;
    /** 所属类型ID */
    'dataId'?: string;
    /** 检测类型: 301-颅脑核磁共振(MRI) */
    'detectType'?: number;
    /** 检测ID */
    'id'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    /** 多选结果:（以，分割） */
    'multiple'?: string;
    /** 测定结果 */
    'outcome'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 类型：1-住院，2随访 */
    'type'?: string;
  }

  type DetectItemMultipleSingleConditionDTO = {
    /** 检测类型: 401-颈部血管彩超检查, 402-锁骨下动脉彩超检查, 403-磁共振血管成像(MRA), 404-磁共振弥散成像（DWI）, 405-CT 血管造影(CTA), 406-CT灌注成像（CTP） */
    'detectType'?: number;
    /** 多个单选结果: k-v（多个以;分割） */
    'multipleSingle'?: string;
  }

  type DetectItemMultipleSingleCreateDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    /** 所属类型ID */
    'dataId'?: string;
    /** 检测类型: 401-颈部血管彩超检查, 402-锁骨下动脉彩超检查, 403-磁共振血管成像(MRA), 404-磁共振弥散成像（DWI）, 405-CT 血管造影(CTA), 406-CT灌注成像（CTP） */
    'detectType'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    /** 多个单选结果: k-v（多个以，分割） */
    'multipleSingle'?: string;
    /** 测定结果 */
    'outcome'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 类型：1-住院，2随访 */
    'type'?: string;
  }

  type DetectItemMultipleSingleDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    /** 创建时间 */
    'createTime'?: number;
    /** 所属类型ID */
    'dataId'?: string;
    /** 检测类型: 401-颈部血管彩超检查, 402-锁骨下动脉彩超检查, 403-磁共振血管成像(MRA), 404-磁共振弥散成像（DWI）, 405-CT 血管造影(CTA), 406-CT灌注成像（CTP） */
    'detectType'?: number;
    /** 检测ID */
    'id'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    /** 多个单选结果: k-v（多个以，分割） */
    'multipleSingle'?: string;
    /** 测定结果 */
    'outcome'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 类型：1-住院，2随访 */
    'type'?: string;
  }

  type DetectItemMultipleSingleUpdateDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    /** 所属类型ID */
    'dataId'?: string;
    /** 检测类型: 401-颈部血管彩超检查, 402-锁骨下动脉彩超检查, 403-磁共振血管成像(MRA), 404-磁共振弥散成像（DWI）, 405-CT 血管造影(CTA), 406-CT灌注成像（CTP） */
    'detectType'?: number;
    /** 检测ID */
    'id'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    /** 多个单选结果: k-v（多个以，分割） */
    'multipleSingle'?: string;
    /** 测定结果 */
    'outcome'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 类型：1-住院，2随访 */
    'type'?: string;
  }

  type DetectItemMultipleUpdateDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    /** 所属类型ID */
    'dataId'?: string;
    /** 检测类型: 301-颅脑核磁共振(MRI) */
    'detectType'?: number;
    /** 检测ID */
    'id'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    /** 多选结果:（以，分割） */
    'multiple'?: string;
    /** 测定结果 */
    'outcome'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 类型：1-住院，2随访 */
    'type'?: string;
  }

  type DetectItemOutcomeCreateDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    /** 所属类型ID */
    'dataId'?: string;
    /** 检测类型: 501-24小时心电监测（Holter）, 502-心脏超声, 503-颅脑计算机 X 线体层摄影(CT), 504-磁共振灌注成像(ASL), 505-磁共振(DTI), 506-眼底OCTA, 507-眼底照相; */
    'detectType'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    /** 测定结果 */
    'outcome'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 类型：1-住院，2随访 */
    'type'?: string;
  }

  type DetectItemOutcomeDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    /** 创建时间 */
    'createTime'?: number;
    /** 所属类型ID */
    'dataId'?: string;
    /** 检测类型: 501-24小时心电监测（Holter）, 502-心脏超声, 503-颅脑计算机 X 线体层摄影(CT), 504-磁共振灌注成像(ASL), 505-磁共振(DTI), 506-眼底OCTA, 507-眼底照相; */
    'detectType'?: number;
    /** 检测ID */
    'id'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    /** 测定结果 */
    'outcome'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 类型：1-住院，2随访 */
    'type'?: string;
  }

  type DetectItemOutcomeUpdateDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    /** 所属类型ID */
    'dataId'?: string;
    /** 检测类型: 501-24小时心电监测（Holter）, 502-心脏超声, 503-颅脑计算机 X 线体层摄影(CT), 504-磁共振灌注成像(ASL), 505-磁共振(DTI), 506-眼底OCTA, 507-眼底照相; */
    'detectType'?: number;
    /** 检测ID */
    'id'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    /** 测定结果 */
    'outcome'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 类型：1-住院，2随访 */
    'type'?: string;
  }

  type DetectItemSingleCreateDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    /** 所属类型ID */
    'dataId'?: string;
    /** 检测类型: 201-经颅多普勒检查, 202-颅内血管高分辨磁共振成像(HMR), 203-尿流动力学检查, 204-下肢静脉血管超声 */
    'detectType'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    /** 测定结果 */
    'outcome'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 单选结果 */
    'single'?: number;
    /** 类型：1-住院，2随访 */
    'type'?: string;
  }

  type DetectItemSingleDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    /** 创建时间 */
    'createTime'?: number;
    /** 所属类型ID */
    'dataId'?: string;
    /** 检测类型: 201-经颅多普勒检查, 202-颅内血管高分辨磁共振成像(HMR), 203-尿流动力学检查, 204-下肢静脉血管超声 */
    'detectType'?: number;
    /** 检测ID */
    'id'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    /** 测定结果 */
    'outcome'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 单选结果 */
    'single'?: number;
    /** 类型：1-住院，2随访 */
    'type'?: string;
  }

  type DetectItemSingleUpdateDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    /** 所属类型ID */
    'dataId'?: string;
    /** 检测类型: 201-经颅多普勒检查, 202-颅内血管高分辨磁共振成像(HMR), 203-尿流动力学检查, 204-下肢静脉血管超声 */
    'detectType'?: number;
    /** 检测ID */
    'id'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    /** 测定结果 */
    'outcome'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 单选结果 */
    'single'?: number;
    /** 类型：1-住院，2随访 */
    'type'?: string;
  }

  type DetectItemValueCreateDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    /** 所属类型ID */
    'dataId'?: string;
    /** 检测类型:101-血沉,102-糖化血红蛋白 */
    'detectType'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    /** 测定结果 */
    'outcome'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 类型：1-住院，2随访 */
    'type'?: string;
    /** 测定值 */
    'value'?: number;
  }

  type DetectItemValueDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    /** 创建时间 */
    'createTime'?: number;
    /** 所属类型ID */
    'dataId'?: string;
    /** 检测类型:101-血沉,102-糖化血红蛋白 */
    'detectType'?: number;
    /** 检测ID */
    'id'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    /** 测定结果 */
    'outcome'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 类型：1-住院，2随访 */
    'type'?: string;
    /** 测定值 */
    'value'?: number;
  }

  type DetectItemValueUpdateDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    /** 所属类型ID */
    'dataId'?: string;
    /** 检测类型:101-血沉,102-糖化血红蛋白 */
    'detectType'?: number;
    /** 检测ID */
    'id'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    /** 测定结果 */
    'outcome'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 类型：1-住院，2随访 */
    'type'?: string;
    /** 测定值 */
    'value'?: number;
  }

  type DetectSwiCreateDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    /** 皮层出血病灶数量 */
    'cortex'?: number;
    /** 所属类型ID */
    'dataId'?: string;
    /** 检测图片（以，分割） */
    'images'?: string;
    /** 是否多发微出血灶 */
    'microHemorrhage'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 类型：1-住院，2随访 */
    'type'?: string;
    /** 皮层下出血病灶数量 */
    'underCortex'?: number;
  }

  type DetectSwiDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    /** 皮层出血病灶数量 */
    'cortex'?: number;
    /** 创建时间 */
    'createTime'?: number;
    /** 所属类型ID */
    'dataId'?: string;
    /** 检测ID */
    'id'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    /** 是否多发微出血灶 */
    'microHemorrhage'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 类型：1-住院，2随访 */
    'type'?: string;
    /** 皮层下出血病灶数量 */
    'underCortex'?: number;
  }

  type DetectSwiUpdateDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    /** 皮层出血病灶数量 */
    'cortex'?: number;
    /** 所属类型ID */
    'dataId'?: string;
    /** 检测ID */
    'id'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    /** 是否多发微出血灶 */
    'microHemorrhage'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 类型：1-住院，2随访 */
    'type'?: string;
    /** 皮层下出血病灶数量 */
    'underCortex'?: number;
  }

  type DetectThirteenBloodLipidsCreateDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    /** 所属类型ID */
    'dataId'?: string;
    /** 检测值5 */
    'detectFive'?: number;
    /** 测定结果 */
    'detectFiveOutcome'?: number;
    /** 检测值4 */
    'detectFour'?: number;
    /** 测定结果 */
    'detectFourOutcome'?: number;
    /** 检测值1 */
    'detectOne'?: number;
    /** 测定结果 */
    'detectOneOutcome'?: number;
    /** 检测值7 */
    'detectSeven'?: number;
    /** 测定结果 */
    'detectSevenOutcome'?: number;
    /** 检测值6 */
    'detectSix'?: number;
    /** 测定结果 */
    'detectSixOutcome'?: number;
    /** 检测值3 */
    'detectThree'?: number;
    /** 测定结果 */
    'detectThreeOutcome'?: number;
    /** 检测值3-7 */
    'detectThreeToSeven'?: number;
    /** 测定结果 */
    'detectThreeToSevenOutcome'?: number;
    /** 检测值2 */
    'detectTwo'?: number;
    /** 测定结果 */
    'detectTwoOutcome'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    'ldlcholesterol'?: number;
    'ldlcholesterolOutcome'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 总胆固醇 */
    'totalCholesterol'?: number;
    /** 测定结果 */
    'totalCholesterolOutcome'?: number;
    /** 类型：1-住院，2随访 */
    'type'?: string;
  }

  type DetectThirteenBloodLipidsDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    /** 创建时间 */
    'createTime'?: number;
    /** 所属类型ID */
    'dataId'?: string;
    /** 检测值5 */
    'detectFive'?: number;
    /** 测定结果 */
    'detectFiveOutcome'?: number;
    /** 检测值4 */
    'detectFour'?: number;
    /** 测定结果 */
    'detectFourOutcome'?: number;
    /** 检测值1 */
    'detectOne'?: number;
    /** 测定结果 */
    'detectOneOutcome'?: number;
    /** 检测值7 */
    'detectSeven'?: number;
    /** 测定结果 */
    'detectSevenOutcome'?: number;
    /** 检测值6 */
    'detectSix'?: number;
    /** 测定结果 */
    'detectSixOutcome'?: number;
    /** 检测值3 */
    'detectThree'?: number;
    /** 测定结果 */
    'detectThreeOutcome'?: number;
    /** 检测值3-7 */
    'detectThreeToSeven'?: number;
    /** 测定结果 */
    'detectThreeToSevenOutcome'?: number;
    /** 检测值2 */
    'detectTwo'?: number;
    /** 测定结果 */
    'detectTwoOutcome'?: number;
    /** 血脂十三项ID */
    'id'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    'ldlcholesterol'?: number;
    'ldlcholesterolOutcome'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 总胆固醇 */
    'totalCholesterol'?: number;
    /** 测定结果 */
    'totalCholesterolOutcome'?: number;
    /** 类型：1-住院，2随访 */
    'type'?: string;
  }

  type DetectThirteenBloodLipidsUpdateDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    /** 所属类型ID */
    'dataId'?: string;
    /** 检测值5 */
    'detectFive'?: number;
    /** 测定结果 */
    'detectFiveOutcome'?: number;
    /** 检测值4 */
    'detectFour'?: number;
    /** 测定结果 */
    'detectFourOutcome'?: number;
    /** 检测值1 */
    'detectOne'?: number;
    /** 测定结果 */
    'detectOneOutcome'?: number;
    /** 检测值7 */
    'detectSeven'?: number;
    /** 测定结果 */
    'detectSevenOutcome'?: number;
    /** 检测值6 */
    'detectSix'?: number;
    /** 测定结果 */
    'detectSixOutcome'?: number;
    /** 检测值3 */
    'detectThree'?: number;
    /** 测定结果 */
    'detectThreeOutcome'?: number;
    /** 检测值3-7 */
    'detectThreeToSeven'?: number;
    /** 测定结果 */
    'detectThreeToSevenOutcome'?: number;
    /** 检测值2 */
    'detectTwo'?: number;
    /** 测定结果 */
    'detectTwoOutcome'?: number;
    /** 血脂十三项ID */
    'id'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    'ldlcholesterol'?: number;
    'ldlcholesterolOutcome'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 总胆固醇 */
    'totalCholesterol'?: number;
    /** 测定结果 */
    'totalCholesterolOutcome'?: number;
    /** 类型：1-住院，2随访 */
    'type'?: string;
  }

  type DetectThyroidFunctionCreateDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    /** 所属类型ID */
    'dataId'?: string;
    /** 游离T3测定值 */
    'freeT3'?: number;
    /** 测定结果 */
    'freeT3Outcome'?: number;
    /** 游离T4测定值 */
    'freeT4'?: number;
    /** 测定结果 */
    'freeT4Outcome'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    /** 患者ID */
    'patientId'?: string;
    /** 甲状腺过氧化物酶抗体测定值 */
    'peroxidaseAntibody'?: number;
    /** 测定结果 */
    'peroxidaseAntibodyOutcome'?: number;
    /** 促甲状腺激素测定值 */
    'thyrotropin'?: number;
    /** 量测定结果 */
    'thyrotropinOutcome'?: number;
    /** 类型：1-住院，2随访 */
    'type'?: string;
  }

  type DetectThyroidFunctionDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    /** 创建时间 */
    'createTime'?: number;
    /** 所属类型ID */
    'dataId'?: string;
    /** 游离T3测定值 */
    'freeT3'?: number;
    /** 测定结果 */
    'freeT3Outcome'?: number;
    /** 游离T4测定值 */
    'freeT4'?: number;
    /** 测定结果 */
    'freeT4Outcome'?: number;
    /** 甲状腺功能ID */
    'id'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    /** 患者ID */
    'patientId'?: string;
    /** 甲状腺过氧化物酶抗体测定值 */
    'peroxidaseAntibody'?: number;
    /** 测定结果 */
    'peroxidaseAntibodyOutcome'?: number;
    /** 促甲状腺激素测定值 */
    'thyrotropin'?: number;
    /** 量测定结果 */
    'thyrotropinOutcome'?: number;
    /** 类型：1-住院，2随访 */
    'type'?: string;
  }

  type DetectThyroidFunctionUpdateDTO = {
    /** 检查时间 */
    'checkTime'?: string;
    /** 所属类型ID */
    'dataId'?: string;
    /** 游离T3测定值 */
    'freeT3'?: number;
    /** 测定结果 */
    'freeT3Outcome'?: number;
    /** 游离T4测定值 */
    'freeT4'?: number;
    /** 测定结果 */
    'freeT4Outcome'?: number;
    /** 甲状腺功能ID */
    'id'?: number;
    /** 检测图片（以，分割） */
    'images'?: string;
    /** 患者ID */
    'patientId'?: string;
    /** 甲状腺过氧化物酶抗体测定值 */
    'peroxidaseAntibody'?: number;
    /** 测定结果 */
    'peroxidaseAntibodyOutcome'?: number;
    /** 促甲状腺激素测定值 */
    'thyrotropin'?: number;
    /** 量测定结果 */
    'thyrotropinOutcome'?: number;
    /** 类型：1-住院，2随访 */
    'type'?: string;
  }

  type FollowupCheckBodyCreateDTO = {
    /** 查体指标 */
    'bodyIndex': CheckBodyIndexSaveDTO;
    /** 随访ID */
    'followupRecordsId': string;
    /** 患者ID */
    'patientId': string;
  }

  type FollowupCheckBodyDTO = {
    /** 查体指标 */
    'bodyIndexDTO'?: CheckBodyIndexDTO;
    /** 查体指标ID */
    'checkBodyIndexId'?: number;
    /** 创建时间 */
    'createTime'?: number;
    /** 随访ID */
    'followupRecordsId'?: string;
    /** 查体ID */
    'id'?: number;
    /** 患者ID */
    'patientId'?: string;
  }

  type FollowupCheckBodyUpdateDTO = {
    /** 查体指标 */
    'bodyIndex': CheckBodyIndexSaveDTO;
    /** 查体指标ID */
    'checkBodyIndexId': number;
    /** 随访ID */
    'followupRecordsId': string;
    /** 查体ID */
    'id': number;
    /** 患者ID */
    'patientId': string;
  }

  type FollowupDrugRecordDTO = {
    /** 创建时间 */
    'createTime'?: number;
    /** 描述 */
    'description'?: string;
    /** 服药类型及药物 */
    'drugTypeDTOList'?: FollowupDrugTypeDTO[];
    /** 是否坚持服药 */
    'eatDrug'?: number;
    /** 随访ID */
    'followupRecordsId'?: string;
    /** 患者ID */
    'patientId'?: string;
  }

  type FollowupDrugRecordSaveDTO = {
    /** 描述 */
    'description'?: string;
    /** 服药类型及药物 */
    'drugTypeDTOList'?: FollowupDrugTypeDTO[];
    /** 是否坚持服药 */
    'eatDrug': number;
    /** 随访ID */
    'followupRecordsId': string;
    /** 患者ID */
    'patientId': string;
  }

  type FollowupDrugTypeDTO = {
    /** 服用药物(以,分割) */
    'eatDrugText'?: string;
    /** 服药类型 */
    'eatDrugType'?: number;
  }

  type FollowupOnsetRecordDTO = {
    /** 创建时间 */
    'createTime'?: number;
    /** 描述 */
    'description'?: string;
    /** 随访ID */
    'followupRecordsId'?: string;
    /** 发病类型集合 */
    'onsetTypeDTOList'?: FollowupOnsetTypeDTO[];
    /** 患者ID */
    'patientId'?: string;
    /** 是否进行血管相关操作及手术 */
    'vascularRelatedSurgery'?: number;
    /** 血管相关操作及手术次数 */
    'vascularRelatedSurgeryNum'?: number;
  }

  type FollowupOnsetRecordSaveDTO = {
    /** 描述 */
    'description'?: string;
    /** 随访ID */
    'followupRecordsId': string;
    /** 发病类型集合 */
    'onsetTypeDTOList'?: FollowupOnsetTypeDTO[];
    /** 患者ID */
    'patientId': string;
    /** 是否进行血管相关操作及手术 */
    'vascularRelatedSurgery': number;
    /** 血管相关操作及手术次数 */
    'vascularRelatedSurgeryNum'?: number;
  }

  type FollowupOnsetTypeDTO = {
    /** 复发次数 */
    'relapseNum'?: number;
    /** 复发状态 */
    'relapseStatus'?: number;
    /** 复发描述 */
    'relapseText'?: string;
    /** 复发第几次描述 */
    'relapseTextNum'?: number;
    /** 首次复发时间 */
    'relapseTime'?: number;
    /** 复发类型 */
    'type'?: number;
  }

  type FollowupRecordsConditionDTO = {
    /** 是否死亡 */
    'dead'?: number;
    /** 删除状态 */
    'deleted': number;
    /** 住院记录ID */
    'hospitalRecordsId'?: string;
    /** 患者ID */
    'patientId'?: string;
    /** 性别 */
    'sex'?: number;
    /** 姓名 */
    'userName'?: string;
  }

  type FollowupRecordsCreateDTO = {
    /** 随访时居住地 */
    'address'?: string;
    /** 死亡原因 */
    'causeOfDeath'?: string;
    /** 城市 */
    'city'?: string;
    /** 随访周期 */
    'cycle'?: number;
    /** 随访周期是否浮动14天 */
    'cycleFloat'?: number;
    /** 随访周期单位:1-月,2-年 */
    'cycleUnit'?: number;
    /** 是否死亡 */
    'dead'?: number;
    /** 死亡时间 */
    'deadTime'?: number;
    /** 描述 */
    'description'?: string;
    /** 是否到院随访:0-否,1-是 */
    'followupType'?: number;
    /** 住院记录ID */
    'hospitalRecordsId': string;
    /** 居住状况 */
    'livingStatus'?: number;
    /** 患者ID */
    'patientId': string;
  }

  type FollowupRecordsDTO = {
    /** 随访时居住地 */
    'address'?: string;
    /** 死亡原因 */
    'causeOfDeath'?: string;
    /** 城市 */
    'city'?: string;
    /** 创建时间 */
    'createTime'?: number;
    /** 随访周期 */
    'cycle'?: number;
    /** 随访周期是否浮动14天 */
    'cycleFloat'?: number;
    /** 随访周期单位:1-月,2-年 */
    'cycleUnit'?: number;
    /** 是否死亡 */
    'dead'?: number;
    /** 死亡时间 */
    'deadTime'?: number;
    /** 删除状态 */
    'deleted'?: number;
    /** 描述 */
    'description'?: string;
    /** 是否到院随访:0-否,1-是 */
    'followupType'?: number;
    /** 住院记录ID */
    'hospitalRecordsId'?: string;
    /** 随访ID */
    'id'?: number;
    /** 居住状况 */
    'livingStatus'?: number;
    /** 患者信息 */
    'patient'?: PatientDTO;
    /** 患者ID */
    'patientId'?: string;
    /** 修改时间 */
    'updateTime'?: number;
  }

  type FollowupRecordsUpdateDTO = {
    /** 随访时居住地 */
    'address'?: string;
    /** 死亡原因 */
    'causeOfDeath'?: string;
    /** 城市 */
    'city'?: string;
    /** 随访周期 */
    'cycle'?: number;
    /** 随访周期是否浮动14天 */
    'cycleFloat'?: number;
    /** 随访周期单位:1-月,2-年 */
    'cycleUnit'?: number;
    /** 是否死亡 */
    'dead'?: number;
    /** 死亡时间 */
    'deadTime'?: number;
    /** 描述 */
    'description'?: string;
    /** 是否到院随访:0-否,1-是 */
    'followupType'?: number;
    /** 住院记录ID */
    'hospitalRecordsId': string;
    /** 随访ID */
    'id': number;
    /** 居住状况 */
    'livingStatus'?: number;
    /** 患者ID */
    'patientId': string;
  }

  type FollowupVascularEventRecordCreateDTO = {
    /** 是否有不良脑血管事件 */
    'cerebrovascularEvent'?: number;
    /** 描述 */
    'description'?: string;
    /** 测评指标 */
    'evaluationIndexDTO'?: CheckEvaluationIndexSaveDTO;
    /** 随访ID */
    'followupRecordsId': string;
    /** 患者ID */
    'patientId': string;
    /** TOAST可能性：1-无法确定病因，2-隐源性脑栓塞，3-其他隐源性，4-难分类病因(以,分割) */
    'possibility'?: string;
    'toast'?: string;
  }

  type FollowupVascularEventRecordDTO = {
    /** 是否有不良脑血管事件 */
    'cerebrovascularEvent'?: number;
    /** 测评指标ID */
    'checkEvaluationIndexId'?: number;
    /** 创建时间 */
    'createTime'?: number;
    /** 描述 */
    'description'?: string;
    /** 测评指标 */
    'evaluationIndex'?: CheckEvaluationIndexDTO;
    /** 随访ID */
    'followupRecordsId'?: string;
    /** 血管事件测评记录ID */
    'id'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** TOAST可能性：1-无法确定病因，2-隐源性脑栓塞，3-其他隐源性，4-难分类病因(以,分割) */
    'possibility'?: string;
    'toast'?: string;
  }

  type FollowupVascularEventRecordUpdateDTO = {
    /** 是否有不良脑血管事件 */
    'cerebrovascularEvent'?: number;
    /** 测评指标ID */
    'checkEvaluationIndexId'?: number;
    /** 描述 */
    'description'?: string;
    /** 测评指标 */
    'evaluationIndex'?: CheckEvaluationIndexSaveDTO;
    /** 随访ID */
    'followupRecordsId': string;
    /** 血管事件测评记录ID */
    'id': number;
    /** 患者ID */
    'patientId': string;
    /** TOAST可能性：1-无法确定病因，2-隐源性脑栓塞，3-其他隐源性，4-难分类病因(以,分割) */
    'possibility'?: string;
    'toast'?: string;
  }

  type HospitalCheckBodyCreateDTO = {
    /** 查体指标 */
    'bodyIndex'?: CheckBodyIndexSaveDTO;
    /** 描述 */
    'description'?: string;
    /** 出院时间 */
    'dischargeTime'?: number;
    /** 测评指标 */
    'evaluationIndex'?: CheckEvaluationIndexSaveDTO;
    /** 病历ID */
    'hospitalRecordsId'?: string;
    /** 患者ID */
    'patientId'?: string;
    /** 卒中教育 */
    'strokeEducation'?: string;
    /** 是否存活 */
    'survive'?: number;
    /** 查体类型：1-入院查体，2-出院查体 */
    'type'?: number;
  }

  type HospitalCheckBodyDTO = {
    /** 查体指标 */
    'bodyIndex'?: CheckBodyIndexDTO;
    /** 查体指标ID */
    'checkBodyIndexId'?: number;
    /** 测评指标ID */
    'checkEvaluationIndexId'?: number;
    /** 创建时间 */
    'createTime'?: number;
    /** 描述 */
    'description'?: string;
    /** 出院时间 */
    'dischargeTime'?: number;
    /** 测评指标 */
    'evaluationIndex'?: CheckEvaluationIndexDTO;
    /** 病历ID */
    'hospitalRecordsId'?: string;
    /** 查体ID */
    'id'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 卒中教育 */
    'strokeEducation'?: string;
    /** 是否存活 */
    'survive'?: number;
    /** 查体类型：1-入院查体，2-出院查体 */
    'type'?: number;
  }

  type HospitalCheckBodyUpdateDTO = {
    /** 查体指标 */
    'bodyIndex'?: CheckBodyIndexSaveDTO;
    /** 查体指标ID */
    'checkBodyIndexId'?: number;
    /** 测评指标ID */
    'checkEvaluationIndexId'?: number;
    /** 描述 */
    'description'?: string;
    /** 出院时间 */
    'dischargeTime'?: number;
    /** 测评指标 */
    'evaluationIndex'?: CheckEvaluationIndexSaveDTO;
    /** 病历ID */
    'hospitalRecordsId'?: string;
    /** 查体ID */
    'id'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 卒中教育 */
    'strokeEducation'?: string;
    /** 是否存活 */
    'survive'?: number;
    /** 查体类型：1-入院查体，2-出院查体 */
    'type'?: number;
  }

  type HospitalDiagnosticRecordsConditionDTO = {
    /** 心绞痛 */
    'angina'?: number;
    /** 房颤：0-未选，1-肯定，2-可能 */
    'atrialFibrillation'?: number;
    /** 脑小血管病：0-未选，1-肯定，2-可能 */
    'cerebralCerebrovascularDisease'?: number;
    /** 脑出血：0-未选，1-肯定，2-可能 */
    'cerebralHaemorrhage'?: number;
    /** 脑梗死：0-未选，1-肯定，2-可能 */
    'cerebralInfarction'?: number;
    /** 脑梗死TOAST：1-大动脉粥样硬化型，2-小动脉病变型，3-心源性，4-其他原因，5-原因不明 */
    'cerebralInfarctionTOASTList'?: string[];
    /** 颈动脉狭窄：0-未选，1-肯定，2-可能 */
    'cervicalArteryStenosis'?: number;
    /** 慢性阻塞性肺疾病：0-未选，1-肯定，2-可能 */
    'chronicObstructivePulmonaryDisease'?: number;
    /** 蛛网膜下腔出血 */
    'cobwebSubcavityBleeding'?: number;
    /** 冠心病：0-未选，1-肯定，2-可能 */
    'coronaryHeartDisease'?: number;
    /** 糖尿病：0-未选，1-肯定，2-可能 */
    'diabetes'?: number;
    /** 同型半胱氨酸血症：0-未选，1-肯定，2-可能 */
    'homocysteineemia'?: number;
    /** 高脂血症：0-未选，1-肯定，2-可能 */
    'hyperlipidemia'?: number;
    /** 高血压：0-未选，1-肯定，2-可能 */
    'hypertension'?: number;
    /** 高尿酸血症：0-未选，1-肯定，2-可能 */
    'hyperuricAcidemia'?: number;
    /** 颅内动脉狭窄：0-未选，1-肯定，2-可能 */
    'intracranialArteryStenosis'?: number;
    /** 下肢动脉病变 */
    'lowerLimbArtery'?: number;
    /** 下肢深静脉血栓 */
    'lowerLimbVeins'?: number;
    /** 肺部感染 */
    'lungInfections'?: number;
    /** 心肌梗死 */
    'myocardialInfarction'?: number;
    /** 进展性脑卒中 */
    'progressiveStroke'?: number;
    /** 应激性溃疡 */
    'stressUlcers'?: number;
    /** 体查类型:1-入院，2-出院 */
    'type': number;
    /** 泌尿系感染 */
    'urinaryTractInfection'?: number;
    /** 血管性认知障碍：0-未选，1-肯定，2-可能 */
    'vascularCognitiveImpairment'?: number;
    /** 椎动脉狭窄：0-未选，1-肯定，2-可能 */
    'vertebralArteryStenosis'?: number;
  }

  type HospitalDiagnosticRecordsCreateDTO = {
    /** 心绞痛 */
    'angina'?: number;
    /** 房颤：0-未选，1-肯定，2-可能 */
    'atrialFibrillation'?: number;
    /** 脑小血管病：0-未选，1-肯定，2-可能 */
    'cerebralCerebrovascularDisease'?: number;
    /** 脑出血：0-未选，1-肯定，2-可能 */
    'cerebralHaemorrhage'?: number;
    /** 脑梗死：0-未选，1-肯定，2-可能 */
    'cerebralInfarction'?: number;
    /** 脑梗死TOAST可能性：1-无法确定病因，2-隐源性脑栓塞，3-其他隐源性，4-难分类病因(以,分割) */
    'cerebralInfarctionPossibility'?: string;
    /** 脑梗死TOAST：1-大动脉粥样硬化型，2-小动脉病变型，3-心源性，4-其他原因，5-原因不明(以,分割) */
    'cerebralInfarctionTOAST'?: string;
    /** 颈动脉狭窄：0-未选，1-肯定，2-可能 */
    'cervicalArteryStenosis'?: number;
    /** 慢性阻塞性肺疾病：0-未选，1-肯定，2-可能 */
    'chronicObstructivePulmonaryDisease'?: number;
    /** 蛛网膜下腔出血 */
    'cobwebSubcavityBleeding'?: number;
    /** 冠心病：0-未选，1-肯定，2-可能 */
    'coronaryHeartDisease'?: number;
    'description'?: string;
    /** 糖尿病：0-未选，1-肯定，2-可能 */
    'diabetes'?: number;
    /** 同型半胱氨酸血症：0-未选，1-肯定，2-可能 */
    'homocysteineemia'?: number;
    /** 病历ID */
    'hospitalRecordsId'?: string;
    /** 高脂血症：0-未选，1-肯定，2-可能 */
    'hyperlipidemia'?: number;
    /** 高血压：0-未选，1-肯定，2-可能 */
    'hypertension'?: number;
    /** 高尿酸血症：0-未选，1-肯定，2-可能 */
    'hyperuricAcidemia'?: number;
    /** 颅内动脉狭窄：0-未选，1-肯定，2-可能 */
    'intracranialArteryStenosis'?: number;
    /** 下肢动脉病变 */
    'lowerLimbArtery'?: number;
    /** 下肢深静脉血栓 */
    'lowerLimbVeins'?: number;
    /** 肺部感染 */
    'lungInfections'?: number;
    /** 心肌梗死 */
    'myocardialInfarction'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 进展性脑卒中 */
    'progressiveStroke'?: number;
    /** 应激性溃疡 */
    'stressUlcers'?: number;
    /** 体查类型:1-入院，2-出院 */
    'type'?: number;
    /** 泌尿系感染 */
    'urinaryTractInfection'?: number;
    /** 血管性认知障碍：0-未选，1-肯定，2-可能 */
    'vascularCognitiveImpairment'?: number;
    /** 椎动脉狭窄：0-未选，1-肯定，2-可能 */
    'vertebralArteryStenosis'?: number;
  }

  type HospitalDiagnosticRecordsDTO = {
    /** 心绞痛 */
    'angina'?: number;
    /** 房颤：0-未选，1-肯定，2-可能 */
    'atrialFibrillation'?: number;
    /** 脑小血管病：0-未选，1-肯定，2-可能 */
    'cerebralCerebrovascularDisease'?: number;
    /** 脑出血：0-未选，1-肯定，2-可能 */
    'cerebralHaemorrhage'?: number;
    /** 脑梗死：0-未选，1-肯定，2-可能 */
    'cerebralInfarction'?: number;
    /** 脑梗死TOAST可能性：1-无法确定病因，2-隐源性脑栓塞，3-其他隐源性，4-难分类病因(以,分割) */
    'cerebralInfarctionPossibility'?: string;
    /** 脑梗死TOAST：1-大动脉粥样硬化型，2-小动脉病变型，3-心源性，4-其他原因，5-原因不明(以,分割) */
    'cerebralInfarctionTOAST'?: string;
    /** 颈动脉狭窄：0-未选，1-肯定，2-可能 */
    'cervicalArteryStenosis'?: number;
    /** 慢性阻塞性肺疾病：0-未选，1-肯定，2-可能 */
    'chronicObstructivePulmonaryDisease'?: number;
    /** 蛛网膜下腔出血 */
    'cobwebSubcavityBleeding'?: number;
    /** 冠心病：0-未选，1-肯定，2-可能 */
    'coronaryHeartDisease'?: number;
    'createTime'?: number;
    'description'?: string;
    /** 糖尿病：0-未选，1-肯定，2-可能 */
    'diabetes'?: number;
    /** 同型半胱氨酸血症：0-未选，1-肯定，2-可能 */
    'homocysteineemia'?: number;
    /** 病历ID */
    'hospitalRecordsId'?: string;
    /** 高脂血症：0-未选，1-肯定，2-可能 */
    'hyperlipidemia'?: number;
    /** 高血压：0-未选，1-肯定，2-可能 */
    'hypertension'?: number;
    /** 高尿酸血症：0-未选，1-肯定，2-可能 */
    'hyperuricAcidemia'?: number;
    /** 诊断记录ID */
    'id'?: number;
    /** 颅内动脉狭窄：0-未选，1-肯定，2-可能 */
    'intracranialArteryStenosis'?: number;
    /** 下肢动脉病变 */
    'lowerLimbArtery'?: number;
    /** 下肢深静脉血栓 */
    'lowerLimbVeins'?: number;
    /** 肺部感染 */
    'lungInfections'?: number;
    /** 心肌梗死 */
    'myocardialInfarction'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 进展性脑卒中 */
    'progressiveStroke'?: number;
    /** 应激性溃疡 */
    'stressUlcers'?: number;
    /** 体查类型:1-入院，2-出院 */
    'type'?: number;
    /** 泌尿系感染 */
    'urinaryTractInfection'?: number;
    /** 血管性认知障碍：0-未选，1-肯定，2-可能 */
    'vascularCognitiveImpairment'?: number;
    /** 椎动脉狭窄：0-未选，1-肯定，2-可能 */
    'vertebralArteryStenosis'?: number;
  }

  type HospitalDiagnosticRecordsUpdateDTO = {
    /** 心绞痛 */
    'angina'?: number;
    /** 房颤：0-未选，1-肯定，2-可能 */
    'atrialFibrillation'?: number;
    /** 脑小血管病：0-未选，1-肯定，2-可能 */
    'cerebralCerebrovascularDisease'?: number;
    /** 脑出血：0-未选，1-肯定，2-可能 */
    'cerebralHaemorrhage'?: number;
    /** 脑梗死：0-未选，1-肯定，2-可能 */
    'cerebralInfarction'?: number;
    /** 脑梗死TOAST可能性：1-无法确定病因，2-隐源性脑栓塞，3-其他隐源性，4-难分类病因(以,分割) */
    'cerebralInfarctionPossibility'?: string;
    /** 脑梗死TOAST：1-大动脉粥样硬化型，2-小动脉病变型，3-心源性，4-其他原因，5-原因不明(以,分割) */
    'cerebralInfarctionTOAST'?: string;
    /** 颈动脉狭窄：0-未选，1-肯定，2-可能 */
    'cervicalArteryStenosis'?: number;
    /** 慢性阻塞性肺疾病：0-未选，1-肯定，2-可能 */
    'chronicObstructivePulmonaryDisease'?: number;
    /** 蛛网膜下腔出血 */
    'cobwebSubcavityBleeding'?: number;
    /** 冠心病：0-未选，1-肯定，2-可能 */
    'coronaryHeartDisease'?: number;
    'description'?: string;
    /** 糖尿病：0-未选，1-肯定，2-可能 */
    'diabetes'?: number;
    /** 同型半胱氨酸血症：0-未选，1-肯定，2-可能 */
    'homocysteineemia'?: number;
    /** 高脂血症：0-未选，1-肯定，2-可能 */
    'hyperlipidemia'?: number;
    /** 高血压：0-未选，1-肯定，2-可能 */
    'hypertension'?: number;
    /** 高尿酸血症：0-未选，1-肯定，2-可能 */
    'hyperuricAcidemia'?: number;
    /** 诊断记录ID */
    'id'?: number;
    /** 颅内动脉狭窄：0-未选，1-肯定，2-可能 */
    'intracranialArteryStenosis'?: number;
    /** 下肢动脉病变 */
    'lowerLimbArtery'?: number;
    /** 下肢深静脉血栓 */
    'lowerLimbVeins'?: number;
    /** 肺部感染 */
    'lungInfections'?: number;
    /** 心肌梗死 */
    'myocardialInfarction'?: number;
    /** 进展性脑卒中 */
    'progressiveStroke'?: number;
    /** 应激性溃疡 */
    'stressUlcers'?: number;
    /** 泌尿系感染 */
    'urinaryTractInfection'?: number;
    /** 血管性认知障碍：0-未选，1-肯定，2-可能 */
    'vascularCognitiveImpairment'?: number;
    /** 椎动脉狭窄：0-未选，1-肯定，2-可能 */
    'vertebralArteryStenosis'?: number;
  }

  type HospitalFollowupDTO = {
    /** 年龄 */
    'age'?: number;
    /** 是否死亡 */
    'dead'?: number;
    /** 随访记录 */
    'followupCount'?: number;
    /** 电子病历ID */
    'id'?: string;
    /** 患者ID */
    'patientId'?: string;
    /** 性别 */
    'sex'?: number;
    /** 姓名 */
    'userName'?: string;
  }

  type HospitalRecordsConditionDTO = {
    /** 删除状态 */
    'deleted': number;
    /** 出院时间 */
    'endDischargeTime'?: number;
    /** 住院时间 */
    'endHospitalizationTime'?: number;
    /** 电子病历ID */
    'id'?: string;
    /** 民族 */
    'nation'?: string;
    /** 患者ID */
    'patientId'?: string;
    /** 性别 */
    'sex'?: number;
    /** 出院时间 */
    'startDischargeTime'?: number;
    /** 住院时间 */
    'startHospitalizationTime'?: number;
    /** 状态：1-住院中，2-已出院 */
    'status'?: number;
    /** 姓名 */
    'userName'?: string;
  }

  type HospitalRecordsCreateDTO = {
    /** 描述 */
    'description'?: string;
    /** 住院时间 */
    'hospitalizationTime'?: number;
    /** 发病时间 */
    'onsetTime'?: number;
    /** 患者ID */
    'patientId': string;
    /** 状态：1-住院中，2-已出院 */
    'status'?: number;
    /** 到院时间 */
    'toHospitalTime'?: number;
  }

  type HospitalRecordsDTO = {
    /** 住址 */
    'address'?: string;
    /** 年龄 */
    'age'?: number;
    /** 城市 */
    'city'?: string;
    /** 创建时间 */
    'createTime'?: number;
    /** 删除状态 */
    'deleted'?: number;
    /** 描述 */
    'description'?: string;
    /** 出院时间 */
    'dischargeTime'?: number;
    /** 文化程度 */
    'educationDegree'?: number;
    /** 住院时间 */
    'hospitalizationTime'?: number;
    /** 电子病历ID */
    'id'?: string;
    'idcard'?: string;
    /** 月收入 */
    'income'?: number;
    /** 职业 */
    'job'?: string;
    /** 居住状况 */
    'livingStatus'?: number;
    /** 婚姻状况 */
    'maritalStatus'?: number;
    /** 医保类型 */
    'medicalInsuranceType'?: number;
    /** 民族 */
    'nation'?: string;
    /** 发病时间 */
    'onsetTime'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 电话号 */
    'phoneNumber'?: string;
    /** 性别 */
    'sex'?: number;
    /** 状态：1-住院中，2-已出院 */
    'status'?: number;
    /** 到院时间 */
    'toHospitalTime'?: number;
    /** 修改时间 */
    'updateTime'?: number;
    /** 姓名 */
    'userName'?: string;
  }

  type HospitalRecordsUpdateDTO = {
    /** 删除状态 */
    'deleted': number;
    /** 描述 */
    'description'?: string;
    /** 出院时间 */
    'dischargeTime'?: number;
    /** 住院时间 */
    'hospitalizationTime'?: number;
    /** 电子病历ID */
    'id': string;
    /** 发病时间 */
    'onsetTime'?: number;
    /** 患者ID */
    'patientId': string;
    /** 状态：1-住院中，2-已出院 */
    'status'?: number;
    /** 到院时间 */
    'toHospitalTime'?: number;
  }

  type HospitalTreatmentRecordsConditionDTO = {
    /** 入院后是否给予抗凝治疗 */
    'anticoagulant'?: number;
    /** 抗凝药物名称 */
    'anticoagulantDrugsList'?: string[];
    /** 入院后是否给予抗血小板治疗 */
    'antiplatelets'?: number;
    /** 抗血小板药物名称 */
    'antiplateletsDrugsList'?: string[];
    /** 是否留置胃管 */
    'gastricTube'?: number;
    /** 入院后是否调脂治疗 */
    'lipid'?: number;
    /** 入院后是否强化调脂 */
    'lipidStrengthen'?: number;
    /** 是否进行深静脉血栓预防 */
    'thrombosisPrevention'?: number;
    /** 预防种类和措施 */
    'thrombosisPreventionTypesList'?: string[];
    /** 是否留置尿管 */
    'ureter'?: number;
    /** 入院 48 小时内患者能否行走 */
    'walk'?: number;
  }

  type HospitalTreatmentRecordsCreateDTO = {
    /** 入院后是否给予抗凝治疗 */
    'anticoagulant'?: number;
    /** 抗凝药物名称 */
    'anticoagulantDrugs'?: string;
    /** 入院后是否给予抗血小板治疗 */
    'antiplatelets'?: number;
    /** 抗血小板药物名称 */
    'antiplateletsDrugs'?: string;
    /** 描述 */
    'description'?: string;
    /** 是否留置胃管 */
    'gastricTube'?: number;
    /** 住院记录ID */
    'hospitalRecordsId'?: string;
    /** 入院后是否调脂治疗 */
    'lipid'?: number;
    /** 调脂药物名称 */
    'lipidDrugs'?: string;
    /** 入院后是否强化调脂 */
    'lipidStrengthen'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 吞咽功能评价 */
    'swallowingFunction'?: string;
    /** 是否进行深静脉血栓预防 */
    'thrombosisPrevention'?: number;
    /** 预防种类和措施 */
    'thrombosisPreventionTypes'?: string;
    /** 是否留置尿管 */
    'ureter'?: number;
    /** 入院 48 小时内患者能否行走 */
    'walk'?: number;
  }

  type HospitalTreatmentRecordsDTO = {
    /** 入院后是否给予抗凝治疗 */
    'anticoagulant'?: number;
    /** 抗凝药物名称 */
    'anticoagulantDrugs'?: string;
    /** 入院后是否给予抗血小板治疗 */
    'antiplatelets'?: number;
    /** 抗血小板药物名称 */
    'antiplateletsDrugs'?: string;
    /** 创建时间 */
    'createTime'?: number;
    /** 描述 */
    'description'?: string;
    /** 是否留置胃管 */
    'gastricTube'?: number;
    /** 住院记录ID */
    'hospitalRecordsId'?: string;
    /** 治疗记录ID */
    'id'?: number;
    /** 入院后是否调脂治疗 */
    'lipid'?: number;
    /** 调脂药物名称 */
    'lipidDrugs'?: string;
    /** 入院后是否强化调脂 */
    'lipidStrengthen'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 吞咽功能评价 */
    'swallowingFunction'?: string;
    /** 是否进行深静脉血栓预防 */
    'thrombosisPrevention'?: number;
    /** 预防种类和措施 */
    'thrombosisPreventionTypes'?: string;
    /** 是否留置尿管 */
    'ureter'?: number;
    /** 入院 48 小时内患者能否行走 */
    'walk'?: number;
  }

  type HospitalTreatmentRecordsUpdateDTO = {
    /** 入院后是否给予抗凝治疗 */
    'anticoagulant'?: number;
    /** 抗凝药物名称 */
    'anticoagulantDrugs'?: string;
    /** 入院后是否给予抗血小板治疗 */
    'antiplatelets'?: number;
    /** 抗血小板药物名称 */
    'antiplateletsDrugs'?: string;
    /** 描述 */
    'description'?: string;
    /** 是否留置胃管 */
    'gastricTube'?: number;
    /** 住院记录ID */
    'hospitalRecordsId'?: string;
    /** 治疗记录ID */
    'id'?: number;
    /** 入院后是否调脂治疗 */
    'lipid'?: number;
    /** 调脂药物名称 */
    'lipidDrugs'?: string;
    /** 入院后是否强化调脂 */
    'lipidStrengthen'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 吞咽功能评价 */
    'swallowingFunction'?: string;
    /** 是否进行深静脉血栓预防 */
    'thrombosisPrevention'?: number;
    /** 预防种类和措施 */
    'thrombosisPreventionTypes'?: string;
    /** 是否留置尿管 */
    'ureter'?: number;
    /** 入院 48 小时内患者能否行走 */
    'walk'?: number;
  }

  type HospitalVascularCreateDTO = {
    /** 描述 */
    'description'?: string;
    /** 血管事件集合 */
    'eventList'?: HospitalVascularEventSaveDTO[];
    /** 病历ID */
    'hospitalRecordsId': string;
    /** 患者ID */
    'patientId': string;
  }

  type HospitalVascularDTO = {
    /** 创建时间 */
    'createTime'?: number;
    /** 描述 */
    'description'?: string;
    /** 血管事件集合 */
    'eventList'?: HospitalVascularEventDTO[];
    /** 病历ID */
    'hospitalRecordsId'?: string;
    /** 血管事件记录ID */
    'id'?: number;
    /** 患者ID */
    'patientId'?: string;
  }

  type HospitalVascularEventDTO = {
    /** 事件类型： */
    'eventType'?: number;
    /** 血管事件记录ID */
    'hospitalVascularId'?: number;
    /** 血管事件ID */
    'id'?: number;
    /** 发病时间(以，分割) */
    'onsetTimes'?: string;
  }

  type HospitalVascularEventSaveDTO = {
    /** 事件类型： */
    'eventType'?: number;
    /** 发病时间(以，分割) */
    'onsetTimes'?: string;
  }

  type HospitalVascularUpdateDTO = {
    /** 描述 */
    'description'?: string;
    /** 血管事件集合 */
    'eventList'?: HospitalVascularEventSaveDTO[];
    /** 病历ID */
    'hospitalRecordsId': string;
    /** 血管事件记录ID */
    'id': number;
    /** 患者ID */
    'patientId': string;
  }

  type MedicationDrugRecordDTO = {
    /** 剂量 */
    'dosage'?: string;
    /** 药物 */
    'drug'?: string;
    /** 药物类型 */
    'drugType'?: number;
    /** 使用频次 */
    'frequency'?: string;
    /** 药品ID */
    'id'?: number;
    /** 服药记录ID */
    'medicationRecordId'?: number;
    /** 是否为医嘱药物 */
    'ordersDrug'?: number;
  }

  type MedicationRecordDTO = {
    /** 创建时间 */
    'createTime'?: number;
    /** 所属类型ID */
    'dataId'?: string;
    /** 描述 */
    'description'?: string;
    /** 药物集合 */
    'drugRecordDTOList'?: MedicationDrugRecordDTO[];
    /** 用药记录ID */
    'id'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 类型：1-住院，2随访 */
    'type'?: string;
  }

  type Patient = {
    /** 住址 */
    'address'?: string;
    /** 年龄 */
    'age'?: number;
    /** 城市 */
    'city'?: string;
    /** 创建时间 */
    'createTime'?: number;
    /** 删除状态 */
    'deleted'?: number;
    /** 文化程度 */
    'educationDegree'?: number;
    /** 患者ID */
    'id'?: string;
    'idcard'?: string;
    /** 月收入 */
    'income'?: number;
    /** 职业 */
    'job'?: string;
    /** 居住状况 */
    'livingStatus'?: number;
    /** 婚姻状况 */
    'maritalStatus'?: number;
    /** 医保类型 */
    'medicalInsuranceType'?: number;
    /** 民族 */
    'nation'?: string;
    /** 电话号 */
    'phoneNumber'?: string;
    /** 性别 */
    'sex'?: number;
    /** 修改时间 */
    'updateTime'?: number;
    /** 姓名 */
    'userName'?: string;
  }

  type PatientDTO = {
    /** 住址 */
    'address'?: string;
    /** 年龄 */
    'age'?: number;
    /** 城市 */
    'city'?: string;
    /** 创建时间 */
    'createTime'?: number;
    /** 删除状态 */
    'deleted'?: number;
    /** 文化程度 */
    'educationDegree'?: number;
    /** 患者ID */
    'id'?: string;
    'idcard'?: string;
    /** 月收入 */
    'income'?: number;
    /** 职业 */
    'job'?: string;
    /** 居住状况 */
    'livingStatus'?: number;
    /** 婚姻状况 */
    'maritalStatus'?: number;
    /** 医保类型 */
    'medicalInsuranceType'?: number;
    /** 民族 */
    'nation'?: string;
    /** 电话号 */
    'phoneNumber'?: string;
    /** 性别 */
    'sex'?: number;
    /** 修改时间 */
    'updateTime'?: number;
    /** 姓名 */
    'userName'?: string;
  }

  type PatientDrugHistory = {
    /** 抑酸药物 */
    'acidSuppression'?: number;
    'acidSuppressionDrugType'?: string;
    'acidSuppressionText'?: string;
    /** 口服抗凝药物 */
    'anticoagulant'?: number;
    /** 药物描述 */
    'anticoagulantDrugText'?: string;
    /** 口服抗凝药物:1-华法林,2-达比加群,3-利伐沙班(以&#39;,&#39;分割) */
    'anticoagulantDrugType'?: string;
    'anticoagulantText'?: string;
    /** 抗血小板药物:0-否,1-是 */
    'antiplatelet'?: number;
    /** 药物描述 */
    'antiplateletDrugText'?: string;
    /** 药物类型:1-阿司匹林,2-氯吡格雷,3-西洛他唑,4-双嘧达莫(以,分割) */
    'antiplateletDrugType'?: string;
    /** 抗血小板药物描述 */
    'antiplateletText'?: string;
    /** 创建时间 */
    'createTime'?: number;
    /** 删除状态 */
    'deleted'?: number;
    /** 扩血管药物 */
    'expandBloodVessels'?: number;
    'expandBloodVesselsDrugType'?: string;
    'expandBloodVesselsText'?: string;
    /** 扩张冠脉药物 */
    'expandTheCrown'?: number;
    'expandTheCrownDrugType'?: string;
    'expandTheCrownText'?: string;
    /** 胃肠动力 */
    'gastrointestinalMotivation'?: number;
    'gastrointestinalMotivationDrugText'?: string;
    'gastrointestinalMotivationText'?: string;
    /** 降糖治疗：参考降压治疗 */
    'hypoglycemic'?: number;
    'hypoglycemicDrugText'?: string;
    /** 参考降压治疗 */
    'hypoglycemicDrugType'?: string;
    'hypoglycemicText'?: string;
    /** 个人用药史ID */
    'id'?: number;
    /** 泻药 */
    'laxative'?: number;
    'laxativeDrugText'?: string;
    'laxativeText'?: string;
    /** 调节血脂治疗: 参考降压治疗 */
    'lipidRegulator'?: number;
    'lipidRegulatorDrugText'?: string;
    /** 参考降压治疗 */
    'lipidRegulatorDrugType'?: string;
    /** 描述 */
    'lipidRegulatorText'?: string;
    /** 降压治疗:0-不需要,1-未服用,2-已服用,3-偶尔服用 */
    'lowerBloodPressure'?: number;
    'lowerBloodPressureDrugText'?: string;
    /** 未服用原因:1-不关注,2-血压忽高忽低，不稳定,3药物副作用不耐受;已服用:1-钙离子拮剂,2-ACEI类,3-ARB类,4-β受体拮抗剂,5-利尿剂(以‘,’分割) */
    'lowerBloodPressureDrugType'?: string;
    /** 描述 */
    'lowerBloodPressureText'?: string;
    /** 患者ID */
    'patientId'?: string;
    /** 服用益生菌 */
    'probiotics'?: number;
    'probioticsDrugText'?: string;
    'probioticsText'?: string;
    /** 修改时间 */
    'updateTime'?: number;
  }

  type PatientFamilyHistory = {
    /** 心脑血管病:0-否,1-是 */
    'cardiovascular'?: number;
    /** 患者：1-父亲,2-母亲,3-兄弟(以‘，’分割) */
    'cardiovascularPatient'?: string;
    'cardiovascularText'?: string;
    /** 创建时间 */
    'createTime'?: number;
    /** 删除状态 */
    'deleted'?: number;
    /** 痴呆:0-否,1-是 */
    'dementia'?: number;
    /** 患者：1-父亲,2-母亲,3-兄弟(以‘，’分割) */
    'dementiaPatient'?: string;
    'dementiaText'?: string;
    /** 糖尿病:0-否,1-是 */
    'diabetes'?: number;
    /** 患者：1-父亲,2-母亲,3-兄弟(以‘，’分割) */
    'diabetesPatient'?: string;
    'diabetesText'?: string;
    /** 高脂血:0-否,1-是 */
    'hyperlipemia'?: number;
    /** 患者：1-父亲,2-母亲,3-兄弟(以‘，’分割) */
    'hyperlipemiaPatient'?: string;
    'hyperlipemiaText'?: string;
    /** 高血压:0-否,1-是 */
    'hypertension'?: number;
    /** 患者：1-父亲,2-母亲,3-兄弟(以‘，’分割) */
    'hypertensionPatient'?: string;
    'hypertensionText'?: string;
    /** 家族病史ID */
    'id'?: number;
    /** 免疫疾病:0-否,1-是 */
    'immunity'?: number;
    /** 患者：1-父亲,2-母亲,3-兄弟(以‘，’分割) */
    'immunityPatient'?: string;
    'immunityText'?: string;
    /** 偏头痛病:0-否,1-是 */
    'migraine'?: number;
    /** 患者：1-父亲,2-母亲,3-兄弟(以‘，’分割) */
    'migrainePatient'?: string;
    'migraineText'?: string;
    /** 其他疾病:0-否,1-是 */
    'other'?: number;
    /** 患者：1-父亲,2-母亲,3-兄弟(以‘，’分割) */
    'otherPatient'?: string;
    'otherText'?: string;
    /** 人员ID */
    'patientId'?: string;
    /** 既往卒中史:0-否,1-是 */
    'priorStroke'?: number;
    /** 患者：1-父亲,2-母亲,3-兄弟(以‘，’分割) */
    'priorStrokePatient'?: string;
    /** 描述 */
    'priorStrokeText'?: string;
    /** 修改时间 */
    'updateTime'?: number;
  }

  type PatientLifestyle = {
    /** 平均运动量 */
    'averageExercise'?: number;
    /** 创建时间 */
    'createTime'?: number;
    /** 删除状态 */
    'deleted'?: number;
    /** 饮酒数量 克 */
    'drinkingNum'?: number;
    /** 饮酒类型 */
    'drinkingType'?: number;
    /** 饮酒年数 */
    'drinkingYear'?: number;
    /** 生活方式ID */
    'id'?: number;
    /** 患者ID */
    'patientId'?: string;
    /** 戒烟年数 */
    'quitSmokingYear'?: number;
    /** 吸烟数量 支 */
    'smokingNum'?: number;
    /** 吸烟类型 */
    'smokingType'?: string;
    /** 吸烟年数 */
    'smokingYear'?: number;
    /** 修改时间 */
    'updateTime'?: number;
  }

  type PatientMedicalHistory = {
    /** 动脉取栓术:0-否,1-是 */
    'arterialThrombectomy'?: number;
    'arterialThrombectomyText'?: string;
    /** 心房颤动:0-否,1-是 */
    'atrialFibrillation'?: number;
    'atrialFibrillationText'?: string;
    /** 慢性阻塞性肺疾病:0-否,1-是 */
    'chronicObstructivePulmonaryDisease'?: number;
    'chronicObstructivePulmonaryDiseaseText'?: string;
    /** 冠心病:0-否,1-是 */
    'coronaryHeartDisease'?: number;
    'coronaryHeartDiseaseText'?: string;
    /** 冠状动脉支架:0-否,1-是 */
    'coronaryStent'?: number;
    'coronaryStentText'?: string;
    /** 创建时间 */
    'createTime'?: number;
    /** 删除状态 */
    'deleted'?: number;
    /** 糖尿病:0-否,1-1级,2-2级,3-3级... */
    'diabetes'?: number;
    'diabetesText'?: string;
    'diabetesTime'?: number;
    /** 血脂代谢紊乱:0-否,1-是 */
    'dyslipidemia'?: number;
    'dyslipidemiaText'?: string;
    /** 心力衰竭:0-否,1-是 */
    'heartFailure'?: number;
    'heartFailureText'?: string;
    /** 同型半胱氨酸血症:0-否,1-是 */
    'homocysteineemia'?: number;
    'homocysteineemiaText'?: string;
    /** 高血压:0-否,1-1级,2-2级,3-3级... */
    'hypertension'?: number;
    'hypertensionText'?: string;
    'hypertensionTime'?: number;
    /** 高尿酸血症:0-否,1-是 */
    'hyperuricAcidemia'?: number;
    'hyperuricAcidemiaText'?: string;
    /** 既往病史ID */
    'id'?: number;
    /** 免疫性疾病 */
    'immunity'?: number;
    'immunityText'?: string;
    /** 颈内动脉内膜剥脱术:0-否,1-是 */
    'internalCarotidArteryEndarterectomy'?: number;
    'internalCarotidArteryEndarterectomyText'?: string;
    /** 颈内动脉支架:0-否,1-是 */
    'internalCarotidArteryStent'?: number;
    'internalCarotidArteryStentText'?: string;
    /** 颅内动脉支架:0-否,1-是 */
    'intracranialArterystent'?: number;
    'intracranialArterystentText'?: string;
    /** 静脉溶栓:0-否,1-是 */
    'intravenousThrombolysis'?: number;
    'intravenousThrombolysisText'?: string;
    /** 代谢性疾病:0-否,1-是 */
    'metabolism'?: number;
    'metabolismText'?: string;
    /** 偏头痛病 */
    'migraine'?: number;
    'migraineText'?: string;
    /** 患者ID */
    'patientId'?: string;
    /** 周围动脉病:0-否,1-是 */
    'peripheralArtery'?: number;
    'peripheralArteryText'?: string;
    /** 既往卒中史:0-否,1-是 */
    'priorStroke'?: number;
    /** 既往卒中史次数 */
    'priorStrokeNum'?: number;
    /** 既往卒中史描述 */
    'priorStrokeText'?: string;
    /** 既往卒中史类型：1-脑梗死,2-脑出血,3-蛛网膜下腔出血,4-其他未分类卒中(以, 分割可存多种类型) */
    'priorStrokeType'?: string;
    /** 肾功能衰竭:0-否,1-是 */
    'renalFailure'?: number;
    'renalFailureText'?: string;
    /** 呼吸睡眠暂停 */
    'sleepApnea'?: number;
    'sleepApneaText'?: string;
    /** 短暂性脑缺血:0-否,1-是 */
    'transientCerebralIchemia'?: number;
    /** 短暂性脑缺血描述 */
    'transientCerebralIchemiaText'?: string;
    /** 最后一次发病时间 */
    'transientCerebralIchemiaTime'?: number;
    /** 修改时间 */
    'updateTime'?: number;
  }

  type SysUserConditionDTO = {
    /** 账号 */
    'account'?: string;
    /** 手机号 */
    'phoneNumber'?: string;
    /** 账号类型：1-系统管理员，2-普通用户 */
    'type'?: number;
    /** 姓名 */
    'userName'?: string;
  }

  type SysUserCreateDTO = {
    /** 账号 */
    'account'?: string;
    /** 密码 */
    'password'?: string;
    /** 手机号 */
    'phoneNumber'?: string;
    /** 账号类型：1-系统管理员，2-普通用户 */
    'type'?: number;
    /** 姓名 */
    'userName'?: string;
  }

  type SysUserDTO = {
    /** 账号 */
    'account'?: string;
    /** 创建时间 */
    'createTime'?: number;
    /** 删除状态 */
    'deleted'?: number;
    /** 用户ID */
    'id'?: number;
    /** 手机号 */
    'phoneNumber'?: string;
    /** 账号类型：1-系统管理员，2-普通用户 */
    'type'?: number;
    /** 修改时间 */
    'updateTime'?: number;
    /** 姓名 */
    'userName'?: string;
  }

  type SysUserUpdateDTO = {
    /** 账号 */
    'account'?: string;
    /** 用户ID */
    'id'?: number;
    /** 手机号 */
    'phoneNumber'?: string;
    /** 账号类型：1-系统管理员，2-普通用户 */
    'type'?: number;
    /** 姓名 */
    'userName'?: string;
  }

  type ApiResult_AuxiliaryCheckDTO_ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<AuxiliaryCheckDTO>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_DetectAntiplateletDrugGenesDTO_ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<DetectAntiplateletDrugGenesDTO>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_DetectBiochemicalFullItemDTO_ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<DetectBiochemicalFullItemDTO>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_DetectBloodRoutineDTO_ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<DetectBloodRoutineDTO>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_DetectClottingRoutineDTO_ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<DetectClottingRoutineDTO>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_DetectEkgDTO_ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<DetectEkgDTO>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_DetectInflammatoryMediaDTO_ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<DetectInflammatoryMediaDTO>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_DetectItemMultipleDTO_ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<DetectItemMultipleDTO>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_DetectItemMultipleSingleDTO_ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<DetectItemMultipleSingleDTO>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_DetectItemOutcomeDTO_ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<DetectItemOutcomeDTO>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_DetectItemSingleDTO_ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<DetectItemSingleDTO>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_DetectItemValueDTO_ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<DetectItemValueDTO>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_DetectSwiDTO_ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<DetectSwiDTO>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_DetectThirteenBloodLipidsDTO_ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<DetectThirteenBloodLipidsDTO>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_DetectThyroidFunctionDTO_ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<DetectThyroidFunctionDTO>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_FollowupCheckBodyDTO_ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<FollowupCheckBodyDTO>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_FollowupDrugRecordDTO_ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<FollowupDrugRecordDTO>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_FollowupOnsetRecordDTO_ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<FollowupOnsetRecordDTO>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_FollowupRecordsDTO_ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<FollowupRecordsDTO>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_FollowupVascularEventRecordDTO_ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<FollowupVascularEventRecordDTO>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_HospitalCheckBodyDTO_ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<HospitalCheckBodyDTO>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_HospitalDiagnosticRecordsDTO_ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<HospitalDiagnosticRecordsDTO>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_HospitalRecordsDTO_ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<HospitalRecordsDTO>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_HospitalTreatmentRecordsDTO_ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<HospitalTreatmentRecordsDTO>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_HospitalVascularDTO_ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<HospitalVascularDTO>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_List_DetectAntiplateletDrugGenesDTO__ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<DetectAntiplateletDrugGenesDTO>[];
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_List_DetectBiochemicalFullItemDTO__ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<DetectBiochemicalFullItemDTO>[];
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_List_DetectBloodRoutineDTO__ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<DetectBloodRoutineDTO>[];
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_List_DetectClottingRoutineDTO__ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<DetectClottingRoutineDTO>[];
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_List_DetectEkgDTO__ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<DetectEkgDTO>[];
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_List_DetectInflammatoryMediaDTO__ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<DetectInflammatoryMediaDTO>[];
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_List_DetectItemMultipleDTO__ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<DetectItemMultipleDTO>[];
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_List_DetectItemMultipleSingleDTO__ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<DetectItemMultipleSingleDTO>[];
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_List_DetectItemOutcomeDTO__ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<DetectItemOutcomeDTO>[];
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_List_DetectItemSingleDTO__ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<DetectItemSingleDTO>[];
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_List_DetectItemValueDTO__ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<DetectItemValueDTO>[];
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_List_DetectSwiDTO__ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<DetectSwiDTO>[];
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_List_DetectThirteenBloodLipidsDTO__ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<DetectThirteenBloodLipidsDTO>[];
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_List_DetectThyroidFunctionDTO__ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<DetectThyroidFunctionDTO>[];
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_List_FollowupCheckBodyDTO__ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<FollowupCheckBodyDTO>[];
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_List_FollowupRecordsDTO__ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<FollowupRecordsDTO>[];
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_List_FollowupVascularEventRecordDTO__ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<FollowupVascularEventRecordDTO>[];
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_List_HospitalCheckBodyDTO__ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<HospitalCheckBodyDTO>[];
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_List_HospitalDiagnosticRecordsDTO__ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<HospitalDiagnosticRecordsDTO>[];
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_List_HospitalRecordsDTO__ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<HospitalRecordsDTO>[];
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_List_HospitalTreatmentRecordsDTO__ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<HospitalTreatmentRecordsDTO>[];
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_List_HospitalVascularDTO__ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<HospitalVascularDTO>[];
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_List_MedicationRecordDTO__ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<MedicationRecordDTO>[];
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_List_PatientDrugHistory__ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<PatientDrugHistory>[];
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_List_PatientFamilyHistory__ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<PatientFamilyHistory>[];
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_List_PatientLifestyle__ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<PatientLifestyle>[];
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_List_PatientMedicalHistory__ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<PatientMedicalHistory>[];
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_List_Patient__ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<Patient>[];
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_List_SysUserDTO__ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<SysUserDTO>[];
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_MedicationRecordDTO_ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<MedicationRecordDTO>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_Page_FollowupRecordsDTO__ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<Page_FollowupRecordsDTO_>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_Page_HospitalFollowupDTO__ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<Page_HospitalFollowupDTO_>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_Page_HospitalRecordsDTO__ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<Page_HospitalRecordsDTO_>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_Page_Patient__ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<Page_Patient_>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_Page_SysUserDTO__ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<Page_SysUserDTO_>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_PatientDrugHistory_ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<PatientDrugHistory>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_PatientFamilyHistory_ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<PatientFamilyHistory>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_PatientLifestyle_ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<PatientLifestyle>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_PatientMedicalHistory_ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<PatientMedicalHistory>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_Patient_ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<Patient>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_SysUserDTO_ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<SysUserDTO>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_int_ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<number>;
    /** 结果提示信息 */
    message: string;
  }

  type ApiResult_string_ = {
    /** 标识代码,200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<string>;
    /** 结果提示信息 */
    message: string;
  }

  type Page_FollowupRecordsDTO_ = {
    /** 总条数 */
    'count'?: number;
    /** 当前页 */
    'currPage'?: number;
    /** 分页数据 */
    data: Required<FollowupRecordsDTO>[];
    /** 分页数 */
    'pageSize'?: number;
  }

  type Page_HospitalFollowupDTO_ = {
    /** 总条数 */
    'count'?: number;
    /** 当前页 */
    'currPage'?: number;
    /** 分页数据 */
    data: Required<HospitalFollowupDTO>[];
    /** 分页数 */
    'pageSize'?: number;
  }

  type Page_HospitalRecordsDTO_ = {
    /** 总条数 */
    'count'?: number;
    /** 当前页 */
    'currPage'?: number;
    /** 分页数据 */
    data: Required<HospitalRecordsDTO>[];
    /** 分页数 */
    'pageSize'?: number;
  }

  type Page_Patient_ = {
    /** 总条数 */
    'count'?: number;
    /** 当前页 */
    'currPage'?: number;
    /** 分页数据 */
    data: Required<Patient>[];
    /** 分页数 */
    'pageSize'?: number;
  }

  type Page_SysUserDTO_ = {
    /** 总条数 */
    'count'?: number;
    /** 当前页 */
    'currPage'?: number;
    /** 分页数据 */
    data: Required<SysUserDTO>[];
    /** 分页数 */
    'pageSize'?: number;
  }

}
