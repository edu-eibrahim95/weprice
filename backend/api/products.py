from flask_restful import Resource, reqparse
from backend.main_api import main_api
from backend.models import Product, ProductSchema, User, ProductTaxesSchema, ProductTaxes, Tax, TaxSchema
from backend.db import save_to_db, delete_from_db
from flask_jwt_extended import jwt_required
from backend.api.utils import can, able, get_user


class GetProducts(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('type')

    @jwt_required
    @can(action='view', thing='products')
    def get(self):
        data = self.parser.parse_args()
        type = data['type'] if data['type'] is not None else None
        if type is not None:
            products = Product.query.filter_by(installation_id=get_user().installation_id).filter_by(product_group=data['type']).all()
        else:
            products = Product.query.filter_by(installation_id=get_user().installation_id).all()
        schema = ProductSchema(many=True)
        products_data = [] if len(products) == 0 else schema.dump(products).data
        add = able('add', 'products')
        edit = able('edit', 'products')
        delete = able('delete', 'products')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'products': products_data}


class AddProductTaxes(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('tax_id', help='This field cannot be blank', required=True)
        self.parser.add_argument('purchase_pct', help='This field cannot be blank', required=True)
        self.parser.add_argument('sale_pct', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='view', thing='products')
    def post(self, product_id):
        data = self.parser.parse_args()
        product_tax = ProductTaxes(
            tax_id=data['tax_id'],
            purchase_pct=data['purchase_pct'],
            sale_pct=data['sale_pct'],
            product_id=product_id
        )
        try:
            save_to_db(product_tax)
            return {'status': 1, 'id': product_tax.id}
        except:
            return {'status': 0}, 500


class EditProductTaxes(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('tax_id', help='This field cannot be blank', required=True)
        self.parser.add_argument('purchase_pct', help='This field cannot be blank', required=True)
        self.parser.add_argument('sale_pct', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='edit', thing='products')
    def post(self, product_id, product_tax_id):
        data = self.parser.parse_args()
        product_tax = ProductTaxes.query.filter_by(id=product_tax_id) \
            .join(Product, Product.id == ProductTaxes.product_id) \
            .filter(Product.id == product_id) \
            .filter(Product.installation_id == get_user().installation_id).first()
        product_tax.tax_id = data['tax_id']
        product_tax.purchase_pct = data['purchase_pct']
        product_tax.sale_pct = data['sale_pct']
        product_tax.product_id = product_id
        try:
            save_to_db(product_tax)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class DeleteProductTaxes(Resource):
    @jwt_required
    @can(action='delete', thing='products')
    def post(self, product_id, product_tax_id):
        if product_tax_id == 'mass':
            parser = reqparse.RequestParser()
            parser.add_argument('ids', help='This field cannot be blank', required=True, type=int, action='append')
            data = parser.parse_args()
            product_taxes = ProductTaxes.query.filter(ProductTaxes.id.in_(data['ids'])) \
                .join(Product, Product.id == ProductTaxes.product_id) \
                .filter(Product.id ==  product_id) \
                .filter(Product.installation_id == get_user().installation_id).all()

        else:
            product_taxes = ProductTaxes.query.filter_by(id=product_id)\
                .join(Product, Product.id == ProductTaxes.product_id == product_id) \
                .filter(Product.id == product_id) \
                .filter(Product.installation_id == get_user().installation_id).first()
            if not product_taxes:
                return {'status': 0}
        try:
            delete_from_db(product_taxes)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class GetProductTaxes(Resource):
    @jwt_required
    @can(action='view', thing='products')
    def get(self, product_id):
        products_taxes = ProductTaxes.query.join(Product, Product.id == ProductTaxes.product_id) \
            .filter(Product.id == product_id)\
            .filter(Product.installation_id == get_user().installation_id).all()
        for i in products_taxes:
            i.name = i.tax_id
        schema = ProductTaxesSchema(many=True)
        products_data = [] if len(products_taxes) == 0 else schema.dump(products_taxes).data
        taxes = Tax.query.filter_by(installation_id=get_user().installation_id).all()
        taxes_data = {"0": "Choose Tax"}
        for tax in taxes:
            taxes_data["{}".format(tax.id)] = tax.name
        add = able('add', 'products')
        edit = able('edit', 'products')
        delete = able('delete', 'products')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'products': products_data,
            'taxes': taxes_data
        }


class GetProduct(Resource):
    @jwt_required
    @can(action='view', thing='products')
    def get(self, product_id):
        products = Product.query.filter_by(id=product_id).filter_by(installation_id=get_user().installation_id).all()
        schema = ProductSchema(many=True)
        products_data = [] if len(products) == 0 else schema.dump(products).data
        add = able('add', 'products')
        edit = able('edit', 'products')
        delete = able('delete', 'products')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'product': products_data[0]
        }


class AddProduct(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('description', help='This field cannot be blank', required=True)
        self.parser.add_argument('name', help='This field cannot be blank', required=True)
        self.parser.add_argument('type', help='This field cannot be blank', required=True)
        self.parser.add_argument('product_group', help='This field cannot be blank', required=True)
        self.parser.add_argument('internal_code', help='This field cannot be blank', required=True)
        self.parser.add_argument('unit', help='This field cannot be blank', required=True)
        self.parser.add_argument('currency_type', help='This field cannot be blank', required=True)
        self.parser.add_argument('cost_price', help='This field cannot be blank', required=True)
        self.parser.add_argument('sale_price', help='This field cannot be blank', required=True)
        self.parser.add_argument('daysterm_recpt', help='This field cannot be blank', required=True)
        self.parser.add_argument('product_class_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='add', thing='products')
    def post(self):
        data = self.parser.parse_args()
        user = get_user()
        product = Product(
            name=data['name'],
            description=data['description'],
            type=data['type'],
            product_group=data['product_group'],
            internal_code=data['internal_code'],
            unit=data['unit'],
            currency_type=data['currency_type'],
            cost_price=data['cost_price'],
            sale_price=data['sale_price'],
            daysterm_recpt=data['daysterm_recpt'],
            product_class_id=data['product_class_id'],
            installation_id=user.installation_id,
        )
        try:
            save_to_db(product)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class DeleteProduct(Resource):
    @jwt_required
    @can('delete', 'products')
    def post(self, product_id):
        user = get_user()
        if product_id == 'mass':
            parser = reqparse.RequestParser()
            parser.add_argument('ids', help='This field cannot be blank', required=True, type=int, action='append')
            data = parser.parse_args()
            products = Product.query.filter(Product.id.in_(data['ids'])).filter_by(
                installation_id=user.installation_id).all()

        else:
            products = Product.query.filter_by(id=product_id).filter_by(installation_id=user.installation_id).first()
            if not products:
                return {'status': 0}
        try:
            delete_from_db(products)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class EditProduct(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('description', help='This field cannot be blank', required=True)
        self.parser.add_argument('name', help='This field cannot be blank', required=True)
        self.parser.add_argument('type', help='This field cannot be blank', required=True)
        self.parser.add_argument('product_group', help='This field cannot be blank', required=True)
        self.parser.add_argument('internal_code', help='This field cannot be blank', required=True)
        self.parser.add_argument('unit', help='This field cannot be blank', required=True)
        self.parser.add_argument('currency_type', help='This field cannot be blank', required=True)
        self.parser.add_argument('cost_price', help='This field cannot be blank', required=True)
        self.parser.add_argument('sale_price', help='This field cannot be blank', required=True)
        self.parser.add_argument('daysterm_recpt', help='This field cannot be blank', required=True)
        self.parser.add_argument('product_class_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='edit', thing='products')
    def post(self, product_id):
        data = self.parser.parse_args()
        user = get_user()
        product = Product.query.filter_by(id=product_id).filter_by(installation_id=user.installation_id).first()
        if not product:
            return {'status': 0}
        columns = ['description', 'name', 'type', 'product_group', 'internal_code', 'unit',
                   'currency_type', 'cost_price', 'sale_price', 'daysterm_recpt', 'product_class_id']
        for i in columns:
            setattr(product, '%s' % i, data[i])
        try:
            save_to_db(product)
            return {'status': 1}
        except:
            return {'status': 0}, 500


def register_products_routes():
    main_api.add_resource(GetProduct, '/api/product/<product_id>')
    main_api.add_resource(GetProducts, '/api/products')  # View
    main_api.add_resource(GetProductTaxes, '/api/products/taxes/<product_id>')  # View
    main_api.add_resource(AddProductTaxes, '/api/products/taxes/<product_id>/add')  # View
    main_api.add_resource(EditProductTaxes, '/api/products/taxes/<product_id>/edit/<product_tax_id>')
    main_api.add_resource(DeleteProductTaxes, '/api/products/taxes/<product_id>/delete/<product_tax_id>')
    main_api.add_resource(AddProduct, '/api/products/add')  # Add
    main_api.add_resource(EditProduct, '/api/products/edit/<product_id>')  # Edit
    main_api.add_resource(DeleteProduct, '/api/products/delete/<product_id>')  # Delete
