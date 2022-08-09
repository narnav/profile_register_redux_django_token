from django.http import JsonResponse
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.models import User
from .serializers import NoteSerializer
from base.models import Note, Profile


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['eeemail'] = user.email
        token['staff'] = user.is_staff
        # ...

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh',
    ]

    return Response(routes)

# register/signup


@api_view(['POST'])
def register(request):
    isStaff = request.data["staff"]
    user = User.objects.create_user(
        username=request.data["username"], email=request.data["email"], password=request.data["password"], is_staff=isStaff)
    credit = request.data["credit"]
    Profile.objects.create(user=user, avatar="any alias",
                           credit=credit, address="po ve sham")
    print(request.data["username"])
    print(request.data["email"])
    print(request.data["credit"])
    print(request.data["staff"])
    print(request.data["password"])
    return Response("routes")


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getNotes(request):
    print("innnn")
    user = request.user
    print(user)
    notes = user.note_set.all()
    print(user.note_set)
    print(notes)
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addNote(request):
    print("a")
    user = request.user
    b = request.data["bodyy"]
    Note.objects.create(body=b, user=user)
    return Response("note added")


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getOneNote(request):
    user = request.user
    print(user)
    notes = user.note_set.all()
    ps = user.pita_set.all()
    print(ps)
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)
