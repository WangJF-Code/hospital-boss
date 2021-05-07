import type { FormValuesType } from '@/pages/Record/Add';
import {
  get_biochemicalFullItem_$id$,
  get_bloodRoutine_$id$,
  get_clottingRoutine_$id$,
  get_detectItem_multipleSingle_$id$,
  get_detectItem_multiple_$id$,
  get_detectItem_outcome_$id$,
  get_detectItem_single_$id$,
  get_detectItem_value_$id$,
  get_drugGenes_$id$,
  get_ekg_$id$,
  get_inflammatoryMedia_$id$,
  get_swi_$id$,
  get_thirteenBloodLipids_$id$,
  get_thyroidFunction_$id$,
  post_biochemicalFullItem,
  post_biochemicalFullItem_list,
  post_bloodRoutine,
  post_bloodRoutine_list,
  post_clottingRoutine_list,
  post_detectItem_multiple,
  post_detectItem_multipleSingle,
  post_detectItem_multipleSingle_list,
  post_detectItem_multiple_list,
  post_detectItem_outcome,
  post_detectItem_outcome_list,
  post_detectItem_single,
  post_detectItem_single_list,
  post_detectItem_value,
  post_detectItem_value_list,
  post_drugGenes,
  post_drugGenes_list,
  post_ekg,
  post_ekg_list,
  post_inflammatoryMedia,
  post_inflammatoryMedia_list,
  post_swi,
  post_swi_list,
  post_thirteenBloodLipids,
  post_thirteenBloodLipids_list,
  post_thyroidFunction,
  post_thyroidFunction_list,
  put_biochemicalFullItem,
  put_bloodRoutine,
  put_detectItem_multiple,
  put_detectItem_multipleSingle,
  put_detectItem_outcome,
  put_detectItem_single,
  put_detectItem_value,
  put_drugGenes,
  put_ekg,
  put_inflammatoryMedia,
  put_swi,
  put_thirteenBloodLipids,
  put_thyroidFunction,
} from '@/services/api';
import { submitShowSuccess } from '@/utils/utils';
import useRequest from '@ahooksjs/use-request';
import { PlusOutlined } from '@ant-design/icons';
import ProCard from '@ant-design/pro-card';

import { ModalForm } from '@ant-design/pro-form';
import { Button } from 'antd';
import type { FormInstance } from 'antd';
import { useRef, useState } from 'react';
import BloodRoutineForm from '../Add/BloodRoutineForm';
import AntiplateletForm from './AntiplateletForm';
import BiochemistryForm from './BiochemistryForm';
import CarotidDuplexForm from './CarotidDuplexForm';
import ClavicleForm from './ClavicleForm';
import CoagulationForm from './CoagulationForm';
import CTAForm from './CTAForm';
import CTPForm from './CTPForm';
import ECGForm from './ECGForm';
import ESRForm from './ESRForm';
import HBALCForm from './HBALCForm';
import HMRForm from './HMRForm';
import InflammationForm from './InflammationForm';
import LowerLimbForm from './LowerLimbForm';
import MRAForm from './MRAForm';
import MRIForm from './MRIForm';
import RecordCard from './RecordsCard';
import SingleResultForm from './SingleResultForm';
import SWIForm from './SWIForm';
import TCDForm from './TCDForm';
import ThirteenLipidForm from './ThirteenLipidForm';
import ThyroidForm from './ThyroidForm';
import UrodynamicForm from './UrodynamicForm';
import {
  formatAntiplateleInfoToFormValues,
  formatCheckInfoToFormValues,
  formatDetectItemMultipleSingleToFormValues,
  formatECGInfoToFormValues,
  formatFormValuesToAntiplatele,
  formatFormValuesToBloodRoutine,
  formatFormValuesToDetectItemMultipleSingle,
  formatFormValuesToECG,
  formatFormValuesToESR,
  formatListToRecordCardData,
} from './utils';
import DWIForm from './DWIForm';

const Checks = (props) => {
  const { params } = props.match;
  const { patientId, hospitalRecordsId } = params;

  // 炎症介质
  const [inflammationId, setInflammationId] = useState();
  const [inflammationList, setInflammationList] = useState([]);
  const [modalInflammation, setModalInflammation] = useState(false);
  const inflammationForm = useRef<FormInstance>();

  const { run: getInflammationList } = useRequest(
    () => post_inflammatoryMedia_list({ type: 1, dataId: hospitalRecordsId }),
    { formatResult: formatListToRecordCardData, onSuccess: (d) => setInflammationList(d) },
  );

  const { run: getInflationInfo } = useRequest((key) => get_inflammatoryMedia_$id$({ id: key }), {
    formatResult: formatCheckInfoToFormValues,
    manual: true,
    onSuccess: (d) => {
      setInflammationId(d?.id);
      inflammationForm.current?.setFieldsValue(d);
    },
  });

  const submitInflammation = async (values: FormValuesType) => {
    try {
      const formParams = formatFormValuesToESR(values);
      formParams.type = '1';
      formParams.patientId = patientId;
      formParams.dataId = hospitalRecordsId;

      let res: API.ApiResult;
      if (inflammationId) {
        res = await put_inflammatoryMedia({ ...formParams, id: inflammationId });
      } else {
        res = await post_inflammatoryMedia(formParams);
      }
      submitShowSuccess(res);
      getInflammationList();
    } catch (error) {
      return false;
    }

    return true;
  };

  // 糖化血红蛋白
  const [HBALId, setHBALId] = useState();
  const [modalHBAL, setModalHBAL] = useState(false);
  const [HBALCList, setHBALCList] = useState([]);

  const HBALFormRef = useRef<FormInstance>();

  const { run: getHBALCList } = useRequest(
    () => post_inflammatoryMedia_list({ type: 1, dataId: hospitalRecordsId }),
    { formatResult: formatListToRecordCardData, onSuccess: (d) => setHBALCList(d) },
  );

  const { run: getHbalcInfo } = useRequest((key) => get_detectItem_value_$id$({ id: key }), {
    formatResult: formatCheckInfoToFormValues,
    manual: true,
    onSuccess: (d) => {
      setHBALId(d?.id);
      HBALFormRef.current?.setFieldsValue(d);
    },
  });

  const submitHBALC = async (values: FormValuesType) => {
    try {
      const formParams = formatFormValuesToESR(values);
      formParams.detectType = 102;
      formParams.type = '1';
      formParams.patientId = patientId;
      formParams.dataId = hospitalRecordsId;

      let res: API.ApiResult;
      if (HBALId) {
        res = await put_detectItem_value({ ...formParams, id: HBALId });
      } else {
        res = await post_detectItem_value(formParams);
      }
      submitShowSuccess(res);
      getHBALCList();
    } catch (error) {
      return false;
    }

    return true;
  };

  // 血脂十三项
  const [thirteenLipidId, setThirteenLipidId] = useState();
  const [modalThirteenLipid, setModalThirteenLipid] = useState(false);
  const [thirteenLipidList, setThirteenLipidList] = useState([]);
  const thirteenLipidFormRef = useRef<FormInstance>();

  const { run: getThirteenBloodList } = useRequest(
    () => post_thirteenBloodLipids_list({ type: 1, dataId: hospitalRecordsId }),
    {
      formatResult: formatListToRecordCardData,
      onSuccess: (d) => setThirteenLipidList(d),
    },
  );

  const { run: thirteenLipidInfo } = useRequest(
    (key) => get_thirteenBloodLipids_$id$({ id: key }),
    {
      formatResult: formatCheckInfoToFormValues,
      manual: true,
      onSuccess: (d) => {
        setThirteenLipidId(d?.id);
        thirteenLipidFormRef.current?.setFieldsValue(d);
      },
    },
  );

  const submitThirteenLipid = async (values: FormValuesType) => {
    try {
      const formParams = formatFormValuesToESR({ ...values });
      formParams.type = '1';
      formParams.patientId = patientId;
      formParams.dataId = hospitalRecordsId;

      let res: API.ApiResult;
      if (thirteenLipidId) {
        res = await put_thirteenBloodLipids({ ...formParams, id: thirteenLipidId });
      } else {
        res = await post_thirteenBloodLipids(formParams);
      }
      submitShowSuccess(res);
      getThirteenBloodList();
    } catch (error) {
      return false;
    }

    return true;
  };

  // 抗血小板
  const [antiplateleId, setantiplateleId] = useState<number>();
  const [modalAntiplatele, setModalAntiplatele] = useState(false);
  const [antiplateleList, setAntiplateleList] = useState([]);
  const antiplateletFormRef = useRef<FormInstance>();

  const { run: getAntiplateleList } = useRequest(
    () => post_drugGenes_list({ type: 1, dataId: hospitalRecordsId }),
    { formatResult: formatListToRecordCardData, onSuccess: (d) => setAntiplateleList(d) },
  );

  const { run: antiplateleInfo } = useRequest((key) => get_drugGenes_$id$({ id: key }), {
    formatResult: formatAntiplateleInfoToFormValues,
    manual: true,
    onSuccess: (d) => {
      setantiplateleId(d?.id);
      antiplateletFormRef.current?.setFieldsValue(d);
    },
  });

  const submitAntiplatele = async (values: FormValuesType) => {
    try {
      const formParams = formatFormValuesToAntiplatele(values);
      formParams.type = '1';
      formParams.patientId = patientId;
      formParams.dataId = hospitalRecordsId;

      let res: API.ApiResult;
      if (antiplateleId) {
        res = await put_drugGenes({ ...formParams, id: antiplateleId });
      } else {
        res = await post_drugGenes(formParams);
      }
      submitShowSuccess(res);
      getAntiplateleList();
    } catch (error) {
      return false;
    }

    return true;
  };

  // 甲功
  const [thyroidId, setThyroidId] = useState();
  const [modalThyroid, setModalThyroid] = useState(false);
  const [thyroidList, setThyroidList] = useState([]);
  const thyroidFormRef = useRef<FormInstance>();

  const { run: getThyroidList } = useRequest(
    () => post_thyroidFunction_list({ type: 1, dataId: hospitalRecordsId }),
    { formatResult: formatListToRecordCardData, onSuccess: (d) => setThyroidList(d) },
  );

  const { run: thyroidInfo } = useRequest((key) => get_thyroidFunction_$id$({ id: key }), {
    formatResult: formatCheckInfoToFormValues,
    manual: true,
    onSuccess: (d) => {
      setThyroidId(d?.id);
      thyroidFormRef.current?.setFieldsValue(d);
    },
  });

  const submitThyroid = async (values: FormValuesType) => {
    try {
      const formParams = formatFormValuesToESR(values);
      formParams.type = '1';
      formParams.patientId = patientId;
      formParams.dataId = hospitalRecordsId;

      let res: API.ApiResult;
      if (thyroidId) {
        res = await put_thyroidFunction({ ...formParams, id: thyroidId });
      } else {
        res = await post_thyroidFunction(formParams);
      }
      submitShowSuccess(res);
      getThyroidList();
    } catch (error) {
      return false;
    }

    return true;
  };

  // 心电图
  const [ecgId, setECGId] = useState();
  const [modalECG, setModalECG] = useState(false);
  const [ecgList, setEcgList] = useState([]);

  const ECGFormRef = useRef<FormInstance>();

  const { run: getEcgList } = useRequest(
    () => post_ekg_list({ type: 1, dataId: hospitalRecordsId }),
    { formatResult: formatListToRecordCardData, onSuccess: (d) => setEcgList(d) },
  );

  const { run: ecgInfo } = useRequest((key) => get_ekg_$id$({ id: key }), {
    formatResult: formatECGInfoToFormValues,
    manual: true,
    onSuccess: (d) => {
      setECGId(d?.id);
      ECGFormRef.current?.setFieldsValue(d);
    },
  });

  const submitECG = async (values: FormValuesType) => {
    try {
      const formParams = formatFormValuesToECG(values);
      formParams.type = '1';
      formParams.patientId = patientId;
      formParams.dataId = hospitalRecordsId;

      let res: API.ApiResult;
      if (ecgId) {
        res = await put_ekg({ ...formParams, id: ecgId });
      } else {
        res = await post_ekg(formParams);
      }
      submitShowSuccess(res);
      getEcgList();
    } catch (error) {
      return false;
    }

    return true;
  };

  // 24小时心电监测(Holter)
  const [holterId, setHolterId] = useState();
  const [modalHolter, setModalHolter] = useState(false);
  const [holterList, setHolterList] = useState([]);

  const holterFormRef = useRef<FormInstance>();

  const { run: getHolterList } = useRequest(
    () => post_detectItem_outcome_list({ type: 1, dataId: hospitalRecordsId, detectType: 501 }),
    { formatResult: formatListToRecordCardData, onSuccess: (d) => setHolterList(d) },
  );

  const { run: holterInfo } = useRequest((key) => get_detectItem_outcome_$id$({ id: key }), {
    formatResult: formatECGInfoToFormValues,
    manual: true,
    onSuccess: (d) => {
      setHolterId(d?.id);
      holterFormRef.current?.setFieldsValue(d);
    },
  });

  // 心脏超声
  const [TTEId, setTTEId] = useState<number>();
  const [tteList, setTTEList] = useState([]);

  const [modalTTE, setModalTTE] = useState(false);
  const TTEFormRef = useRef<FormInstance>();

  const { run: getTTEList } = useRequest(
    () => post_detectItem_outcome_list({ type: 1, dataId: hospitalRecordsId, detectType: 502 }),
    { formatResult: formatListToRecordCardData, onSuccess: (d) => setTTEList(d) },
  );

  const { run: tteInfo } = useRequest((key) => get_detectItem_outcome_$id$({ id: key }), {
    formatResult: formatECGInfoToFormValues,
    manual: true,
    onSuccess: (d) => {
      setTTEId(d?.id);
      TTEFormRef.current?.setFieldsValue(d);
    },
  });

  // 503 颅脑计算机
  const [CTId, setCTId] = useState<number>();
  const [CTList, setCTList] = useState([]);

  const [modalCT, setModalCT] = useState(false);
  const CTFormRef = useRef<FormInstance>();

  const { run: getCTList } = useRequest(
    () => post_detectItem_outcome_list({ type: 1, dataId: hospitalRecordsId, detectType: 503 }),
    { formatResult: formatListToRecordCardData, onSuccess: (d) => setCTList(d) },
  );

  const { run: getCTInfo } = useRequest((key) => get_detectItem_outcome_$id$({ id: key }), {
    formatResult: formatECGInfoToFormValues,
    manual: true,
    onSuccess: (d) => {
      setCTId(d?.id);
      CTFormRef.current?.setFieldsValue(d);
    },
  });

  // 504-磁共振灌注成像(ASL)
  const [ASLId, setASLId] = useState<number>();
  const [ASLList, setASLList] = useState([]);

  const [modalASL, setModalASL] = useState(false);
  const ASLFormRef = useRef<FormInstance>();

  const { run: getASLList } = useRequest(
    () => post_detectItem_outcome_list({ type: 1, dataId: hospitalRecordsId, detectType: 504 }),
    { formatResult: formatListToRecordCardData, onSuccess: (d) => setASLList(d) },
  );

  const { run: getASLInfo } = useRequest((key) => get_detectItem_outcome_$id$({ id: key }), {
    formatResult: formatECGInfoToFormValues,
    manual: true,
    onSuccess: (d) => {
      setASLId(d?.id);
      ASLFormRef.current?.setFieldsValue(d);
    },
  });

  // 505-磁共振(DTI)
  const [DTIId, setDTIId] = useState<number>();
  const [DTIList, setDTIList] = useState([]);

  const [modalDTI, setModalDTI] = useState(false);
  const DTIFormRef = useRef<FormInstance>();

  const { run: getDTIList } = useRequest(
    () => post_detectItem_outcome_list({ type: 1, dataId: hospitalRecordsId, detectType: 505 }),
    { formatResult: formatListToRecordCardData, onSuccess: (d) => setDTIList(d) },
  );

  const { run: getDTIInfo } = useRequest((key) => get_detectItem_outcome_$id$({ id: key }), {
    formatResult: formatECGInfoToFormValues,
    manual: true,
    onSuccess: (d) => {
      setDTIId(d?.id);
      DTIFormRef.current?.setFieldsValue(d);
    },
  });

  // 506-眼底OCTA
  const [OCTAId, setOCTAId] = useState<number>();
  const [OCTAList, setOCTAList] = useState([]);

  const [modalOCTA, setModalOCTA] = useState(false);
  const OCTAFormRef = useRef<FormInstance>();

  const { run: getOCTAList } = useRequest(
    () => post_detectItem_outcome_list({ type: 1, dataId: hospitalRecordsId, detectType: 506 }),
    { formatResult: formatListToRecordCardData, onSuccess: (d) => setOCTAList(d) },
  );

  const { run: getOCTAInfo } = useRequest((key) => get_detectItem_outcome_$id$({ id: key }), {
    formatResult: formatECGInfoToFormValues,
    manual: true,
    onSuccess: (d) => {
      setOCTAId(d?.id);
      OCTAFormRef.current?.setFieldsValue(d);
    },
  });

  //  507-眼底照相;
  const [RetCamId, setRetCamId] = useState<number>();
  const [RetCamList, setRetCamList] = useState([]);

  const [modalRetCam, setModalRetCam] = useState(false);
  const RetCamFormRef = useRef<FormInstance>();

  const { run: getRetCamList } = useRequest(
    () => post_detectItem_outcome_list({ type: 1, dataId: hospitalRecordsId, detectType: 507 }),
    { formatResult: formatListToRecordCardData, onSuccess: (d) => setRetCamList(d) },
  );

  const { run: getRetCamInfo } = useRequest((key) => get_detectItem_outcome_$id$({ id: key }), {
    formatResult: formatECGInfoToFormValues,
    manual: true,
    onSuccess: (d) => {
      setRetCamId(d?.id);
      RetCamFormRef.current?.setFieldsValue(d);
    },
  });

  // 颈部血管彩超检查
  const [CDUId, setCDUId] = useState<number>();
  const [cduList, setCDUList] = useState([]);

  const [modalCDU, setModalCDU] = useState(false);
  const CDUFormRef = useRef<FormInstance>();

  const { run: getCDUList } = useRequest(
    () =>
      post_detectItem_multipleSingle_list({ type: 1, dataId: hospitalRecordsId, detectType: 401 }),
    { formatResult: formatListToRecordCardData, onSuccess: (d) => setCDUList(d) },
  );

  const { run: cduInfo } = useRequest((key) => get_detectItem_multipleSingle_$id$({ id: key }), {
    formatResult: formatDetectItemMultipleSingleToFormValues,
    manual: true,
    onSuccess: (d) => {
      setCDUId(d?.id);
      CDUFormRef.current?.setFieldsValue(d);
    },
  });

  // 锁骨下动脉彩超检查
  const [arteriaId, setArteriaId] = useState<number>();
  const [modalArteria, setModalArteria] = useState(false);
  const [arteriaList, setArteriaList] = useState([]);

  const arteriaIdFormRef = useRef<FormInstance>();

  const { run: getArteriaList } = useRequest(
    () =>
      post_detectItem_multipleSingle_list({ type: 1, dataId: hospitalRecordsId, detectType: 402 }),
    { formatResult: formatListToRecordCardData, onSuccess: (d) => setArteriaList(d) },
  );

  const { run: arteriaInfo } = useRequest(
    (key) => get_detectItem_multipleSingle_$id$({ id: key }),
    {
      formatResult: formatDetectItemMultipleSingleToFormValues,
      manual: true,
      onSuccess: (d) => {
        setArteriaId(d?.id);
        arteriaIdFormRef.current?.setFieldsValue(d);
      },
    },
  );

  // 磁共振血管成像
  const [mraId, setMraId] = useState<number>();
  const [modalMRA, setModalMRA] = useState(false);
  const [mraList, setMraList] = useState([]);
  const mraFormRef = useRef<FormInstance>();

  const { run: getMraList } = useRequest(
    () =>
      post_detectItem_multipleSingle_list({ type: 1, dataId: hospitalRecordsId, detectType: 403 }),
    { formatResult: formatListToRecordCardData, onSuccess: (d) => setMraList(d) },
  );

  const { run: getMRAInfo } = useRequest((key) => get_detectItem_multipleSingle_$id$({ id: key }), {
    formatResult: formatDetectItemMultipleSingleToFormValues,
    manual: true,
    onSuccess: (d) => {
      setMraId(d?.id);
      mraFormRef.current?.setFieldsValue(d);
    },
  });

  // 磁共振弥散成像（DWI）
  const [DWIId, setDWIId] = useState<number>();
  const [modalDWI, setModalDWI] = useState(false);
  const [DWIList, setDWIList] = useState([]);
  const DWIFormRef = useRef<FormInstance>();

  const { run: getDWIList } = useRequest(
    () =>
      post_detectItem_multipleSingle_list({ type: 1, dataId: hospitalRecordsId, detectType: 404 }),
    { formatResult: formatListToRecordCardData, onSuccess: (d) => setDWIList(d) },
  );

  const { run: getDWIInfo } = useRequest((key) => get_detectItem_multipleSingle_$id$({ id: key }), {
    formatResult: formatDetectItemMultipleSingleToFormValues,
    manual: true,
    onSuccess: (d) => {
      setDWIId(d?.id);
      DWIFormRef.current?.setFieldsValue(d);
    },
  });

  // 血管造影(CTA)
  const [CTAId, setCTAId] = useState<number>();
  const [modalCTA, setModalCTA] = useState(false);
  const CTAFormRef = useRef<FormInstance>();
  const [CTAList, setCTAList] = useState([]);

  const { run: getCTAList } = useRequest(
    () =>
      post_detectItem_multipleSingle_list({ type: 1, dataId: hospitalRecordsId, detectType: 405 }),
    { formatResult: formatListToRecordCardData, onSuccess: (d) => setCTAList(d) },
  );

  const { run: getCTAInfo } = useRequest((key) => get_detectItem_multipleSingle_$id$({ id: key }), {
    formatResult: formatDetectItemMultipleSingleToFormValues,
    manual: true,
    onSuccess: (d) => {
      setCTAId(d?.id);
      CTAFormRef.current?.setFieldsValue(d);
    },
  });

  // 406-CT灌注成像（CTP）
  const [CTPId, setCTPId] = useState<number>();
  const [CTPList, setCTPList] = useState([]);
  const [modalCTP, setModalCTP] = useState(false);
  const CTPFormRef = useRef<FormInstance>();

  const { run: getCTPList } = useRequest(
    () =>
      post_detectItem_multipleSingle_list({ type: 1, dataId: hospitalRecordsId, detectType: 406 }),
    {
      formatResult: formatListToRecordCardData,
      onSuccess: (d) => {
        setCTPList(d);
      },
    },
  );

  const { run: getCTPInfo } = useRequest((key) => get_detectItem_multipleSingle_$id$({ id: key }), {
    formatResult: formatDetectItemMultipleSingleToFormValues,
    manual: true,
    onSuccess: (d) => {
      setCTPId(d?.id);
      CTPFormRef.current?.setFieldsValue(d);
    },
  });

  // 201 经颅多普勒检查
  const [TCDId, setTCDId] = useState<number>();
  const [modalTCD, setModalTCD] = useState(false);
  const TCDFormRef = useRef<FormInstance>();

  const { data: TCDList, run: getTCDList } = useRequest(
    () => post_detectItem_single_list({ type: 1, dataId: hospitalRecordsId, detectType: 201 }),
    { formatResult: formatListToRecordCardData },
  );

  const { run: getTCDInfo } = useRequest((key) => get_detectItem_single_$id$({ id: key }), {
    formatResult: formatCheckInfoToFormValues,
    manual: true,
    onSuccess: (d) => {
      setTCDId(d?.id);
      TCDFormRef.current?.setFieldsValue(d);
    },
  });
  // 202-颅内血管高分辨磁共振成像(HMR)
  const [HMRId, setHMRId] = useState<number>();
  const [modalHMR, setModalHMR] = useState(false);
  const HMRFormRef = useRef<FormInstance>();

  const { data: HMRList, run: getHMRList } = useRequest(
    () => post_detectItem_single_list({ type: 1, dataId: hospitalRecordsId, detectType: 202 }),
    { formatResult: formatListToRecordCardData },
  );

  const { run: getHMRInfo } = useRequest((key) => get_detectItem_single_$id$({ id: key }), {
    formatResult: formatCheckInfoToFormValues,
    manual: true,
    onSuccess: (d) => {
      setHMRId(d?.id);
      HMRFormRef.current?.setFieldsValue(d);
    },
  });

  // 203-尿流动力学检查
  const [urodynamicId, seturodynamicId] = useState<number>();
  const [uroList, seturoList] = useState<[]>();
  const [modalUrodynamic, setModalUrodynamic] = useState(false);
  const urodynamicFormRef = useRef<FormInstance>();

  const { run: getUroList } = useRequest(
    () => post_detectItem_single_list({ type: 1, dataId: hospitalRecordsId, detectType: 203 }),
    { formatResult: formatListToRecordCardData, onSuccess: (d) => seturoList(d) },
  );

  const { run: getUroInfo } = useRequest((key) => get_detectItem_single_$id$({ id: key }), {
    formatResult: formatCheckInfoToFormValues,
    manual: true,
    onSuccess: (d) => {
      seturodynamicId(d?.id);
      urodynamicFormRef.current?.setFieldsValue(d);
    },
  });

  // 204-下肢静脉血管超声
  const [LLVId, setLLVId] = useState<number>();
  const [LLVList, setLLVList] = useState<[]>();
  const [modalLL, setModalLL] = useState(false);
  const LLVFormRef = useRef<FormInstance>();

  const { run: getLLVList } = useRequest(
    () => post_detectItem_single_list({ type: 1, dataId: hospitalRecordsId, detectType: 204 }),
    { formatResult: formatListToRecordCardData, onSuccess: (d) => setLLVList(d) },
  );

  const { run: getLLVInfo } = useRequest((key) => get_detectItem_single_$id$({ id: key }), {
    formatResult: formatCheckInfoToFormValues,
    manual: true,
    onSuccess: (d) => {
      setLLVId(d?.id);
      LLVFormRef.current?.setFieldsValue(d);
    },
  });

  const fileList = [
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ];

  // 血常规
  const [bloodRoutineId, setBloodRoutineId] = useState();
  const [modalBloodRoutine, setModalBloodRoutine] = useState(false);
  const bloodRoutineForm = useRef<FormInstance>();
  const [bloodRoutineList, setBloodRoutineList] = useState([]);
  const { run: getBloodRoutineList } = useRequest(
    () => post_bloodRoutine_list({ type: 1, dataId: hospitalRecordsId }),
    { formatResult: formatListToRecordCardData, onSuccess: (d) => setBloodRoutineList(d) },
  );

  const { run: getBloodRoutineInfo } = useRequest((key) => get_bloodRoutine_$id$({ id: key }), {
    formatResult: formatCheckInfoToFormValues,
    manual: true,
    onSuccess: (d) => {
      setBloodRoutineId(d?.id);
      bloodRoutineForm.current?.setFieldsValue(d);
    },
  });

  const submitBloodRoutine = async (values: FormValuesType) => {
    try {
      const formParams = formatFormValuesToBloodRoutine(values);
      formParams.type = '1';
      formParams.patientId = patientId;
      formParams.dataId = hospitalRecordsId;

      let res: API.ApiResult;
      if (bloodRoutineId) {
        res = await put_bloodRoutine({ ...formParams, id: bloodRoutineId });
      } else {
        res = await post_bloodRoutine(formParams);
      }

      submitShowSuccess(res);
    } catch (error) {
      return false;
    }
    getBloodRoutineList();

    return true;
  };

  // 血沉
  const [esrId, setEsrId] = useState();
  const [modalESR, setmodalESR] = useState(false);
  const [esrList, setESRList] = useState([]);
  const esrForm = useRef<FormInstance>();

  const { run: getESRList } = useRequest(
    () => post_detectItem_value_list({ type: 1, dataId: hospitalRecordsId, detectType: 101 }),
    { formatResult: formatListToRecordCardData, onSuccess: (d) => setESRList(d) },
  );

  const { run: getESRInfo } = useRequest((key) => get_detectItem_value_$id$({ id: key }), {
    formatResult: formatCheckInfoToFormValues,
    manual: true,
    onSuccess: (d) => {
      setEsrId(d?.id);
      esrForm.current?.setFieldsValue(d);
    },
  });

  const submitESR = async (values: FormValuesType) => {
    try {
      const formParams = formatFormValuesToESR(values);
      formParams.detectType = 101;
      formParams.type = '1';
      formParams.patientId = patientId;
      formParams.dataId = hospitalRecordsId;

      let res: API.ApiResult;
      if (esrId) {
        res = await put_detectItem_value({ ...formParams, id: esrId });
      } else {
        res = await post_detectItem_value(formParams);
      }

      submitShowSuccess(res);
      getESRList();
    } catch (error) {
      return false;
    }

    return true;
  };

  // 凝血常规
  const [clottingId, setClottingId] = useState();
  const [clottingList, setClottingList] = useState([]);
  const [modalCoagulation, setModalCoagulation] = useState(false);
  const coagulationForm = useRef<FormInstance>();

  const { run: getClottingList } = useRequest(
    () => post_clottingRoutine_list({ type: 1, dataId: hospitalRecordsId }),
    { formatResult: formatListToRecordCardData, onSuccess: (d) => setClottingList(d) },
  );

  const { run: getClottingInfo } = useRequest((key) => get_clottingRoutine_$id$({ id: key }), {
    formatResult: formatCheckInfoToFormValues,
    manual: true,
    onSuccess: (d) => {
      setClottingId(d?.id);
      coagulationForm.current?.setFieldsValue(d);
    },
  });

  const submitCoagulation = async (values: FormValuesType) => {
    try {
      const formParams = formatFormValuesToESR(values);
      formParams.type = '1';
      formParams.patientId = patientId;
      formParams.dataId = hospitalRecordsId;

      let res: API.ApiResult;
      if (clottingId) {
        res = await put_bloodRoutine({ ...formParams, id: clottingId });
      } else {
        res = await post_bloodRoutine(formParams);
      }

      submitShowSuccess(res);
      getClottingList();
    } catch (error) {
      return false;
    }

    return true;
  };

  // 生化全项
  const [biochemistryId, setBiochemistryId] = useState<number>();
  const [biochemistryList, setBiochemistryList] = useState([]);
  const [modalBiochemistry, setModalBiochemistry] = useState(false);
  const biochemistryForm = useRef<FormInstance>();

  const { run: getBiochemistryList } = useRequest(
    () => post_biochemicalFullItem_list({ type: 1, dataId: hospitalRecordsId }),
    { formatResult: formatListToRecordCardData, onSuccess: (d) => setBiochemistryList(d) },
  );
  const { run: getBiochemistryInfo } = useRequest(
    (key) => get_biochemicalFullItem_$id$({ id: key }),
    {
      formatResult: formatCheckInfoToFormValues,
      manual: true,
      onSuccess: (d) => {
        setBiochemistryId(d?.id);
        biochemistryForm.current?.setFieldsValue(d);
      },
    },
  );

  const submitBiochemistry = async (values: FormValuesType) => {
    try {
      const formParams = formatFormValuesToESR(values);
      formParams.type = '1';
      formParams.patientId = patientId;
      formParams.dataId = hospitalRecordsId || '';

      let res: API.ApiResult;
      if (biochemistryId) {
        res = await put_biochemicalFullItem({ ...formParams, id: biochemistryId });
      } else {
        res = await post_biochemicalFullItem(formParams);
      }
      submitShowSuccess(res);
      getBiochemistryList();
    } catch (error) {
      return false;
    }

    return true;
  };

  /** 检测类型: 501-24小时心电监测（Holter）, 502-心脏超声, 503-颅脑计算机 X 线体层摄影(CT), 504-磁共振灌注成像(ASL), 505-磁共振(DTI), 506-眼底OCTA, 507-眼底照相; */

  const submitSingleResultForm = async (values: FormValuesType, detectType: number) => {
    try {
      const formParams = formatFormValuesToECG(values);
      formParams.type = '1';
      formParams.detectType = detectType;
      formParams.patientId = patientId;
      formParams.dataId = hospitalRecordsId;
      const ids = {
        501: holterId,
        502: TTEId,
        503: CTId,
        504: ASLId,
        505: DTIId,
        506: OCTAId,
        507: RetCamId,
      };
      const currentId = ids[detectType];

      let res: API.ApiResult;
      if (currentId) {
        res = await put_detectItem_outcome({ ...formParams, id: currentId });
      } else {
        res = await post_detectItem_outcome(formParams);
      }
      submitShowSuccess(res);
    } catch (error) {
      return false;
    }
    const callbacks = {
      501: getHolterList,
      502: getTTEList,
      503: getCTList,
      504: getASLList,
      505: getDTIList,
      506: getOCTAList,
      507: getRetCamList,
    };

    callbacks[detectType]!();

    return true;
  };

  /** 检测类型: 401-颈部血管彩超检查, 402-锁骨下动脉彩超检查, 403-磁共振血管成像(MRA), 404-磁共振弥散成像（DWI）, 405-CT 血管造影(CTA), 406-CT灌注成像（CTP） */
  const submitMultipleSingleForm = async (values: FormValuesType, detectType: number) => {
    const ids = { 401: CDUId, 402: arteriaId, 403: mraId, 404: DWIId, 405: CTAId, 406: CTPId };
    const currentId = ids[detectType];

    try {
      const formParams = formatFormValuesToDetectItemMultipleSingle(values);
      formParams.type = '1';
      formParams.detectType = detectType;
      formParams.patientId = patientId;
      formParams.dataId = hospitalRecordsId;

      let res: API.ApiResult;
      if (currentId) {
        res = await put_detectItem_multipleSingle({ ...formParams, id: currentId });
      } else {
        res = await post_detectItem_multipleSingle(formParams);
      }
      submitShowSuccess(res);
    } catch (error) {
      return false;
    }

    const callbacks = {
      401: getCDUList,
      402: getArteriaList,
      403: getMraList,
      404: getDWIList,
      405: getCTAList,
      406: getCTPList,
    };

    callbacks[detectType]!();

    return true;
  };

  // 301-颅脑核磁共振(MRI)
  const [MRIId, setMRIId] = useState<number>();
  const [MRIList, setMRIList] = useState([]);
  const [modalMRI, setModalMRI] = useState(false);
  const MRIFormRef = useRef<FormInstance>();

  const { run: getMRIList } = useRequest(
    () => post_detectItem_multiple_list({ type: 1, dataId: hospitalRecordsId, detectType: 301 }),
    { formatResult: formatListToRecordCardData, onSuccess: (d) => setMRIList(d) },
  );
  const { run: getMRIInfo } = useRequest((key) => get_detectItem_multiple_$id$({ id: key }), {
    formatResult: formatCheckInfoToFormValues,
    manual: true,
    onSuccess: (d) => {
      setMRIId(d?.id);
      MRIFormRef.current?.setFieldsValue(d);
    },
  });

  // 301-颅脑核磁共振(MRI)
  const submitMultipleDetectItem = async (values: FormValuesType, detectType: number) => {
    try {
      const formParams = formatFormValuesToESR(values);
      formParams.type = '1';
      formParams.detectType = detectType;
      formParams.patientId = patientId;
      formParams.dataId = hospitalRecordsId;
      const ids = { 301: MRIId };
      const currentId = ids[detectType];

      let res: API.ApiResult;
      if (currentId) {
        res = await put_detectItem_multiple({ ...formParams, id: currentId });
      } else {
        res = await post_detectItem_multiple(formParams);
      }
      submitShowSuccess(res);
    } catch (error) {
      return false;
    }

    const callbacks = { 301: getMRIList };
    callbacks[detectType]!();

    return true;
  };

  /** 检测类型: 201-经颅多普勒检查, 202-颅内血管高分辨磁共振成像(HMR), 203-尿流动力学检查, 204-下肢静脉血管超声 */
  const submitDetectSingleForm = async (values: FormValuesType, detectType: number) => {
    try {
      const ids = { 201: TCDId, 202: HMRId, 203: urodynamicId, 204: LLVId };
      const currentId = ids[detectType];
      const formParams = formatFormValuesToDetectItemMultipleSingle(values);
      formParams.type = '1';
      formParams.detectType = detectType;
      formParams.patientId = patientId;
      formParams.dataId = hospitalRecordsId;

      let res: API.ApiResult;
      if (currentId) {
        res = await put_detectItem_single({ ...formParams, id: currentId });
      } else {
        res = await post_detectItem_single(formParams);
      }
      submitShowSuccess(res);
    } catch (error) {
      return false;
    }

    const callbacks = {
      201: getTCDList,
      202: getHMRList,
      203: getUroList,
      204: getLLVList,
    };
    callbacks[detectType]();

    return true;
  };

  // 磁共振磁敏感成像(SWI)
  const [SWIId, setSWIId] = useState<number>();
  const [SWIList, setSWIList] = useState([]);
  const [modalSWI, setModalSWI] = useState(false);
  const SWIFormRef = useRef<FormInstance>();

  const { run: getSWIList } = useRequest(
    () => post_swi_list({ type: 1, dataId: hospitalRecordsId }),
    { formatResult: formatListToRecordCardData, onSuccess: (d) => setSWIList(d) },
  );
  const { run: getSWIInfo } = useRequest((key) => get_swi_$id$({ id: key }), {
    formatResult: formatCheckInfoToFormValues,
    manual: true,
    onSuccess: (d) => {
      setSWIId(d?.id);
      SWIFormRef.current?.setFieldsValue(d);
    },
  });

  const submitSWI = async (values: FormValuesType) => {
    try {
      const formParams = formatFormValuesToESR(values);
      formParams.type = '1';
      formParams.patientId = patientId;
      formParams.dataId = hospitalRecordsId;

      let res: API.ApiResult;
      if (SWIId) {
        res = await put_swi({ ...formParams, id: SWIId });
      } else {
        res = await post_swi(formParams);
      }

      submitShowSuccess(res);
    } catch (error) {
      return false;
    }
    getSWIList();
    return true;
  };

  const collapseCardProps = { collapsible: true, defaultCollapsed: true };

  return (
    <>
      <ProCard
        {...collapseCardProps}
        title="血常规"
        extra={
          <ModalForm
            layout="horizontal"
            labelCol={{ span: 6 }}
            title="血常规"
            initialValues={{ images: fileList }}
            trigger={
              <Button type="primary">
                <PlusOutlined />
                新建表单
              </Button>
            }
            formRef={bloodRoutineForm}
            onVisibleChange={setModalBloodRoutine}
            visible={modalBloodRoutine}
            onFinish={submitBloodRoutine}
          >
            <BloodRoutineForm />
          </ModalForm>
        }
      >
        <RecordCard
          data={bloodRoutineList}
          handleEditClick={(key) => {
            getBloodRoutineInfo(key);
            setModalBloodRoutine(true);
          }}
        />
      </ProCard>

      <ProCard
        {...collapseCardProps}
        title="血沉"
        extra={
          <ModalForm
            layout="horizontal"
            labelCol={{ span: 6 }}
            title="血沉"
            initialValues={{ images: fileList }}
            trigger={
              <Button type="primary">
                <PlusOutlined />
                新建表单
              </Button>
            }
            formRef={esrForm}
            onVisibleChange={setmodalESR}
            visible={modalESR}
            onFinish={submitESR}
          >
            <ESRForm />
          </ModalForm>
        }
      >
        <RecordCard
          data={esrList}
          handleEditClick={(key) => {
            getESRInfo(key);
            setmodalESR(true);
          }}
        />
      </ProCard>

      <ProCard
        {...collapseCardProps}
        title="凝血常规"
        extra={
          <ModalForm
            layout="horizontal"
            labelCol={{ span: 6 }}
            title="凝血常规"
            initialValues={{ images: fileList }}
            trigger={
              <Button type="primary">
                <PlusOutlined />
                新建凝血常规
              </Button>
            }
            onFinish={submitCoagulation}
            formRef={coagulationForm}
            onVisibleChange={setModalCoagulation}
            visible={modalCoagulation}
          >
            <CoagulationForm />
          </ModalForm>
        }
      >
        <RecordCard
          data={clottingList}
          handleEditClick={(key) => {
            getClottingInfo(key);
            setModalCoagulation(true);
          }}
        />
      </ProCard>
      <ProCard
        {...collapseCardProps}
        title="生化全项"
        extra={
          <ModalForm
            layout="horizontal"
            title="生化全项"
            initialValues={{ images: fileList }}
            trigger={
              <Button type="primary">
                <PlusOutlined />
                新建生化全项
              </Button>
            }
            modalProps={{ width: 1200 }}
            onFinish={submitBiochemistry}
            formRef={biochemistryForm}
            onVisibleChange={setModalBiochemistry}
            visible={modalBiochemistry}
          >
            <BiochemistryForm />
          </ModalForm>
        }
      >
        <RecordCard
          data={biochemistryList}
          handleEditClick={(key) => {
            getBiochemistryInfo(key);
            setModalBiochemistry(true);
          }}
        />
      </ProCard>
      <ProCard
        {...collapseCardProps}
        title="炎症介质"
        extra={
          <ModalForm
            layout="horizontal"
            title="炎症介质"
            initialValues={{ images: fileList }}
            trigger={
              <Button type="primary">
                <PlusOutlined />
                新建炎症介质
              </Button>
            }
            onFinish={submitInflammation}
            formRef={inflammationForm}
            onVisibleChange={setModalInflammation}
            visible={modalInflammation}
          >
            <InflammationForm />
          </ModalForm>
        }
      >
        <RecordCard
          data={inflammationList}
          handleEditClick={(key) => {
            getInflationInfo(key);
            setModalInflammation(true);
          }}
        />
      </ProCard>

      <ProCard
        {...collapseCardProps}
        title="糖化血红蛋白"
        extra={
          <ModalForm
            layout="horizontal"
            title="糖化血红蛋白"
            initialValues={{ images: fileList }}
            trigger={
              <Button type="primary">
                <PlusOutlined />
                新建糖化血红蛋白
              </Button>
            }
            onFinish={submitHBALC}
            formRef={HBALFormRef}
            onVisibleChange={setModalHBAL}
            visible={modalHBAL}
          >
            <HBALCForm />
          </ModalForm>
        }
      >
        <RecordCard
          data={HBALCList}
          handleEditClick={(key) => {
            getHbalcInfo(key);
            setModalHBAL(true);
          }}
        />
      </ProCard>

      <ProCard
        {...collapseCardProps}
        title="血脂十三项"
        extra={
          <ModalForm
            layout="horizontal"
            title="特殊实验室检查（血脂十三项）"
            initialValues={{ images: fileList }}
            trigger={
              <Button type="primary">
                <PlusOutlined />
                新建血脂十三项
              </Button>
            }
            onFinish={submitThirteenLipid}
            formRef={thirteenLipidFormRef}
            onVisibleChange={setModalThirteenLipid}
            visible={modalThirteenLipid}
          >
            <ThirteenLipidForm />
          </ModalForm>
        }
      >
        <RecordCard
          data={thirteenLipidList}
          handleEditClick={(key) => {
            thirteenLipidInfo(key);
            setModalThirteenLipid(true);
          }}
        />
      </ProCard>
      <ProCard
        {...collapseCardProps}
        title="抗血小板药物基因检测"
        extra={
          <ModalForm
            layout="horizontal"
            title="抗血小板药物基因检测"
            initialValues={{
              aspirinImages: fileList,
              clopidogrelImages: fileList,
              statinsImages: fileList,
            }}
            trigger={
              <Button type="primary">
                <PlusOutlined />
                新建抗血小板药物基因检测
              </Button>
            }
            onFinish={submitAntiplatele}
            formRef={antiplateletFormRef}
            onVisibleChange={setModalAntiplatele}
            visible={modalAntiplatele}
          >
            <AntiplateletForm />
          </ModalForm>
        }
      >
        <RecordCard
          data={antiplateleList}
          handleEditClick={(key) => {
            antiplateleInfo(key);
            setModalAntiplatele(true);
          }}
        />
      </ProCard>
      <ProCard
        {...collapseCardProps}
        title="甲功"
        extra={
          <ModalForm
            layout="horizontal"
            title="甲功"
            initialValues={{
              images: fileList,
            }}
            trigger={
              <Button type="primary">
                <PlusOutlined />
                新建甲功
              </Button>
            }
            onFinish={submitThyroid}
            formRef={thyroidFormRef}
            onVisibleChange={setModalThyroid}
            visible={modalThyroid}
          >
            <ThyroidForm />
          </ModalForm>
        }
      >
        <RecordCard
          data={thyroidList}
          handleEditClick={(key) => {
            thyroidInfo(key);
            setModalThyroid(true);
          }}
        />
      </ProCard>
      <ProCard
        {...collapseCardProps}
        title="心电图"
        extra={
          <ModalForm
            layout="horizontal"
            title="心电图"
            initialValues={{
              images: fileList,
            }}
            trigger={
              <Button type="primary">
                <PlusOutlined />
                新建心电图
              </Button>
            }
            onFinish={submitECG}
            formRef={ECGFormRef}
            onVisibleChange={setModalECG}
            visible={modalECG}
          >
            <ECGForm />
          </ModalForm>
        }
      >
        <RecordCard
          data={ecgList}
          handleEditClick={(key) => {
            ecgInfo(key);
            setModalECG(true);
          }}
        />
      </ProCard>

      <ProCard
        {...collapseCardProps}
        title="24小时心电监测(Holter)"
        extra={
          <ModalForm
            layout="horizontal"
            title="24小时心电监测(Holter)"
            initialValues={{
              images: fileList,
            }}
            trigger={
              <Button type="primary">
                <PlusOutlined />
                24小时心电监测(Holter)
              </Button>
            }
            onFinish={(values) => submitSingleResultForm(values, 501)}
            formRef={holterFormRef}
            onVisibleChange={setModalHolter}
            visible={modalHolter}
          >
            <SingleResultForm />
          </ModalForm>
        }
      >
        <RecordCard
          data={holterList}
          handleEditClick={(key) => {
            holterInfo(key);
            setModalHolter(true);
          }}
        />
      </ProCard>

      <ProCard
        {...collapseCardProps}
        title="心脏超声"
        extra={
          <ModalForm
            layout="horizontal"
            title="心脏超声"
            initialValues={{
              images: fileList,
            }}
            trigger={
              <Button type="primary">
                <PlusOutlined />
                新建心脏超声
              </Button>
            }
            onFinish={(values) => submitSingleResultForm(values, 502)}
            formRef={TTEFormRef}
            onVisibleChange={setModalTTE}
            visible={modalTTE}
          >
            <SingleResultForm />
          </ModalForm>
        }
      >
        <RecordCard
          data={tteList}
          handleEditClick={(key) => {
            tteInfo(key);
            setModalTTE(true);
          }}
        />
      </ProCard>
      <ProCard
        {...collapseCardProps}
        title="颈部血管彩超检查"
        extra={
          <ModalForm
            layout="horizontal"
            title="颈部血管彩超检查"
            initialValues={{
              images: fileList,
              list: Array(4).fill({ checked: null }),
            }}
            trigger={
              <Button type="primary">
                <PlusOutlined />
                新建颈部血管彩超检查
              </Button>
            }
            onFinish={(values) => submitMultipleSingleForm(values, 401)}
            formRef={CDUFormRef}
            onVisibleChange={setModalCDU}
            visible={modalCDU}
          >
            <CarotidDuplexForm />
          </ModalForm>
        }
      >
        <RecordCard
          data={cduList}
          handleEditClick={(key) => {
            cduInfo(key);
            setModalCDU(true);
          }}
        />
      </ProCard>

      <ProCard
        {...collapseCardProps}
        title="锁骨下动脉彩超检查"
        extra={
          <ModalForm
            layout="horizontal"
            title="锁骨下动脉彩超检查"
            initialValues={{
              images: fileList,
              list: Array(2).fill(null),
            }}
            trigger={
              <Button type="primary">
                <PlusOutlined />
                新建锁骨下动脉彩超检查
              </Button>
            }
            onFinish={(values) => submitMultipleSingleForm(values, 402)}
            formRef={arteriaIdFormRef}
            onVisibleChange={setModalArteria}
            visible={modalArteria}
          >
            <ClavicleForm />
          </ModalForm>
        }
      >
        <RecordCard
          data={arteriaList}
          handleEditClick={(key) => {
            arteriaInfo(key);
            setModalArteria(true);
          }}
        />
      </ProCard>
      <ProCard
        {...collapseCardProps}
        title="经颅多普勒检查"
        extra={
          <ModalForm
            layout="horizontal"
            title="经颅多普勒检查"
            initialValues={{
              images: fileList,
              list: Array(1).fill(null),
            }}
            trigger={
              <Button type="primary">
                <PlusOutlined />
                新建经颅多普勒检查
              </Button>
            }
            onFinish={(values) => submitDetectSingleForm(values, 201)}
            formRef={TCDFormRef}
            onVisibleChange={setModalTCD}
            visible={modalTCD}
          >
            <TCDForm />
          </ModalForm>
        }
      >
        <RecordCard
          data={TCDList}
          handleEditClick={(key) => {
            getTCDInfo(key);
            setModalTCD(true);
          }}
        />
      </ProCard>
      <ProCard
        {...collapseCardProps}
        title="颅脑计算机 X 线体层摄影(CT)"
        extra={
          <ModalForm
            layout="horizontal"
            title="颅脑计算机 X 线体层摄影(CT)"
            initialValues={{
              images: fileList,
            }}
            trigger={
              <Button type="primary">
                <PlusOutlined />
                颅脑计算机 X 线体层摄影(CT)
              </Button>
            }
            onFinish={(values) => submitSingleResultForm(values, 503)}
            formRef={CTFormRef}
            onVisibleChange={setModalCT}
            visible={modalCT}
          >
            <SingleResultForm />
          </ModalForm>
        }
      >
        <RecordCard
          data={CTList}
          handleEditClick={(key) => {
            getCTInfo(key);
            setModalCT(true);
          }}
        />
      </ProCard>
      <ProCard
        {...collapseCardProps}
        title="颅脑核磁共振(MRI)"
        extra={
          <ModalForm
            layout="horizontal"
            title="颅脑核磁共振(MRI)"
            initialValues={{
              images: fileList,
              list: Array(1).fill(null),
            }}
            trigger={
              <Button type="primary">
                <PlusOutlined />
                新建颅脑核磁共振(MRI)
              </Button>
            }
            onFinish={(values) => submitMultipleDetectItem(values, 301)}
            formRef={MRIFormRef}
            visible={modalMRI}
            onVisibleChange={setModalMRI}
          >
            <MRIForm />
          </ModalForm>
        }
      >
        <RecordCard
          data={MRIList}
          handleEditClick={(key) => {
            getMRIInfo(key);
            setModalMRI(true);
          }}
        />
      </ProCard>
      <ProCard
        {...collapseCardProps}
        title="磁共振血管成像(MRA)"
        extra={
          <ModalForm
            layout="horizontal"
            title="磁共振血管成像(MRA)"
            initialValues={{
              images: fileList,
              list: Array(8).fill({ checked: null }),
            }}
            trigger={
              <Button type="primary">
                <PlusOutlined />
                磁共振血管成像(MRA)
              </Button>
            }
            onFinish={(values) => submitMultipleSingleForm(values, 403)}
            formRef={mraFormRef}
            onVisibleChange={setModalMRA}
            visible={modalMRA}
          >
            <MRAForm />
          </ModalForm>
        }
      >
        <RecordCard
          data={mraList}
          handleEditClick={(key) => {
            getMRAInfo(key);
            setModalMRA(true);
          }}
        />
      </ProCard>
      <ProCard
        {...collapseCardProps}
        title="磁共振弥散成像（DWI）"
        extra={
          <ModalForm
            layout="horizontal"
            title="磁共振弥散成像（DWI）"
            initialValues={{
              images: fileList,
              list: Array(4).fill(null),
            }}
            trigger={
              <Button type="primary">
                <PlusOutlined />
                磁共振弥散成像（DWI）
              </Button>
            }
            onFinish={(values) => submitMultipleSingleForm(values, 404)}
            formRef={DWIFormRef}
            onVisibleChange={setModalDWI}
            visible={modalDWI}
          >
            <DWIForm />
          </ModalForm>
        }
      >
        <RecordCard
          data={DWIList}
          handleEditClick={(key) => {
            getDWIInfo(key);
            setModalDWI(true);
          }}
        />
      </ProCard>
      <ProCard
        {...collapseCardProps}
        title="磁共振磁敏感成像(SWI)"
        extra={
          <ModalForm
            layout="horizontal"
            title="磁共振磁敏感成像(SWI)"
            initialValues={{
              images: fileList,
            }}
            trigger={
              <Button type="primary">
                <PlusOutlined />
                磁共振磁敏感成像(SWI)
              </Button>
            }
            onFinish={submitSWI}
            formRef={SWIFormRef}
            onVisibleChange={setModalSWI}
            visible={modalSWI}
          >
            <SWIForm />
          </ModalForm>
        }
      >
        <RecordCard
          data={SWIList}
          handleEditClick={(key) => {
            getSWIInfo(key);
            setModalSWI(true);
          }}
        />
      </ProCard>
      <ProCard
        {...collapseCardProps}
        title="磁共振灌注成像(ASL)"
        extra={
          <ModalForm
            layout="horizontal"
            title="磁共振灌注成像(ASL)"
            initialValues={{
              images: fileList,
            }}
            trigger={
              <Button type="primary">
                <PlusOutlined />
                磁共振灌注成像(ASL)
              </Button>
            }
            onFinish={(values) => submitSingleResultForm(values, 504)}
            formRef={ASLFormRef}
            onVisibleChange={setModalASL}
            visible={modalASL}
          >
            <SingleResultForm />
          </ModalForm>
        }
      >
        <RecordCard
          data={ASLList}
          handleEditClick={(key) => {
            getASLInfo(key);
            setModalASL(true);
          }}
        />
      </ProCard>
      <ProCard
        {...collapseCardProps}
        title="磁共振(DTI)"
        extra={
          <ModalForm
            layout="horizontal"
            title="磁共振(DTI)"
            initialValues={{
              images: fileList,
            }}
            trigger={
              <Button type="primary">
                <PlusOutlined />
                磁共振(DTI)
              </Button>
            }
            onFinish={(values) => submitSingleResultForm(values, 505)}
            formRef={DTIFormRef}
            onVisibleChange={setModalDTI}
            visible={modalDTI}
          >
            <SingleResultForm />
          </ModalForm>
        }
      >
        <RecordCard
          data={DTIList}
          handleEditClick={(key) => {
            getDTIInfo(key);
            setModalDTI(true);
          }}
        />
      </ProCard>

      <ProCard
        {...collapseCardProps}
        title="颅内血管高分辨磁共振成像(HMR)"
        extra={
          <ModalForm
            layout="horizontal"
            title="颅内血管高分辨磁共振成像(HMR)"
            initialValues={{
              images: fileList,
            }}
            trigger={
              <Button type="primary">
                <PlusOutlined />
                新建颅内血管高分辨磁共振成像(HMR)
              </Button>
            }
            onFinish={(values) => submitDetectSingleForm(values, 202)}
            formRef={HMRFormRef}
            onVisibleChange={setModalHMR}
            visible={modalHMR}
          >
            <HMRForm />
          </ModalForm>
        }
      >
        <RecordCard
          data={HMRList}
          handleEditClick={(key) => {
            getHMRInfo(key);
            setModalHMR(true);
          }}
        />
      </ProCard>
      <ProCard
        {...collapseCardProps}
        title="CT 血管造影(CTA)"
        extra={
          <ModalForm
            layout="horizontal"
            title="CT 血管造影(CTA)"
            initialValues={{
              images: fileList,
              list: Array(11).fill({ checked: null }),
            }}
            trigger={
              <Button type="primary">
                <PlusOutlined />
                新建CT 血管造影(CTA)
              </Button>
            }
            onFinish={(values) => submitMultipleSingleForm(values, 405)}
            formRef={CTAFormRef}
            onVisibleChange={setModalCTA}
            visible={modalCTA}
          >
            <CTAForm />
          </ModalForm>
        }
      >
        <RecordCard
          data={CTAList}
          handleEditClick={(key) => {
            getCTAInfo(key);
            setModalCTA(true);
          }}
        />
      </ProCard>
      <ProCard
        {...collapseCardProps}
        title="CT灌注成像（CTP）"
        extra={
          <ModalForm
            layout="horizontal"
            title="CT灌注成像（CTP）"
            initialValues={{
              images: fileList,
              list: Array(4).fill({ checked: null }),
            }}
            trigger={
              <Button type="primary">
                <PlusOutlined />
                新建 CT灌注成像（CTP）
              </Button>
            }
            onFinish={(values) => submitMultipleSingleForm(values, 406)}
            formRef={CTPFormRef}
            onVisibleChange={setModalCTP}
            visible={modalCTP}
          >
            <CTPForm />
          </ModalForm>
        }
      >
        <RecordCard
          data={CTPList}
          handleEditClick={(key) => {
            getCTPInfo(key);
            setModalCTP(true);
          }}
        />
      </ProCard>

      <ProCard
        {...collapseCardProps}
        title="尿流动力学检查"
        extra={
          <ModalForm
            layout="horizontal"
            title="尿流动力学检查"
            initialValues={{
              images: fileList,
            }}
            trigger={
              <Button type="primary">
                <PlusOutlined />
                新建尿流动力学检查
              </Button>
            }
            onFinish={(values) => submitDetectSingleForm(values, 203)}
            formRef={urodynamicFormRef}
            onVisibleChange={setModalUrodynamic}
            visible={modalUrodynamic}
          >
            <UrodynamicForm />
          </ModalForm>
        }
      >
        <RecordCard
          data={uroList}
          handleEditClick={(key) => {
            getUroInfo(key);
            setModalUrodynamic(true);
          }}
        />
      </ProCard>
      <ProCard
        {...collapseCardProps}
        title="下肢静脉血管超声"
        extra={
          <ModalForm
            layout="horizontal"
            title="下肢静脉血管超声"
            initialValues={{
              images: fileList,
            }}
            trigger={
              <Button type="primary">
                <PlusOutlined />
                新建下肢静脉血管超声
              </Button>
            }
            onFinish={(values) => submitDetectSingleForm(values, 204)}
            formRef={LLVFormRef}
            onVisibleChange={setModalLL}
            visible={modalLL}
          >
            <LowerLimbForm />
          </ModalForm>
        }
      >
        <RecordCard
          data={LLVList}
          handleEditClick={(key) => {
            getLLVInfo(key);
            setModalLL(true);
          }}
        />
      </ProCard>

      <ProCard
        {...collapseCardProps}
        title="眼底OCTA"
        extra={
          <ModalForm
            layout="horizontal"
            title="眼底OCTA"
            initialValues={{
              images: fileList,
            }}
            trigger={
              <Button type="primary">
                <PlusOutlined />
                眼底OCTA
              </Button>
            }
            onFinish={(values) => submitSingleResultForm(values, 506)}
            formRef={OCTAFormRef}
            onVisibleChange={setModalOCTA}
            visible={modalOCTA}
          >
            <SingleResultForm />
          </ModalForm>
        }
      >
        <RecordCard
          data={OCTAList}
          handleEditClick={(key) => {
            getOCTAInfo(key);
            setModalOCTA(true);
          }}
        />
      </ProCard>
      <ProCard
        {...collapseCardProps}
        title="眼底照相"
        extra={
          <ModalForm
            layout="horizontal"
            title="眼底照相"
            initialValues={{
              images: fileList,
            }}
            trigger={
              <Button type="primary">
                <PlusOutlined />
                眼底照相
              </Button>
            }
            onFinish={(values) => submitSingleResultForm(values, 507)}
            formRef={OCTAFormRef}
            onVisibleChange={setModalRetCam}
            visible={modalRetCam}
          >
            <SingleResultForm />
          </ModalForm>
        }
      >
        <RecordCard
          data={RetCamList}
          handleEditClick={(key) => {
            getRetCamInfo(key);
            setModalRetCam(true);
          }}
        />
      </ProCard>
    </>
  );
};

export default Checks;
