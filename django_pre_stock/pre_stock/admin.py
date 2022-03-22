from django.contrib import admin
from . import models
from django.contrib import messages
from django.utils.translation import ngettext
# Register your models here.

admin.site.register(models.FinMind)
admin.site.register(models.stock_id)
admin.site.register(models.Parameter)

# class AuthorAdmin(admin.ModelAdmin):
#     list_display = ('title', 'id', 'status', 'slug', 'value')
#     prepopulated_fields = {'slug':('title',),}
#     actions = ['make_published']
#     def make_published(self, request, queryset):
#         updated = queryset.update(status='published')#更新時間
#         #更新程式
#         self.message_user(request, ngettext(
#             '%d story was successfully marked as published.',
#             '%d stories were successfully marked as published.',
#             updated,
#         ) % updated, messages.SUCCESS)
#     make_published.short_description = "Mark selected stories as published"
# admin.site.register(models.Kind)