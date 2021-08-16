const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Default.vue'),
    children: [
      {
        path: '',
        name: 'statements.index',
        meta: { title: 'Comunicados' },
        component: () => import('@/pages/statements/Index.vue'),
      },
      {
        path: 'visualizar/:id',
        name: 'statements.show',
        meta: { title: 'Visualizar Comunicado' },
        component: () => import('@/pages/statements/Show.vue'),
      },
    ],
  },
];

export default routes;
