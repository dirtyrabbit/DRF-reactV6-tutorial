from rest_framework import serializers
from pre_stock.models import Parameter

class ParameterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Parameter
        fields = '__all__';

class ValueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Parameter
        fields = ('value')