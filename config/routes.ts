export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
    ],
  },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   icon: 'crown',
  //   access: 'canAdmin',
  //   component: './Admin',
  //   routes: [
  //     {
  //       path: '/admin/sub-page',
  //       name: 'sub-page',
  //       icon: 'smile',
  //       component: './Welcome',
  //     },
  //   ],
  // },
  // { path: './', redirect: '/main' },
  // { path: '/main', name: 'main', component: './MainBoard', icon: 'DashboardOutlined' },
  {
    name: 'patient',
    path: '/patient',
    icon: 'DashboardOutlined',
    component: './Layout',
    routes: [
      {
        name: 'record',
        path: '/patient/record',
        routes: [
          { path: './', redirect: '/patient/record/list' },
          {
            name: 'add',
            hideInMenu: true,
            path: '/patient/record/add',
            component: './Record/Add',
          },
          {
            name: 'edit',
            hideInMenu: true,
            path: '/patient/record/edit:id',
            component: './Record/Add',
          },
          {
            name: 'detail',
            hideInMenu: true,
            path: '/patient/record/detail:id',
            component: './Record/Detail',
          },
          {
            name: 'list',
            hideInMenu: true,
            path: '/patient/record/list',
            component: './Record/List',
          },
        ],
      },
    ],
  },

  {
    name: 'case',
    path: '/case',
    component: './Layout',
    routes: [
      {
        name: 'case',
        path: '/case/case',
        routes: [
          { path: './', redirect: '/case/case/list' },
          {
            name: 'list',
            hideInMenu: true,
            path: '/case/case/list',
            component: './Case/List',
          },
          { name: 'add', hideInMenu: true, path: '/case/case/add', component: './Case/Add' },
          { name: 'edit', hideInMenu: true, path: '/case/case/edit:id', component: './Case/Add' },
          {
            name: 'detail',
            hideInMenu: true,
            path: '/case/case/detail/:patientId/:hospitalRecordsId',
            component: './Case/Detail',
          },
          {
            name: 'addCheck',
            hideInMenu: true,
            path: '/case/case/addCheck/:patientId/:hospitalRecordsId/:id',
            component: './Case/Add/CheckBodyForm',
          },
          {
            name: 'addDiagnose',
            hideInMenu: true,
            path: '/case/case/addDiagnose/:patientId/:hospitalRecordsId/:type',
            component: './Case/Add/DiagnoseForm',
          },
          {
            name: 'diagnose',
            hideInMenu: true,
            path: '/case/case/diagnose/:patientId/:hospitalRecordsId/:id/:type',
            component: './Case/Add/DiagnoseForm',
          },
          {
            name: 'addDischargeDiagnose',
            hideInMenu: true,
            path: '/case/case/addDischargeDiagnose/:patientId/:hospitalRecordsId/:type',
            component: './Case/Add/DischargeDiagnoseForm',
          },
          {
            name: 'dischargeDiagnose',
            hideInMenu: true,
            path: '/case/case/dischargeDiagnose/:patientId/:hospitalRecordsId/:id/:type',
            component: './Case/Add/DischargeDiagnoseForm',
          },
          {
            name: 'addEvent',
            hideInMenu: true,
            path: '/case/case/addEvent/:patientId/:hospitalRecordsId',
            component: './Case/Add/BloodVesselForm',
          },
          {
            name: 'blood',
            hideInMenu: true,
            path: '/case/case/blood/:id',
            component: './Case/Add/BloodVesselForm',
          },
          {
            name: 'event',
            hideInMenu: true,
            path: '/case/case/event/:patientId/:hospitalRecordsId/:id',
            component: './Case/Add/BloodVesselForm',
          },
          {
            name: 'addTreat',
            hideInMenu: true,
            path: '/case/case/addTreat/:patientId/:hospitalRecordsId',
            component: './Case/Add/CheckBodyForm',
          },
          {
            name: 'treat',
            hideInMenu: true,
            path: '/case/case/treat/:patientId/:hospitalRecordsId/:id',
            component: './Case/Add/TreatmentForm',
          },
          {
            name: 'addDischarge',
            hideInMenu: true,
            path: '/case/case/addDischarge/:patientId/:hospitalRecordsId',
            component: './Case/Add/DischargeCheckForm',
          },
          {
            name: 'discharge',
            hideInMenu: true,
            path: '/case/case/discharge/:patientId/:hospitalRecordsId/:id',
            component: './Case/Add/DischargeCheckForm',
          },
          {
            name: 'checks',
            hideInMenu: true,
            path: '/case/case/checks/:patientId/:hospitalRecordsId',
            component: './Case/Checks',
          },
          {
            name: 'checks',
            hideInMenu: true,
            path: '/case/case/checkSearch',
            component: './Case/Checks/AdvancedSearchForm',
          },
          {
            name: 'addMedicine',
            hideInMenu: true,
            path: '/case/case/addMedicine/:patientId/:hospitalRecordsId',
            component: './Case/Add/MedicineForm',
          },
          {
            name: 'medicine',
            hideInMenu: true,
            path: '/case/case/medicine/:patientId/:hospitalRecordsId/:id',
            component: './Case/Add/MedicineForm',
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    path: '/',
    redirect: '/patient/record/list',
  },
  {
    name: 'follow',
    path: '/follow',
    icon: 'DashboardOutlined',
    routes: [
      { path: './', redirect: '/follow/follow' },
      {
        name: 'follow',

        path: '/follow/follow',
        routes: [
          { path: './', redirect: '/follow/follow/list' },
          {
            path: '/follow/follow/list',
            component: './Follow/List',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
