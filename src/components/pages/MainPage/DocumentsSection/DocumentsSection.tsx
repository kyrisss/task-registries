import './documentsSection.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../redux/store';
import TableDocuments from './TableDocuments/TableDocuments';


const DocumentsSection = () => {

    const documents = useSelector((state: RootState) => state.documents.docs)

    return (
        <section className="main__documents section">
            <div className="wrapper">
                <h2>Документы</h2>
                <div className="total-docs">Всего документов: <span className="total-docs_number">{documents.length}</span></div>
                <TableDocuments documents={documents}></TableDocuments>
            </div>
        </section>
    )
}

export default DocumentsSection;