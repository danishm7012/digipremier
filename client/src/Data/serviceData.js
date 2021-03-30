const teams = [
  {
    _id: 'SEO',

    name: 'SEO (Search Engine Optimazation)',
    icon: 'fa-link',
    text:
      'It is Search engine optimization that is purposefully used for optimizing websites and contents.',
    image:
      'https://images.pexels.com/photos/7119258/pexels-photo-7119258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    detail:
      'It is Search engine optimization that is purposefully used for optimizing websites and contents. The main aim is to show up the website in search engines like Quora, google, firefox, duck duck go, and all other browsers. The main idea revolves around using key phrases and keywords in the content that the searchers commonly use. These are to be used in the content body, website URL, title, etc. For better results: organic search and use of links in the contents what helps mainly in the range.',
  },
  {
    _id: 'SEM',

    name: 'SEM (Search Engine Marketing)',
    icon: 'fa-link',
    text:
      'Search Engine Marketing is the paid advertising for achieving more traffic from all search engines.',
    image:
      'https://images.pexels.com/photos/267414/pexels-photo-267414.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    detail:
      'Compared to SEO which is unpaid marketing, Search Engine Marketing is the paid advertising for achieving more traffic from all search engines. The standard form used for Search Engine Marketing is Google Adwords, and this is the reason why it is a highly used search engine. Here the owner needs to pay the search engine. The marketer has to pay a suitable amount to the search engine for showing the marketing content to the target audience at various places with specific phrases or keywords used for search results of the related content.',
  },
  {
    _id: 'SMM',

    name: 'SMM (Social Media Marketing)',
    icon: 'fa-link',
    text:
      'Social Media is power itself these days that targets not only youth but people of all age groups.',
    image:
      'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    detail:
      'Social Media is power itself these days that targets not only youth but people of all age groups. Advertisement through this platform is very beneficial and economical. Sharing engaging content about your product, company, services, etc., grabs a lot of attention from the readers and attracts them to reach details further and approach you. It helps in promoting everything in front of your users and competitors. It helps in targeting conversations and increasing awareness among people. For choosing this option for marketing, you need to be very careful and have enough knowledge of that platform.',
  },
  {
    _id: 'Back-Link-Building',

    name: 'Back-Link Building',
    icon: 'fa-link',
    text:
      'It is a ranking factor where google allows to dominate the search result on the search engine.',
    image:
      'https://images.unsplash.com/photo-1575845137119-f4eca85e0732?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGxpbmtzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    detail:
      'It is a ranking factor where google allows to dominate the search result on the search engine. Back links are beneficial on social media platforms for marketing purposes. Guest posts and link-building strategies are beneficial for targeting a specific audience. Updates and new information can be shared using this method. It is merely building links of the websites with other websites. Back links are beneficial in SEO as they signal search engines to find your content useful. The rankings are made and utilized accordingly in this marketing option.',
  },
  {
    _id: 'PPC',

    name: 'PPC (Pay Per Click)',
    icon: 'fa-link',
    text:
      'Pay Per Click Advertising is the method of paying other websites for every click to their website’s link.',
    image:
      'https://images.pexels.com/photos/6229/marketing-board-strategy.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    detail:
      'Pay Per Click Advertising is like the SEM as it is the method of paying other websites for every click to their website’s link. This method works for every social network apart from search engines. The ads usually appear in the feed where the attention of the targeted audience can be approached. This model of internet marketing is rising and is popular among many marketers. It is the way of buying visitors to earn more through the clicking strategies. There are further many types of PPC advertising that work efficiently for marketing purposes. You need proper assistance regarding which option you should go with, and for that, you need advice from my team of experts.',
  },
  {
    _id: 'Content-Marketing',

    name: 'Content Marketing',
    icon: 'fa-link',
    text:
      'Art of telling valuable information to the target audience for reaching goals and spreading awareness.',
    image:
      'https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    detail:
      'It is the art of telling valuable information to the target audience for reaching goals and spreading awareness. To attain a profitable result, content strategies need to be used depending upon what you are up to. It helps in building relationships with customers and partnerships with respected fields. It is an inbound marketing strategy that values the target audience. It purely relies on content distribution and system opted for marketing purposes. The quality of content you deliver is all that matters when you call for the engagement of the target audience and partners.',
  },
  {
    _id: 'Affiliate-Marketing',

    name: 'Affiliate Marketing',
    icon: 'fa-link',
    text:
      'It is the type of digital marketing based on performance, PPC advertising, and affiliate marketing where the advertiser needs not to pay for the traffic but the conversions made.',
    image:
      'https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    detail: `It is the type of digital marketing based on performance, PPC advertising, and affiliate marketing where the advertiser needs not to pay for the traffic but the conversions made. These are comparatively much higher than the PPC ones, but then the advertiser's risk is less than PPC. It is widely used by website owners and bloggers who earn money by selling products of different companies. In this marketing strategy, a person promotes the development to buyers and sells it. He receives a commission-based profit from the earnings.`,
  },
  {
    _id: 'Email-SMS-Marketing',

    name: 'Email & SMS Marketing',
    icon: 'fa-link',
    text:
      'Email marketing is an excellent converting marketing channel that helps in building a nurtured relationship with the email subscribers by sending them updates regularly.',
    image:
      'https://images.pexels.com/photos/193003/pexels-photo-193003.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    detail:
      'Email marketing is an excellent converting marketing channel that helps in building a nurtured relationship with the email subscribers by sending them updates regularly. This helps in maintaining trust as value is provided to the email updates. Thus, the audience’s percentage is converted to customers. SMS Marketing is the strategy to avail the number of audience or customers and sending them regular updates about promotions, deals, etc., to make them help the opportunity increasing your generated revenue. Evan calls could be made to the target audience, and details should be given regarding your interest’s marketing.',
  },
  {
    _id: 'Radio-Television-Marketing',

    name: 'Radio & Television Marketing',
    icon: 'fa-link',
    text:
      'Radio is a traditional source of entertainment that is still an attraction for many people whom you can target for marketing purposes.',
    image:
      'https://images.unsplash.com/photo-1593784991188-c899ca07263b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8dHYlMjBhZHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    detail:
      'Radio is a traditional source of entertainment that is still an attraction for many people whom you can target for marketing purposes. Advertising your product there between programs could be a useful option where the audience could quickly be approached. Program sponsoring is also an option for radio advertising. Another marketing option is Television, where you can advertise by means of paid commercials about your products. You can also sponsor serials and shows to reach more audiences. The target could be the specific time and serial after which your commercial should be played.',
  },
]

export default teams
