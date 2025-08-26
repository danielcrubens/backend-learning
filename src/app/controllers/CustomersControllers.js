const customers = [
	{ id: 1, name: 'Daniel', site: 'https://danielcrubens.dev' },
	{ id: 2, name: 'Google', site: 'https://google.com' },
	{ id: 3, name: 'Uol', site: 'https://uol.com.br' },
];
class CustomersControllers {
	// Listagem dos Customers
	index(req, res) {
		return res.json(customers);
	}
	// Recuperar um Customer
	show(req, res) {
		const id = Number.parseInt(req.params.id);
		const customer = customers.find((item) => item.id === id);
		const status = customer ? 200 : 404;
		return res.status(status).json(customer);
	}
	// Criar um novo Customer
	create(req, res) {
		const { name, site } = req.body;
		const id = customers[customers.length - 1].id + 1;
		const newCustomer = { id, name, site };
		customers.push(newCustomer);
		return res.status(201).json(newCustomer);
	}
	// Atualizar um Customer
	update(req, res) {
		const id = Number.parseInt(req.params.id);
		const { name, site } = req.body;
		const customerIndex = customers.findIndex((item) => item.id === id);
		const status = customerIndex >= 0 ? 200 : 404;
		if (customerIndex >= 0) {
			customers[customerIndex] = { id: Number.parseInt(id), name, site };
		}
		return res.status(status).json(customers[customerIndex]);
	}
	// Exclui um Customer
	destroy(req, res) {
		const id = Number.parseInt(req.params.id);
		const customerIndex = customers.findIndex((item) => item.id === id);
		const status = customerIndex >= 0 ? 204 : 404;
		if (customerIndex >= 0) {
			customers.splice(customerIndex, 1);
		}
		return res.status(status).json();
	}
}
export default new CustomersControllers();
