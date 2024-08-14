import { useState, useContext, useCallback } from 'react';
import { setState } from '../store/actions';
import DashboardContext from '../contexts/generalContext';

export default function useGoogleAds() { 
    const [state, dispatch] = useContext(DashboardContext);
    const [collapsed, setCollapsed] = useState(false);
    const { actualComponent } = state;

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const changeComponent = useCallback((key) => {
        dispatch(setState({
            actualComponent: key
        }))
    }, [setState])

    return {
        toggleCollapsed,
        collapsed,
        changeComponent,
        actualComponent,
    }
}