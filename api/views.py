from rest_framework import viewsets
from .serializer import ColaboradorSerializer
from .models import Colaborador

class ColaboradorView(viewsets.ModelViewSet):
    queryset = Colaborador.objects.all()
    serializer_class = ColaboradorSerializer

