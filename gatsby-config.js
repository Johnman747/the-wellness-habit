module.exports = {
  siteMetadata: {
    siteTitle: 'The Wellness Habit',
    siteDescription: 'The Wellness Habit Podcast',
    siteImage: '/static/IMG_8358.PNG', // main image of the site for metadata
    siteUrl: 'https://chronoblog-profile.now.sh/',
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'Joshua Wintz', // for example - 'Ivan Ganev'
    authorDescription: '', // short text about the author
    avatar: '/JoshHeadShot.JPG',
    twitterSite: '', // website account on twitter
    twitterCreator: '', // creator account on twitter
    social: [
      {
        icon: `twitter`,
        url: `https://twitter.com/JoshWintz`
      },
      {
        icon: `facebook`,
        url: `https://www.facebook.com/thewellnesshabit/`
      },
      {
        icon: `instagram`,
        url: `https://www.instagram.com/wellness_habit/`
      },
      {
        icon: `apple`,
        url: `https://podcasts.apple.com/us/podcast/the-wellness-habit-podcast/id1497162033`
      },
      {
        icon: `telegram-plane`,
        url: `mailto:wellnesshabit101@gmail.com`
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags'
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: false,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 '
            }
          }
        },
        feedSearch: {
          symbol: '🔍'
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chronoblog Gatsby Theme`,
        short_name: `Chronoblog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/IMG_8450.PNG`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-163431103-1'
      }
    }
  ]
};
