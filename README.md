# DRF-reactv6
Tutorial: Django-restful-react

<h3>build django File</h3>

<p>pip install django</p>
<p>pip install djangorestframework</p>

<p>django-admin startproject django_pre_stock</p>
<p>python manage.py startapp pre_stock,pre_stock_api</p>
<p>settings.py -> INSTALLED_APPS: 'pre_stock','pre_stock_api','rest_framework',</p>

<h3>start project</h3>
<p>python manage.py runserver<p>

<h3>REST-framework setting</h3>
<p>settings.py -> INSTALLED_APPS:'rest_framework',</p>

<h3>build models in pre_stock filed</h3>

<h3>REST</h3>
<p>create serializers.py file in pre_stock_api</p>
<p>pre_stock_api of view.py</p>
<p>add pre_stock_api path to django_pre_stock urls.py</p>
<p>create urls.py in pre_stock_api</p>

<h3>REACT</h3>
<p>npx create-react-app pre_stock_react</p>
<p>npm start</p>

<h3>CORS</h3>
<p>django-cors-headers</p>
INSTALLED_APPS = [
    ...,
    "corsheaders",
    ...,
]
<p>MIDDLEWARE = ['corsheaders.middleware.CorsMiddleware',]</p>
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
]