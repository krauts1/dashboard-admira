import { useContext, useCallback } from 'react';
import { setFilter, setState } from '../store/actions';
import DashboardContext from '../contexts/generalContext';
import { areAllPropertiesEmpty } from '../utils/helpers';

export default function useFilter(){
    const [state, dispatch] = useContext(DashboardContext);
    const { filters, campaigns, filterCampains } = state;
    const setSearchType = useCallback((name, type) =>
        dispatch(setFilter({[type]: name})), []);
    
    const searchByFilters = useCallback(async () => {
            if(areAllPropertiesEmpty(filters)){
                dispatch(setState({
                    filterCampains: campaigns
                }));
            }else {
                dispatch(setState({
                    filterCampains: campaigns.filter(item => 
                        item.nombre.includes(filters.nombre))
                }));
            }
    }, [filters, filterCampains, campaigns]);

    return {
        setSearchType,
        searchByFilters
    }
}
