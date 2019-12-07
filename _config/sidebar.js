const pages = config('pages') // Get Pages from config

//Places
export default [
        pages.qmembership.profile,
        pages.qmembership.workstation,
   {
      title: 'qmembership.layout.title',
      icon: 'fas fa-info-circle',
      children: [
         pages.qmembership.district,
         pages.qmembership.congregation,
         pages.qmembership.study,
         pages.qmembership.profession,
         pages.qmembership.committee,
      ]
   },

]
