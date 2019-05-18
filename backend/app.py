import os, sys
sys.path.append(os.path.abspath('../'))
from flask import Flask, request, render_template, send_from_directory, render_template_string
from backend.db import db
from flask_cors import CORS
from backend.api import register_api_routes
from backend.main_api import main_api
from flask_jwt_extended import JWTManager


template_dir = os.path.dirname(os.path.realpath(__file__)) + '/../frontend/dist/frontend/'
app = Flask(__name__, template_folder=template_dir)
application = app
app.config.from_object('backend.config')
CORS(app)
db.init_app(app)
jwt = JWTManager(app)


@app.route('/assets/i18n/<file>')
def assets(file):
    return send_from_directory(template_dir+'/assets/i18n/', file)


@app.route('/cost-map-tables')
def cost_map_tables():
    from backend.models import CostMap, CostMapSchema, User, Branch, CostCenter, CostCenterRatio, Asset, \
        AssetCostCenter, Employee, EmployeeCostCenter, Account, AccountCostCenter, EntryAccount, Accountacum, Costmapaccount, EmployeeCostCenter, \
        AssetType, AccountSchema, AccountCostCenterSchema, EmployeeSchema, EmployeeCostCenterSchema, CostCenterSchema, \
        AssetSchema, AssetTypeSchema, EntryAccountSchema, AssetCostCenterSchema, AccountacumSchema, Costmapcostcenter, \
        CostmapaccountSchema, CostCenterRatioSchema, CostmapcostcenterAbs
    cost_maps = CostMap.query.all()
    cost_map_costcenters = Costmapcostcenter.query.all()
    cost_map_accounts = Costmapaccount.query.all()
    cost_map_costcentersabs = CostmapcostcenterAbs.query.all()
    temp = """
    <h2>Cost Maps</h2>
    <table><thead><tr><th style="border-right: 1px solid gray">id</th><th style="border-right: 1px solid gray">year</th><th style="border-right: 1px solid gray">month</th><th style="border-right: 1px solid gray">calculated_at</th>
    <th style="border-right: 1px solid gray">in_use</th><th style="border-right: 1px solid gray">commcostvalue</th><th style="border-right: 1px solid gray">revenuevalue</th><th style="border-right: 1px solid gray">avgrevenuevalue</th>
    <th style="border-right: 1px solid gray">profitpct</th><th style="border-right: 1px solid gray">totalcostvalue</th><th style="border-right: 1px solid gray">calculation_type</th><th style="border-right: 1px solid gray">calculatedat</th><th style="border-right: 1px solid gray">branch_id</th></tr></thead>
    <tbody>
        {% for cost_map in cost_maps %}
            <tr><td style="border-right: 1px solid gray">{{ cost_map.id }}</td><td style="border-right: 1px solid gray">{{ cost_map.year }}</td><td style="border-right: 1px solid gray">{{ cost_map.month }}</td><td style="border-right: 1px solid gray">{{ cost_map.calculated_at }}</td>
    <td style="border-right: 1px solid gray">{{ cost_map.in_use }}</td><td style="border-right: 1px solid gray">{{ cost_map.commcostvalue }}</td><td style="border-right: 1px solid gray">{{ cost_map.revenuevalue }}</td><td style="border-right: 1px solid gray">{{ cost_map.avgrevenuevalue }}</td>
    <td style="border-right: 1px solid gray">{{ cost_map.profitpct }}</td><td style="border-right: 1px solid gray">{{ cost_map.totalcostvalue }}</td><td style="border-right: 1px solid gray">{{ cost_map.calculation_type }}</td><td style="border-right: 1px solid gray">{{ cost_map.calculatedat }}</td><td style="border-right: 1px solid gray">{{ cost_map.branch_id }}</td></tr>
        {% endfor %}
        </tbody>
        </table>
        <h2>CostMapCostCenter</h2>
        <table><thead><tr><th style="border-right: 1px solid gray">id</th><th style="border-right: 1px solid gray">costmap_id</th><th style="border-right: 1px solid gray">cost_center_id</th><th style="border-right: 1px solid gray">cost_value</th><th style="border-right: 1px solid gray">cost_pct</th>
        <th style="border-right: 1px solid gray">cost_center_type</th></tr></thead><tbody>
        {% for  cost_map_costcenter in cost_map_costcenters %}
        <tr><td style="border-right: 1px solid gray">{{ cost_map_costcenter.id }} </td><td style="border-right: 1px solid gray">{{ cost_map_costcenter.costmap_id }} </td><td style="border-right: 1px solid gray">
        {{ cost_map_costcenter.cost_center_id }} </td><td style="border-right: 1px solid gray">{{ cost_map_costcenter.cost_value }}
         </td><td style="border-right: 1px solid gray">{{ cost_map_costcenter.cost_pct }} </td>
        <td style="border-right: 1px solid gray">{{ cost_map_costcenter.cost_center_type }} </td></tr>
        {% endfor %}
        </tbody>
        </table>
        <h2>CostMapAccount</h2>
        <table><thead><tr><th style="border-right: 1px solid gray">id</th><th style="border-right: 1px solid gray">costmap_id</th><th style="border-right: 1px solid gray">account_id</th><th style="border-right: 1px solid gray">cost_center_id</th><th style="border-right: 1px solid gray">cost_value</th><th style="border-right: 1px solid gray">cost_pct</th><th style="border-right: 1px solid gray">cost_center_type</th><th style="border-right: 1px solid gray">expense_abs_type</th><th style="border-right: 1px solid gray">bdg_entry_flag</th><th style="border-right: 1px solid gray">real_cost_value</th><th style="border-right: 1px solid gray">created_at</th><th style="border-right: 1px solid gray">updated_at</th></tr>
        </thead><tbody>
        {% for cost_map_account in cost_map_accounts %}
        <tr><td style="border-right: 1px solid gray">{{ cost_map_account.id}} </td><td style="border-right: 1px solid gray">{{ cost_map_account.costmap_id}} </td><td style="border-right: 1px solid gray">{{ cost_map_account.account_id}} </td><td style="border-right: 1px solid gray">{{ cost_map_account.cost_center_id}} </td><td style="border-right: 1px solid gray">{{ cost_map_account.cost_value}} </td><td style="border-right: 1px solid gray">{{ cost_map_account.cost_pct}} </td><td style="border-right: 1px solid gray">{{ cost_map_account.cost_center_type}} </td><td style="border-right: 1px solid gray">{{ cost_map_account.expense_abs_type}} </td><td style="border-right: 1px solid gray">{{ cost_map_account.bdg_entry_flag}} </td><td style="border-right: 1px solid gray">{{ cost_map_account.real_cost_value}} </td><td style="border-right: 1px solid gray">{{ cost_map_account.created_at}} </td><td style="border-right: 1px solid gray">{{ cost_map_account.updated_at}} </td></tr>
        {% endfor %}
        </tbody></table>
        <h2>CostmapcostcenterAbs</h2>
        <table><thead><tr><th style="border-right: 1px solid gray">id</th><th style="border-right: 1px solid gray">costmap_id</th><th style="border-right: 1px solid gray">cost_center_id</th><th style="border-right: 1px solid gray">costmap_costcenter_id</th><th style="border-right: 1px solid gray">costcenter_abs_id</th><th style="border-right: 1px solid gray">abs_cost_value</th><th style="border-right: 1px solid gray">abs_cost_pct</th><th style="border-right: 1px solid gray">created_at</th><th style="border-right: 1px solid gray">updated_at</th></tr>
        </thead><tbody>
        {% for cost_map_costcentersab in cost_map_costcentersabs %}
        <tr><td style="border-right: 1px solid gray">{{ cost_map_costcentersab.id }}</td><td style="border-right: 1px solid gray">{{ cost_map_costcentersab.costmap_id }}</td><td style="border-right: 1px solid gray">{{ cost_map_costcentersab.cost_center_id }}</td><td style="border-right: 1px solid gray">{{ cost_map_costcentersab.costmap_costcenter_id }}</td><td style="border-right: 1px solid gray">{{ cost_map_costcentersab.costcenter_abs_id }}</td><td style="border-right: 1px solid gray">{{ cost_map_costcentersab.abs_cost_value }}</td><td style="border-right: 1px solid gray">{{ cost_map_costcentersab.abs_cost_pct }}</td><td style="border-right: 1px solid gray">{{ cost_map_costcentersab.created_at }}</td><td style="border-right: 1px solid gray">{{ cost_map_costcentersab.updated_at }}</td></tr>
        {% endfor %}
        </tbody></table>
    """
    return render_template_string(temp, cost_maps=cost_maps, cost_map_costcenters=cost_map_costcenters,
                                  cost_map_accounts=cost_map_accounts, cost_map_costcentersabs=cost_map_costcentersabs)

@app.route('/<path>')
def hello_world(path):
    return send_from_directory(template_dir, path)


@app.errorhandler(404)
def page_not_found(e):
    return render_template("index.html")


register_api_routes()
main_api.init_app(app)
