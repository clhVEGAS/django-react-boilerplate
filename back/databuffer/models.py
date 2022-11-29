from django.db import models

# Create your models here.
class Dashboards(models.Model):
    uri = CharField(max_length=255) # must be unique
    database = CharField(max_length=4,
                         choices=[('MFS','MFS'),('MOS','MOS'),('BOTH','BOTH')],
                         default='MFS') # mfs, mos, or both
    site = CharField(max_length=7,
                     choices=[('reno','reno'), ('fremont','fremont'), ('austin','austin'), ('buffalo','buffalo'), ('berlin','berlin'), ('china','china')],
                    default='reno') # reno, fremont, austin, buffalo, berlin, china
    alias = CharField(max_length=255) # name of dashboard
    description = CharField(max_length=255) # description of dashboard
    comment = CharField(max_length=255) # can be used for any purpose



# variableType # part, location, zone, trailer, user, demandconfig, destinationpart, loop, route, etc