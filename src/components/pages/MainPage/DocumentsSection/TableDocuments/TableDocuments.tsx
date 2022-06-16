import './tableDocuments.scss';
import sprite from '../../../../../assets/sprite.svg'
import Table from 'react-bootstrap/Table'
import { Document } from '../../../../../redux/documentsSlice';

interface Props {
    documents: Document[]
}

const TableDocuments: React.FC<Props> = ({ documents }) => {

    const mapDocuments = documents.map(doc => {
        return (
            <tr key={doc.num}>
                <td className='td'>{doc.category}</td>
                <td className='td'>{doc.name}</td>
                <td className='td'>{doc.date}</td>
                <td className='td'>{doc.num}</td>
                <td className='td'>
                    <span>
                        <svg className="sort__icon">
                            <use xlinkHref={`${sprite}#download`} />
                        </svg>
                    </span> <a href="#">Скачать<br/>({doc.size})</a>
                </td>
            </tr>
        )
    })


    return (
        <>
            <Table hover className='table-documents'>
                <thead>
                    <tr>
                        <th className='th'>Категория</th>
                        <th className='th'>Наименование</th>
                        <th className='th'>Дата</th>
                        <th className='th'>Номер</th>
                        <th className='th'>
                            <span>
                                <svg className="sort__icon">
                                    <use xlinkHref={`${sprite}#paper`} />
                                </svg>
                            </span>
                            Содержание</th>
                    </tr>
                </thead>
                <tbody>
                    {mapDocuments}
                </tbody>
            </Table>
        </>


    )
}

export default TableDocuments;