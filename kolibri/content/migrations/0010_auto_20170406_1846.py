# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2017-04-06 18:46
from __future__ import unicode_literals

import uuid

import django.db.models.deletion
import kolibri.content.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kolibriauth', '0003_auto_20170309_1853'),
        ('content', '0009_auto_20170327_0956'),
    ]

    operations = [
        migrations.AddField(
            model_name='exam',
            name='dataset',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='kolibriauth.FacilityDataset'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='examassignment',
            name='dataset',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='kolibriauth.FacilityDataset'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='exam',
            name='id',
            field=kolibri.content.models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False),
        ),
    ]