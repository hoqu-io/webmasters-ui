import { reducer, merge, mergeProperty, mapProperty, toggle } from '../_'

/*
 isReady (boolean)         : are offers loaded
 isFilterVisible (boolean) : offers filter visble
 filter (object)           : object like { q, categories, promotionTypes, trafficTypes, promoTools, enrollment }
 list (array[object])      : array like as [ { } ]
 offer (object)            : selected offer info
 categories (array)        : categories enum
 promotionTypes (array)    : promotionTypes enum
*/

const defaultState = {
  isReady: false,
  list: [],
  offer: null,
  isFilterVisible: true,
  filter: {
    q: '',
    categories: [],
    promotionTypes: [],
    trafficTypes: [],
    promoTools: [],
    enrollment: 'all'
  },
  categories: [
    'realEstate',
    'insuranceAndLoans',
    'eCommerce',
    'tourism',
    'legalServices',
    'cars',
    'constructionAndRenovation',
    'medicine',
    'other'
  ],
  promotionTypes: [
    'online',
    'offline',
    'mobile'
  ],
  trafficTypes: [
    'onlineSearch',
    'onlineCPC',
    'onlineBanners',
    'onlineXML',
    'onlineSMM',
    'onlineMotivate',
    'onlineSoftware',
    'onlineByBrand',
    'onlineCoupon',
    'onlineEmail',
    'onlineContent',
    'onlineRetarget',
    'onlineAds',
    'mobileSoftware',
    'mobileBanners',
    'mobileCPC',
    'mobileSearch',
    'mobileSMS',
    'mobileMessengers',
    'mobileOther',
    'offlineOutdoor',
    'offlineRadio',
    'offlineTV',
    'offlineCalls',
    'offlinePrints',
    'offlineMails',
    'offlineOther'
  ],
  promoTools: [
    'banners',
    'landingPages',
    'xmlFeeds',
    'tgb',
    'printingMaterials',
    'emailTemplates',
    'keywords',
    'websites',
    'videos'
  ],
  enrollment: [
    'all',
    'enrollment',
    'notEnrolled'
  ]
}

const actions = {
  'OFFERS.MERGE': merge,
  'OFFERS.TOGGLE-FILTER-VISIBLE': toggle('isFilterVisible'),
  'OFFERS.MERGE-FILTER': mergeProperty('filter'),
  'OFFERS.MERGE-ACTUAL-OFFER': mergeProperty('offer'),
  'OFFERS.MERGE-OFFER': mapProperty(
    'list',
    ({ id, offer }, item) => ({ ...item, ...(id === item.id ? offer : {}) })
  )
}

export default reducer(defaultState, actions)
