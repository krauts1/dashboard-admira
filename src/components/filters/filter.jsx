import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';
import useFilter from '../../hooks/useFilterGoogleAds';

const Filters = ({messageApi}) => {
    
    const { 
        setSearchType,
        searchByFilters
     } = useFilter({messageApi});
    return (
        <div className='container-filter'>
            <Input placeholder="Nombre del artista"
                onChange={(e) => 
                    setSearchType(e.target.value, 'artistName')
                }
                aria-label="Nombre del artista"
            />
            <Button type="primary"
                icon={<SearchOutlined />}
                onClick={searchByFilters}
                aria-label="Buscar"
            >
                Buscar
            </Button>
        </div>
    )
}
export default Filters;
