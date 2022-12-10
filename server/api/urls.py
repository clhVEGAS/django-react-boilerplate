from django.urls import path 
from . import views
from django.conf.urls.static import static
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('', views.getAPI),
    path('items', views.getItems),
    path('items/<int:pk>', views.getItemDetail),
    path('items/add', views.addItem),
    path('items/upd/<int:pk>', views.updateItem),
    path('items/del/<int:pk>', views.deleteItem),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)