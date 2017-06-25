# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render



from rest_framework import viewsets
import models
import serializers


class DiscoViewSet(viewsets.ModelViewSet):
    queryset = models.Disco.objects.all()
    serializer_class = serializers.DiscoSerializer
