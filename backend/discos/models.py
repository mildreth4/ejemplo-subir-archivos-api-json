# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Disco(models.Model):
    titulo = models.CharField(max_length=512)
    artista = models.CharField(max_length=512)
    portada = models.FileField()

    class Meta:
        db_table = "discos"
        verbose_name_plural = "discos"

    class JSONAPIMeta:
        resource_name = "discos"

    def __str__(self):
        return u"%s - %s" %(self.artista, self.titulo)
