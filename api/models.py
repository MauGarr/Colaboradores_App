from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class Colaborador(models.Model):
    idcolaborador = models.AutoField(primary_key=True) 
    nombre = models.CharField(max_length=45)
    apellido = models.CharField(max_length=45)
    direccion = models.CharField(max_length=45)
    edad = models.SmallIntegerField(validators=[MinValueValidator(18), MaxValueValidator(100)])
    profesion = models.CharField(max_length=45)
    estadocivil = models.CharField(max_length=45) 

    def __str__(self):
        return f"{self.nombre} {self.apellido}"