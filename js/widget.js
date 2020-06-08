'use strict';

let url = './data/employees.json';
const listEl = document.querySelector('[data-list]');
const tmpl = document.querySelector('[data-tmpl]').innerHTML;

document.addEventListener('DOMContentLoaded', getEployeeList);

console.log(url);

function getEployeeList(event) {
	event.preventDefault();

	fetch(url)
		.then(result => result.json())
		.then(showEmployeeList);


}

function showEmployeeList(employee) {
	console.log(employee);

	listEl.innerHTML = '';

	employee.forEach(employee => {
		let status = '';
		if (employee.inoffice == true) {
			status = 'in'
		} else {
			status = 'out'
		};
		console.log(status);

		listEl.innerHTML += tmpl
			.replace(/{{employeeName}}/gi, employee.name)
			.replace(/{{officeStatus}}/gi, status);

	});
}
