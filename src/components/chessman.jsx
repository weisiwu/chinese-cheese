/**
 * 双方棋子
*/
import React from 'react';
import { useDrag, DragPreviewImage } from "react-dnd";
import { ItemTypes } from '../utils/constants';
import { knightImage } from "./knightImage.js";
import '../styles/chessman.less';

// TODO: 先可以拖动，放到某个位置去
// TODO: 拖动过程中，preview效果优化
// TODO: 看下 DragPreviewImage 参数是怎么调用的。
const Chessman = (props) => {
    const { group, role, position = '' } = props;
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

    if (!role) { return null; }

    return (
        <>
            <DragPreviewImage connect={preview} src={knightImage} />
            <div
                ref={drag}
                className="chessman"
                // 临时添加
                style={{ opacity: isDragging ? 0.5 : 1 }}
                group={group}>
                {role}
            </div>
        </>
    );
}

export { Chessman };
export default Chessman;