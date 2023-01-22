from django.urls import path

from . import views

urlpatterns = [
    path('uhandle/login/', views.login_view, name='api-login'),
    path('uhandle/logout/', views.logout_view, name='api-logout'),
    path('uhandle/session/', views.session_view, name='api-session'),
    path('uhandle/whoami/', views.whoami_view, name='api-whoami'),
]