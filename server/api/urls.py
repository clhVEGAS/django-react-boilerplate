from django.urls import path 
from . import views

urlpatterns = [
    path('', views.getAPI),
    path('items', views.getItems),
    path('items/<int:pk>', views.getItemDetail),
    path('items/add', views.addItem),
    path('items/upd/<int:pk>', views.updateItem),
    path('items/del/<int:pk>', views.deleteItem),
    ]