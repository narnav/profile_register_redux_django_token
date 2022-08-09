from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Note(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    body = models.TextField()


class Pita(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    body = models.TextField()


# class Profile(models.Model):
#     name = models.CharField(max_length=50)
#     address = models.CharField(max_length=80)

#     def __str__(self):
#         return "%s the place" % self.name


class Profile(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, primary_key=True,)
    avatar = models.CharField(max_length=50)
    commerad = models.BooleanField(default=False)
    credit = models.CharField(max_length=4)
    address = models.CharField(max_length=50)

    def __str__(self):
        return self.avatar

# class Waiter(models.Model):
#     restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
#     name = models.CharField(max_length=50)

#     def __str__(self):
#         return "%s the waiter at %s" % (self.name, self.restaurant)
