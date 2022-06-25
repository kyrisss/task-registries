import './registrySection.scss';
import sprite from '@assets/sprite.svg';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@redux/store';
import { useEffect, useState } from 'react';
import { fetchRegistry, Registry } from '@redux/registrySlice';
import ReactPaginate from 'react-paginate';
import TableRegistry from './TableRegistry/TableRegistry';
import Spinner from '@components/Spinner/Spinner';
import ErrorPage from '@components/ErrorPage/ErrorPage';

const RegistrySection = () => {
    

    useEffect(() => {
        dispatch(fetchRegistry())
    }, []);

    const {sortType, sortKey, isLoading, search, registry, error} = useSelector((state: RootState) => state.registry)
    const itemsPerPage = useSelector((state: RootState) => state.paginator.itemsPerPage)
    const dispatch = useDispatch<AppDispatch>()
    

    const [currentItems, setCurrentItems] = useState<Registry[]>([]);
    const [itemOffset, setItemOffset] = useState(0);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        const visibleRegistry = sortRegistry()
        setCurrentItems(visibleRegistry.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(visibleRegistry.length / itemsPerPage));
    }, [itemOffset, registry, sortType, search]);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % registry.length;
        setItemOffset(newOffset);
    };

    const sortRegistry = () => {
        let sortRegistry = [...registry].filter(reg => {
            let key: keyof typeof reg;
            for (key in reg) {
                if (reg[key].includes(search)) {
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

    const spinner = isLoading ? <Spinner></Spinner> : null
    const errorMessage = error ? <ErrorPage></ErrorPage> : null

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
                <>
                    <TableRegistry registry={currentItems}></TableRegistry>
                    {spinner}
                    {errorMessage}
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
            </div>
        </section>
    )
}

export default RegistrySection;