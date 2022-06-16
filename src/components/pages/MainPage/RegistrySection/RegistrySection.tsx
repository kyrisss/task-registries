import './registrySection.scss';
import sprite from '../../../../assets/sprite.svg';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../../redux/store';
import { useEffect, useState } from 'react';
import { fetchRegistry, Registry } from '../../../../redux/registrySlice';
import ReactPaginate from 'react-paginate';
import TableRegistry from './TableRegistry/TableRegistry';
import Spinner from '../../../Spinner/Spinner';

const RegistrySection = () => {

    const sortType = useSelector((state: RootState) => state.registry.sortType)
    const sortKey = useSelector((state: RootState) => state.registry.sortKey)
    const isLoading = useSelector((state: RootState) => state.registry.isLoading)
    const search = useSelector((state: RootState) => state.registry.search)
    const dispatch = useDispatch<AppDispatch>()

    let registry: Registry[] = []
    registry = useSelector((state: RootState) => state.registry.registry)
    const itemsPerPage = useSelector((state: RootState) => state.paginator.itemsPerPage)

    const [currentItems, setCurrentItems] = useState<Registry[]>([]);
    const [itemOffset, setItemOffset] = useState(0);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(sortRegistry().slice(itemOffset, endOffset));
        setPageCount(Math.ceil(sortRegistry().length / itemsPerPage));
    }, [itemOffset, itemsPerPage, registry, sortType, search]);

    useEffect(() => {
        dispatch(fetchRegistry())
    }, []);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % registry.length;
        setItemOffset(newOffset);
    };

    const sortRegistry = () => {
        let sortRegistry = [...registry].filter(reg => {
            let key: keyof typeof reg;
            for (key in reg) {
                if(reg[key].includes(search)){
                    return true
                }
            }
            return false
        })
        if (sortType == "asc") {
            sortRegistry.sort((a, b) => a[sortKey].localeCompare(b[sortKey]))
        } else {
            sortRegistry.sort((a, b) => b[sortKey].localeCompare(a[sortKey]))
        }
        return sortRegistry
    }



    return (
        <section className="main__registry section" id='registry'>
            <div className="wrapper">
                <div className='title__container'>
                    <h2>Реестры</h2>
                    <svg className="filter__icon">
                        <use xlinkHref={`${sprite}#filter`} />
                    </svg>
                    <svg className="filter__icon">
                        <use xlinkHref={`${sprite}#three-dots-vertical`} />
                    </svg>
                </div>
                {isLoading ? <Spinner></Spinner> :
                    <>
                        <TableRegistry registry={currentItems}></TableRegistry>
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="&nbsp;&nbsp;&nbsp;"
                            nextClassName="page next-button"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            pageCount={pageCount}
                            previousLabel="&nbsp;&nbsp;&nbsp;"
                            previousClassName="page prev-button"
                            pageClassName="page"
                            containerClassName="paginator"
                            activeClassName="page_active"
                        />
                    </>
                }
            </div>
        </section>
    )
}

export default RegistrySection;