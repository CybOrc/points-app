import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let customers = [
	{name:'Alfonso',
	 months: [
		 		{name:'January', purchases:[120.00,50,100]},
		 		{name:'Febuary', purchases: [628.23]},
		 		{name:'March', purchases: [48.88, 279.33, 187.00, 333.33]}
			]
	},
	{name:'Boots',
	 months: [
		 		{name:'January', purchases:[147.00,114, 187.00, 221.33]},
		 		{name:'Febuary', purchases: [487.06,273]},
		 		{name:'March', purchases: [36.19, 366.33]}
			]
	},
	{name:'Del',
	 months: [
		 		{name:'January', purchases:[82.99]},
		 		{name:'Febuary', purchases:[34.00,124.55, 9.33] },
		 		{name:'March', purchases: [481.65, 135.46, 85.00]}
			]
	}
];

const customerRows = customers.map((customer) => 
	<tr key={customer.name.toString()} >
	<td>{customer.name}</td>
	{customer.months.map((month) => 
		<td key={month.name.toString()}>
			<ul>
				{month.purchases.map((purchase) =>
					<li  key={purchase} > ${purchase} / Points: {getPoints(purchase)} </li>
				)}
			</ul>
			Total: {getMonthTotal(month)}
		</td>
	)}
	<td> {getYearlyTotal(customer)} </td>
	</tr>
	);
// end of customerRows


function getYearlyTotal(customer) {
	let total = 0;
	let months = customer.months; // array of each month, name purchases 
	months.forEach( function (month) {
		getMonthTotal(month)  
	});
	return total;
}

function getMonthTotal(month) {
	let total = 0;
	month.purchases.forEach( function (purchase) {
		total = total + getPoints(purchase);
	});
	return total;
}

function getPoints(purchase) {
	const use = Math.floor(purchase);
	if (use > 100 ) {
		return ((use - 100) * 3 + 50);
	} else if (use > 50 ) {
		return  (use - 50);
	} else {
		return 0;
	}
}



ReactDOM.render(
	<table>
		<tbody>
			<tr>
				<td> Customer </td>
				<td> January </td>
				<td> Febuary </td>
				<td> March </td>
				<td> Year to Date Points </td>
			</tr>
			{customerRows}
		</tbody>
	</table>,
	document.getElementById('root')
	);
