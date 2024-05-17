export const routers = [
  {
    title: '智慧市政',
    name: 'civicism',
    routeName: 'SmartCity',
    modules: [
      {
        title: '工单任务',
        name: 'task',
        routeName: 'WorkTask',
      },
      {
        title: '巡查任务',
        name: 'inspect',
        routeName: 'FacilitySafeTask',
      },
      {
        title: '设施地图',
        name: 'facility-map',
        routeName: 'FacilityMap',
      },
      {
        title: '领导看板',
        name: 'board',
        routeName: 'LeaderBoard',
      },
    ],
  },
  {
    title: '智慧环卫',
    name: 'sanitation',
    routeName: 'Sanitation',
    modules: [
      {
        title: '公厕考勤',
        name: 'punch',
        routeName: 'SanitationPunch',
      },
      {
        title: '道路保洁',
        name: 'road',
        routeName: 'SanitationRoad',
      },
      {
        title: '分类督导',
        name: 'supervision',
        routeName: 'SanitationSupervision',
      },
    ],
  },
  {
    title: '智慧园林',
    name: 'garden',
    routeName: 'Garden',
    modules: [
      {
        title: '园林养护',
        name: 'maintain',
        routeName: 'MaintainTask',
      },
      {
        title: '风险排查',
        name: 'risk-task',
        routeName: 'RiskTask',
      },
      {
        title: '数据查询',
        name: 'garden-map',
        routeName: 'GardenData',
      },
    ],
  },
  {
    title: '运行监测',
    name: 'monitor',
    routeName: 'Monitor',
    modules: [
      {
        title: '防汛审核',
        name: 'check',
        routeName: 'MonitorCheck',
      },
      {
        title: '待办任务',
        name: 'todo',
        routeName: 'MonitorTodo',
      },
      {
        title: '实时监测',
        name: 'facility',
        routeName: 'MonitorFacility',
      },
      {
        title: '预警查询',
        name: 'warning',
        routeName: 'MonitorWarning',
      },
    ],
  },
]
