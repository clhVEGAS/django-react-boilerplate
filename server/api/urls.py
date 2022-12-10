from django.urls import path 
from . import views
from django.conf.urls.static import static
from base import view_orders

urlpatterns = [
    path('', views.getAPI),
    path('items', views.getItems),
    path('items/<int:pk>', views.getItemDetail),
    path('items/add', views.addItem),
    path('items/upd/<int:pk>', views.updateItem),
    path('items/del/<int:pk>', views.deleteItem),
    path('orders/', view_orders.orders),
    path('orders/<int:order_id>/', view_orders.order),
    ]