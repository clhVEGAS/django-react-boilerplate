# backend/Dockerfile

# pull official base image
FROM python:3.9.0-slim-buster

# set working directory
WORKDIR /usr/src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

# add app
COPY . .

RUN python manage.py makemigrations
RUN python manage.py migrate

# start app
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
