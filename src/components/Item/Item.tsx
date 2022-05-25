import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import styles from './Item.module.css';

export interface ItemProps {
	item: number;
	handleClickChangeQuantity: () => void;
}

const Item = ({ handleClickChangeQuantity }: ItemProps): JSX.Element => {
	const randomInteger = (min: number, max: number) => {
		let randomNum = min - 0.5 + Math.random() * (max - min + 1);
		return Math.round(randomNum);
	};

	const randomNumber = randomInteger(1, 10);

	const [counter, setCounter] = useState(randomNumber);

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
