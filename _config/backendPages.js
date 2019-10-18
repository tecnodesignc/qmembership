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
        title: 'qmembership.sidebar.adminProfiles',
        icon: 'fas fa-map-marked-alt',
        middleware: [auth, access]
    },

    profilesCreate: {
        permission: 'membership.profiles.create',
        activated: true,
        path: '/membership/profiles/create',
        name: 'qmembership.admin.profiles.create',
        layout: require('@imagina/qmembership/_layouts/admin/profiles/form').default,
        containerLayout: master,
        title: 'qmembership.sidebar.adminProfilesCreate',
        icon: 'fas fa-map-marked-alt',
        middleware: [auth, access]
    },

    profilesUpdate: {
        permission: 'membership.profiles.edit',
        activated: true,
        path: '/membership/profiles/:id',
        name: 'qmembership.admin.profiles.edit',
        layout: require('@imagina/qmembership/_layouts/admin/profiles/form').default,
        containerLayout: master,
        title: 'qmembership.sidebar.adminProfilesUpdate',
        icon: 'fas fa-map-marked-alt',
        middleware: [auth, access]
    },
    profession: {
        permission: 'membership.professions.index',
        activated: true,
        path: '/membership/profession/index',
        name: 'qmembership.admin.profession',
        layout: require('@imagina/qmembership/_layouts/admin/professions/index').default,
        containerLayout: master,
        title: 'qmembership.sidebar.adminProfession',
        icon: 'fas fa-layer-group',
        middleware: [auth, access]
    },
    congregation: {
        permission: 'membership.congregations.index',
        activated: true,
        path: '/membership/congregation/index',
        name: 'qmembership.admin.congregation',
        layout: require('@imagina/qmembership/_layouts/admin/congregations/index').default,
        containerLayout: master,
        title: 'qmembership.sidebar.adminCongregation',
        icon: 'fas fa-layer-group',
        middleware: [auth, access]
    },
    district: {
        permission: 'membership.districts.index',
        activated: true,
        path: '/membership/district/index',
        name: 'qmembership.admin.district',
        layout: require('@imagina/qmembership/_layouts/admin/district/index').default,
        containerLayout: master,
        title: 'qmembership.sidebar.adminDistrict',
        icon: 'fas fa-layer-group',
        middleware: [auth, access]
    },
    committee: {
        permission: 'membership.committee.index',
        activated: true,
        path: '/membership/committee/index',
        name: 'qmembership.admin.committee',
        layout: require('@imagina/qmembership/_layouts/admin/committee/index').default,
        containerLayout: master,
        title: 'qmembership.sidebar.adminCommittee',
        icon: 'fas fa-layer-group',
        middleware: [auth, access]
    },
    study: {
        permission: 'membership.study.index',
        activated: true,
        path: '/membership/studies/index',
        name: 'qmembership.admin.study',
        layout: require('@imagina/qmembership/_layouts/admin/study/index').default,
        containerLayout: master,
        title: 'qmembership.sidebar.adminStudy',
        icon: 'fas fa-layer-group',
        middleware: [auth, access]
    },
    workstation: {
        permission: 'membership.workstations.index',
        activated: true,
        path: '/membership/workstations/index',
        name: 'qmembership.admin.workstations',
        layout: require('@imagina/qmembership/_layouts/admin/workstations/index').default,
        containerLayout: master,
        title: 'qmembership.sidebar.adminWorkstation',
        icon: 'fas fa-layer-group',
        middleware: [auth, access]
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
        middleware: [auth, access]
    }
}
