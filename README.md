# Ejemplo sobre cómo subir archivos desde ember a django

Este repositorio tiene un ejemplo inicial sobre cómo subir archivos desde emberjs a un backend realizado con django y rest-framework + json-api.


## Como iniciar el backend

Ingresá en el directorio del backend, instalá las dependencias dentro de un entorno virtual de python así:

```
cd backend
virtualenv venv --no-site-packages
. venv/bin/activate
pip install -r requirements.txt

python manage.py migrate
python manage.py runserver
```

## Como iniciar el frontend

Ingresá en el directorio de la aplicación frontend e instalá todas las dependencias:

```
cd frontend
npm install
bower install

ember s --proxy http://localhost:8000/
```
