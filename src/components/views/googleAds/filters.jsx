import React from "react";
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import useFilter from '../../../hooks/useFilterGoogleAds';
import './style.scss';

const Filters = () => {
    const {
        setSearchType,
        searchByFilters,
    } = useFilter()
    return(
        <div className="filters-container">
            <Input 
                placeholder="Nombre" 
                onChange={({target}) => setSearchType(target.value, 'nombre')}
            />
            <Button 
                type="primary" 
                icon={<SearchOutlined />}
                onClick={searchByFilters}
            >
                Buscar
            </Button>
        </div>
    )
}
export default Filters;
