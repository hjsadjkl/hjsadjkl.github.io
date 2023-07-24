


interface Props {
    items: { title: string, date: string, did: boolean }[];
    itemDelete: (index: number) => void;
    itemCheck: (index: number) => void;
}


function ListGroup({ items, itemDelete, itemCheck }: Props) {

    //items = [];
    return (
        <>
            <ul className="list-group  ">
                {items.map((item, index) => (
                    (index>0 && <li
                        className={'list-group-item d-flex justify-content-between align-items-center '}
                        key={'items' + index}
                        style={{
                            backgroundColor: (item.did ? 'rgb(153, 220, 153)' : '')
                        }}
                    >
                        <input onClick={()=>itemCheck(index)} className="form-check-input" type="checkbox" />
                        {item.title}    {item.date}
                        <button onClick={() => itemDelete(index)} id={'index' + index} className="btn-close" aria-label="Close" />
                    </li>)
                ))}
            </ul>
        </>
    );
}

export default ListGroup;