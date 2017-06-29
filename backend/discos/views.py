# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from rest_framework import viewsets
import models
import serializers

import base64
import uuid
from django.core.files.base import ContentFile

def decode_base64_file(data, nombre_de_archivo):
    if 'data:' in data and ';base64,' in data:
        header, data = data.split(';base64,')

    decoded_file = base64.b64decode(data)
    complete_file_name = str(uuid.uuid4())[:12]+ "_" + nombre_de_archivo
    return ContentFile(decoded_file, name=complete_file_name)



class DiscoViewSet(viewsets.ModelViewSet):
    queryset = models.Disco.objects.all()
    serializer_class = serializers.DiscoSerializer

    def perform_update(self, serializer):
        return self.guardar_modelo_con_archivo(serializer)

    def perform_create(self, serializer):
        return self.guardar_modelo_con_archivo(serializer)

    def guardar_modelo_con_archivo(self, serializer):
        instancia = serializer.save()
        portada = self.request.data.get('portada', None)

        if portada and isinstance(portada, dict):
            nombre = portada.get('nombre')
            contenido_base_64 = portada.get('contenido')
            instancia.portada = decode_base64_file(contenido_base_64, nombre)

        instancia.save()
        return instancia
