from django.db import models

# Create your models here.
# Model field reference

#     Field options
#         null
#         blank
#         choices
#             Enumeration types https://docs.djangoproject.com/en/4.1/ref/models/fields/#enumeration-types
#         db_column
#         db_index
#         db_tablespace
#         default
#         editable
#         error_messages
#         help_text
#         primary_key
#         unique
#         unique_for_date
#         unique_for_month
#         unique_for_year
#         verbose_name
#         validators
#     Field types
#         AutoField
#         BigAutoField
#         BigIntegerField
#         BinaryField
#         BooleanField
#         CharField
#         DateField
#         DateTimeField
#         DecimalField
#         DurationField
#         EmailField
#         FileField
#             FileField and FieldFile
#         FilePathField
#         FloatField
#         GenericIPAddressField
#         ImageField
#         IntegerField
#         JSONField
#         PositiveBigIntegerField
#         PositiveIntegerField
#         PositiveSmallIntegerField
#         SlugField
#         SmallAutoField
#         SmallIntegerField
#         TextField
#         TimeField
#         URLField
#         UUIDField
#     Relationship fields
#         ForeignKey
#             Database Representation
#             Arguments
#         ManyToManyField
#             Database Representation
#             Arguments
#         OneToOneField

class Item(models.Model):
    name = models.CharField(max_length=200)
    created = models.DateTimeField(auto_now_add=True)

class Order(models.Model):
    date = models.DateField(blank=False)
    item = models.CharField(max_length=100, blank=False)
    price = models.DecimalField(decimal_places=2, max_digits=10, default=0)
    quantity = models.DecimalField(decimal_places=2, max_digits=10, default=0)
    amount = models.DecimalField(decimal_places=2, max_digits=10, default=0)

    def __str__(self):
        return f"{self.date}: {self.item}"

    class Meta:
        ordering = ["-id"]