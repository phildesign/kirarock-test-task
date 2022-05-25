import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import styles from './Item.module.css';

export interface ItemProps {
	item: any;
	handleClickChangeQuantity: () => void;
}

const Item = ({ item, handleClickChangeQuantity }: ItemProps): JSX.Element => {
	const [counter, setCounter] = useState(item);

	const handleClickMinus = () => {
		if (counter > 0) {
			setCounter(() => counter - 1);
		}
	};

	useEffect(() => {
		if (counter === 0) {
			handleClickChangeQuantity();
		}
	}, [counter]);

	return (
		<div
			className={cn(styles.item, {
				[styles.destroyed]: counter === 0,
			})}
			onClick={handleClickMinus}>
			{counter}
		</div>
	);
};

export default Item;
