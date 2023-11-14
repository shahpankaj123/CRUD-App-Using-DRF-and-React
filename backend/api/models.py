from django.db import models

# Create your models here.
class Student(models.Model):
    id=models.BigAutoField(primary_key=True)
    name=models.CharField(max_length=100)
    roll=models.CharField(max_length=20)
    address=models.CharField(max_length=50)
