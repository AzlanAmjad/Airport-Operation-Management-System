# Generated by Django 4.0.3 on 2022-04-07 23:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_remove_user_id_alter_user_email'),
    ]

    operations = [
        migrations.RenameField(
            model_name='airlineadmin',
            old_name='user',
            new_name='email',
        ),
        migrations.RenameField(
            model_name='airportadmin',
            old_name='user',
            new_name='email',
        ),
        migrations.RenameField(
            model_name='passenger',
            old_name='user',
            new_name='email',
        ),
    ]
