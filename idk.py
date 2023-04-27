# dict1 = {
#     'Quicken Loans' : ['A', 'B','C'],
#     'ROCKET': ['A','B','C']
# }
# #REFINANCE - POOR - UP TO 100K
# DICT2 = {
#      'Quicken Loans' : ['A', 'B','C'],
#     'ROCKET': ['A','B','C'],
#     'AmeriValue': ['A','B','C'],
#     'VA Rate Guide' : ['A','B','C'],
#     'Refi Rate Guide' : ['A','B','C'],
# }
# #HOME EQUITY - POOR - UP TO 100K
# DICT3 = {
#     'Quicken Loans' : ['A', 'B','C'],
#     'ROCKET': ['A','B','C'],
#     'AmeriValue': ['A','B','C'],
#     'Refi Rate Guide' : ['A','B','C'],
#     'UNLOCK' : ['A','B','C']
# }
# #----------------------------------------
# #PURCHASE - FAIR - UP TO 100K
# DICT4 = {
#      'Quicken Loans' : ['A', 'B','C'],
#       'ROCKET': ['A','B','C'],
#       'AmeriSave' : ['A','B','C'],
#       'Lending Tree' : ['A','B','C']

# }
# #PURCHASE - FAIR - 100K TO 250K - 250K TO 400K - 400K AND UP
# DICT5 = {
#     'Quicken Loans' : ['A', 'B','C'],
#       'ROCKET': ['A','B','C'],
#       'AmeriSave' : ['A','B','C'],
#       'Lending Tree' : ['A','B','C'],
#       'Veterns United' : ['A','B','C']
# }

# DICTS6 = {

# } 
from django.urls import path, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets

# Serializers define the API representation.
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'is_staff']

# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]