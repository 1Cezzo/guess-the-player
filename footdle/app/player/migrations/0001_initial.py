# Generated by Django 5.0.2 on 2024-03-01 13:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Player',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('age', models.IntegerField()),
                ('nationality', models.CharField(max_length=100)),
                ('team_name', models.CharField(max_length=100)),
            ],
            options={
                'verbose_name': 'Player',
                'verbose_name_plural': 'Players',
                'db_table': 'player',
                'ordering': ['name'],
            },
        ),
    ]
