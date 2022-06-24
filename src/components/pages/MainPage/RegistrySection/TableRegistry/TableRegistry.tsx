import './tableRegistry.scss';
import sprite from '../../../../../assets/sprite.svg'
import Table from 'react-bootstrap/Table'
import { Registry, setSortKey, setSortType } from '../../../../../redux/registrySlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../../redux/store';

interface Props {
    registry: Registry[]
}

const TableRegistry: React.FC<Props> = ({ registry }) => {

    const sortType = useSelector((state: RootState) => state.registry.sortType)
    const dispatch = useDispatch<AppDispatch>()

    const sortHandler = (e: any) => {
        if(e.target.dataset.sort){
            if (sortType === "asc") {
                dispatch(setSortType("dsc"))
            } else {
                dispatch(setSortType("asc"))
            }
            dispatch(setSortKey(e.target.dataset.sort))
        }
    }
    
    const mapRegistry = registry.map(reg => {
        return (
            <tr key={reg.id}>
                <td className='td'>{reg.id}</td>
                <td className='td'>{reg.name}</td>
                <td className='td'>{reg.code}</td>
                <td className='td'>{reg.class}</td>
                <td className='td'>{reg.date}</td>
                <td className='td'><a href={reg.link}>Ссылка</a></td>
            </tr>
        )
    })


    return (
        <>
            <Table hover className='table-registry'>
                <thead onClick={sortHandler}>
                    <tr>
                        <th className='th' data-sort="id">
                            <span>
                                <svg className="sort__icon">
                                    <use xlinkHref={`${sprite}#arrow-left-right`} />
                                </svg>
                            </span>
                            Регистрационный номер</th>
                        <th className='th' data-sort="name">
                            <span>
                                <svg className="sort__icon">
                                    <use xlinkHref={`${sprite}#arrow-left-right`} />
                                </svg>
                            </span>
                            Наименование программного обеспечения</th>
                        <th className='th'>Код класса</th>
                        <th className='th'>Класс программного обеспечения</th>
                        <th className='th'>Дата регистрации</th>
                        <th className='th'>Адрес сайта</th>
                    </tr>
                </thead>
                <tbody>
                    {mapRegistry}
                </tbody>
            </Table>
        </>


    )
}

export default TableRegistry;