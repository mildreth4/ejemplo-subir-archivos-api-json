from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers

from discos import views

router = routers.DefaultRouter()
router.register(r'discos', views.DiscoViewSet)

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include(router.urls)),
]
