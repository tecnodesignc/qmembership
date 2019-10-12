//Layout container
import master from 'src/layouts/master'

//Middleware
import auth from '@imagina/quser/_router/middlewares/auth'
import access from '@imagina/quser/_router/middlewares/access'

export default {
  profiles: {
    permission: 'membership.profiles.manage',
    activated: true,
    path: '/membership/profiles/index',
    name: 'qmembership.admin.profiles.index',
    layout: require('@imagina/qmembership/_layouts/admin/profiles/index').default,
    containerLayout: master,
    title: 'qmembership.sidebar.adminPlaces',
    icon: 'fas fa-map-marked-alt',
    middleware: [auth,access]
  },

  profilesCreate: {
    permission: 'membership.profiles.create',
    activated: true,
    path: '/membership/profiles/create',
    name: 'qmembership.admin.profiles.create',
    layout: require('@imagina/qmembership/_layouts/admin/profiles/form').default,
    containerLayout: master,
    title: 'qmembership.sidebar.adminPlacesCreate',
    icon: 'fas fa-map-marked-alt',
    middleware: [auth,access]
  },

  profilesUpdate: {
    permission: 'membership.profiles.edit',
    activated: true,
    path: '/membership/profiles/:id',
    name: 'qmembership.admin.profiles.edit',
    layout: require('@imagina/qmembership/_layouts/admin/profiles/form').default,
    containerLayout: master,
    title: 'qmembership.sidebar.adminPlacesUpdate',
    icon: 'fas fa-map-marked-alt',
    middleware: [auth,access]
  },

  categories: {
    permission: 'membership.categories.manage',
    activated: true,
    path: '/membership/categories/index',
    name: 'qmembership.admin.categories',
    layout: require('@imagina/qmembership/_layouts/admin/categories/index').default,
    containerLayout: master,
    title: 'qmembership.sidebar.adminCategories',
    icon: 'fas fa-layer-group',
    middleware: [auth,access]
  }
}
