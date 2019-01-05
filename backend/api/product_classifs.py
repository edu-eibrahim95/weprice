from flask_restful import Resource, reqparse
from main_api import main_api
from models import Product, ProductSchema, User, ProductTaxesSchema, ProductTaxes, Tax, TaxSchema
from models import ProductClassif, ProductClassifSchema, ProductClassifParent, \
    ProductClassifParentSchema, ProductClassifTaxes, ProductClassifTaxesSchema
from db import save_to_db, delete_from_db
from flask_jwt_extended import jwt_required
from api.utils import can, able, get_user


class GetProductClassifs(Resource):
    @jwt_required
    @can(action='view', thing='products_classifs')
    def get(self):
        product_classifs = ProductClassif.query.filter_by(installation_id=get_user().installation_id).all()
        schema = ProductClassifSchema(many=True)
        products_data = [] if len(product_classifs) == 0 else schema.dump(product_classifs).data
        add = able('add', 'products_classifs')
        edit = able('edit', 'products_classifs')
        delete = able('delete', 'products_classifs')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'products_classifs': products_data}


class GetProductClassif(Resource):
    @jwt_required
    @can(action='view', thing='products_classifs')
    def get(self, product_classif_id):
        products_classifs = ProductClassif.query.filter_by(id=product_classif_id).filter_by(installation_id=get_user().installation_id).all()
        schema = ProductClassifSchema(many=True)
        products_data = [] if len(products_classifs) == 0 else schema.dump(products_classifs).data
        add = able('add', 'products')
        edit = able('edit', 'products')
        delete = able('delete', 'products')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'product_classif': products_data[0]
        }


class GetProductClassifTaxes(Resource):
    @jwt_required
    @can(action='view', thing='products_classifs')
    def get(self, product_classif_id):
        products_taxes = ProductClassifTaxes.query\
            .join(ProductClassif, ProductClassif.id == ProductClassifTaxes.product_classification_id) \
            .filter(ProductClassif.id == product_classif_id)\
            .filter(ProductClassif.installation_id == get_user().installation_id).all()
        for i in products_taxes:
            i.name = i.tax_id
        schema = ProductClassifTaxesSchema(many=True)
        product_classifs_data = [] if len(products_taxes) == 0 else schema.dump(products_taxes).data
        taxes = Tax.query.filter_by(installation_id=get_user().installation_id).all()
        taxes_data = {"0": "Choose Tax"}
        for tax in taxes:
            taxes_data["{}".format(tax.id)] = tax.name
        add = able('add', 'products_classifs')
        edit = able('edit', 'products_classifs')
        delete = able('delete', 'products_classifs')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'product_classifs': product_classifs_data,
            'taxes': taxes_data
        }


class GetProductClassifSubs(Resource):
    @jwt_required
    @can(action='view', thing='products_classifs')
    def get(self, product_classif_id):
        products_subs = ProductClassifParent.query\
            .join(ProductClassif, ProductClassif.id == ProductClassifParent.product_classification_parent_id) \
            .filter(ProductClassif.id == product_classif_id)\
            .filter(ProductClassif.installation_id == get_user().installation_id).all()
        for i in products_subs:
            i.name = i.product_classification_id
        schema = ProductClassifParentSchema(many=True)
        product_classifs_subs_data = [] if len(products_subs) == 0 else schema.dump(products_subs).data
        product_classifs = ProductClassif.query.filter_by(installation_id=get_user().installation_id).all()
        product_classifs_data = {"0": "Choose Product Classif"}
        for product_classif in product_classifs:
            product_classifs_data["{}".format(product_classif.id)] = product_classif.description
        add = able('add', 'products_classifs')
        edit = able('edit', 'products_classifs')
        delete = able('delete', 'products_classifs')
        return {
            'status': 1,
            'edit': edit,
            'add': add,
            'delete': delete,
            'product_classifs_subs_data': product_classifs_subs_data,
            'product_classifs_data': product_classifs_data
        }


class AddProductClassif(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('product_group', help='This field cannot be blank', required=True)
        self.parser.add_argument('initial_flag', help='This field cannot be blank', required=True)
        self.parser.add_argument('description', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='add', thing='products_classifs')
    def post(self):
        data = self.parser.parse_args()
        user = get_user()
        product = ProductClassif(
            product_group=data['product_group'],
            initial_flag=data['initial_flag'],
            description=data['description'],
            installation_id=user.installation_id,
        )
        try:
            save_to_db(product)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class AddProductClassifTaxes(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('tax_id', help='This field cannot be blank', required=True)
        self.parser.add_argument('purchase_pct', help='This field cannot be blank', required=True)
        self.parser.add_argument('sale_pct', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='view', thing='products_classifs')
    def post(self, product_classif_id):
        data = self.parser.parse_args()
        product_tax = ProductClassifTaxes(
            tax_id=data['tax_id'],
            purchase_pct=data['purchase_pct'],
            sale_pct=data['sale_pct'],
            product_classification_id=product_classif_id
        )
        try:
            save_to_db(product_tax)
            return {'status': 1, 'id': product_tax.id}
        except:
            return {'status': 0}, 500


class AddProductClassifsSubs(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('product_classification_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='view', thing='products_classifs')
    def post(self, product_classif_id):
        data = self.parser.parse_args()
        product_tax = ProductClassifParent(
            product_classification_id=data['product_classification_id'],
            product_classification_parent_id=product_classif_id
        )
        try:
            save_to_db(product_tax)
            return {'status': 1, 'id': product_tax.id}
        except:
            return {'status': 0}, 500


class EditProductClassif(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('product_group', help='This field cannot be blank', required=True)
        self.parser.add_argument('initial_flag', help='This field cannot be blank', required=True)
        self.parser.add_argument('description', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='edit', thing='product_classifs')
    def post(self, product_classif_id):
        data = self.parser.parse_args()
        user = get_user()
        product = ProductClassif.query.filter_by(id=product_classif_id)\
            .filter_by(installation_id=user.installation_id).first()
        if not product:
            return {'status': 0}
        columns = ['product_group', 'initial_flag', 'description']
        for i in columns:
            setattr(product, '%s' % i, data[i])
        try:
            save_to_db(product)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class EditProductClassifTaxes(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('tax_id', help='This field cannot be blank', required=True)
        self.parser.add_argument('purchase_pct', help='This field cannot be blank', required=True)
        self.parser.add_argument('sale_pct', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='edit', thing='product_classifs')
    def post(self, product_classif_id, product_classif_tax_id):
        data = self.parser.parse_args()
        product_tax = ProductClassifTaxes.query.filter_by(id=product_classif_tax_id) \
            .join(ProductClassif, ProductClassif.id == ProductClassifTaxes.product_classification_id) \
            .filter(ProductClassif.id == product_classif_id) \
            .filter(Product.installation_id == get_user().installation_id).first()
        product_tax.tax_id = data['tax_id']
        product_tax.purchase_pct = data['purchase_pct']
        product_tax.sale_pct = data['sale_pct']
        product_tax.product_id = product_classif_id
        try:
            save_to_db(product_tax)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class EditProductClassifSubs(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('product_classification_id', help='This field cannot be blank', required=True)

    @jwt_required
    @can(action='edit', thing='product_classifs')
    def post(self, product_classif_id, product_classif_sub_id):
        data = self.parser.parse_args()
        product_tax = ProductClassifParent.query.filter_by(id=product_classif_sub_id) \
            .join(ProductClassif, ProductClassif.id == ProductClassifParent.product_classification_parent_id) \
            .filter(ProductClassif.id == product_classif_id) \
            .filter(Product.installation_id == get_user().installation_id).first()
        product_tax.product_classification_id = data['product_classification_id']
        try:
            save_to_db(product_tax)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class DeleteProductClassif(Resource):
    @jwt_required
    @can('delete', 'product_classifs')
    def post(self, product_classif_id, ):
        user = get_user()
        if product_classif_id == 'mass':
            parser = reqparse.RequestParser()
            parser.add_argument('ids', help='This field cannot be blank', required=True, type=int, action='append')
            data = parser.parse_args()
            products = ProductClassif.query.filter(ProductClassif.id.in_(data['ids'])).filter_by(
                installation_id=user.installation_id).all()

        else:
            products = ProductClassif.query.filter_by(id=product_classif_id).filter_by(installation_id=user.installation_id).first()
            if not products:
                return {'status': 0}
        try:
            delete_from_db(products)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class DeleteProductClassiftaxes(Resource):
    @jwt_required
    @can(action='delete', thing='products')
    def post(self, product_classif_id, product_classif_tax_id):
        if product_classif_tax_id == 'mass':
            parser = reqparse.RequestParser()
            parser.add_argument('ids', help='This field cannot be blank', required=True, type=int, action='append')
            data = parser.parse_args()
            product_taxes = ProductClassifTaxes.query.filter(ProductClassifTaxes.id.in_(data['ids'])) \
                .join(ProductClassif, ProductClassif.id == ProductClassifTaxes.product_classification_id) \
                .filter(ProductClassif.id == product_classif_id) \
                .filter(ProductClassif.installation_id == get_user().installation_id).all()

        else:
            product_taxes = ProductClassifTaxes.query.filter_by(id=product_classif_tax_id)\
                .join(ProductClassif, ProductClassif.id == ProductClassifTaxes.product_classification_id) \
                .filter(ProductClassif.id == product_classif_id) \
                .filter(Product.installation_id == get_user().installation_id).first()
            if not product_taxes:
                return {'status': 0}
        try:
            delete_from_db(product_taxes)
            return {'status': 1}
        except:
            return {'status': 0}, 500


class DeleteProductClassifSubs(Resource):
    @jwt_required
    @can(action='delete', thing='products')
    def post(self, product_classif_id, product_classif_sub_id):
        if product_classif_sub_id == 'mass':
            parser = reqparse.RequestParser()
            parser.add_argument('ids', help='This field cannot be blank', required=True, type=int, action='append')
            data = parser.parse_args()
            product_taxes = ProductClassifParent.query.filter(ProductClassifParent.id.in_(data['ids'])) \
                .join(ProductClassif, ProductClassif.id == ProductClassifParent.product_classification_parent_id) \
                .filter(ProductClassif.id == product_classif_id) \
                .filter(ProductClassif.installation_id == get_user().installation_id).all()

        else:
            product_taxes = ProductClassifParent.query.filter_by(id=product_classif_sub_id)\
                .join(ProductClassif, ProductClassif.id == ProductClassifParent.product_classification_parent_id) \
                .filter(ProductClassif.id == product_classif_id) \
                .filter(Product.installation_id == get_user().installation_id).first()
            if not product_taxes:
                return {'status': 0}
        try:
            delete_from_db(product_taxes)
            return {'status': 1}
        except:
            return {'status': 0}, 500


def register_productclassifs_routes():
    main_api.add_resource(GetProductClassifs, '/api/product_classifs')
    main_api.add_resource(GetProductClassif, '/api/product_classif/<product_classif_id>')
    main_api.add_resource(GetProductClassifTaxes, '/api/product_classifs/taxes/<product_classif_id>')
    main_api.add_resource(GetProductClassifSubs, '/api/product_classifs/subs/<product_classif_id>')
    main_api.add_resource(AddProductClassif, '/api/product_classifs/add')
    main_api.add_resource(AddProductClassifTaxes, '/api/product_classifs/taxes/<product_classif_id>/add')
    main_api.add_resource(AddProductClassifsSubs, '/api/product_classifs/subs/<product_classif_id>/add')
    main_api.add_resource(EditProductClassif, '/api/product_classifs/edit/<product_classif_id>')
    main_api.add_resource(EditProductClassifTaxes,
                          '/api/product_classifs/taxes/<product_classif_id>/edit/<product_classif_tax_id>')
    main_api.add_resource(EditProductClassifSubs,
                          '/api/product_classifs/subs/<product_classif_id>/edit/<product_classif_sub_id>')
    main_api.add_resource(DeleteProductClassif, '/api/product_classifs/delete/<product_classif_id>')
    main_api.add_resource(DeleteProductClassiftaxes,
                          '/api/product_classifs/taxes/<product_classif_id>/delete/<product_classif_tax_id>')
    main_api.add_resource(DeleteProductClassifSubs,
                          '/api/product_classifs/subs/<product_classif_id>/delete/<product_classif_sub_id>')
