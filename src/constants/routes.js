import { 
    GoogleAnalitics, 
    GoogleAds, 
    MetaAds,
    CRM,
} from '../components/views';

const routes = (messageApi, actualComponent) => {
    const routesData = {
        GOOGLE_ANALITICS: {
            name: 'googleAnalitics',
            component: <GoogleAnalitics messageApi={messageApi}/>
        },
        GOOGLE_ADS: {
            name: 'googleAds',
            component: <GoogleAds messageApi={messageApi}/>
        },
        META_ADS: {
            name: 'metaAds',
            component: <MetaAds messageApi={messageApi}/>
        },
        CRM: {
            name: 'crm',
            component: <CRM messageApi={messageApi}/>
        },
    };
    return routesData[actualComponent].component;
}

export default routes;
