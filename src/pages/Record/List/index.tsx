import { useRef } from 'react';
import { ExclamationCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, message, Modal } from 'antd';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Link } from 'umi';
import { post_patient_page, put_patient } from '@/services/api';

const { confirm } = Modal;

function showDeleteConfirm(id: string, callback: () => void) {
  confirm({
    title: '确定删除记录？',
    icon: <ExclamationCircleOutlined />,
    okText: '确定',
    okType: 'danger',
    cancelText: '取消',
    onOk: async () => {
      const res = await put_patient({ id, deleted: 1 });
      if (res.code === 200) {
        message.success('删除成功！');
        callback();
      }
    },
  });
}
const columns: ProColumns<API.Patient>[] = [
  {
    title: '患者ID',
    dataIndex: 'id',
    render: (t) => <Link to={`/patient/record/detail${t}`}>{t}</Link>,
  },
  { title: '姓名', dataIndex: 'userName' },
  { title: '年龄', dataIndex: 'age', search: false },
  {
    title: '性别',
    dataIndex: 'sex',
    valueEnum: {
      0: {
        text: '女',
      },
      1: {
        text: '男',
      },
    },
  },
  {
    title: '民族',
    dataIndex: 'nation',
    valueEnum: {
      0: {
        text: '汉族',
      },
      1: {
        text: '少数民族',
      },
    },
    render: (t, record) => ['汉族', '少数民族', '-'][record.nation?.split(',')[0] ?? 2],
  },
  { title: '电话号码', dataIndex: 'phoneNumber', search: false },
  {
    title: '操作',
    valueType: 'option',
    render: (text, record, _, action) => [
      <Link to={`/patient/record/edit${record.id}`} key="edit">
        编辑
      </Link>,
      <Link to={`/patient/record/detail${record.id}`} key="detail">
        查看
      </Link>,
      <a onClick={() => showDeleteConfirm(record.id ?? '', () => action?.reload())} key="delete">
        删除
      </a>,
    ],
  },
];

export default () => {
  const actionRef = useRef<ActionType>();
  return (
    <ProTable<API.Patient>
      columns={columns}
      actionRef={actionRef}
      request={async ({ current, pageSize, ...other }) => {
        const res = await post_patient_page(
          { pageCurrent: current ? current - 1 : 0, pageSize },
          { deleted: 0, ...other },
        );
        if (res.code === 200) {
          const { data } = res;
          return { data: data.data, total: data.count, success: true };
        }
        return { data: [], total: 0, success: false };
      }}
      editable={{
        type: 'multiple',
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto',
      }}
      pagination={{
        pageSize: 10,
      }}
      dateFormatter="string"
      toolBarRender={() => [
        <Link to="/patient/record/add">
          <Button key="button" icon={<PlusOutlined />} type="primary">
            新建患者档案
          </Button>
        </Link>,
      ]}
    />
  );
};
