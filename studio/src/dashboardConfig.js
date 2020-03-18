export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e71bccf9e6cfa4f0df55d6e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-f1ykr74p',
                  apiId: 'af40b041-3535-45cd-8606-996fdbcdab0c'
                },
                {
                  buildHookId: '5e71bccfa4c8b81f6e263c39',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-qtv5ugzt',
                  apiId: '429835cf-1d02-4ed4-a918-7fb18c22bc39'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tonetime/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-qtv5ugzt.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
