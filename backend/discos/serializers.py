from rest_framework import serializers
import models


class DiscoSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = models.Disco
        fields = "__all__"
        read_only_fields = ['portada']
