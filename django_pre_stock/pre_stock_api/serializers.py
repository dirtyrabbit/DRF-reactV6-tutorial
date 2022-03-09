from rest_framework import serializers
from pre_stock.models import Parameter

class ParameterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Parameter
        fields = ('id','kind','title', 'excerpt', 'status')