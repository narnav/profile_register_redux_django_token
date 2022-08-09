# Generated by Django 3.2.8 on 2022-08-09 16:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
        ('base', '0002_pita'),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='auth.user')),
                ('avatar', models.CharField(max_length=50)),
                ('commerad', models.BooleanField(default=False)),
                ('credit', models.CharField(max_length=4)),
                ('address', models.CharField(max_length=50)),
            ],
        ),
    ]