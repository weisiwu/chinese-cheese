/**
 * 双方棋子
*/
import React, { useMemo } from 'react';
import { useDrag, DragPreviewImage } from "react-dnd";
import { ItemTypes } from '../utils/constants';
import '../styles/chessman.less';

const Chessman = (props) => {
    const { group, role, position = '', style = {} } = props;
    const [ fromRow, fromCol ] = position.split('_') || [];
    const [{ isDragging }, drag, preview] = useDrag({
        type: ItemTypes.CARD,
        item: () => ({ role, group, fromRow, fromCol }),
        collect: (monitor) => {
            return {
                isDragging: monitor.isDragging()
            };
        }
    });
    const previewImg = useMemo(() => {
        let imgUrl = '';
        try {
            imgUrl = require(`../snapshots/${role}_${group}.png`);
        } catch (e) {
            imgUrl = ''
        }

        return imgUrl;
    }, [group, role]);

    if (!role) { return null; }

    return (
        <>
            <DragPreviewImage connect={preview} src={previewImg} />
            <div
                ref={drag}
                className="chessman"
                style={{ ...style, opacity: isDragging ? 0.5 : 1 }}
                group={group}>
                {role}
            </div>
        </>
    );
}

export { Chessman };
export default Chessman;