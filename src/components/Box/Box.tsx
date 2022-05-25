import React, { useState } from 'react';
import Item from '../Item/Item';

import styles from './Box.module.css';

const Box = (): JSX.Element => {
	const itemsData: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	const [quantity, setQuantity] = useState(itemsData.length);

	const handleClickChangeQuantity = () => {
		setQuantity(() => quantity - 1);
	};

	const items = itemsData.map((item) => {
		return <Item key={item} item={item} handleClickChangeQuantity={handleClickChangeQuantity} />;
	});

	return (
		<>
			<div className={styles.title}>Осталось уничтожить {quantity} блоков</div>
			<div className={styles.box}>{items}</div>
		</>
	);
};

export default Box;
